"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-7 py-5 bg-black text-[#f2f2f2]">

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
          <button className="text-2xl" onClick={handleMenuToggle}>
            ☰
          </button>
        </div>
      </nav>

 
      {menuOpen && (
        <div
          className={`fixed top-0 left-0 h-3/4 w-full bg-[#1d1d1d] text-white z-50 flex flex-col transition-transform duration-500 ease-in-out transform ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
       
          <nav className="flex justify-between items-center px-7 py-5 bg-[#1d1d1d] text-[#f2f2f2]">
 
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
              <button className="text-2xl" onClick={handleMenuToggle}>
                ☰
              </button>
            </div>
          </nav>

  
          <div className="flex flex-col md:flex-row items-start justify-between mt-10">
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
          </div>
          <div className="flex gap-6 justify-left mt-6 ml-6">
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
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
