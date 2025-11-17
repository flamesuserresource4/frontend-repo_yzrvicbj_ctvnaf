import React from 'react'

function Logo({ variant = 'dark', className = '' }) {
  const isDark = variant === 'dark'
  const primary = '#006D77'
  const accent = '#3EB489'

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="Vitoxyz logo">
      <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id="vitoxyzGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={primary} />
            <stop offset="100%" stopColor={accent} />
          </linearGradient>
        </defs>
        {/* Minimal V-shaped medical symbol with soft curves */}
        <path d="M10 16C10 13.7909 11.7909 12 14 12H20.5C22.1523 12 23.6461 13.0139 24.2426 14.5607L31.7574 34.4393C32.3539 35.9861 33.8477 37 35.5 37H38.5C40.1523 37 41.6461 35.9861 42.2426 34.4393L50 14C50.5965 12.4532 52.0903 11.4393 53.7426 11.4393H58C60.2091 11.4393 62 13.2302 62 15.4393C62 16.2981 61.7823 17.1421 61.3675 17.8875L45.5 46.5C43.9197 49.3632 41.0184 51.2 37.8178 51.2H26.1822C22.9816 51.2 20.0803 49.3632 18.5 46.5L10.6325 32.8875C10.2177 32.1421 10 31.2981 10 30.4393V16Z" stroke="url(#vitoxyzGrad)" strokeWidth="3.2" fill="rgba(0,0,0,0)" strokeLinecap="round" strokeLinejoin="round" />
        {/* subtle heart cross inside */}
        <path d="M28 24h4m2 0h4M34 20v8" stroke="url(#vitoxyzGrad)" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="leading-tight">
        <span className={`block text-xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#0F1E45]'}`}>Vitoxyz</span>
        <span className={`block text-[12px] tracking-wide ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Care • Pharmacy • Nutrition</span>
      </div>
    </div>
  )
}

export default Logo
