import React from 'react'
import { useLang } from '../i18n.jsx'
import Logo from './Logo.jsx'
import { FaTelegramPlane, FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const CONTACT_LINKS = [
  { icon: <FaTelegramPlane />, href: 'https://t.me/sherbakov82' },
  { icon: <FaFacebook />, href: 'https://facebook.com/' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/cryptospec/' },
  { icon: <FaGithub />, href: 'https://github.com/' },
  { icon: <FaEnvelope />, href: 'mailto:getsmartaivn@gmail.com' },
]

const ANCHORS = ['#solutions', '#architecture', '#contact', '#contact']
const COMPANY_ANCHORS = ['#about', '#cases', '#contact', '#contact']
const RESOURCE_ANCHORS = ['#', '#', '#', '#faq']

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
            {t.footer_resources_title}
          </h3>
          <ul className="mt-4 space-y-2">
            {t.footer_resources.map((item, i) => (
              <li key={item}>
                <a href={RESOURCE_ANCHORS[i]} className="text-sm text-paper transition hover:text-signal focus-ring">
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
          <div className="mt-4 flex gap-4">
            {CONTACT_LINKS.map((l, i) => (
              <a
                key={i}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-xl text-mist transition hover:text-signal focus-ring"
              >
                {l.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-ink-700 pt-6 text-center font-mono text-xs text-mist">
        © {year} {t.brand_name}. {t.footer_rights} — {t.footer_location}
      </div>
    </footer>
  )
}
