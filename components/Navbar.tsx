"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-7 py-5 text-[#f2f2f2] fixed top-0 left-0 w-full z-50">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </Link>

      <div className="hidden md:flex space-x-8">
        <Link href="/" onClick={handleMenuToggle}>
          Menu
        </Link>
      </div>

      <div className="hidden md:flex items-center">
        <Link href="/contact">
          <button className="px-6 py-2 text-white rounded-full">
            Get in Touch
          </button>
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <Button
          variant={"link"}
          className="text-2xl"
          onClick={handleMenuToggle}
        >
          ☰
        </Button>
      </div>
      {menuOpen && (
        <MenuBar menuOpen={menuOpen} handleMenuToggle={handleMenuToggle} />
      )}
    </nav>
  );
};

const MenuBar = ({
  menuOpen,
  handleMenuToggle,
}: {
  menuOpen: boolean;
  handleMenuToggle: () => void;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleMenuToggle();
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, handleMenuToggle]);

  const menuVariants = {
    initial: { y: "-100%" },
    animate: { 
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.2,
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    },
    exit: { 
      y: "-100%",
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const childVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5
      }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {menuOpen && (
        <motion.div
          ref={menuRef}
          className="fixed top-0 left-0 h-3/4 w-full bg-[#1d1d1d] text-white z-50"
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.nav
            variants={childVariants}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-between items-center px-7 py-5 bg-[#1d1d1d] text-[#f2f2f2]"
          >
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link href="/" onClick={handleMenuToggle}>
                Close
              </Link>
            </div>

            <div className="hidden md:flex items-center">
              <Link href="/contact">
                <button className="px-6 py-2 text-white rounded-full">
                  Get in Touch
                </button>
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={handleMenuToggle}
                className="text-2xl hover:opacity-70 transition-opacity"
              >
                ✕
              </button>
            </div>
          </motion.nav>

          <motion.div
            variants={childVariants}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col md:flex-row items-start justify-between mt-10"
          >
            {/* Video Placeholder */}
            <div className="flex justify-start items-center w-[430px] h-[241px] bg-slate-400 ml-6 rounded-lg">
              <video
                className="object-contain rounded-lg"
                width={430}
                height={241}
                src="https://mikado-products.blr1.cdn.digitaloceanspaces.com/mikado-revamp/Service/servicesection/photography.mp4"
                loop
                muted
                autoPlay
                playsInline
                draggable="false"
              ></video>
            </div>

            <div className="flex flex-col items-start justify-center space-y-0 pr-48 font-extrabold ">
              <Link
                href="/"
                className="text-[4rem] leading-tight"
                onClick={handleMenuToggle}
              >
                HOME
              </Link>
              <Link
                href="/work"
                className="text-[4rem] leading-tight"
                onClick={handleMenuToggle}
              >
                ABOUT
              </Link>
              <Link
                href="/about"
                className="text-[4rem] leading-tight"
                onClick={handleMenuToggle}
              >
                PORTFOLIO
              </Link>
              <Link
                href="/gallery"
                className="text-[4rem] leading-tight"
                onClick={handleMenuToggle}
              >
                CONTACT
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={childVariants}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex gap-6 justify-left mt-6 ml-6"
          >
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-3 shadow-[0_0_8px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_0.5px_rgba(59,130,246,1)]"
            >
              <FaFacebookF className="text-xl text-gray-400 hover:text-blue-500" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-3 shadow-[0_0_8px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_0.5px_rgba(59,130,246,1)]"
            >
              <FaInstagram className="text-xl text-gray-400 hover:text-pink-500" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-3 shadow-[0_0_8px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_0.5px_rgba(59,130,246,1)]"
            >
              <BsTwitterX className="text-xl text-gray-400 hover:text-blue-400" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-3 shadow-[0_0_8px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_0.5px_rgba(59,130,246,1)]"
            >
              <FaLinkedinIn className="text-xl text-gray-400 hover:text-blue-700" />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
