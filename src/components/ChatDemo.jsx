import React, { useState } from 'react'
import { useLang } from '../i18n.jsx'

const RULES = [
  {
    keys: ['restaurant', 'nhà hàng', 'nha hang', 'food', 'cafe', 'quán', 'ресторан', 'кафе'],
    en: 'Great! I can automate table bookings, menu Q&A and delivery orders — so no message waits more than a few seconds.',
    vi: 'Tuyệt! Tôi có thể tự động hoá đặt bàn, hỏi đáp thực đơn và đơn giao hàng — để không tin nhắn nào phải chờ quá vài giây.',
    ru: 'Отлично! Я могу автоматизировать бронирование столов, ответы по меню и доставку — ни одно сообщение не будет ждать дольше нескольких секунд.',
  },
  {
    keys: ['hotel', 'khách sạn', 'khach san', 'resort', 'homestay', 'отель', 'гостиниц'],
    en: 'Perfect — I can handle room availability, pricing and reservations around the clock, even while you sleep.',
    vi: 'Tuyệt vời — tôi có thể xử lý phòng trống, giá phòng và đặt phòng suốt ngày đêm, kể cả khi bạn đang ngủ.',
    ru: 'Отлично — я могу обрабатывать наличие номеров, цены и бронирования круглосуточно, даже пока вы спите.',
  },
  {
    keys: ['dental', 'dentist', 'nha khoa', 'răng', 'стоматолог', 'зуб'],
    en: 'Got it — I can handle appointment scheduling, service pricing and reminders, answered the moment a patient writes in.',
    vi: 'Đã hiểu — tôi có thể xử lý đặt lịch hẹn, giá dịch vụ và nhắc lịch, trả lời ngay khi bệnh nhân nhắn tin.',
    ru: 'Понял — я могу обрабатывать запись на приём, цены на услуги и напоминания, отвечая сразу же, как пациент напишет.',
  },
  {
    keys: ['spa', 'massage', 'salon', 'beauty', 'spa', 'salon làm đẹp', 'massage', 'спа', 'массаж', 'салон'],
    en: 'Nice — I can handle booking slots, service menus and prices, so your front desk stops repeating the same answers.',
    vi: 'Hay đấy — tôi có thể xử lý đặt lịch, thực đơn dịch vụ và giá cả, để lễ tân không phải lặp lại câu trả lời mỗi ngày.',
    ru: 'Хорошо — я могу обрабатывать запись на услуги, прайс-лист и расписание, чтобы администратор не отвечал на одно и то же вручную.',
  },
  {
    keys: ['store', 'shop', 'cửa hàng', 'cua hang', 'retail', 'магазин', 'розниц'],
    en: 'Got it — I can answer product questions, check stock and track orders, all inside the chat your customers already use.',
    vi: 'Đã hiểu — tôi có thể trả lời câu hỏi sản phẩm, kiểm tra tồn kho và theo dõi đơn hàng, ngay trong chat khách hàng đang dùng.',
    ru: 'Понял — я могу отвечать на вопросы о товарах, проверять наличие и отслеживать заказы прямо в чате, которым уже пользуются ваши клиенты.',
  },
]

const FALLBACK = {
  en: "Any business works — tell me a bit more about what you sell or offer, and I'll show you what could be automated.",
  vi: 'Ngành nào cũng được — kể thêm cho tôi nghe bạn bán hoặc cung cấp dịch vụ gì, tôi sẽ cho bạn thấy phần nào có thể tự động hoá.',
  ru: 'Подходит любой бизнес — расскажите чуть подробнее, что вы продаёте или какие услуги оказываете, и я покажу, что можно автоматизировать.',
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
