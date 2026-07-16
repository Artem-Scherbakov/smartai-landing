import React from 'react'
import { useLang } from '../i18n.jsx'
import { FaTelegramPlane, FaWhatsapp, FaGlobe } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'

export default function Architecture() {
  const { t } = useLang()

  return (
    <section id="architecture" className="border-b border-ink-700 bg-ink-950 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-20 relative">
        <p className="timestamp-divider mb-4 relative z-10">{t.architecture_eyebrow}</p>
        <h2 className="max-w-2xl font-mono text-2xl font-semibold text-paper sm:text-3xl relative z-10">{t.architecture_title}</h2>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10">
          
          {/* Customers & Channels */}
          <div className="w-full md:w-1/4 flex flex-col gap-4">
            <div className="rounded-xl border border-ink-700 bg-ink-900 p-4 text-center">
              <span className="font-mono text-sm font-semibold text-paper block mb-4">{t.architecture_channels}</span>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col items-center justify-center gap-1 rounded bg-ink-800 p-2 text-mist">
                  <FaTelegramPlane className="text-xl" />
                  <span className="text-[10px] font-mono">Telegram</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 rounded bg-ink-800 p-2 text-mist">
                  <SiZalo className="text-xl" />
                  <span className="text-[10px] font-mono">Zalo</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 rounded bg-ink-800 p-2 text-mist">
                  <FaWhatsapp className="text-xl" />
                  <span className="text-[10px] font-mono">WhatsApp</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 rounded bg-ink-800 p-2 text-mist">
                  <FaGlobe className="text-xl" />
                  <span className="text-[10px] font-mono">Website</span>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Line 1 */}
          <div className="flex items-center justify-center md:w-[10%]">
            <svg className="hidden md:block w-full h-8" viewBox="0 0 100 32" preserveAspectRatio="none">
              <path d="M0,16 L100,16" stroke="#2A3844" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              <circle cx="50" cy="16" r="3" fill="#00D4FF" className="animate-ping" />
            </svg>
            <svg className="md:hidden w-8 h-12" viewBox="0 0 32 100" preserveAspectRatio="none">
              <path d="M16,0 L16,100" stroke="#2A3844" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              <circle cx="16" cy="50" r="3" fill="#00D4FF" className="animate-ping" />
            </svg>
          </div>

          {/* SmartAI Platform Core */}
          <div className="w-full md:w-1/3 z-20">
            <div className="relative rounded-2xl border border-signal/50 bg-ink-900 p-6 shadow-[0_0_30px_rgba(0,212,255,0.15)] text-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-signal px-3 py-0.5 rounded-full text-[10px] font-mono font-bold text-ink-950 uppercase tracking-wider">
                SmartAI Platform
              </div>
              
              <div className="mt-4 flex flex-col items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 40 40" fill="none" className="mb-4">
                  <defs>
                    <linearGradient id="archGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00D4FF" />
                      <stop offset="1" stopColor="#0099FF" />
                    </linearGradient>
                  </defs>
                  <rect x="1" y="1" width="38" height="38" rx="11" fill="#0F1621" stroke="url(#archGrad)" strokeWidth="2" />
                  <path d="M20 8c-7.2 0-13 5.2-13 11.6 0 3.6 1.9 6.8 4.9 8.9-.2 1.5-.9 3.4-2.3 4.8 2.6 0 5-1 6.8-2.3 1.1.3 2.3.5 3.6.5 7.2 0 13-5.2 13-11.9S27.2 8 20 8Z" fill="none" stroke="url(#archGrad)" strokeWidth="2.2" />
                  <text x="20" y="24" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontWeight="700" fontSize="11" fill="#E6EAF2">AI</text>
                </svg>
                <p className="text-sm text-mist leading-relaxed">{t.architecture_core_desc}</p>
              </div>
            </div>
          </div>

          {/* Connection Line 2 */}
          <div className="flex items-center justify-center md:w-[10%]">
            <svg className="hidden md:block w-full h-8" viewBox="0 0 100 32" preserveAspectRatio="none">
              <path d="M0,16 L100,16" stroke="#2A3844" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              <circle cx="50" cy="16" r="3" fill="#00D4FF" className="animate-ping" />
            </svg>
            <svg className="md:hidden w-8 h-12" viewBox="0 0 32 100" preserveAspectRatio="none">
              <path d="M16,0 L16,100" stroke="#2A3844" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              <circle cx="16" cy="50" r="3" fill="#00D4FF" className="animate-ping" />
            </svg>
          </div>

          {/* Integrations & Outcomes */}
          <div className="w-full md:w-1/4">
            <div className="rounded-xl border border-ink-700 bg-ink-900 p-4">
              <span className="font-mono text-sm font-semibold text-paper block mb-4 text-center">Business Actions</span>
              <div className="flex flex-col gap-2">
                {t.architecture_actions.map((item) => (
                  <div key={item} className="rounded bg-ink-800 px-3 py-2 text-xs font-mono text-mist flex items-center gap-2">
                    <span className="text-signal">•</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-[10%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-signal blur-[120px]" />
      </div>
    </section>
  )
}
