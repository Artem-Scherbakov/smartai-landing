import React from 'react'
import { useLang } from '../i18n.jsx'

export default function Why() {
  const { t } = useLang()

  return (
    <section id="why" className="border-b border-ink-700 bg-ink-950">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="timestamp-divider mb-4">{t.why_eyebrow}</p>
        <h2 className="max-w-2xl font-mono text-2xl font-semibold text-paper sm:text-3xl">{t.why_title}</h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {t.why_items.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-lg border border-ink-700 bg-ink-900 px-4 py-3">
              <span className="mt-0.5 font-mono text-brandGreen">✓</span>
              <span className="text-sm leading-relaxed text-paper">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
