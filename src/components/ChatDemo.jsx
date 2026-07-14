import React, { useMemo, useState } from 'react'
import { useLang } from '../i18n.jsx'

const RULES = [
  { keys: ['restaurant', 'nhà hàng', 'nha hang', 'food', 'cafe', 'quán'], en: 'Great! I can automate table bookings, menu Q&A and delivery orders — so no message waits more than a few seconds.', vi: 'Tuyệt! Tôi có thể tự động hoá đặt bàn, hỏi đáp thực đơn và đơn giao hàng — để không tin nhắn nào phải chờ quá vài giây.' },
  { keys: ['hotel', 'khách sạn', 'khach san', 'resort', 'homestay'], en: 'Perfect — I can handle room availability, pricing and reservations around the clock, even while you sleep.', vi: 'Tuyệt vời — tôi có thể xử lý phòng trống, giá phòng và đặt phòng suốt ngày đêm, kể cả khi bạn đang ngủ.' },
  { keys: ['store', 'shop', 'cửa hàng', 'cua hang', 'retail'], en: 'Got it — I can answer product questions, check stock and track orders, all inside the chat your customers already use.', vi: 'Đã hiểu — tôi có thể trả lời câu hỏi sản phẩm, kiểm tra tồn kho và theo dõi đơn hàng, ngay trong chat khách hàng đang dùng.' },
]

const FALLBACK = {
  en: "Tell me a bit more — what does your business sell or serve? I'll show you what could be automated.",
  vi: 'Kể thêm cho tôi nghe — doanh nghiệp của bạn bán hoặc phục vụ gì? Tôi sẽ cho bạn thấy phần nào có thể tự động hoá.',
}

function reply(input, lang) {
  const lower = input.toLowerCase()
  const hit = RULES.find((r) => r.keys.some((k) => lower.includes(k)))
  return hit ? hit[lang] : FALLBACK[lang]
}

export default function ChatDemo() {
  const { t, lang } = useLang()
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')
  const [typing, setTyping] = useState(false)

  const canSend = value.trim().length > 0 && !typing

  const send = () => {
    const text = value.trim()
    if (!text) return
    const next = [...messages, { from: 'user', text }]
    setMessages(next)
    setValue('')
    setTyping(true)
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: reply(text, lang) }])
      setTyping(false)
    }, 700)
  }

  const empty = messages.length === 0

  return (
    <section className="border-b border-ink-700 bg-ink-950">
      <div className="mx-auto max-w-2xl px-5 py-20">
        <h2 className="text-center font-mono text-xl font-semibold text-paper sm:text-2xl">{t.chat_title}</h2>

        <div className="mt-8 rounded-xl border border-ink-600 bg-ink-900 shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-ink-700 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-2 font-mono text-xs text-mist">ai.assistant</span>
          </div>

          <div className="flex min-h-[180px] flex-col gap-3 px-4 py-4">
            {empty && <p className="text-sm text-mist">{t.chat_intro}</p>}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                  m.from === 'user'
                    ? 'self-end rounded-br-sm bg-zalo text-white'
                    : 'self-start rounded-bl-sm bg-ink-700 text-paper'
                }`}
              >
                {m.text}
              </div>
            ))}

            {typing && (
              <div className="self-start rounded-lg rounded-bl-sm bg-ink-700 px-3 py-2 text-sm text-mist">
                <span className="animate-pulse">···</span>
              </div>
            )}
          </div>

          <form
            className="flex gap-2 border-t border-ink-700 p-3"
            onSubmit={(e) => {
              e.preventDefault()
              send()
            }}
          >
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={t.chat_placeholder}
              className="focus-ring flex-1 rounded-lg border border-ink-600 bg-ink-800 px-3 py-2 text-sm text-paper placeholder:text-mist"
            />
            <button
              type="submit"
              disabled={!canSend}
              className="focus-ring rounded-lg bg-signal px-4 py-2 text-sm font-semibold text-ink-950 transition disabled:opacity-40"
            >
              {t.chat_send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
