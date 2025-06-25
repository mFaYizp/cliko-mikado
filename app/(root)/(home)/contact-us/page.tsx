import ContactPage from '@/components/Contact/ContactUs'
import Hero from '@/components/ui/Hero'
import React from 'react'

const AboutUs = () => {
  return (
    <main className="w-full bg-[#101010]">
        <Hero title="Contact Us" subtitle='Reach Out to Us'/>
        <ContactPage />
    </main>
  )
}

export default AboutUs
