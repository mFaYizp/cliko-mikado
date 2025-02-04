import PortfolioGrid from '@/components/Portfolio/PortfolioGrid';
import PortfolioTwo from '@/components/Portfolio/PortfolioTwo';
import Hero from '@/components/ui/Hero';
import React from 'react'

const Portfolio = () => {
  return (
    <main>
        <Hero title="Portfolio" />
        {/* <PortfolioGrid /> */}
        <PortfolioTwo />
    </main>
  )
}

export default Portfolio;