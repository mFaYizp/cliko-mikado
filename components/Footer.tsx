"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";

const LINKS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const SOCIAL_LINKS = [
  {
    icon: <FaFacebookF className="text-xl text-gray-400 hover:text-blue-500" />,
    href: "https://www.instagram.com/mikado.biz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    className:
      "rounded-xl p-3 shadow-[0_0_8px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_0.5px_rgba(59,130,246,1)]",
  },
  {
    icon: <FaInstagram className="text-xl text-gray-400 hover:text-pink-500" />,
    href: "https://www.linkedin.com/company/mikado-design-studio/",
    className:
      "rounded-xl p-3 shadow-[0_0_8px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_0.5px_rgba(59,130,246,1)]",
  },
  {
    icon: <BsTwitterX className="text-xl text-gray-400 hover:text-blue-400" />,
    href: "https://twitter.com/design_mikado",
    className:
      "rounded-xl p-3 shadow-[0_0_8px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_0.5px_rgba(59,130,246,1)]",
  },
  {
    icon: (
      <FaLinkedinIn className="text-xl text-gray-400 hover:text-blue-700" />
    ),
    href: "https://www.facebook.com/mikado.biz",
    className:
      "rounded-xl p-3 shadow-[0_0_8px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_0.5px_rgba(59,130,246,1)]",
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
        aspectRatio > 1 ? "md:pt-5" : "md:pt-28"
      } relative`}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div
        className={`w-full min-h-screen ${
          aspectRatio > 1 ? "h-lvh" : "h-full"
        } ${
          aspectRatio > 1
            ? "fixed bottom-0 md:top-[10%] lg:top-[7%] xl:top-[25%]"
            : ""
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left py-10 tracking-wide">
          {/* Left Section */}
          <div className="flex flex-col justify-between gap-6 flex-1">
            <ul className="flex flex-col gap-4 text-md">
              {LINKS.map(({ name, link }, index) => (
                <li key={index}>
                  <Link href={link}>{name}</Link>
                </li>
              ))}
            </ul>
            <p className="text-xs mt-6 text-[#777373]">
              © 2024 Cliko Studio.
              <br />
              All rights reserved
            </p>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center gap-6 flex-1">
            <h4 className="text-md text-[#777373]">Address</h4>
            <p className="text-center text-md leading-7">
              949, 28th Main, 100 Feet Ring Rd, <br />
              Marenahalli, Jayanagara 9th Block, <br />
              Bengaluru, India
            </p>
            <div className="flex gap-6 justify-center mt-6">
              {SOCIAL_LINKS.map(({ icon, href, className }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {icon}
                </Link>
              ))}
            </div>
            <p className="text-xs mt-4 text-[#777373]">Privacy Policy</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end flex-1">
            <div className="w-fit flex flex-col gap-6">
              <h4 className="text-start text-md text-[#777373]">Email: </h4>
              <p>
                <Link href="mailto:info@example.com">info@example.com</Link>
              </p>
              <h4 className="text-md text-[#777373]">Mobile No:</h4>
              <p>+91 8197278080</p>
            </div>
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
      </div>
    </footer>
  );
};

export default Footer;
