"use client";
import CaseStudyHero from "@/components/ui/portfolioHero";
import React from "react";


type Props = {};

const InnerPageHero = (props: Props) => {
  return (
    <CaseStudyHero
    bgImg="https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/portfolio/Hero%201_3.jpg"
    title="Crafting a Website that Inspires &<br> Empowers"
    industry="Themetorium"
    service="Branding"
  />
  );
};

export default InnerPageHero;
