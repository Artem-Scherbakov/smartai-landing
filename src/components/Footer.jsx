import React from 'react'
import { useLang } from '../i18n.jsx'
import Logo from './Logo.jsx'

const CONTACT_LINKS = [
  { label: 'getsmartaivn@gmail.com', href: 'mailto:getsmartaivn@gmail.com' },
  { label: 't.me/sherbakov82', href: 'https://t.me/sherbakov82' },
  { label: 'zalo.me/0383134267', href: 'https://zalo.me/0383134267' },
  { label: 'linkedin.com/in/cryptospec', href: 'https://www.linkedin.com/in/cryptospec/' },
]

const ANCHORS = ['#solutions', '#solutions', '#solutions', '#solutions']
const COMPANY_ANCHORS = ['#about', '#cases', '#faq', '#contact']

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-700 px-5 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-mist">{t.footer_tagline}</p>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-mist">
            {t.footer_services_title}
          </h3>
          <ul className="mt-4 space-y-2">
            {t.footer_services.map((item, i) => (
              <li key={item}>
                <a href={ANCHORS[i]} className="text-sm text-paper transition hover:text-signal focus-ring">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-mist">
            {t.footer_company_title}
          </h3>
          <ul className="mt-4 space-y-2">
            {t.footer_company.map((item, i) => (
              <li key={item}>
                <a href={COMPANY_ANCHORS[i]} className="text-sm text-paper transition hover:text-signal focus-ring">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-mist">
            {t.footer_contact_title}
          </h3>
          <ul className="mt-4 space-y-2">
            {CONTACT_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="font-mono text-xs text-mist transition hover:text-signal focus-ring"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-ink-700 pt-6 text-center font-mono text-xs text-mist">
        © {year} {t.brand_name}. {t.footer_rights} — {t.footer_location}
      </div>
    </footer>
  )
}
