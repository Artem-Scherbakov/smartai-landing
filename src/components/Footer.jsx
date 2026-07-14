import React from 'react'
import { useLang } from '../i18n.jsx'
import Logo from './Logo.jsx'

const LINKS = [
  { label: 'Telegram', href: 'https://t.me/' },
  { label: 'Zalo', href: 'https://zalo.me/' },
  { label: 'Email', href: 'mailto:getsmartaivn@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
]

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 font-mono text-xs text-mist">
            © {year} {t.brand_name} — {t.footer_location}
          </p>
          <p className="mt-1 font-mono text-xs text-mist">{t.footer_rights}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-mist">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="transition hover:text-signal focus-ring"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
