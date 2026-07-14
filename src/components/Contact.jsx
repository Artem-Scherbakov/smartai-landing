import React from 'react'
import { useLang } from '../i18n.jsx'

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="border-b border-ink-700">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">{t.contact_eyebrow}</p>
        <h2 className="font-mono text-2xl font-semibold text-paper sm:text-3xl">{t.contact_title}</h2>
        <p className="mt-3 text-mist">{t.contact_body}</p>

        <a
          href="mailto:hello@example.com"
          className="focus-ring mt-8 inline-block rounded-lg bg-signal px-8 py-4 font-mono text-sm font-semibold text-ink-950 transition hover:brightness-110"
        >
          {t.contact_cta}
        </a>
      </div>
    </section>
  )
}
