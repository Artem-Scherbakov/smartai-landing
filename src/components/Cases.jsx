import React from 'react'
import { useLang } from '../i18n.jsx'

export default function Cases() {
  const { t } = useLang()
  const emojis = ['🍽', '🏨', '🛍']

  return (
    <section id="cases" className="border-b border-ink-700">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="timestamp-divider mb-4">{t.cases_eyebrow}</p>
        <h2 className="max-w-2xl font-mono text-2xl font-semibold text-paper sm:text-3xl">{t.cases_title}</h2>
        <p className="mt-2 text-sm text-mist">{t.cases_note}</p>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {t.cases_items.map((c, i) => (
            <div key={c.t} className="rounded-xl border border-dashed border-ink-600 bg-ink-900 p-6">
              <div className="mb-4 text-3xl">{emojis[i]}</div>
              <h3 className="mb-2 font-mono text-base font-semibold text-paper">{c.t}</h3>
              <p className="text-sm leading-relaxed text-mist">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
