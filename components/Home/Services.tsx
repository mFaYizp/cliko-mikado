"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Services = ({
  Head,
}: {
  Head: { name: string; position: string; img: string }[];
}) => {
  const [modal, setModal] = useState<{ active: boolean; index: number | null }>(
    {
      active: false,
      index: null,
    }
  );

  const scaleAnimation = {
    initial: { scale: 0, x: "-10%", y: "-50%" },
    open: {
      scale: 1,
      x: "-10%",
      y: "-50%",
      transition: { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] },
    },
    closed: {
      scale: 0,
      x: "-10%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  return (
    <div className="w-full flex flex-col items-start justify-start xxs:gap-y-8 lg:gap-y-12">
      {Head.map((item, index: number) => {
        return (
          <div key={index} className="w-full border-gray-400">
            {/* Desktop View */}
            <div
              onMouseEnter={() => setModal({ active: true, index })}
              onMouseLeave={() => setModal({ active: false, index: null })}
              className="relative w-full xxs:pb-8 lg:pb-12 hidden md:flex items-start justify-start font-light group cursor-pointer"
            >
              <h1>Services We Do</h1>
              <h3 className="font-medium xxs:w-2/3 lg:w-1/2 text-left xxs:text-lg xs:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 5xl:text-[2rem] text-white hover:text-[#FF0040] pt-10">
                {item.name}
              </h3>
              <motion.div
                variants={scaleAnimation}
                initial="initial"
                animate={
                  modal.active && modal.index === index ? "open" : "closed"
                }
                whileHover="open"
                className="absolute w-[320px] md:right-[25%] lg:right-[5%] z-10"
              >
                <Image
                  src={item.img}
                  alt="team"
                  className="w-full h-auto"
                  height={550}
                  width={550}
                  quality={100}
                />
              </motion.div>
              <p className="xxs:w-1/3 lg:w-1/2 xxs:text-right lg:text-left xxs:text-md xs:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl text-white hover:text-[#FF0040] 5xl:text-[3xl] pt-10">
                {item.position}
              </p>
            </div>

            {/* Mobile View */}
            <div className="w-full h-full flex gap-4 flex-wrap flex-col justify-center md:hidden relative">
              <div className="w-full xs:w-[320px]">
                <Image
                  src={item.img}
                  alt="team"
                  className="w-full h-auto"
                  height={550}
                  width={550}
                  quality={100}
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <h3 className="font-medium text-left xxs:text-lg text-xl xs:text-2xl uppercase text-white">
                  {item.name}
                </h3>
                <p className="text-left text-base xs:text-xl">
                  {item.position}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
