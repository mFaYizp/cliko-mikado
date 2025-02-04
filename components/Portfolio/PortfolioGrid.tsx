"use client";

import Image from "next/image";
import React from "react";
import PortfolioData from "./portfolioData";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const PortfolioGrid = () => {
  const shouldParallax = (index: number) => {
    return index % 4 === 0 || index % 4 === 3;
  };

  return (
    <ParallaxProvider>
      <section className="w-full h-full py-20">
        <div className="w-full container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20">
            {PortfolioData.map((item, index) => (
              <div
                key={item.id}
                className={`w-full h-full flex items-center justify-center`}
              >
                {shouldParallax(index) ? (
                  <Parallax
                    speed={10}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <div
                      className={`overflow-hidden rounded-lg h-[350px] w-fit relative group`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={800}
                        className={`w-full h-full object-contain`}
                      />
                      <div className="absolute top-[75%] left-10 w-full h-full text-white">
                        <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                          {item.title}
                        </h3>
                        <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                          {item.type}
                        </p>
                      </div>
                    </div>
                  </Parallax>
                ) : (
                  <div
                    className={`w-full h-full overflow-hidden rounded-lg relative group`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={800}
                      className={`w-full h-full object-cover`}
                    />
                    <div className="absolute top-[75%] left-10 w-full h-full text-white">
                      <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        {item.type}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default PortfolioGrid;
