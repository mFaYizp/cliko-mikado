"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

const HorizontalScrollCarousel = ({ cards }: { cards: CardType[] }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 440);
      setIsTablet(window.innerWidth >= 440 && window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive scroll values based on screen size
  const getScrollValues = () => {
    if (isMobile) {
      return ["230%", "-230%"]; // Smaller scroll for mobile
    } else if (isTablet) {
      return ["222%", "-222%"]; // Medium scroll for tablet
    } else {
      return ["230%", "-230%"]; // Full scroll for desktop
    }
  };

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    getScrollValues()
  );

  return (
    <section
      ref={targetRef}
      className="relative w-full h-full flex items-center justify-center"
    >
      <div className="relative w-full h-[250vh]">
        <div className="sticky top-[15%] sm:top-[10%] flex h-auto items-center overflow-hidden pb-20">
          <motion.div
            style={{ x }}
            className="flex items-center justify-center gap-4 w-full h-full"
          >
            {cards.map((card, index) => {
              return <Card card={card} key={index} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface CardType {
  src: string;
  alt: string;
  title: string;
}

const Card = ({ card }: { card: CardType }) => {
  return (
    <section className="w-fit h-full flex items-center justify-center px-4">
      <div className="relative flex flex-col items-center justify-center w-full min-w-[80vw] max-w-[80vw] h-full">
        <div className="relative">
          <Image
            src={card.src}
            alt={card.alt}
            width={800}
            height={800}
            className="w-fit h-auto object-contain max-h-[80vh]"
          />
          <Link
            href={""}
            className="absolute -bottom-8 left-0 right-0 flex flex-row justify-between items-center bg-[#101010] py-2 px-4"
          >
            <h6 className="text-white text-2xl font-bold">{card.title}</h6>
            <ArrowRightIcon className="text-white text-2xl font-bold" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
