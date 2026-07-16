import React from 'react'
import { useLang } from '../i18n.jsx'

import { FaRobot, FaCalendarCheck, FaShoppingCart, FaUserFriends, FaDatabase, FaChartLine, FaLanguage, FaStore, FaTelegramPlane, FaWhatsapp, FaGlobe } from 'react-icons/fa'
import { SiGooglesheets, SiZalo } from 'react-icons/si'

export default function Solutions() {
  const { t } = useLang()

  const icons = [
    <FaRobot className="text-xl" />,
    <FaCalendarCheck className="text-xl" />,
    <FaShoppingCart className="text-xl" />,
    <FaUserFriends className="text-xl" />,
    <FaDatabase className="text-xl" />,
    <SiGooglesheets className="text-xl" />,
    <FaChartLine className="text-xl" />,
    <FaLanguage className="text-xl" />,
    <FaStore className="text-xl" />,
    <FaTelegramPlane className="text-xl" />,
    <SiZalo className="text-xl" />,
    <FaWhatsapp className="text-xl" />,
    <FaGlobe className="text-xl" />
  ]

  return (
    <section id="solutions" className="border-b border-ink-700">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="timestamp-divider mb-4">{t.solutions_eyebrow}</p>
        <h2 className="max-w-2xl font-mono text-2xl font-semibold text-paper sm:text-3xl">{t.solutions_title}</h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.solutions_items.map((item, i) => (
            <div
              key={item.t}
              className="group rounded-xl border border-ink-700 bg-ink-900 p-5 transition hover:-translate-y-0.5 hover:border-signal/50 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-signal/70 group-hover:text-signal transition-colors">{icons[i]}</span>
                {item.t.includes('WhatsApp') && (
                   <span className="bg-ink-800 text-[9px] uppercase tracking-widest text-mist px-2 py-0.5 rounded-full border border-ink-600">Coming Soon</span>
                )}
              </div>
              <h3 className="mt-auto font-mono text-sm font-semibold text-paper group-hover:text-signal">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
