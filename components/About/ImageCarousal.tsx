"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg"
];

const ImageCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      scrollInterval.current = setInterval(() => {
        if (scrollRef.current) {
          const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
          if (scrollRef.current.scrollLeft >= maxScrollLeft) {
            setTimeout(() => {
              scrollRef.current!.scrollLeft = 0; // Smoothly reset to the start
            }, 500);
          } else {
            scrollRef.current.scrollLeft += 2; // Adjust speed for smoother scroll
          }
        }
      }, 16); // 16 ms for ~60 FPS
    } else {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
        scrollInterval.current = null;
      }
    }

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [isHovered]);

  return (
    <div className="bg-black py-16">
      <div className="w-[80%] mx-auto overflow-hidden">
        <div
          className="flex gap-8 transition-all duration-300 ease-in-out scroll-smooth"
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative flex-shrink-0 w-1/3 h-[400px] overflow-hidden rounded-lg cursor-pointer ${
                index % 2 === 0 ? "mt-0" : "mt-16"
              }`}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
