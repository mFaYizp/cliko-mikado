import AboutStory from '@/components/About/AboutStory'
import ImageCarousel from '@/components/About/ImageCarousal'
import Hero from '@/components/ui/Hero'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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