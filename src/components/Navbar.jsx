import React from 'react'
import { Menu, Phone, MessageCircle, ShoppingBag } from 'lucide-react'
import Logo from './Logo'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/15 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <Logo variant="dark" />

            <nav className="hidden md:flex items-center gap-8 text-white/80">
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#how" className="hover:text-white transition">How it works</a>
              <a href="#features" className="hover:text-white transition">Why us</a>
              <a href="#testimonials" className="hover:text-white transition">Stories</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#order" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
                <ShoppingBag size={18} /> Order Medicines
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400 text-[#0F1E45] font-semibold hover:bg-emerald-300 transition">
                <Phone size={18} /> Book a Service
              </a>
            </div>

            <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white border border-white/20">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
