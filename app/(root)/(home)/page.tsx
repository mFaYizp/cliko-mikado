import ContactForm from '@/components/Home/contactForm'
import HomeAbout from '@/components/Home/HomeAbout'
import HomeHero from '@/components/Home/HomeHero'
import Services from '@/components/Home/Services'
import StackingImages from '@/components/Home/StackingImages'
import ClikoTextmotion from '@/components/ui/clikoTextmotion'
import React from 'react'

const Home = () => {
  return (
    <main className="w-full">
      <HomeHero />
      <HomeAbout />
      <Services />
      {/* <ClikoTextmotion /> */}
      <StackingImages />
      <ContactForm />

    </main>
  )
}

export default Home
