import React from 'react'
import { Pill, Stethoscope, Salad, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Pill,
    title: 'Pharmacy Delivery',
    desc: 'Order prescription and OTC medicines with verified batches delivered in under 2 hours.',
    cta: 'Order now'
  },
  {
    icon: Stethoscope,
    title: 'Home Nursing & Care Staff',
    desc: 'Certified nurses and trained caregivers for post-op care, elder care, and at-home procedures.',
    cta: 'Book staff'
  },
  {
    icon: Salad,
    title: 'Diet & Nutrition Plans',
    desc: 'Personalized nutrition programs designed by clinical dietitians for your health goals.',
    cta: 'Get plan'
  }
]

function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F1E45]">Everything you need, at home</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Three essential services crafted for home comfort — reliable, professional, and fast.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, cta }) => (
            <div key={title} className="group rounded-2xl bg-white/70 backdrop-blur border border-gray-200/70 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#006D77]/10 text-[#006D77]">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0F1E45]">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-[#006D77] font-medium">
                {cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
