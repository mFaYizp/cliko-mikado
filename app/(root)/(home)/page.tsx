"use client";
import ContactForm from '@/components/Home/contactForm'
import HomeAbout from '@/components/Home/HomeAbout'
import HomeHero from '@/components/Home/HomeHero'
import ImageScroll from '@/components/Home/ImageScroll'
import PortfolioSection from '@/components/Home/Portfolio'
import Services from '@/components/Home/Services'
import StackingImages from '@/components/Home/StackingImages'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Preloader visible for 1 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full bg-[#101010]">
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <h1 className="text-4xl font-bold text-white animate-pulse">cliko</h1>
        </div>
      ) : (
        <>
          <HomeHero />
          <HomeAbout />
          <ImageScroll />
          <Services />
          <PortfolioSection />
          <StackingImages />
          <ContactForm />
        </>
      )}
    </main>
  );
};

export default Home;
