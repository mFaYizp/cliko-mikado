"use client";
import Image from "next/image";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

type Props = {
  title: string;
  description: string;
  src: string;
};

const InnerPageAbout = ({ title, description, src }: Props) => {
  return (
    <section className="w-full h-full flex flex-col">
      <div className="container  w-full h-full flex flex-col md:flex-row py-14 md:py-20 xl:py-36 gap-y-10 ">
        <div className="w-full md:w-1/3 flex flex-col items-start justify-start ">
          <h2 className="text-4xl font-bold">{title}</h2>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-y-4">
          <p className="text-xl text-[#b9b9b9] w-full md:w-full xl:w-2/3">
            {description}
          </p>
        </div>
      </div>
      <ParallaxProvider>
        <div className="w-full h-full overflow-hidden">
          <Parallax translateY={[-10, 10]} className="w-full h-full">
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </Parallax>
        </div>
      </ParallaxProvider>
    </section>
  );
};

export default InnerPageAbout;
