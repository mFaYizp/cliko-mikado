import React from "react";

type Props = {
  title: string;
};

const Hero = ({ title }: Props) => {
  return (
    <section className="w-full h-svh flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
        <h1
          className="text-[3.6rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] leading-tight font-extrabold text-white text-center" >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
