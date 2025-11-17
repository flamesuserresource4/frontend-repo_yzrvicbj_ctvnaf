import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center" id="hero">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (pointer-events-none so scene is interactive) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1E45]/80 via-[#0F1E45]/70 to-[#0F1E45]/30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 text-white py-24">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm">
            Trusted home healthcare, pharmacy & nutrition
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Healthcare, medicines, diet plans — at your doorstep.
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl">
            Vitoxyz brings hospital-grade care, fast pharmacy delivery, and personalized nutrition coaching to your home. Safe. Certified. Caring.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-emerald-400 text-[#0F1E45] font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition">
              Book a Service
            </a>
            <a href="#order" className="px-6 py-3 rounded-xl bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20 transition">
              Order Medicines
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ['24×7 support', 'Round-the-clock assistance'],
              ['Certified staff', 'Vetted nurses & caregivers'],
              ['Fast delivery', '90-min average']
            ].map(([title, sub]) => (
              <div key={title} className="p-4 rounded-xl bg-white/10 border border-white/15">
                <p className="text-sm text-white/70">{sub}</p>
                <p className="text-white font-semibold">{title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5" />
      </div>
    </section>
  )
}

export default Hero
