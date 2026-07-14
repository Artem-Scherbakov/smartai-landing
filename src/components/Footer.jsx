import React from 'react'
import { useLang } from '../i18n.jsx'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-mist sm:flex-row">
        <span>ai.solutions © {year} — {t.footer_rights}</span>
        <span>Built for restaurants, hotels & shops in Vietnam.</span>
      </div>
    </footer>
  )
}
