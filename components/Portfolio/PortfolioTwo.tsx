import React from "react";
import PortfolioData from "./portfolioData";
import Image from "next/image";

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  type: string;
  category: string;
}

const PortfolioTwo = ({ images }: { images: string[] }) => {
  return (
    <section className="w-full h-full py-20">
      <div className="w-auto mx-5 md:mx-10 lg:mx-20">
        <div className="hidden md:flex flex-col gap-20">
          {Array.from({ length: Math.ceil(images.length / 10) }).map(
            (_, groupIndex) => (
              <div key={groupIndex} className="flex flex-col gap-20">
                {/* Second row - Two items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[0, 1].map((offset) => {
                    const baseIndex = groupIndex * 10;
                    const item = images[baseIndex + offset];
                    if (!item) return null;

                    return (
                      <div
                        key={item}
                        className="w-full h-full relative group overflow-hidden rounded-lg"
                      >
                        <Image
                          src={item}
                          alt={"image"}
                          width={800}
                          height={800}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Third row - Three items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {[2, 3, 4].map((offset) => {
                    const item = images[groupIndex * 10 + offset];
                    if (!item) return null;

                    return (
                      <div
                        key={item}
                        className="w-full h-full relative group overflow-hidden rounded-lg"
                      >
                        <Image
                          src={item}
                          alt={"image"}
                          width={600}
                          height={600}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Fourth row - Two items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[5, 6].map((offset) => {
                    const item = images[groupIndex * 10 + offset];
                    if (!item) return null;

                    return (
                      <div
                        key={item}
                        className="w-full h-full relative group overflow-hidden rounded-lg"
                      >
                        <Image
                          src={item}
                          alt={"image"}
                          width={600}
                          height={600}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {[7, 8, 9].map((offset) => {
                    const item = images[groupIndex * 10 + offset];
                    if (!item) return null;

                    return (
                      <div
                        key={item}
                        className="w-full h-full relative group overflow-hidden rounded-lg"
                      >
                        <Image
                          src={item}
                          alt={"image"}
                          width={600}
                          height={600}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          )}
        </div>

        {/* Mobile view */}
        <div className="flex flex-col gap-20 md:hidden">
          {images.map((item) => (
            <div
              key={item}
              className="w-full h-auto relative group overflow-hidden rounded-lg"
            >
              <Image
                src={item}
                alt={"image"}
                width={800}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTwo;
