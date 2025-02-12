"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { PiInstagramLogoBold } from "react-icons/pi";
import { TfiLinkedin } from "react-icons/tfi";
import { SOCIAL_LINKS } from "./Footer";
import { FloatingDock } from "./ui/floating-dock";
import { useMenu } from "@/contexts/MenuContext";

const Navbar = () => {
  const { scrollY } = useScroll();
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const [hidden, setHidden] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous) {
      if (latest > previous && latest > 100) {
        setHidden(true);
        setIsMenuOpen(false);
      } else {
        setHidden(false);
      }
    }
  });

  return (
    <motion.nav
      variants={{
        visible: {
          y: 0,
        },
        hidden: {
          y: -100,
        },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full h-20 px-7 text-[#f2f2f2] fixed top-0 left-0 z-50 bg-[#101010]"
    >
      <div className="w-full h-full flex justify-between items-center">
        <div className="pl-3">
          <Link href={"/"}>
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
          <div onClick={toggleMenu} className="cursor-pointer">
            Menu
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <Link href="/contact-us">
            <button className="px-3 text-white rounded-full">
              Get in Touch
            </button>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <Button
            variant={"link"}
            className="text-2xl text-white hover:opacity-70 transition-opacity"
            onClick={toggleMenu}
          >
            ☰
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <MenuBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const MenuBar = ({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, toggleMenu]);

  const menuVariants = {
    initial: { y: "-100%" },
    animate: {
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.2,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
    exit: {
      y: "-100%",
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const childVariants = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/about-us", label: "ABOUT" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/contact-us", label: "CONTACT" },
  ];

  const linkVariants = {
    initial: { x: -50, opacity: 0 },
    animate: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }),
    exit: (i: number) => ({
      x: -50,
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: i * 0.05,
      },
    }),
  };

  return (
    <div className="w-full h-full">
      {isMenuOpen && (
        <motion.div
          ref={menuRef}
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed top-0 left-0 h-full min-h-svh w-full  backdrop-blur-md"
        >
          <motion.div
            className="h-full md:h-[90vh] xl:h-3/4 w-full bg-black/70  backdrop-blur-xl border border-white/10  rounded-xl text-white z-50 shadow-lg"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.nav
              variants={childVariants}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-row justify-between items-center px-6 py-5 md:px-7 md:py-3 text-[#f2f2f2] bg-black/70 backdrop-blur-lg  shadow-lg"
            >
              <Link href={"/"}>
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="object-contain w-24 h-24 md:w-20 md:h-20"
                />
              </Link>

              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="text-3xl hover:opacity-70 transition-opacity focus:outline-none"
                >
                  ✕
                </button>
              </div>

              <div className="hidden md:flex space-x-8">
                <div onClick={toggleMenu} className="cursor-pointer">
                  Close
                </div>
              </div>

              <div className="hidden md:flex items-center">
                <Link href="/contact-us">
                  <button className="px-6 py-2 text-white rounded-full">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </motion.nav>

            <motion.div
              variants={childVariants}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col md:flex-row items-start justify-between mt-10 gap-y-5"
            >
              <div className="w-full h-full flex flex-col flex-1 justify-between items-start gap-y-4">
                <div className="flex justify-start items-center w-full xl:max-w-[500px] md:max-w-[430px] xl:max-h-[400px] md:max-h-[360px] max-h-[350px] h-auto md:mx-0 md:ml-6 rounded-lg">
                  <video
                    className="object-cover h-full w-full rounded-lg aspect-video"
                    width={530}
                    height={303}
                    src="https://mikado-products.blr1.cdn.digitaloceanspaces.com/mikado-revamp/Service/servicesection/photography.mp4"
                    loop
                    muted
                    autoPlay
                    playsInline
                    draggable="false"
                  ></video>
                </div>

                <motion.div
                  variants={childVariants}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="w-fit hidden md:flex items-start gap-6 justify-start mt-6 2xl:mt-8 ml-6"
                >
                  <FloatingDock
                    items={SOCIAL_LINKS}
                    desktopClassName="flex items-center justify-center"
                  />
                </motion.div>
              </div>

              <div className="flex flex-1 flex-col items-end justify-center pr-6 md:pr-48 font-extrabold">
                <div className="w-fit flex flex-col space-y-2">
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      custom={i}
                      variants={linkVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      onClick={toggleMenu}
                    >
                      <Link
                        href={item.href}
                        className="text-[3rem] md:text-[4rem] leading-tight hover:text-gray-300 transition-colors"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                variants={childVariants}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-fit flex md:hidden items-start gap-6 justify-start mt-6 ml-6"
              >
                <FloatingDock
                  items={SOCIAL_LINKS}
                  desktopClassName="flex items-center justify-center"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
