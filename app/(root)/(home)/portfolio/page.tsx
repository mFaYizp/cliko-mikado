import PortfolioGrid from '@/components/Portfolio/PortfolioGrid';
import Hero from '@/components/ui/Hero';
import React from 'react'

const PortfolioGridPage = () => {
  return (
    <main className="w-full bg-[#101010]">
        <Hero title="Portfolio" subtitle='Selected Works'/>
        <PortfolioGrid />
    </main>
  )
}

export default PortfolioGridPage;