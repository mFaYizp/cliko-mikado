"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeaderText from "../ui/HeaderText";

const SERVICES = [
  {
    name: "Product Photography",
    img: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/4_Services/Services_1.webp",
  },
  {
    name: "Architectural Photography",
    img: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/4_Services/Services_1.webp",
  },
  {
    name: "Lifestyle Photography",
    img: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/4_Services/Services_1.webp",
  },
  {
    name: "Catalogue Photography",
    img: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/4_Services/Services_1.webp",
  },
  {
    name: "Fashion Photography",
    img: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/4_Services/Services_1.webp",
  },
  {
    name: "360 Videography",
    img: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/4_Services/Services_1.webp",
  },
];

const Services = () => {
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
    <section className="w-full h-full">
      <div className="container mx-auto flex flex-col items-start justify-center w-full gap-y-10 py-36">
       {/* <HeaderText
          text="Services We Do"
          strokeWidth={1}
          svgWidth={100}
          fontSize={70}
          className="w-full h-auto text-start"
        />*/}
        <h1 className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] leading-tight font-extrabold text-[#383737] !text-start">Services</h1>
        <div className="w-full flex flex-col items-start justify-start gap-y-10 ">
          {SERVICES.map((item, index: number) => {
            return (
              <div key={index} className="w-full">
                <div
                  onMouseEnter={() => setModal({ active: true, index })}
                  onMouseLeave={() => setModal({ active: false, index: null })}
                  className="relative w-full xxs:pb-8 lg:pb-12 hidden md:flex items-start justify-start font-light group cursor-pointer"
                >
                  <h3 className="w-full  text-left text-lg md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#666666] hover:text-white pt-10">
                    {item.name}
                  </h3>
                  <motion.div
                    variants={scaleAnimation}
                    initial="initial"
                    animate={
                      modal.active && modal.index === index ? "open" : "closed"
                    }
                    whileHover="open"
                    className="absolute flex items-center justify-center w-[320px] md:right[25%] lg:right-[15%] top-[50%] z-10"
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
                  {/* <p className="xxs:w-1/3 lg:w-1/2 xxs:text-right lg:text-left xxs:text-md xs:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl text-white hover:text-[#FF0040] 5xl:text-[3xl] pt-10">
                  {item.position}
                </p> */}
                </div>

                {/* Mobile View */}
                <div className="w-full h-auto flex gap-5 flex-wrap flex-col justify-center md:hidden relative">
                  <div className="w-full xs:w-[320px]">
                    <Image
                      src={item.img}
                      alt="team"
                      className="w-full h-auto max-w-[320px]"
                      height={550}
                      width={550}
                      quality={100}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <h3 className="font-medium text-left xxs:text-lg text-xl xs:text-2xl uppercase text-white mx-5">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full aspect-video max-h-[90vh] rounded-lg overflow-hidden">
  <video
    className="w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  >
    <source
      src="https://mikado-products.blr1.cdn.digitaloceanspaces.com/mikado-revamp/Service/servicesection/photography.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>

    </section>
  );
};

export default Services;
