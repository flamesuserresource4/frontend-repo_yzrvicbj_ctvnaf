import React from 'react'
import { Facebook, Instagram, Linkedin, ShieldCheck } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-[#0F1E45] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <p className="text-2xl font-extrabold">Vitoxyz</p>
            <p className="mt-2 text-white/70">Care • Pharmacy • Nutrition</p>
            <div className="mt-4 inline-flex items-center gap-2 text-white/80">
              <ShieldCheck size={18} /> NABH-aligned protocols
            </div>
          </div>
          <div>
            <p className="font-semibold">Quick links</p>
            <ul className="mt-2 space-y-2 text-white/80">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#how" className="hover:text-white">How it works</a></li>
              <li><a href="#features" className="hover:text-white">Why us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <ul className="mt-2 space-y-2 text-white/80">
              <li>support@vitoxyz.com</li>
              <li>+1 234 567 890</li>
              <li>123 Care Street, Wellness City</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Follow</p>
            <div className="mt-2 flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Facebook size={18} /></a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Instagram size={18} /></a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/60">© {new Date().getFullYear()} Vitoxyz. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
