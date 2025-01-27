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

const categories = [
  "Industrial ",
  "Food",
  "Product",
  "Fashion",
  "360 degree Videography",
  "Catalogue",
  "Unboxing Video",
];

const HomeHero = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const [currentCategory, setCurrentCategory] = useState(0);

  const animateText = (nextIndex: number) => {
    const tl = gsap.timeline();
    
    tl.to(textRef.current, {
      opacity: 0,
      y: -10,
      scale: 0.95,
      duration: 0.4,
      ease: "power3.inOut",
      onComplete: () => {
        setCurrentCategory(nextIndex);
      }
    }).to(textRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "elastic.out(1, 0.8)"
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      mouseX = ((clientX - width / 2) * 0.1);  
      mouseY = ((clientY - height / 2) * 0.1);
    };

    const updatePosition = () => {
      const ease = 0.05;  
      

      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      
      currentX += dx * ease;
      currentY += dy * ease;

      if (container) {
        gsap.set(container, {
          x: -currentX,
          y: -currentY,
        });
      }

      requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const animationFrame = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const generateRandomPositions = () => {
      const newPositions: Position[] = [];
      const minDistance = 350; 
      const viewportPadding = 15; 

      const isOverlapping = (newPos: Position, index: number) => {
        for (let i = 0; i < index; i++) {
          const existingPos = newPositions[i];
          const topDiff = Math.abs(
            parseFloat(newPos.top) - parseFloat(existingPos.top)
          );
          const leftDiff = Math.abs(
            parseFloat(newPos.left) - parseFloat(existingPos.left)
          );
          
          if (topDiff < minDistance && leftDiff < minDistance) {
            return true;
          }
        }
        return false;
      };

      const getValidPosition = (index: number): Position => {
        let attempts = 0;
        let newPos: Position;

        do {
          const region = {
            x: Math.floor(index / 3),
            y: index % 3
          };

          const top = `${viewportPadding + 
            (region.y * (100 - viewportPadding * 2) / 2) + 
            (Math.random() * 20 - 10)}%`;
          
          const left = `${viewportPadding + 
            (region.x * (100 - viewportPadding * 2) / 2) + 
            (Math.random() * 20 - 10)}%`;

          newPos = { top, left };
          attempts++;
        } while (isOverlapping(newPos, index) && attempts < 100);

        return newPos;
      };

      ProjectData.forEach((_, index) => {
        const position = getValidPosition(index);
        newPositions.push(position);
      });

      setPositions(newPositions);
    };

    generateRandomPositions();
  }, []);
  return (
      <section className="w-full h-lvh relative flex items-center justify-center overflow-hidden">
        <div className="inset-0 flex flex-col gap-y-5 items-center justify-center w-auto h-auto z-10">
          <h1 className="text-[11.25rem] leading-tight font-extrabold text-white text-center">
            {" "}
            Bring your <br /> Brand to Life 
          </h1>
          <p className="text-[1.75rem] text-center text-white font-light flex flex-row gap-x-5 items-center justify-center">
            A Studio for 
            <span 
              ref={textRef}
              className="border rounded-lg p-2 transition-all duration-300 text-white cursor-pointer hover:border-opacity-50"
              onMouseEnter={() => {
                const nextIndex = (currentCategory + 1) % categories.length;
                animateText(nextIndex);
              }}
            >
              {categories[currentCategory]}
            </span>
          </p>
        </div>
        <div
          ref={containerRef}
          className="w-full h-full flex items-center justify-center flex-wrap absolute top-0 left-0"
        >
          {ProjectData.map((item, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                top: positions[index]?.top,
                left: positions[index]?.left,
              }}
              className="transition-all duration-500 hover:scale-110 hover:z-10"
            >
              <Link href={item.href}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={280}
                  height={280}
                  className="object-cover rounded-lg"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
  );
};

export default HomeHero;
