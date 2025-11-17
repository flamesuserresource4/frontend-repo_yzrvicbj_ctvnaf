import React from 'react'
import { MessageCircle, Phone, Mail } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F1E45]">Get in touch</h2>
            <p className="mt-2 text-gray-600">We’re here to help 24×7. Book services, order medicines, or ask a health expert.</p>

            <div className="mt-6 space-y-3">
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-400 text-[#0F1E45] font-semibold hover:bg-emerald-300 transition">
                <MessageCircle size={18} /> WhatsApp
              </a>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={18} /> <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail size={18} /> <span>support@vitoxyz.com</span>
              </div>
            </div>
          </div>

          <form className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/70">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 w-full rounded-xl border-gray-300 focus:ring-[#006D77] focus:border-[#006D77]" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" className="mt-1 w-full rounded-xl border-gray-300 focus:ring-[#006D77] focus:border-[#006D77]" placeholder="Contact number" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border-gray-300 focus:ring-[#006D77] focus:border-[#006D77]" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-xl border-gray-300 focus:ring-[#006D77] focus:border-[#006D77]" placeholder="Tell us what you need"></textarea>
              </div>
              <div className="sm:col-span-2">
                <button type="button" className="w-full px-6 py-3 rounded-xl bg-[#0F1E45] text-white font-semibold hover:bg-[#12265a] transition">Send message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
