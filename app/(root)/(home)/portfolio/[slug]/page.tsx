import InnerPageAbout from "@/components/Portfolio/InnerPage/InnerPageAbout";
import InnerPageHero from "@/components/Portfolio/InnerPage/InnerPageHero";
import PortfolioTwo from "@/components/Portfolio/PortfolioTwo";
import PortfolioData from "@/components/Portfolio/portfolioData";
import React from "react";

const PortfolioInnerPage = async ({params}: {params: Promise<{slug: string}>}) => {
  const {slug} = await params;
  const portfolioData = PortfolioData.find((item) => item.slug === slug);
  console.log(portfolioData);
  return (
    <main className="w-full h-full">
      <InnerPageHero />
      <InnerPageAbout />
     {/*<InnerPageMission />   */}   
      <PortfolioTwo category="product" />
    </main>
  );
};

export default PortfolioInnerPage;
