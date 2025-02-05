import React from "react";
import PortfolioData from "./portfolioData";
import Image from "next/image";

const PortfolioTwo = () => {
  return (
    <section className="w-full h-full py-20">
      <div className="w-auto mx-5 md:mx-10 lg:mx-20">
        <div className="hidden md:flex flex-col gap-20">
          {/* Group items in sets of 3 */}
          {Array.from({ length: Math.ceil(PortfolioData.length / 3) }).map(
            (_, groupIndex) => (
              <div key={groupIndex} className="flex flex-col gap-20">
                {/* First row - Single item */}
                {PortfolioData[groupIndex * 3] && (
                  <div className="w-full flex justify-center">
                    <div className="w-full overflow-hidden rounded-lg h-[400px] xl:h-[600px] relative group">
                      <Image
                        src={PortfolioData[groupIndex * 3].image}
                        alt={PortfolioData[groupIndex * 3].title}
                        width={1200}
                        height={800}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-[80%] left-10 w-full h-full text-white">
                        <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                          {PortfolioData[groupIndex * 3].title}
                        </h3>
                        <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                          {PortfolioData[groupIndex * 3].type}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Second row - Two items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[1, 2].map((offset) => {
                    const item = PortfolioData[groupIndex * 3 + offset];
                    if (!item) return null;

                    return (
                      <div
                        key={item.id}
                        className="w-full h-[300px] xl:h-[400px] relative group overflow-hidden rounded-lg"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={800}
                          height={800}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-[75%] left-10 w-full h-full text-white">
                          <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                            {item.title}
                          </h3>
                          <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                            {item.type}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex flex-col gap-20 md:hidden">
          {PortfolioData.map((item) => (
            <div
              key={item.id}
              className="w-full h-auto relative group overflow-hidden rounded-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={800}
              />
              <div className="absolute top-[75%] left-10 w-full h-full text-white">
                <h3 className="text-2xl font-bold transform transition-transform duration-300 group-hover:-translate-y-2">
                  {item.title}
                </h3>
                <p className="text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {item.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTwo;
