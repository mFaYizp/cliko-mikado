import AboutStory from '@/components/About/AboutStory'
import ImageCarousel from '@/components/About/ImageCarousal'
import Hero from '@/components/ui/Hero'
import React from 'react'

const AboutUs = () => {
  return (
    <main className="w-full bg-[#101010]">
        <Hero title="About Us" />
        <AboutStory/>
        <ImageCarousel/>
    </main>
  )
}

export default AboutUs