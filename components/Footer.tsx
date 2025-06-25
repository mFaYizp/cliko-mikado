"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PiInstagramLogoBold } from "react-icons/pi";
import { TfiLinkedin } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import { FloatingDock } from "./ui/floating-dock";

const LINKS = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Portfolio", link: "/portfolio/grid" },
  { name: "Contact Us", link: "/contact-us" },
];

export const SOCIAL_LINKS = [
  {
    title: "Facebook",
    icon: <FaFacebookF className="text-xl text-white" />,
    href: "https://www.facebook.com/mikado.biz",
  },
  {
    title: "Instagram",
    icon: <PiInstagramLogoBold className="text-xl text-white" />,
    href: "https://www.instagram.com/mikado.biz",
  },
  {
    title: "Twitter",
    icon: <BsTwitterX className="text-xl text-white" />,
    href: "https://twitter.com/design_mikado",
  },
  {
    title: "LinkedIn",
    icon: <TfiLinkedin className="text-xl text-white" />,
    href: "https://www.linkedin.com/company/mikado-design-studio/",
  },
];

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
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const footerElement = document.getElementById("footer");
  //     if (footerElement) {
  //       const rect = footerElement.getBoundingClientRect();
  //       setIsImageVisible(rect.top <= window.innerHeight);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <footer
      id="footer"
      className={`flex flex-col items-center w-full bg-[#161616] text-[#f2f2f2] relative ${
        aspectRatio > 1 ? "h-screen" : "h-full"
      }`}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div
        className={`w-full min-h-screen ${
          aspectRatio > 1 ? "h-lvh" : "h-full"
        } ${
          aspectRatio > 1
            ? "fixed bottom-0 md:top-[10%] lg:top-[7%] xl:top-[14%]"
            : ""
        } overflow-hidden`}
      >
        <div className="container px-6 sm:px-10 lg:px-16 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-3 gap-y-8 text-center sm:text-left">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start justify-between gap-4 sm:gap-6">
            <ul className="flex flex-col items-center md:items-start gap-3 sm:gap-4 text-sm sm:text-md">
              {LINKS.map(({ name, link }, index) => (
                <li key={index}>
                  <Link href={link}>{name}</Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#777373] mt-6 sm:mt-8 hidden md:flex">
              © 2024 Cliko Studio. All rights reserved
            </p>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <h4 className="text-sm  text-[#777373]">Address</h4>
            <p className="text-center text-sm leading-6 sm:leading-7">
              949, 28th Main, 100 Feet Ring Rd, <br />
              Marenahalli, Jayanagara 9th Block, <br />
              Bengaluru, India
            </p>
            <div className="hidden md:flex gap-4 sm:gap-6 items-center justify-center sm:justify-start mt-4 sm:mt-6">
              <FloatingDock
                items={SOCIAL_LINKS}
                desktopClassName="flex items-center justify-center"
              />
            </div>
            <p className="text-xs text-[#777373] mt-4 sm:mt-6 hidden md:flex">
              Privacy Policy
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full flex flex-col items-center md:items-end gap-4 sm:gap-6">
            <div className="w-fit flex flex-col items-center md:items-start gap-4 sm:gap-6">
              <h4 className="text-sm sm:text-md text-[#777373]">Email:</h4>
              <p>
                <Link href="mailto:info@example.com">info@mikado.biz</Link>
              </p>
              <h4 className="text-sm sm:text-md text-[#777373]">Mobile No:</h4>
              <p>+91 8197278080</p>
            </div>
          </div>
        </div>

        <div className="flex md:hidden gap-4 sm:gap-6 items-center justify-center sm:justify-start mt-4 sm:mt-6">
          <FloatingDock
            items={SOCIAL_LINKS}
            desktopClassName="flex items-center justify-center"
          />
        </div>
        <div className="flex flex-col items-center md:hidden">
          <p className="text-xs text-[#777373] mt-4 sm:mt-6">Privacy Policy</p>
          <p className="text-xs text-[#777373] mt-6 sm:mt-8">
            © 2024 Cliko Studio. All rights reserved
          </p>
        </div>

        {/* Footer Logo */}
        <div
          className={`absolute bottom-0 lg:bottom-10 xl:bottom-20 -z-10 w-full transition-opacity duration-700 max-w[calc(100%-5%)] flex items-center justify-center`}
          //${isImageVisible ? "opacity-100" : "opacity-0"}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/7_Footer/Cliko%20logo.svg"
              alt="Cliko Logo"
              width={600}
              height={150}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
