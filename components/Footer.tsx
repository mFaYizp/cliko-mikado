"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const [aspectRatio, setAspectRatio] = useState<number>(0);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const updateAspectRatio = () => {
      setAspectRatio(window.innerWidth / window.innerHeight);
    };
    updateAspectRatio();
    window.addEventListener("resize", updateAspectRatio);

    return () => {
      window.removeEventListener("resize", updateAspectRatio);
    };
  }, [aspectRatio]);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        const rect = footerElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          setIsImageVisible(true);
        } else {
          setIsImageVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      id="footer"
      className={`flex flex-col justify-start items-center w-full ${
        aspectRatio > 1 ? "h-svh" : "h-full"
      } bg-[#161616] text-[#f2f2f2] xxs:pt-28 ${
        aspectRatio > 1 ? "tb:pt-5" : "tb:pt-28"
      } relative`}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left py-10 tracking-wide">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col gap-4 text-md">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <p className="text-xs mt-4 text-[#777373]">
            © 2024 Cliko Studio.
            <br />
            All rights reserved
          </p>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center gap-6">
          <h4 className="text-md text-[#777373]">Address</h4>
          <p className="text-center text-md leading-7">
            949, 28th Main, 100 Feet Ring Rd, <br />
            Marenahalli, Jayanagara 9th Block, <br />
            Bengaluru, India
          </p>
          <div className="flex gap-6 justify-center mt-6">
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

        {/* Right Section */}
        <div className="flex flex-col gap-6 items-center md:items-end">
          <h4 className="text-md text-[#777373]">Email: </h4>
          <p>
            <Link href="mailto:info@example.com">info@example.com</Link>
          </p>
          <h4 className="text-md text-[#777373]">Mobile No:</h4>
          <p>+91 8197278080</p>
        </div>
      </div>
      <div
        className={`mt-32 transition-opacity duration-700 ${
          isImageVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/7_Footer/Cliko%20logo.svg"
          alt="Cliko Logo"
          width={1300}
          height={300}
          className="mx-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;
