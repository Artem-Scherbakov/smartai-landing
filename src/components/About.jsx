import React from 'react'
import { useLang } from '../i18n.jsx'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="border-b border-ink-700 bg-ink-950">
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="timestamp-divider mb-4">{t.about_eyebrow}</p>
        <h2 className="font-mono text-2xl font-semibold text-paper sm:text-3xl">{t.about_title}</h2>

        <div className="mt-8 rounded-xl border border-ink-700 bg-ink-900 p-6 sm:p-8">
          <p className="font-mono text-base font-semibold text-signal">{t.about_greeting}</p>
          <p className="mt-3 text-sm leading-relaxed text-paper sm:text-base">{t.about_body}</p>
          <p className="mt-4 text-sm leading-relaxed text-mist">{t.about_note}</p>
        </div>
      </div>
    </section>
  )
}
