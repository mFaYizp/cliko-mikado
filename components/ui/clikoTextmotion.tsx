import React from "react";
import { Marquee } from "./marquee";

const ClikoTextMotion = () => {
  const textLines = Array.from({ length: 4 }, (_, index) => ({
    id: index,
    yOffset: -10 + index * 18,
  }));

  return (
    <section className="w-full h-svh relative">
      <div className="absolute inset-0 -rotate-12">
        {" "}
        {/* Single rotation container */}
        {textLines.map(({ id, yOffset }) => (
          <Marquee
            key={id}
            className="w-full h-auto"
            style={{
              top: `${yOffset}%`,
            }}
          >
            <svg
              width="auto"
              height="120%"
              preserveAspectRatio="none"
              className="w-screen h-full absolut flex "
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
                fontSize="190px"
                style={{
                  fontSizeAdjust: "none",
                  textRendering: "geometricPrecision",
                }}
              >
                CLIKO PHOTOGRAPHY
              </text>
            </svg>
          </Marquee>
        ))}
      </div>
    </section>
  );
};

export default ClikoTextMotion;
