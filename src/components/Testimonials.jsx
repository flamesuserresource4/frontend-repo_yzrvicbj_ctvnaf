import React from 'react'

const testimonials = [
  {
    name: 'Aisha K.',
    role: 'New mom',
    quote: 'Their home nurse was an absolute blessing after my C-section. Gentle, punctual, and professional.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Rohit S.',
    role: 'Busy professional',
    quote: 'Medicine delivery is super fast and reliable. I trust them with my parents’ prescriptions.',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Maya P.',
    role: 'Fitness enthusiast',
    quote: 'The diet plan helped me fix my energy and gut health. Clear guidance with tasty meals!',
    img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop'
  }
]

function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F1E45]">Stories from our community</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Real experiences from families, patients, and health seekers.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white shadow-sm border border-gray-200/70 overflow-hidden">
              <img src={t.img} alt={t.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="text-gray-700 italic">“{t.quote}”</p>
                <div className="mt-4">
                  <p className="font-semibold text-[#0F1E45]">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
