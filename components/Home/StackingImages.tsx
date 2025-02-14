"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ClikoTextmotion from "../ui/clikoTextmotion";
import HorizontalScrollCarousel from "../ui/horizontalScroll";
import { ArrowRightIcon } from "lucide-react";

const IMAGES = [
  {
    title: "Product",
    src: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/6_Last_section/1.webp",
    alt: "Product",
  },
  {
    title: "Short Story",
    src: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/6_Last_section/Short%20story.webp",
    alt: "Architectural",
    portrait: true,
  },
  {
    title: "Fashion",
    src: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/6_Last_section/3.webp",
    alt: "Fashion",
  },
  {
    title: "Catalogue",
    src: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/6_Last_section/Kingfisher.webp",
    alt: "Catalogue",
    portrait: true,
  },
  {
    title: "Lifestyle",
    src: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/6_Last_section/5.webp",
    alt: "Lifestyle",
  },
  {
    title: "Sports",
    src: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/6_Last_section/Sports.webp",
    alt: "Sports",
    portrait: true,
  },
];

const StackingImages = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="w-full h-full relative bg-[#101010] mb-[10vh] md:mb-[30vh]">
      <div className="w-full h-full md:flex hidden">
        <ParallaxCards cards={IMAGES} progress={scrollYProgress} />
      </div>

      <div className="w-full h-full md:hidden flex">
        <HorizontalScrollCarousel cards={IMAGES} />
      </div>
    </section>
  );
};

interface CardProps {
  src: string;
  alt: string;
  title: string;
  portrait?: boolean;
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
        <div className="flex w-full mx-auto h-full mb-[50vh] md:mb-[30vh] flex-col items-center justify-center mt-20 gap-[50vh]">
          {cards.map((card, index) => {
            const targetScale = 1 - (cards.length - index) * 0.05;
            const range = [index * 0.35, 1];
            const targetOpacity =
              (0.9 * (cards.length - 1 - index)) / (cards.length - 1);

            return (
              <Card
                key={index}
                index={index}
                card={card}
                range={range}
                targetScale={targetScale}
                progress={progress}
                targetOpacity={targetOpacity}
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
  targetOpacity: number;
}

const Card: React.FC<CardComponentProps> = ({
  index,
  card,
  progress,
  range,
  targetScale,
  targetOpacity,
}) => {
  const translateX = index % 2 === 0 ? "0" : "20%";
  // const opacity = useTransform(
  //   progress, 
  //   range, 
  //   [0, 1 - (index * 0.2)]
  // );
  return (
    <section
      className="w-full h-full sticky top-[15%] xl:top-[17%] 2xl:top-[20%] flex items-center justify-center"
      key={index}
    >
      <motion.div
        className="h-fit flex flex-col items-center justify-center origin-bottom relative"
        style={{
          top: `calc(-5vh + ${index * 5}px)`,
          right: `calc(-5vh + ${index * 5}px)`,
          transform: `translateX(${translateX})`,
          // opacity,
        }}
      >
        <div
          className={`relative flex flex-col items-center justify-center w-full h-fit ${
            !card.portrait && "my-[15%]"
          }`}
        >
          <Image
            src={card.src}
            alt={card.alt}
            width={600}
            height={600}
            className={`object-contain max-h-[600px] w-fit h-fit ${
              card.portrait && "lg:aspect-square "
            }`}
          />
            <Link
              href={""}
              className={`flex flex-row justify-between items-center bg-[#101010] p-2 ${card.portrait ? "w-[64%]" : "w-full"}`}
            >
              <h6 className="text-white text-2xl font-bold">{card.title}</h6>
              <ArrowRightIcon className="text-white text-2xl font-bold" />
            </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default StackingImages;
