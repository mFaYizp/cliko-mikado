"use client";
import React from "react";
import { motion } from "framer-motion";

const ClikoTextMotion = () => {
  const getSpeed = (index: number) => {
    if (index === 0 || index === 2 || index === 4) {
      return 20;
    }
    return 10;
  };

  const textLines = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    yOffset: index * 50,
    speed: getSpeed(index) 
  }));

  return (
    <section className="w-full h-svh relative overflow-hidden">
      <div className="w-screen h-full absolute flex flex-col inset-0 -rotate-12">
        {textLines.map(({ id, yOffset, speed }) => (
          <div key={id} className="relative" style={{ top: `${yOffset}px` }}>
            <div className="flex relative w-screen">
              <motion.div
                initial={{ x: "0%" }}
                animate={{ x: "-50%" }}
                transition={{
                  duration: speed,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
                className="flex whitespace-nowrap"
              >
                <motion.div className="flex shrink-0">
                  <motion.svg
                    width="100vw"
                    height="160"
                    className="shrink-0"
                    style={{ opacity: 0.5 }}
                  >
                    <text
                      x="0"
                      y="50%"
                      textAnchor="start"
                      dominantBaseline="middle"
                      className="font-extrabold"
                      stroke="white"
                      strokeWidth={1.5}
                      vectorEffect="non-scaling-stroke"
                      shapeRendering="geometricPrecision"
                      paintOrder="stroke fill"        
                      strokeLinejoin="bevel"
                      strokeLinecap="butt"
                      fill="#101010"
                      fontSize="150px"
                    >
                      CLIKO PHOTOGRAPHY  CLIKO PHOTOGRAPHY  CLIKO PHOTOGRAPHY
                    </text>
                  </motion.svg>
                </motion.div>
                <motion.div className="flex shrink-0">
                  <motion.svg
                    width="100vw"
                    height="160"
                    className="shrink-0"
                    style={{ opacity: 0.5 }}  
                  >
                    <text
                      x="0"
                      y="50%"
                      textAnchor="start"
                      dominantBaseline="middle"
                      className="font-extrabold"
                      stroke="white"
                      strokeWidth={1.5}
                      vectorEffect="non-scaling-stroke"
                      shapeRendering="geometricPrecision"
                      paintOrder="stroke fill"
                      strokeLinejoin="bevel"
                      strokeLinecap="butt"
                      fill="#101010"
                      fontSize="150px"
                    >
                      CLIKO PHOTOGRAPHY  CLIKO PHOTOGRAPHY  CLIKO PHOTOGRAPHY
                    </text>
                  </motion.svg>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClikoTextMotion;
