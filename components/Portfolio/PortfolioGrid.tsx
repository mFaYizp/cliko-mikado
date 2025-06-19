"use client";

import Image from "next/image";
import React from "react";
import PortfolioData from "./portfolioData";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Link from "next/link";
import { motion } from "framer-motion";

const PortfolioGrid = () => {
  const shouldParallax = (index: number) => {
    return index % 4 === 0 || index % 4 === 3;
  };

  return (
    <ParallaxProvider>
      <section className="w-full h-full pt-10 pb-20 lg:pb-40">
        <div className="w-full container mx-auto">
          <div className="flex flex-col gap-20">
            {/* Desktop Layout */}
            <div className="hidden md:flex flex-col gap-20 md:gap-y-36 xl:gap-y-48">
              {Array.from({ length: Math.ceil(PortfolioData.length / 2) }).map(
                (_, rowIndex) => {
                  const firstIndex = rowIndex * 2;
                  const secondIndex = firstIndex + 1;

                  if (!PortfolioData[firstIndex]) return null;

                  return (
                    <div
                      key={rowIndex}
                      className="flex flex-row items-center justify-between gap-10"
                    >
                      {shouldParallax(firstIndex) ? (
                        <Parallax speed={6} className="flex-1">
                          <Link
                            href={`/portfolio/${PortfolioData[firstIndex].slug}`}
                            className="block h-[350px] 2xl:h-[450px] relative group overflow-hidden rounded-lg mr-[25%]"
                          >
                            <Image
                              src={PortfolioData[firstIndex].image}
                              alt={PortfolioData[firstIndex].cardTitle}
                              fill
                              className="object-contain"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-60 z-[1]" />
                            {/* Text */}
                            <div className="absolute top-[85%] left-5 w-full h-full text-white z-[2]">
                              <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                                {PortfolioData[firstIndex].cardTitle}
                              </h3>
                              <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                {PortfolioData[firstIndex]?.service}
                              </p>
                            </div>
                          </Link>
                        </Parallax>
                      ) : (
                        <Link
                          href={`/portfolio/${PortfolioData[firstIndex].slug}`}
                          className="w-[53%] h-[350px] 2xl:h-[450px] relative group overflow-hidden rounded-lg"
                        >
                          <Image
                            src={PortfolioData[firstIndex].image}
                            alt={PortfolioData[firstIndex].cardTitle}
                            fill
                            className="object-cover"
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-60 z-[1]" />
                          {/* Text */}
                          <div className="absolute top-[85%] left-10 w-full h-full text-white z-[2]">
                            <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                              {PortfolioData[firstIndex].cardTitle}
                            </h3>
                            <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                              {PortfolioData[firstIndex]?.service}
                            </p>
                          </div>
                        </Link>
                      )}

                      {PortfolioData[secondIndex] &&
                        (shouldParallax(secondIndex) ? (
                          <Parallax speed={6} className="flex-1">
                            <Link
                              href={`/portfolio/${PortfolioData[secondIndex].slug}`}
                              className="block h-[350px] 2xl:h-[450px] relative group overflow-hidden rounded-lg ml-[25%]"
                            >
                              <Image
                                src={PortfolioData[secondIndex].image}
                                alt={PortfolioData[secondIndex].cardTitle}
                                fill
                                className="object-contain"
                              />
                              <div
                                className={`absolute top-[65%] left-10 w-full h-full ${
                                  PortfolioData[secondIndex].dark
                                    ? "text-black"
                                    : "text-white"
                                }`}
                              >
                                <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                                  {PortfolioData[secondIndex].cardTitle}
                                </h3>
                                <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                  {PortfolioData[secondIndex]?.service}
                                </p>
                              </div>
                            </Link>
                          </Parallax>
                        ) : (
                          <Link
                            href={`/portfolio/${PortfolioData[secondIndex].slug}`}
                            className="w-[53%] h-[350px] 2xl:h-[450px] relative group overflow-hidden rounded-lg"
                          >
                            <Image
                              src={PortfolioData[secondIndex].image}
                              alt={PortfolioData[secondIndex].cardTitle}
                              fill
                              className="object-cover"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-60 z-[1]" />
                            {/* Text */}
                            <div className="absolute top-[85%] left-10 w-full h-full text-white z-[2]">
                              <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                                {PortfolioData[secondIndex].cardTitle}
                              </h3>
                              <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                {PortfolioData[secondIndex]?.service}
                              </p>
                            </div>
                          </Link>
                        ))}
                    </div>
                  );
                }
              )}
            </div>

            {/* Mobile Layout with Animation */}
            <div className="flex md:hidden flex-col gap-10">
              {PortfolioData.map((item, index) => (
                <motion.div
                  key={item.slug || index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="w-full overflow-hidden rounded-lg h-[350px] relative group"
                >
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="block h-full relative"
                  >
                    <Image
                      src={item.image}
                      alt={item.cardTitle}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute top-[75%] left-10 w-full h-full text-white ${
                        item?.dark ? "text-black" : "text-white"
                      }`}
                    >
                      <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                        {item.cardTitle}
                      </h3>
                      <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        {item.service}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default PortfolioGrid;
