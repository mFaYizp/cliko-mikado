"use client";
import Image from "next/image";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

type Props = {
  title: string;
};

const Hero = ({ title }: Props) => {
  return (
    <section className="w-full h-svh flex items-center justify-center relative">
      <ParallaxProvider>
        <Parallax
          translateY={[-10, 10]}
          speed={10}
          className="w-full h-full absolute inset-0 z-0"
        >
          <div className="w-full h-full absolute inset-0 top-0 md:top-5 lg:top-10 flex items-center justify-center opacity-10">
            <h1 className="text-[4.5rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem] xl:text-[11rem] leading-tight font-extrabold text-white">
              {title}
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
              // fill
              className="w-[200px] sm:w-[250px] md:w-[350px] object-contain"
              sizes="(max-width: 768px) 300px, (max-width: 1200px) 350px, 400px"
            />
          </div>
        </Parallax>
        <div className="w-full h-full flex items-center justify-center  z-20">
          <div className="w-full h-full flex items-center justify-center flex-col gap-10">
            <h1 className="text-[3.6rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] leading-tight font-extrabold text-white">
              {title}
            </h1>
            <span className="text-white text-xl">Selected Works</span>
          </div>
        </div>
      </ParallaxProvider>
    </section>
  );
};

export default Hero;
