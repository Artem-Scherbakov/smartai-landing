import React from 'react'
import { useLang } from '../i18n.jsx'

export default function ValueStrip() {
  const { t } = useLang()

  return (
    <div className="border-b border-ink-700 bg-ink-900">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 font-mono text-xs text-mist sm:justify-between">
        {t.value_items.map((item) => (
          <span key={item.t} className="flex items-center gap-2">
            <span className="text-signal">•</span>
            {item.t}
          </span>
        ))}
      </div>
    </div>
  )
}
