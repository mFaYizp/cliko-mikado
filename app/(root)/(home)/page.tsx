import ContactForm from '@/components/Home/contactForm'
import HomeAbout from '@/components/Home/HomeAbout'
import HomeHero from '@/components/Home/HomeHero'
import ImageScroll from '@/components/Home/ImageScroll'
import PortfolioSection from '@/components/Home/Portfolio'
import Services from '@/components/Home/Services'
import StackingImages from '@/components/Home/StackingImages'
import ClikoTextmotion from '@/components/ui/clikoTextmotion'
import React from 'react'

const Home = () => {
  return (
    <main className="w-full bg-[#101010]">
      <HomeHero />
      <HomeAbout />
      <ImageScroll />
      <Services />
      <PortfolioSection/>
      <StackingImages />
      <ContactForm />
    </main>
  )
}

export default Home
