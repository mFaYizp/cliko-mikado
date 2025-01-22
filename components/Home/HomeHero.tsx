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

const HomeHero = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Position[]>([]);

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
          return topDiff < 20 && leftDiff < 20; // Adjust the value as needed
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
  return (
    <section className="w-full h-lvh relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-5 left-20 w-20 h-full">
        <Image src={"/logo.png"} alt="text" width={750} height={0} />
      </div>
      <div className="inset-0 flex flex-col gap-y-5 items-center justify-center w-auto h-auto z-10">
        <h1 className="text-[11.25rem] leading-tight font-extrabold text-white text-center">
          {" "}
          Bring your <br /> Brand to Life 
        </h1>
        <p className="text-[1.75rem] text-center text-white font-light flex flex-row gap-x-5 items-center justify-center">
          A Studio for 
          <span className="border rounded-lg p-2 ">Architectural</span>
        </p>
      </div>
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center flex-wrap absolute top-20 left-0  overflow-hidden box-border"
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
              className="transition-all hover:scale-110 hover:z-10"
            >
              <Link href={item.href}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={0}
                  className="object-cover"
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
