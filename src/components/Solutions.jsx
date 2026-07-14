import React from 'react'
import { useLang } from '../i18n.jsx'

export default function Solutions() {
  const { t } = useLang()

  return (
    <section id="solutions" className="border-b border-ink-700">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="timestamp-divider mb-4">{t.solutions_eyebrow}</p>
        <h2 className="max-w-2xl font-mono text-2xl font-semibold text-paper sm:text-3xl">{t.solutions_title}</h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.solutions_items.map((item, i) => (
            <div
              key={item.t}
              className="group rounded-xl border border-ink-700 bg-ink-900 p-5 transition hover:-translate-y-0.5 hover:border-signal/50"
            >
              <span className="font-mono text-xs text-mist">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-mono text-sm font-semibold text-paper group-hover:text-signal">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
