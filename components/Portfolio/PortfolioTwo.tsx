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
          {Array.from({ length: Math.ceil(images.length / 8) }).map(
            (_, groupIndex) => {
              const baseIndex = groupIndex * 8;
              return (
                <div key={groupIndex} className="flex flex-col gap-20">
                  {/* First row - Two items */}
                  {images[baseIndex] || images[baseIndex + 1] ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {[0, 1].map((offset) => {
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
                  ) : null}
                  {/* Second row - Three items */}
                  {images[baseIndex + 2] ||
                  images[baseIndex + 3] ||
                  images[baseIndex + 4] ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                      {[2, 3, 4].map((offset) => {
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
                              width={600}
                              height={600}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        );
                      })}
                    </div>
                  ) : null}

                  {/* Third row - Two items */}
                  {images[baseIndex + 5] || images[baseIndex + 6] ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {[5, 6].map((offset) => {
                        const item = images[baseIndex + offset];
                        if (!item) return null;

                        return (
                          <div
                            key={item}
                            className="w-full h-full relative overflow-hidden rounded-lg"
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
                  ) : null}
                  {images[baseIndex + 7] ? (
                    <div className="grid grid-cols-1 gap-10">
                      {[7].map((offset) => {
                        const item = images[baseIndex + offset];
                        if (!item) return null;

                        return (
                          <div
                            key={item}
                            className="w-full h-full relative overflow-hidden rounded-lg"
                          >
                            <Image
                              src={item}
                              alt={"image"}
                              width={1200}
                              height={1200}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            }
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
