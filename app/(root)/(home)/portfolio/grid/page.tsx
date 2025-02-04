import PortfolioGrid from '@/components/Portfolio/PortfolioGrid';
import Hero from '@/components/ui/Hero';
import React from 'react'

const PortfolioGridPage = () => {
  return (
    <main>
        <Hero title="Portfolio" />
        <PortfolioGrid />
    </main>
  )
}

export default PortfolioGridPage;