"use client";
import React from "react";
import { Marquee } from "./marquee";

const ClikoTextMotion = () => {
  const textLines = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    reverse: index % 2 === 0,
    speed: index % 2 === 0 ? 20 : 10
  }));

  return (
    <section className="w-full h-svh relative right-0 flex justify-center items-center overflow-hidden">
      <div className="w-[120%] h-full absolute flex flex-col justify-evenly -rotate-12">
        {textLines.map(({ id, reverse, speed }) => (
          <div key={id} className="w-full flex-none h-[140px] overflow-hidden">
            <Marquee
              reverse={reverse}
              className={`[--duration:20s]`}
              pauseOnHover={false}
            >
              <div className="mx-4">
                <svg
                  width="1450"
                  height="140"
                  className="shrink-0"
                  style={{ opacity: 0.9 }}
                >
                  <text
                    x="0"
                    y="50%"
                    textAnchor="start"
                    dominantBaseline="middle"
                    className="font-extrabold select-none"
                    stroke="white"
                    strokeWidth={1}
                    vectorEffect="non-scaling-stroke"
                    shapeRendering="geometricPrecision"
                    paintOrder="stroke fill"
                    strokeLinejoin="bevel"
                    strokeLinecap="butt"
                    fill="#101010"
                    fontSize="140px"
                  >
                    CLIKO PHOTOGRAPHY
                  </text>
                </svg>
              </div>
            </Marquee>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClikoTextMotion;
