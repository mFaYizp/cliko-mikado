"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const SERVICES = [
  { name: "Product Photography", img: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/4_Services/Services_1.webp" },
  { name: "Architectural Photography", img: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/4_Services/Services_1.webp" },
  { name: "Lifestyle Photography", img: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/4_Services/Services_1.webp" },
  { name: "Catalogue Photography", img: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/4_Services/Services_1.webp" },
  { name: "Fashion Photography", img: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/4_Services/Services_1.webp" },
  { name: "360 Videography", img: "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/4_Services/Services_1.webp" },
];

const textContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textVariant = {
  hidden: { y: "100%" },
  visible: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const Services = () => {
  const [modal, setModal] = useState<{ active: boolean; index: number | null }>({ active: false, index: null });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scaleAnimation = {
    initial: { scale: 0, x: "-10%", y: "-50%" },
    open: { scale: 1, x: "-10%", y: "-50%", transition: { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] } },
    closed: { scale: 0, x: "-10%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
  };

  return (
    <section className="w-full h-full bg-black text-white">
      <div className="container mx-auto flex flex-col items-start justify-center w-full gap-y-10 py-36">
        <motion.div
          ref={ref}
          className="overflow-hidden"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textContainer}
        >
          {"Services".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] leading-tight font-extrabold text-[#383737]"
              variants={textVariant}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>

        <div className="w-full flex flex-col items-start justify-start gap-y-10">
          {SERVICES.map((item, index) => (
            <div key={index} className="w-full">
              {/* Desktop View */}
              <div
                onMouseEnter={() => setModal({ active: true, index })}
                onMouseLeave={() => setModal({ active: false, index: null })}
                className="relative w-full hidden md:flex items-start justify-between font-light group cursor-pointer"
              >
                <h3 className="text-left text-lg md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#666666] group-hover:text-white pt-10">
                  {item.name}
                </h3>
                <motion.div
                  variants={scaleAnimation}
                  initial="initial"
                  animate={modal.active && modal.index === index ? "open" : "closed"}
                  className="absolute flex items-center justify-center w-[320px] md:right-[25%] lg:right-[15%] top-[50%] z-10"
                >
                  <Image src={item.img} alt={item.name} className="w-full h-auto" height={550} width={550} quality={100} />
                </motion.div>
              </div>

              {/* Mobile View */}
              <div className="w-full flex flex-col gap-5 md:hidden">
                <div className="w-full xs:w-[320px]">
                  <Image src={item.img} alt={item.name} className="w-full h-auto max-w-[320px]" height={550} width={550} quality={100} />
                </div>
                <h3 className="font-medium text-left text-xl xs:text-2xl uppercase text-white mx-5">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full aspect-video max-h-[90vh] rounded-lg overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata">
          <source src="https://mikado-products.blr1.cdn.digitaloceanspaces.com/mikado-revamp/Service/servicesection/photography.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Services;
