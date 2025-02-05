import InnerPageAbout from "@/components/Portfolio/InnerPage/InnerPageAbout";
import InnerPageHero from "@/components/Portfolio/InnerPage/InnerPageHero";
import InnerPageMission from "@/components/Portfolio/InnerPage/InnerPageMission";
import PortfolioTwo from "@/components/Portfolio/PortfolioTwo";
import React from "react";

const page = () => {
  return (
    <main className="w-full h-full">
      <InnerPageHero />
      <InnerPageAbout />
      <InnerPageMission />
      <PortfolioTwo />
    </main>
  );
};

export default page;
