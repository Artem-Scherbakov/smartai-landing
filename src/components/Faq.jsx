import React, { useState } from 'react'
import { useLang } from '../i18n.jsx'

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="border-t border-ink-700 first:border-t-0">
      <button
        onClick={onToggle}
        className="focus-ring flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-mono text-sm font-semibold text-paper sm:text-base">{q}</span>
        <span className={`shrink-0 font-mono text-signal transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && <p className="pb-5 text-sm leading-relaxed text-mist">{a}</p>}
    </div>
  )
}

export default function Faq() {
  const { t } = useLang()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="border-b border-ink-700">
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="timestamp-divider mb-4">{t.faq_eyebrow}</p>
        <h2 className="font-mono text-2xl font-semibold text-paper sm:text-3xl">{t.faq_title}</h2>

        <div className="mt-8">
          {t.faq_items.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
