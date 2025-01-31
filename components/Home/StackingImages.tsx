"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ClikoTextmotion from "../ui/clikoTextmotion";

const IMAGES = [
  {
    title: "Product",
    src: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/6_Last_section/1.webp",
    alt: "Product",
  },
  {
    title: "Architect",
    src: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/6_Last_section/2.webp",
    alt: "Architectural",
  },
  {
    title: "Fashion",
    src: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/6_Last_section/3.webp",
    alt: "Fashion",
  },
  {
    title: "Catelogue",
    src: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/6_Last_section/4.webp",
    alt: "Catelogue",
  },
  {
    title: "Lifestyle",
    src: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/6_Last_section/5.webp",
    alt: "Lifestyle",
  },
  {
    title: "Sports",
    src: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/6_Last_section/6.webp",
    alt: "Sports",
  },
];

const StackingImages = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="w-full h-full relative bg-[#101010]">
      <ParallaxCards cards={IMAGES} progress={scrollYProgress} />
    </section>
  );
};

interface CardProps {
  src: string;
  alt: string;
  title: string;
}

interface ParallaxCardsProps {
  cards: Array<CardProps>;
  progress: any;
}

const ParallaxCards: React.FC<ParallaxCardsProps> = ({ cards, progress }) => {
  const [currentTitle, setCurrentTitle] = useState(cards[0].title);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const unsubscribe = progress.on("change", (latest: number) => {
      setIsVisible(latest > 0.1);
      const index = Math.min(
        Math.floor(latest * cards.length),
        cards.length - 1
      );
      setCurrentTitle(cards[index].title);
    });

    return () => unsubscribe();
  }, [progress, cards]);

  return (
    <div className="relative w-full h-full">
      {/* Background Text Motion Container */}
      <div className="absolute inset-0 w-full h-full">
        <div className="sticky top-0 w-full h-screen  mb-[-25vh]">
          <ClikoTextmotion />
        </div>
      </div>


      {/* Content Container */}
      <div className="relative z-10">
        <div className="flex w-full mx-auto h-full mb-[25vh] flex-col mt-20 gap-[50vh]">
          {cards.map((card, index) => {
            const targetScale = 1 - (cards.length - index) * 0.05;
            const range = [index * 0.35, 1];

            return (
              <Card
                key={index}
                index={index}
                card={card}
                range={range}
                targetScale={targetScale}
                progress={progress}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface CardComponentProps {
  index: number;
  card: CardProps;
  progress: any;
  range: Array<number>;
  targetScale: number;
}

const Card: React.FC<CardComponentProps> = ({
  index,
  card,
  progress,
  range,
  targetScale,
}) => {
  const translateX = index % 2 === 0 ? "0" : "12%";  
  return (
    <section
      className="w-full h-full sticky top-[20%] flex items-center justify-center"
      key={index}
    >
      <motion.div
        className="h-full flex items-center justify-center origin-bottom relative"
        style={{
          bottom: `calc(-5vh + ${index * 5}px)`,
          left: `calc(-5vh + ${index * 5}px)`,
          transform: `translateX(${translateX})`,
        }}
      >
        <div
          className={`relative flex items-center justify-center w-full h-full`}
        >
          <Image
            src={card.src}
            alt={card.alt}
            width={600}
            height={600}
            className={`aspect-square object-contain `}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default StackingImages;
