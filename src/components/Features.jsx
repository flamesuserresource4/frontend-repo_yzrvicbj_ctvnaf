import React from 'react'
import { ShieldCheck, Clock, Bolt, Apple } from 'lucide-react'

const features = [
  { icon: Clock, title: '24×7 Support', desc: 'Always-on assistance for urgent queries and care.' },
  { icon: ShieldCheck, title: 'Certified Staff', desc: 'Licensed nurses and vetted caregivers only.' },
  { icon: Bolt, title: 'Fast Delivery', desc: 'Medicines delivered in hours, not days.' },
  { icon: Apple, title: 'Personalized Diet', desc: 'Tailored nutrition designed by clinical experts.' }
]

function Features() {
  return (
    <section id="features" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F1E45]">Why choose Vitoxyz</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">We combine medical-grade quality with the warmth of home care.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6 bg-white shadow-sm border border-gray-200/70">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#006D77]/10 text-[#006D77]">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#0F1E45]">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
