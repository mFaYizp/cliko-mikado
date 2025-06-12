"use client";
import CaseStudyHero from "@/components/ui/portfolioHero";
import React from "react";


type Props = {};

const InnerPageHero = (props: Props) => {
  return (
    <CaseStudyHero

    bgImg="https://mikado-products.blr1.cdn.digitaloceanspaces.com/cliko/portfolio/New.jpg"
    title="Picture Perfect Product"
    industry="Beverages"
    service="Product Photography"
   
  />
  );
};

export default InnerPageHero;
