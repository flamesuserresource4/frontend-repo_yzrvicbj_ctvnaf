import React from 'react'
import { CalendarCheck, CheckCircle2, Truck, HeartHandshake } from 'lucide-react'

const steps = [
  { icon: CalendarCheck, title: 'Book', desc: 'Choose your service and schedule a slot online or via WhatsApp.' },
  { icon: CheckCircle2, title: 'Confirm', desc: 'We verify prescriptions and match you with certified staff.' },
  { icon: Truck, title: 'Deliver/Arrive', desc: 'Medicines delivered fast or staff arrives at your home on time.' },
  { icon: HeartHandshake, title: 'Follow-up', desc: 'Post-service check-ins and diet guidance to keep you on track.' }
]

function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F1E45]">How it works</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Simple, transparent steps from booking to follow-up care.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6 bg-white shadow-sm border border-gray-200/70">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0F1E45]/10 text-[#0F1E45]">
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

export default HowItWorks
