"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import ImageEffect from "../ui/ImageEffect";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeAbout = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto w-full flex flex-col md:flex-row md:flex-nowrap items-center md:items-start justify-between py-16 md:py-36 gap-y-10 px-4">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start pb-10 sm:pb-20 mt-32">
          <ParallaxProvider>
            <Parallax speed={-10} className="overflow-hidden">
              <ImageEffect
                src="https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/2_About/About.webp"
                alt="About"
                width={500}
                height={500}
                className="mx-auto max-w-full md:max-w-[500px]"
              />
            </Parallax>
          </ParallaxProvider>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start sm:items-center md:items-start justify-center gap-y-6 md:gap-y-4 xl:gap-y-12 text-left sm:text-center md:text-left min-h-full mt-16 sm:mt-72 sm:pt-20 md:pt-0 md:pl-6">
          {/* Animated Text */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-[#CCCCCC] font-light text-[1.25rem] md:text-[1.50rem] max-w-[35ch]"
          >
            At <span className="text-white font-normal">Cliko</span>, we
            specialize in high-quality corporate photography, capturing stunning
            visuals that tell your unique and brand story. We bring moments to
            life with creativity and precision, helping to elevate your brand
            and create lasting impressions.
          </motion.p>

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Button className="font-normal text-[1.25rem] md:text-[1.75rem] px-8 py-4 md:px-10 md:py-6  border rounded-none hover:text-black hover:bg-white">
              <Link
                href={"/portfolio"}
                className="flex items-center justify-center space-x-2"
              >
                <span className="pt-1 pb-1 pl-3"> Studio</span>{" "}
                <ChevronRight className="min-w-6 min-h-8" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
