"use client";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const ProjectData = [
  {
    name: "Space Milk",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/1.webp",
    href: "",
  },
  {
    name: "Designstripe",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/2.webp",
    href: "",
  },
  {
    name: "Fintek",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/3.webp",
    href: "",
  },
  {
    name: "Mikado",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/4.webp",
    href: "",
  },
  {
    name: "Space Milk",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/5.webp",
    href: "",
  },
  {
    name: "Fintek",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/6.webp",
    href: "",
  },
  {
    name: "Mikado",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/7.webp",
    href: "",
  },
  {
    name: "Mikado",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/8.webp",
    href: "",
  },
  {
    name: "Mikado",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/1_Hero_section/9.webp",
    href: "",
  },
];

type Position = {
  top: string;
  left: string;
};

const dynamicTexts = [
  "Architectural",
  "Industrial",
  "Food",
  "Product",
  "Fashion",
  "360 Video",
  "Catalogue",
  "Unboxing Video",
];

const HomeHero = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const [currentText, setCurrentText] = useState<string>(dynamicTexts[0]);
  const [fadeState, setFadeState] = useState(true);
  const [borderWidth, setBorderWidth] = useState(
    dynamicTexts[0].length * 12 
  );

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (event: any) => {
      const { clientX, clientY } = event;
      const width = window.innerWidth;
      const height = window.innerHeight;

      gsap.to(container, {
        x: -(clientX - width / 2),
        y: -(clientY - height / 2),
        ease: "power2.out",
        duration: 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const generateRandomPositions = () => {
      const newPositions: Position[] = [];

      const isOverlapping = (newPos: Position) => {
        return newPositions.some((pos) => {
          const topDiff = Math.abs(
            parseFloat(newPos.top) - parseFloat(pos.top)
          );
          const leftDiff = Math.abs(
            parseFloat(newPos.left) - parseFloat(pos.left)
          );
          return topDiff < 20 && leftDiff < 20; 
        });
      };

      ProjectData.forEach(() => {
        let newPos;
        do {
          const top = Math.random() * (75 - 0) + "%";
          const left = Math.random() * (75 - 0) + "%";
          newPos = { top, left };
        } while (isOverlapping(newPos));

        newPositions.push(newPos);
      });

      setPositions(newPositions);
    };

    generateRandomPositions();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false); 
      setTimeout(() => {
        setCurrentText((prevText) => {
          const currentIndex = dynamicTexts.indexOf(prevText);
          const nextIndex = (currentIndex + 1) % dynamicTexts.length;
          setBorderWidth(dynamicTexts[nextIndex].length * 12); 
          return dynamicTexts[nextIndex];
        });
        setFadeState(true); 
      }, 500); 
    }, 2500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen relative flex items-center justify-center overflow-hidden ">
      <div className="inset-0 flex flex-col gap-y-5 items-center justify-center w-auto h-auto z-10">
        <h1 className="text-[9rem] leading-tight font-extrabold text-white text-center">
          Bring your <br /> Brand to Life
        </h1>
        <p className="text-[1rem] text-center text-white font-light flex flex-row gap-x-3 items-center justify-center">
          A Studio for{" "}
          <span
            className="border rounded-lg inline-block overflow-hidden"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px 2px", 
              width: `calc(${borderWidth}px + 4px)`,
              transition: "width 1s ease-in-out",
            }}
          >
            <span
              key={currentText}
              className={`inline-block transition-opacity duration-500 ease-in-out ${
                fadeState ? "opacity-100" : "opacity-0"
              }`}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {currentText}
            </span>
          </span>
        </p>
      </div>

      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center flex-wrap absolute top-0 left-0 overflow-hidden box-border"
      >
        {ProjectData.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: positions[index]?.top,
                left: positions[index]?.left,
              }}
              className="transition-all hover:scale-110 hover:z-10 hover:border-4 hover:border-white"
            >
              <Link href={item.href}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={0}
                  style={{
                    transition: "border 0.1s ease-in-out",
                  }}
                  className="object-cover border-2 border-transparent hover:border-4 hover:border-white transition-all duration-100 ease-in-out"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeHero;
