import InnerPageAbout from "@/components/Portfolio/InnerPage/InnerPageAbout";
import PortfolioInnerPageHero from "@/components/Portfolio/InnerPage/PortfolioInnerPageHero";

import PortfolioTwo from "@/components/Portfolio/PortfolioTwo";
import PortfolioData from "@/components/Portfolio/portfolioData";
import React from "react";
import { notFound } from "next/navigation";

const PortfolioInnerPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const portfolioData = PortfolioData.find((item) => item.slug === slug);

  if (!portfolioData) {
    notFound();
  }
  const { about, images } = portfolioData;
  return (
    <main className="w-full h-full">
      <PortfolioInnerPageHero
        bgImg={portfolioData.heroBg}
        title={portfolioData.title}
        industry={portfolioData.industry}
        service={portfolioData.service}
      />
      {about && (
        <InnerPageAbout
          title={about.title}
          description={about.description}
          src={about.src}
        />
      )}
      {/*<InnerPageMission />   */}
      {images && <PortfolioTwo images={images} />}
    </main>
  );
};

export default PortfolioInnerPage;
