import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-[#1A1A1A]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Features />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
