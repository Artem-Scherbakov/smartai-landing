import React from 'react'
import { useLang } from '../i18n.jsx'

export default function Process() {
  const { t } = useLang()

  return (
    <section id="process" className="border-b border-ink-700 bg-ink-950">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="timestamp-divider mb-4">{t.process_eyebrow}</p>
        <h2 className="max-w-2xl font-mono text-2xl font-semibold text-paper sm:text-3xl">{t.process_title}</h2>

        <ol className="mt-12 space-y-0">
          {t.process_items.map((step, i) => (
            <li key={step.t} className="flex gap-5 border-t border-ink-700 py-6 first:border-t-0 sm:gap-8">
              <span className="font-mono text-sm text-signal">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-mono text-base font-semibold text-paper">{step.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-mist">{step.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
