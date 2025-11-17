import React from 'react'

function About() {
  return (
    <section id="about" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F1E45]">About Vitoxyz</h2>
            <p className="mt-4 text-gray-600">Vitoxyz was founded to bring hospital-grade care to every home with compassion and convenience. We blend medical expertise with lifestyle-friendly guidance.</p>
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl bg-white border border-gray-200/70 shadow-sm">
                <p className="font-semibold text-[#0F1E45]">Our Mission</p>
                <p className="text-gray-600">Enable healthier lives at home through trusted care, fast access to medicines, and science-backed nutrition.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-200/70 shadow-sm">
                <p className="font-semibold text-[#0F1E45]">Why choose us</p>
                <ul className="mt-2 list-disc pl-5 text-gray-600 space-y-1">
                  <li>Certified nurses and verified pharmacy partners</li>
                  <li>Transparent pricing and instant booking</li>
                  <li>Personalized diet programs that fit real life</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop" alt="Vitoxyz care" className="rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
