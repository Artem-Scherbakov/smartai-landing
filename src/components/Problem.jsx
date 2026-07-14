import React from 'react'
import { useLang } from '../i18n.jsx'

export default function Problem() {
  const { t } = useLang()
  const cards = [
    { title: t.problem_1_title, body: t.problem_1_body, icon: '✉' },
    { title: t.problem_2_title, body: t.problem_2_body, icon: '⚙' },
    { title: t.problem_3_title, body: t.problem_3_body, icon: '↘' },
  ]

  return (
    <section className="border-b border-ink-700 bg-ink-950">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="timestamp-divider mb-4">{t.problem_eyebrow}</p>
        <h2 className="max-w-2xl font-mono text-2xl font-semibold text-paper sm:text-3xl">{t.problem_title}</h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-xl border border-ink-700 bg-ink-900 p-6 transition hover:border-ink-600">
              <div className="mb-4 font-mono text-2xl text-signal">{c.icon}</div>
              <h3 className="mb-2 font-mono text-base font-semibold text-paper">{c.title}</h3>
              <p className="text-sm leading-relaxed text-mist">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
