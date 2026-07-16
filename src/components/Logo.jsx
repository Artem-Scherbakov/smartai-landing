import React from 'react'
import { useLang } from '../i18n.jsx'

export function LogoMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="logoGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF" />
          <stop offset="1" stopColor="#0099FF" />
        </linearGradient>
      </defs>

      <rect x="1" y="1" width="38" height="38" rx="11" fill="#0F1621" stroke="#1C2733" />

      {/* circuit leads */}
      <g stroke="url(#logoGrad)" strokeWidth="1.4" strokeLinecap="round">
        <path d="M4 12h4M4 12v-3" />
        <path d="M4 20h4" />
        <path d="M4 28h4M4 28v3" />
      </g>
      <circle cx="4" cy="9" r="1.4" fill="#00D4FF" />
      <circle cx="4" cy="20" r="1.4" fill="#00D4FF" />
      <circle cx="4" cy="31" r="1.4" fill="#00D4FF" />

      {/* chat bubble */}
      <path
        d="M20 8c-7.2 0-13 5.2-13 11.6 0 3.6 1.9 6.8 4.9 8.9-.2 1.5-.9 3.4-2.3 4.8 2.6 0 5-1 6.8-2.3 1.1.3 2.3.5 3.6.5 7.2 0 13-5.2 13-11.9S27.2 8 20 8Z"
        fill="none"
        stroke="url(#logoGrad)"
        strokeWidth="2.2"
      />
      <text
        x="20"
        y="24"
        textAnchor="middle"
        fontFamily="'IBM Plex Mono', monospace"
        fontWeight="700"
        fontSize="11"
        fill="#E6EAF2"
      >
        AI
      </text>
    </svg>
  )
}

export default function Logo({ withTagline = false, size = 34 }) {
  const { t } = useLang()
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={size} />
      <span className="flex flex-col leading-none">
        <span className="font-mono text-sm font-bold tracking-tight">
          <span className="text-paper">Smart</span>
          <span className="text-signal">AI</span>
        </span>
        {withTagline && (
          <span className="mt-1 text-[9px] uppercase tracking-[0.15em] text-mist">{t.brand_tagline}</span>
        )}
      </span>
    </span>
  )
}
