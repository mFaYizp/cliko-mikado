"use client";
import Image from "next/image";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

type Props = {};

const InnerPageAbout = (props: Props) => {
  return (
    <section className="w-full h-full flex flex-col">
      <div className="container  w-full h-full flex flex-col md:flex-row py-14 md:py-20 xl:py-36 gap-y-10 ">
        <div className="w-full md:w-1/3 flex flex-col items-start justify-start ">
          <h2 className="text-4xl font-bold">Highlight</h2>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-y-4">
          <p className="text-xl text-[#b9b9b9] w-full md:w-full xl:w-2/3">
            Our product photography service focuses on creating high-quality,
            conversion-ready visuals designed for both digital and print
            marketing platforms. Whether it's for an e-commerce catalog, Amazon
            listing, or social media campaign, we ensure every image captures
            the product's unique features, textures, and intended appeal.
          </p>
        </div>
      </div>
      <ParallaxProvider>
        <div className="w-full h-full overflow-hidden">
          <Parallax translateY={[-10, 10]} className="w-full h-full">
            <Image
              src={
                "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/1).jpg"
              }
              alt="about"
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
