"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingDock } from "./ui/floating-dock";
import { SOCIAL_LINKS } from "./Footer";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  let lastScrollY = 0;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return; // Prevent scrolling when menu is open

      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsNavbarVisible(true);
        return;
      }
      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/contact-us", label: "CONTACT US" },
  ];

  return (
    <>
      <nav
        className={`w-full h-20 xl:h-[5rem] px-7 fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isMenuOpen
            ? "bg-black/70 backdrop-blur-lg"
            : "bg-black/20 backdrop-blur-md"
        } shadow-lg`}
      >
        <div className="w-full h-full flex justify-between items-center">
          <div className="w-24 h-10 xl:w-32 xl:h-12 pl-3">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMenuOpen ? "CLOSE" : "MENU"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                className="cursor-pointer text-base xl:text-lg"
                onClick={toggleMenu}
              >
                {isMenuOpen ? "Close" : "Menu"}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/contact-us">
              <button className="px-4 py-2 xl:px-6 xl:py-3 text-white text-sm xl:text-base transition-opacity">
                Contact Us
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMenuOpen ? "close-icon" : "menu-icon"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, y: -10 }}
                className="text-2xl text-white cursor-pointer"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </motion.div>
            </AnimatePresence>
          </div>      
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-[80vh] bg-black/70 backdrop-blur-xl z-40"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.2 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-y-5 pl-4">
              <div className="flex-1 flex flex-col justify-between items-start gap-y-4">
              <div className="flex-1 flex flex-col items-end justify-center pl-0 md:pl-7  pr-5 md:pr-0 lg:pr-48 xl:pr-0 font-extrabold pt-[40px] 2xl:pt-18">

                  <video
                    className="object-cover w-full h-auto rounded-lg aspect-video  md:w-[600px] md:h-[250px] lg:w-[850px] lg:h-[300px] 2xl:w-[900px] 2xl:h-[350px]"
                    width={800}
                    height={450}
                    src="https://mikado-products.blr1.cdn.digitaloceanspaces.com/mikado-revamp/Service/servicesection/photography.mp4"
                    loop
                    muted
                    autoPlay
                    playsInline
                    draggable="false"
                  ></video>
                </div>

                <motion.div className="w-fit hidden md:flex items-start justify-start pl-0 md:pl-8  pt-44 md:pt-9 2xl:pt-46">
                  <FloatingDock
                    items={SOCIAL_LINKS}
                    desktopClassName="flex items-center justify-center"
                  />
                </motion.div>
              </div>

              <div className="flex-1 flex flex-col items-end justify-center pr-6 md:pr-18 lg:pr-20 xl:pr-28 font-extrabold pt-18 md:pt-36 2xl:pt-12">
                <div className="w-fit flex flex-col space-y-2">
                  {menuItems.map((item) => (
                    <motion.div key={item.label}>
                      <Link
                        href={item.href}
                        className="text-[3rem] leading-tight xl:text-[3.5rem] 2xl:text-[5rem]"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
