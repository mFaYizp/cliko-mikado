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

const PortfolioTwo = ({ category }: { category: string }) => {
  const filteredData = PortfolioData.filter(item => item.category === category);

  return (
    <section className="w-full h-full py-20">
      <div className="w-auto mx-5 md:mx-10 lg:mx-20">
        <div className="hidden md:flex flex-col gap-20">
          {Array.from({ length: Math.ceil(filteredData.length / 8) }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex flex-col gap-20">
              {/* Second row - Two items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[1, 2].map((offset) => {
                  const item = filteredData[groupIndex * 6 + offset];
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
                        <h3 className="text-2xl font-bold transition-transform duration-300 group-hover:-translate-y-2">
                          {item.title}
                        </h3>
                        <p className="text-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                          {item.type}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Third row - Three items */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[3, 4, 5].map((offset) => {
                  const item = filteredData[groupIndex * 6 + offset];
                  if (!item) return null;

                  return (
                    <div
                      key={item.id}
                      className="w-full h-[250px] xl:h-[350px] relative group overflow-hidden rounded-lg"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-[75%] left-10 w-full h-full text-white">
                        <h3 className="text-xl font-bold transition-transform duration-300 group-hover:-translate-y-2">
                          {item.title}
                        </h3>
                        <p className="text-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                          {item.type}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Fourth row - Two items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[6, 7].map((offset) => {
                  const item = filteredData[groupIndex * 8 + offset];
                  if (!item) return null;

                  return (
                    <div
                      key={item.id}
                      className="w-full h-[250px] xl:h-[350px] relative group overflow-hidden rounded-lg"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-[75%] left-10 w-full h-full text-white">
                        <h3 className="text-xl font-bold transition-transform duration-300 group-hover:-translate-y-2">
                          {item.title}
                        </h3>
                        <p className="text-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                          {item.type}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view */}
        <div className="flex flex-col gap-20 md:hidden">
          {filteredData.map((item) => (
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
                <h3 className="text-2xl font-bold transition-transform duration-300 group-hover:-translate-y-2">
                  {item.title}
                </h3>
                <p className="text-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
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
