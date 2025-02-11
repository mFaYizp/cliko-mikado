"use client";

import Image from "next/image";
import React from "react";
import PortfolioData from "./portfolioData";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Link from "next/link";

const PortfolioGrid = () => {
  const shouldParallax = (index: number) => {
    return index % 4 === 0 || index % 4 === 3;
  };

  return (
    <ParallaxProvider>
      <section className="w-full h-full py-20">
        <div className="w-full container mx-auto">
          <div className="flex flex-col gap-20">
            {/* Desktop Layout */}
            <div className="hidden md:flex flex-col gap-20">
              {Array.from({ length: Math.ceil(PortfolioData.length / 2) }).map((_, rowIndex) => {
                const firstIndex = rowIndex * 2;
                const secondIndex = firstIndex + 1;
                
                if (!PortfolioData[firstIndex]) return null;

                return (
                  <div key={rowIndex} className="flex flex-row items-center justify-between gap-10">
                    {shouldParallax(firstIndex) ? (
                      // First item with parallax
                      <Parallax speed={8} className="flex-1">
                        <Link href={PortfolioData[firstIndex].href} className="block h-[450px] relative group overflow-hidden rounded-lg">
                          <Image
                            src={PortfolioData[firstIndex].image}
                            alt={PortfolioData[firstIndex].title}
                            fill
                            className="object-contain"
                          />
                          <div className="absolute top-[60%] left-10 w-full h-full text-white">
                            <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                              {PortfolioData[firstIndex].title}
                            </h3>
                            <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                              {PortfolioData[firstIndex].type}
                            </p>
                          </div>
                        </Link>
                      </Parallax>
                    ) : (
                      // First item without parallax
                      <Link href={PortfolioData[firstIndex].href} className="w-[60%] h-[450px] relative group overflow-hidden rounded-lg">
                        <Image
                          src={PortfolioData[firstIndex].image}
                          alt={PortfolioData[firstIndex].title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-[75%] left-10 w-full h-full text-white">
                          <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                            {PortfolioData[firstIndex].title}
                          </h3>
                          <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                            {PortfolioData[firstIndex].type}
                          </p>
                        </div>
                      </Link>
                    )}

                    {PortfolioData[secondIndex] && (
                      shouldParallax(secondIndex) ? (
                        // Second item with parallax
                        <Parallax speed={8} className="flex-1">
                          <Link href={PortfolioData[secondIndex].href} className="block h-[450px] relative group overflow-hidden rounded-lg">
                            <Image
                              src={PortfolioData[secondIndex].image}
                              alt={PortfolioData[secondIndex].title}
                              fill
                              className="object-contain"
                            />
                            <div className="absolute top-[65%] left-10 w-full h-full text-white">
                              <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                                {PortfolioData[secondIndex].title}
                              </h3>
                              <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                {PortfolioData[secondIndex].type}
                              </p>
                            </div>
                          </Link>
                        </Parallax>
                      ) : (
                        // Second item without parallax
                        <Link href={PortfolioData[secondIndex].href} className="w-[60%] h-[450px] relative group overflow-hidden rounded-lg">
                          <Image
                            src={PortfolioData[secondIndex].image}
                            alt={PortfolioData[secondIndex].title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-[75%] left-10 w-full h-full text-white">
                            <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                              {PortfolioData[secondIndex].title}
                            </h3>
                            <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                              {PortfolioData[secondIndex].type}
                            </p>
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Layout */}
            <div className="flex md:hidden flex-col gap-10">
              {PortfolioData.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="w-full overflow-hidden rounded-lg h-[350px] relative group"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-[75%] left-10 w-full h-full text-white">
                    <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {item.type}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default PortfolioGrid;
