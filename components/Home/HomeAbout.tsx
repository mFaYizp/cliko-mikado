import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const HomeAbout = () => {
  return (
    <section className="w-full h-full">
      <div className="container mx-auto w-full h-full flex flex-row items-center justify-center py-36">
        <div className="w-1/2 h-full">
          <Image
            src={
              "https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/HomePage/2_About/About.webp"
            }
            alt="About"
            width={500}
            height={500}
          />
        </div>
        <div className="w-1/2 !h-full flex flex-col items-start justify-end gap-y-10">
          <p className="text-[#CCCCCC] font-light text-[1.75rem] w-[30ch] text-left">
            At <span className="text-white font-normal">Cliko</span>, we
            specialize in high-quality corporate photography, capturing stunning
            visuals that tell your unique and Brand story. We bring moments to
            life with creativity and precision, helping to elevate your brand
            and create lasting impressions
          </p>
          <Button className="font-medium">
            Studio <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="w-full h-full aspect-video">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          // poster="https://mikado-products.blr1.cdn.digitaloceanspaces.com/mikado-revamp/Service/servicesection/photography.webp"
        >
          <source
            src="https://mikado-products.blr1.cdn.digitaloceanspaces.com/mikado-revamp/Service/servicesection/photography.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HomeAbout;
