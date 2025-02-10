"use client";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useMenu } from "@/contexts/MenuContext";

type Props = {};

const ProjectData = [
  {
    name: "Space Milk",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/1.webp",
    href: "",
  },
  {
    name: "Designstripe",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/2.webp",
    href: "",
  },
  {
    name: "Fintek",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/3.webp",
    href: "",
  },
  {
    name: "Mikado",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/4.webp",
    href: "",
  },
  {
    name: "Space Milk",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/5.webp",
    href: "",
  },
  {
    name: "Fintek",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/6.webp",
    href: "",
  },
  {
    name: "Mikado",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/7.webp",
    href: "",
  },
  {
    name: "Mikado",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/8.webp",
    href: "",
  },
  {
    name: "Mikado",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/9.webp",
    href: "",
  },
];

type Position = {
  top: string;
  left: string;
};

const dynamicTexts = [
  "Architectural",
  "Industrial",
  "Food",
  "Product",
  "Fashion",
  "360 Video",
  "Catalogue",
  "Unboxing Video",
];

const textWidths: { [key: string]: number } = {
  Architectural: 110,
  Industrial: 80,
  Food: 60,
  Product: 80,
  Fashion: 80,
  "360 Video": 90,
  Catalogue: 100,
  "Unboxing Video": 140,
};

const HomeHero = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const [currentCategory, setCurrentCategory] = useState(0);
  const { isMenuOpen } = useMenu();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % dynamicTexts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isMenuOpen) return;

    const container = containerRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const width = window.innerWidth;
      const height = window.innerHeight;

      mouseX = (clientX - width / 2) * 0.1;
      mouseY = (clientY - height / 2) * 0.1;
    };

    const updatePosition = () => {
      if (isMenuOpen) return;

      const ease = 0.05;
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;

      currentX += dx * ease;
      currentY += dy * ease;

      if (container) {
        gsap.set(container, {
          x: -currentX,
          y: -currentY,
        });
      }

      requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const animationFrame = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen && containerRef.current) {
      gsap.to(containerRef.current, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const generateRandomPositions = () => {
      const newPositions: Position[] = [];
      const minDistance = 80;
      const viewportPadding = 15;

      const isOverlapping = (newPos: Position, index: number) => {
        for (let i = 0; i < index; i++) {
          const existingPos = newPositions[i];
          const topDiff = Math.abs(
            parseFloat(newPos.top) - parseFloat(existingPos.top)
          );
          const leftDiff = Math.abs(
            parseFloat(newPos.left) - parseFloat(existingPos.left)
          );

          if (topDiff < minDistance && leftDiff < minDistance) {
            return true;
          }
        }
        return false;
      };

      const getValidPosition = (index: number): Position => {
        let attempts = 0;
        let newPos: Position;

        do {
          const region = {
            x: Math.floor(index / 3),
            y: index % 3,
          };

          const top = `${
            viewportPadding +
            (region.y * (100 - viewportPadding * 2)) / 2 +
            (Math.random() * 20 - 10)
          }%`;

          const left = `${
            viewportPadding +
            (region.x * (100 - viewportPadding * 2)) / 2 +
            (Math.random() * 20 - 10)
          }%`;

          newPos = { top, left };
          attempts++;
        } while (isOverlapping(newPos, index) && attempts < 100);

        return newPos;
      };

      ProjectData.forEach((_, index) => {
        const position = getValidPosition(index);
        newPositions.push(position);
      });

      setPositions(newPositions);
    };

    generateRandomPositions();
  }, []);
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        delay: i * 0.05,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };
  
  
  return (
    <section className="w-full h-lvh relative flex items-center justify-center overflow-hidden my-4 py-4">
      <div className="inset-0 flex flex-col gap-y-5 items-center justify-center w-auto h-auto z-10">
      <motion.h1 className="text-[3.6rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] leading-tight font-extrabold text-white text-center">
  {/* First Line: "Bring your" */}
  <div className="flex flex-wrap justify-center">
    {"Bring your".split("").map((letter, i) => (
      <motion.span
        key={`first-line-${i}`}
        custom={i}
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        className={`inline-block ${letter === " " ? "w-2" : ""}`}
      >
        {letter}
      </motion.span>
    ))}
  </div>

  {/* Second Line: "Brand to Life" (starts animating after the first line finishes) */}
  <motion.div
    className="flex flex-wrap justify-center"
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          delayChildren: 1.5, 
          staggerChildren: 0.05,
        },
      },
    }}
  >
    {"Brand to Life".split("").map((letter, i) => (
      <motion.span
        key={`second-line-${i}`}
        custom={i}
        variants={letterAnimation}
        className={`inline-block ${letter === " " ? "w-2" : ""}`}
      >
        {letter}
      </motion.span>
    ))}
  </motion.div>
</motion.h1>


        <motion.p
          className="text-[1rem] text-center text-white font-light flex flex-row gap-x-5 items-center justify-center whitespace-nowrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          A Studio for
          <motion.span
            className="relative min-h-[40px] border border-white/30 rounded-lg inline-block"
            style={{
              width: textWidths[dynamicTexts[currentCategory]],
              minWidth: textWidths[dynamicTexts[currentCategory]],
              maxWidth: textWidths[dynamicTexts[currentCategory]],
              padding: "0",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentCategory}
                initial={{
                  opacity: 0,
                  clipPath: "inset(100% 0 0 0)", // Start from top to bottom
                  filter: "brightness(2)",
                }}
                animate={{
                  opacity: 1,
                  clipPath: "inset(0 0 0 0)", // Fully reveal the text from top to bottom
                  filter: "brightness(1)",
                  transition: {
                    duration: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                    clipPath: {
                      duration: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                exit={{
                  opacity: 0,
                  clipPath: "inset(0 0 100% 0)", // Hide from top to bottom
                  filter: "brightness(2)",
                  transition: {
                    duration: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                    clipPath: {
                      duration: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="absolute inset-0 flex items-center justify-center text-white whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {dynamicTexts[currentCategory]}
              </motion.span>
            </AnimatePresence>
          </motion.span>
        </motion.p>
      </div>
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center flex-wrap absolute top-0 left-0"
      >
        {ProjectData.map((item, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: positions[index]?.top,
              left: positions[index]?.left,
            }}
            className="transition-all duration-500 hover:scale-110 hover:z-10 opacity-[0.5]"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={180}
              height={180}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
