import React from 'react'
import { useLang } from '../i18n.jsx'

export function LogoMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" rx="9" fill="#151B1F" stroke="#2A343B" />
      <path
        d="M16 7c-4.4 0-8 3.2-8 7.2 0 2.2 1.1 4.2 2.9 5.5-.1.9-.5 2.1-1.4 3 1.6 0 3.1-.6 4.2-1.4.7.2 1.5.3 2.3.3 4.4 0 8-3.2 8-7.4S20.4 7 16 7Z"
        fill="#FFB020"
      />
      <circle cx="12.5" cy="14.4" r="1.3" fill="#0B0F12" />
      <circle cx="19.5" cy="14.4" r="1.3" fill="#0B0F12" />
    </svg>
  )
}

export default function Logo({ withTagline = false }) {
  const { t } = useLang()
  return (
    <span className="flex items-center gap-2">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-mono text-sm font-semibold tracking-tight text-paper">
          {t.brand_name}
        </span>
        {withTagline && (
          <span className="mt-1 text-[10px] uppercase tracking-widest text-mist">{t.brand_tagline}</span>
        )}
      </span>
    </span>
  )
}
