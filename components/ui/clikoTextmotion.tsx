"use client";
import React, { useEffect, useRef, useState } from "react";
import { Marquee } from "./marquee";
import { motion, useMotionValue } from "framer-motion";
import { useScroll } from "framer-motion";

const ClikoTextMotion = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [widthDifference, setWidthDifference] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      const textWidth = ref.current?.scrollWidth;
      const screenWidth = window.innerWidth;
      if (textWidth) {
        setWidthDifference(textWidth - screenWidth);
      }
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["end end", "start start"],
  });

  const x = useMotionValue(`-${widthDifference}px`);

  scrollYProgress.on("change", (progress) =>
    x.set(progress >= 0.5 ? `-${widthDifference}px` : "0")
  );
  const textLines = Array.from({ length: 4 }, (_, index) => ({
    id: index,
    yOffset: -10 + index * 18,
  }));

  return (
    <section className="w-full h-svh relative overflow-hidden">
      <div className="w-screen h-full absolute flex flex-col inset-0 -rotate-12">
        {" "}
        {/* Single rotation container */}
        {textLines.map(({ id, yOffset }) => (
          <motion.svg
            key={id}
            width="120%"
            height="120%"
            preserveAspectRatio="none"
            className="w-screen h-full absolute flex flex-col "
            style={{
              x,
              transition: "transform 1s linear",
            }}
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="w-full font-extrabold text-center"
              stroke="white"
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
              shapeRendering="geometricPrecision"
              paintOrder="stroke fill"
              strokeLinejoin="bevel"
              strokeLinecap="butt"
              fill="black"
              fontSize="170px"
              style={{
                fontSizeAdjust: "none",
                textRendering: "geometricPrecision",
              }}
            >
              CLIKO PHOTOGRAPHY
            </text>
          </motion.svg>
        ))}
      </div>
    </section>
  );
};

export default ClikoTextMotion;
