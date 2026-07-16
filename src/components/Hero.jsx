import React, { useEffect, useState } from 'react'
import { useLang } from '../i18n.jsx'

const STAGES = ['3 days', '14 hours', '52 min', '4 min', '0.8s']

function ReplyTimeDemo({ label }) {
  const [stage, setStage] = useState(0)
  const [showReply, setShowReply] = useState(false)

  useEffect(() => {
    if (stage >= STAGES.length - 1) {
      const t = setTimeout(() => setShowReply(true), 500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setStage((s) => s + 1), stage === 0 ? 900 : 260)
    return () => clearTimeout(t)
  }, [stage])

  const isFinal = stage === STAGES.length - 1

  return (
    <div className="w-full max-w-sm rounded-xl border border-ink-600 bg-ink-800 font-mono text-sm shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-ink-700 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-xs text-mist">customer.chat</span>
      </div>

      <div className="space-y-3 px-4 py-4">
        <div className="max-w-[80%] rounded-lg rounded-bl-sm bg-ink-700 px-3 py-2 text-paper">
          I run a business and need to automate customer support.
        </div>

        <div className="flex items-center justify-between px-1">
          <span className="text-xs uppercase tracking-widest text-mist">{label}</span>
          <span className={`text-lg font-semibold tabular-nums ${isFinal ? 'text-signal' : 'text-mist line-through decoration-2'}`}>
            {STAGES[stage]}
          </span>
        </div>

        <div className="min-h-[2.5rem]">
          {showReply && (
            <div className="ml-auto max-w-[85%] animate-fadeUp rounded-lg rounded-br-sm bg-zalo px-3 py-2 text-white">
              Great — I can automate your bookings, answer questions, and process orders instantly across all channels.
              <span className="ml-0.5 inline-block h-3 w-[2px] animate-blink bg-white align-middle" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()
  return (
    <section id="top" className="relative overflow-hidden border-b border-ink-700">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(255,176,32,0.08),transparent_45%),radial-gradient(circle_at_90%_10%,rgba(0,104,255,0.10),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div className="animate-fadeUp">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">{t.hero_eyebrow}</p>
          <h1 className="font-mono text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl">
            {t.hero_title_1}
            <br />
            <span className="bg-gradient-to-r from-signal to-brandGreen bg-clip-text text-transparent">{t.hero_title_2}</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mist">{t.hero_body}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://zalo.me/0383134267"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-signal-dim focus-ring"
            >
              {t.hero_cta_zalo}
            </a>
            <a
              href="https://t.me/sherbakov82"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink-600 px-6 py-3 text-sm font-semibold text-paper transition hover:border-mist focus-ring"
            >
              {t.hero_cta_telegram}
            </a>
            <a
              href="mailto:getsmartaivn@gmail.com"
              className="rounded-full border border-ink-600 px-6 py-3 text-sm font-semibold text-paper transition hover:border-mist focus-ring"
            >
              {t.hero_cta_email}
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <ReplyTimeDemo label={t.hero_demo_label} />
        </div>
      </div>
    </section>
  )
}
