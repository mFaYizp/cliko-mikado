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
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/charcol.png",
    href: "",
  },
  {
    name: "Designstripe",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/chicken-3.jpg",
    href: "",
  },
  {
    name: "Fintek",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/food%20photography.png",
    href: "",
  },
  {
    name: "Mikado",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/perfume.png",
    href: "",
  },
  {
    name: "Space Milk",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/short%20story.png",
    href: "",
  },
  {
    name: "Fintek",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/zetwork.png",
    href: "",
  },
  {
    name: "Mikado",
    image:
      "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/zetwork2.png",
    href: "",
  },
];

type Position = {
  top: string;
  left: string;
};

const ProjectExplore = (props: Props) => {
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
        return newPositions.some(pos => {
          const topDiff = Math.abs(parseFloat(newPos.top) - parseFloat(pos.top));
          const leftDiff = Math.abs(parseFloat(newPos.left) - parseFloat(pos.left));
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
    <section className="w-screen h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-5 left-20 w-20 h-full">
        <Image src={'/logo.png'} alt="text" width={750} height={0}/>
      </div>
        <div className="inset-0 flex flex-col gap-y-5 items-center justify-center w-[600px] h-auto z-10">
          <Image src={'/text.png'} alt="text" width={750} height={0} className="bg-contain"/>
          {/* <h1 className="text-6xl font-bold">Moments in the Making.</h1>
          <hr className="w-[700px]" />
          <p className="text-3xl text-center">Launching Soon!</p> */}
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

export default ProjectExplore;
