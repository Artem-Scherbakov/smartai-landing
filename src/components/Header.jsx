import React, { useState } from 'react'
import { useLang } from '../i18n.jsx'

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)

  const links = [
    ['#solutions', t.nav_solutions],
    ['#process', t.nav_process],
    ['#cases', t.nav_cases],
    ['#contact', t.nav_contact],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-ink-700 bg-ink-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-paper focus-ring">
          ai<span className="text-signal">.</span>solutions
        </a>

        <nav className="hidden gap-8 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-mist transition hover:text-paper focus-ring">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-full border border-ink-600 font-mono text-xs">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 transition focus-ring ${lang === 'en' ? 'bg-signal text-ink-950' : 'text-mist hover:text-paper'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('vi')}
              className={`px-3 py-1.5 transition focus-ring ${lang === 'vi' ? 'bg-signal text-ink-950' : 'text-mist hover:text-paper'}`}
            >
              VI
            </button>
          </div>
          <button
            className="text-mist md:hidden focus-ring"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink-700 px-5 py-3 md:hidden">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2 text-sm text-mist hover:bg-ink-800 hover:text-paper focus-ring"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
