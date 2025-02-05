"use client";
import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

type Props = {};

const data = [
  {
    title: "Client",
    description: "Themetorium",
  },
  {
    title: "Year",
    description: "2024",
  },
  {
    title: "Role",
    description: "Branding, UI Design",
  },
  {
    title: "Website",
    description: "Visit site",
  },
];

const InnerPageHero = (props: Props) => {
  return (
    <ParallaxProvider>
      <section className="w-full h-svh relative overflow-hidden">
        <ParallaxBanner
          layers={[
            {
              image:
                "https://mikado-products.blr1.cdn.digitaloceanspaces.com/mikado-revamp/case-study/Headers/OS-BANNER.webp",
              speed: -10,
            },
          ]}
          className="w-full h-full flex items-center justify-center bg-cover bg-center"
        >
          <div className="absolute container w-full h-full flex flex-col lg:flex-row items-center justify-center gap-y-10 gap-x-10">
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-y-2">
              <span className="text-white text-sm font-medium">Creative</span>
              <h1 className="text-white text-5xl md:text-7xl font-bold">
                Smithy
              </h1>
              <span className="text-white text-xl md:text-2xl font-medium">
                Creative
              </span>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-end justify-center">
              <div className="w-full lg:w-1/2  flex flex-col md:flex-row lg:flex-col items-start justify-center md:justify-between lg:justify-center gap-x-4 gap-y-4">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-y-1"
                  >
                    <span className="text-white text-lg sm:text-xl font-light opacity-70">
                      {item.title}
                    </span>
                    <span className="text-white text-lg sm:text-xl font-">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ParallaxBanner>
      </section>
    </ParallaxProvider>
  );
};

export default InnerPageHero;
