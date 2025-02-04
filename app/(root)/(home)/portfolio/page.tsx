import PortfolioGrid from '@/components/Portfolio/PortfolioGrid';
import Hero from '@/components/ui/Hero';
import React from 'react'

const Portfolio = () => {
  return (
    <main className="w-full bg-[#101010]">
        <Hero title="Portfolio" />
        <PortfolioGrid />
    </main>
  )
}

export default Portfolio;