import React from "react";
import RevealEffect from "../../ui/RevealEffect";
import Image from "next/image";

type Props = {
  img: string;
  title: string;
  industry?: string;
  service?: string;
};

const CaseStudyHeroMobile = ({
  img,
  title,
  industry,
  service,
}: Props) => {
  return (
    <section className="relative w-full h-full">
      <div>
        <div className="w-full h-full container pt-[80px]">
          <div className="w-full h-full flex flex-col items-start justify-center text-[#f2f2f2] xxs:gap-y-10 xs:gap-y-10">
            <Image
              src={img}
              width={1500}
              height={1500}
              alt=""
              className="w-full h-full"
            />
            <RevealEffect>
              <h1
                className={`font-normal flex flex-col !leading-[1.1] w-full text-[2.5rem] text-[#dcdcdc] mt-4`}
              >
                {title.split("<br>").map((line, index) => (
                  <span key={index}>{line}</span>
                ))}
              </h1>
            </RevealEffect>
            <div className="w-full mt-4">
              <RevealEffect>
                <div className="w-full h-full flex flex-col items-start justify-center gap-y-3">
                  {industry && (
                    <p className="w-full flex justify-between items-center">
                      <span
                        className={`font-normal w-[40%] text-[.75rem] text-[#dcdcdc]`}
                      >
                        Industry
                      </span>{" "}
                      <span className={`w-[60%] text-[.85rem] text-[#dcdcdc]`}>
                        {industry}
                      </span>
                    </p>
                  )}
                  {industry && <hr className={`w-full border-[#dcdcdc]`} />}
                  {service && (
                    <p className="w-full flex justify-between">
                      <span
                        className={`font-normal w-[40%] text-[.75rem] text-[#dcdcdc]`}
                      >
                        Service Provided
                      </span>{" "}
                      <span className={`w-[60%] text-[.85rem] text-[#dcdcdc]`}>
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

export default CaseStudyHeroMobile;
