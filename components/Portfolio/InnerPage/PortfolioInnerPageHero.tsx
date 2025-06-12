import React from "react";
import RevealEffect from "@/components/ui/RevealEffect";


type Props = {
  bgImg?: string;
  bgPosition?: string;
  title: string;
  industry?: string;
  service?: string;

  dark?: boolean;
};

const PortfolioInnerPageHero = ({
  bgImg,
  bgPosition,
  title,
  industry,
  service,

  dark = false,
}: Props) => {
  return (
    <section className="relative w-full h-full">
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
        className={`w-full h-svh bg-cover bg-no-repeat bg-center`}
      >
        <div className="w-full h-full container pt-[80px]">
          <div className="w-full h-full flex flex-col items-start justify-center text-[#f2f2f2] md:gap-y-16 xl:gap-y-40 5xl:gap-y-36">
            <RevealEffect>
              <h1
                className={`font-light !leading-[1.1] md:w-full tb:w-[70%] lg:w-[60%] xl:w-[70%] 5xl:w-[80%] md:flex md:flex-col md:text-[4rem] tb:text-[4rem] xl:text-[5rem] 5xl:text-[6rem] ${
                  dark ? "text-[#1c1c1c]" : "text-[#f2f2f2]"
                }`}
              >
                {title.split("<br>").map((line, index) => (
                  <span key={index}>{line} </span>
                ))}
              </h1>
            </RevealEffect>
            <div className="xxs:w-full md:w-3/4 tb:w-2/3 lg:w-3/4 xl:w-[48%] 5xl:w-2/3">
              <RevealEffect>
                <div className="w-full h-full flex flex-col items-start justify-center md:gap-y-5">
                  {industry && (
                    <p className="w-full flex justify-between items-center">
                      <span
                        className={`font-normal xl:w-[40%] 5xl:w-1/3 xl:text-2xl 5xl:text-3xl ${
                          dark ? "text-[#1c1c1c]" : "text-white"
                        }`}
                      >
                        Industry
                      </span>{" "}
                      <span
                        className={`xxs:w-[55%] xl:w-[60%] 5xl:w-2/3 xl:text-2xl 5xl:text-3xl ${
                          dark ? "text-[#1c1c1c]" : "text-light"
                        }`}
                      >
                        {industry}
                      </span>
                    </p>
                  )}
                  {industry && (
                    <hr
                      className={`w-full ${
                        dark ? "border-[#1c1c1c]" : "border-white"
                      }`}
                    />
                  )}
                  {service && (
                    <p className="w-full flex justify-between">
                      <span
                        className={`font-normal xl:w-[40%] 5xl:w-1/3 md:text-2xl tb:text-xl lg:text-xl xl:text-2xl 5xl:text-3xl ${
                          dark ? "text-[#1c1c1c]" : "text-gray-200"
                        }`}
                      >
                        Type
                      </span>{" "}
                      <span
                        className={`xxs:w-[55%] xl:w-[60%] 5xl:w-2/3 md:text-2xl tb:text-xl lg:text-xl xl:text-2xl 5xl:text-3xl ${
                          dark ? "text-[#1c1c1c]" : "text-light"
                        }`}
                      >
                        {service}
                      </span>
                    </p>
                  )}
                </div>
              </RevealEffect>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioInnerPageHero;
