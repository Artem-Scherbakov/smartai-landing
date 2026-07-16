import React from 'react'
import { useLang } from '../i18n.jsx'
import { FaLayerGroup, FaBuilding, FaCloud, FaRocket, FaHandshake, FaServer } from 'react-icons/fa'

export default function Advantages() {
  const { t } = useLang()
  
  const icons = [
    <FaLayerGroup className="text-2xl" />,
    <FaBuilding className="text-2xl" />,
    <FaCloud className="text-2xl" />,
    <FaRocket className="text-2xl" />,
    <FaHandshake className="text-2xl" />,
    <FaServer className="text-2xl" />
  ]

  return (
    <section className="border-b border-ink-700">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="timestamp-divider mb-4">{t.advantages_eyebrow}</p>
        <h2 className="max-w-2xl font-mono text-2xl font-semibold text-paper sm:text-3xl">{t.advantages_title}</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.advantages_items.map((item, i) => (
            <div
              key={item.t}
              className="group relative overflow-hidden rounded-xl border border-ink-700 bg-ink-900 p-6 transition-all hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 transition-opacity group-hover:opacity-10 text-white">
                {icons[i]}
              </div>
              
              <div className="mb-4 text-signal">
                {icons[i]}
              </div>
              <h3 className="mb-3 font-mono text-base font-semibold text-paper">{item.t}</h3>
              <p className="text-sm leading-relaxed text-mist">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
