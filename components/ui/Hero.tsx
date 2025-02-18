"use client";
import Image from "next/image";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
};

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05, // Stagger each letter's animation
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Hero = ({ title, subtitle }: Props) => {
  return (
    <section className="w-full h-svh flex items-center justify-center relative">
      <ParallaxProvider>
        <Parallax
          translateY={[-10, 10]}
          speed={10}
          className="w-full h-full absolute inset-0 z-0"
        >
          <div className="w-full h-full absolute inset-0 top-0 md:top-5 lg:top-10 flex items-center justify-center opacity-[0.06]">
            <h1 className="text-[4.5rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem] xl:text-[11rem] leading-tight font-extrabold text-white">
              {[...title].map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                  className="inline-block  whitespace-pre-wrap"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </div>
        </Parallax>
        <Parallax speed={10} className="w-full h-full absolute inset-0 z-0">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/zetwork2.png"
              alt="Hero"
              width={350}
              height={350}
              priority
              className="w-[200px] sm:w-[250px] md:w-[350px] object-contain opacity-[0.5]"
              sizes="(max-width: 768px) 300px, (max-width: 1200px) 350px, 400px"
            />
          </div>
        </Parallax>
        <div className="w-full h-full flex items-center justify-center z-20">
          <div className="w-full h-full flex items-center justify-center flex-col gap-10">
            <h1 className="text-[3.6rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] leading-tight font-extrabold text-white">
              {[...title].map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                  className="inline-block  whitespace-pre-wrap"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <span className="text-white text-xl">{subtitle}</span>
          </div>
        </div>
      </ParallaxProvider>
    </section>
  );
};

export default Hero;
