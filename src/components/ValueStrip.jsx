import React from 'react'
import { useLang } from '../i18n.jsx'

export default function ValueStrip() {
  const { t } = useLang()

  return (
    <div className="border-b border-ink-700 bg-ink-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-5 py-5 sm:flex-row sm:justify-between text-center sm:text-left">
        <span className="font-mono text-sm font-semibold uppercase tracking-widest text-paper shrink-0">
          {t.value_eyebrow}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-mono text-xs text-mist sm:justify-end">
          {t.value_items.map((item) => (
            <span key={item.t} className="flex items-center gap-2">
              <span className="text-signal">•</span>
              {item.t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
