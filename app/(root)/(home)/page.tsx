import HomeAbout from '@/components/Home/HomeAbout'
import HomeHero from '@/components/Home/HomeHero'
import React from 'react'

const Home = () => {
  return (
    <main className="w-full">
      <HomeHero />
      <HomeAbout />
    </main>
  )
}

export default Home
