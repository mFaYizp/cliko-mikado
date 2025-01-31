"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HorizontalScrollCarousel = ({ cards }: { cards: CardType[] }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(screen.width < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["210%", "-220%"] : ["0.3%", "-100%"]
  );

  return (
    <section ref={targetRef} className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-full h-[250vh]">
        <div className="sticky top-[10%] flex h-auto items-center overflow-hidden pb-20">
          <motion.div style={{ x }} className="flex items-center justify-center gap-4 w-full h-full">
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
    <section className="w-full h-full flex items-center justify-center px-4">
      <div className="relative flex items-center justify-center w-full min-w-[80vw] max-w-[80vw] h-full">
        <Image
          src={card.src}
          alt={card.alt}
          width={1200}
          height={1200}
          className="w-full h-auto object-contain max-h-[80vh]"
        />
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
