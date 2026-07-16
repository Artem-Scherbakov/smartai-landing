import React, { useState, useEffect } from 'react'
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
    ru: 'Отлично — я могу проверять наличие номеров, называть цены и оформлять бронирования круглосуточно, даже пока вы спите.',
  },
  {
    keys: ['dental', 'dentist', 'clinic', 'nha khoa', 'răng', 'стоматолог', 'зуб', 'клиника'],
    en: 'Got it — I can handle appointment scheduling, service pricing and reminders, answered the moment a patient writes in.',
    vi: 'Đã hiểu — tôi có thể xử lý đặt lịch hẹn, giá dịch vụ và nhắc lịch, trả lời ngay khi bệnh nhân nhắn tin.',
    ru: 'Понял — я могу вести запись на приём, отвечать по ценам на услуги и отправлять напоминания сразу же, как пациент напишет.',
  },
  {
    keys: ['spa', 'massage', 'salon', 'beauty', 'spa', 'salon làm đẹp', 'massage', 'спа', 'массаж', 'салон'],
    en: 'Nice — I can handle booking slots, service menus and prices, so your front desk stops repeating the same answers.',
    vi: 'Hay đấy — tôi có thể xử lý đặt lịch, thực đơn dịch vụ và giá cả, để lễ tân không phải lặp lại câu trả lời mỗi ngày.',
    ru: 'Хорошо — я возьму на себя запись на процедуры, ответы по прайс-листу и расписанию, чтобы администратор не отвечал на одно и то же вручную.',
  },
  {
    keys: ['store', 'shop', 'cửa hàng', 'cua hang', 'retail', 'магазин', 'розниц'],
    en: 'Got it — I can answer product questions, check stock and track orders, all inside the chat your customers already use.',
    vi: 'Đã hiểu — tôi có thể trả lời câu hỏi sản phẩm, kiểm tra tồn kho và theo dõi đơn hàng, ngay trong chat khách hàng đang dùng.',
    ru: 'Понял — я могу отвечать на вопросы о товарах, проверять наличие и отслеживать заказы прямо в чате, которым уже пользуются ваши клиенты.',
  },
]

const FALLBACK_1 = {
  en: "Any business works — tell me a bit more about what you sell or offer, and I'll show you what could be automated.",
  vi: 'Ngành nào cũng được — kể thêm cho tôi nghe bạn bán hoặc cung cấp dịch vụ gì, tôi sẽ cho bạn thấy phần nào có thể tự động hoá.',
  ru: 'Подходит любой бизнес — расскажите чуть подробнее, что вы продаёте или какие услуги оказываете, и я покажу, что можно автоматизировать.',
}

const FALLBACK_2 = {
  en: "Sounds interesting! The best way to see it in action is to book a quick demo. Leave us a message on Zalo or Telegram, and we'll prepare a custom setup for you.",
  vi: 'Nghe thú vị đấy! Cách tốt nhất là xem bản demo. Hãy nhắn tin cho chúng tôi qua Zalo hoặc Telegram, chúng tôi sẽ chuẩn bị bản demo riêng cho bạn.',
  ru: 'Звучит отлично! Чтобы увидеть, как это будет работать именно для вас, напишите нам в Telegram или Zalo — мы бесплатно подготовим персональное демо.',
}

function reply(input, lang, fallbackCount = 0) {
  const lower = input.toLowerCase()
  const hit = RULES.find((r) => r.keys.some((k) => lower.includes(k)))
  if (hit) return { text: hit[lang], isFallback: false }
  
  return { 
    text: fallbackCount === 0 ? FALLBACK_1[lang] : FALLBACK_2[lang], 
    isFallback: true 
  }
}

const PREFILL_MESSAGES = {
  restaurant: { en: "I run a restaurant", vi: "Tôi mở nhà hàng", ru: "У меня ресторан" },
  salon: { en: "I have a beauty salon", vi: "Tôi có salon làm đẹp", ru: "У меня салон красоты" },
  hotel: { en: "We manage a hotel", vi: "Chúng tôi quản lý khách sạn", ru: "У меня отель" },
  clinic: { en: "I operate a dental clinic", vi: "Tôi điều hành phòng khám nha khoa", ru: "У меня стоматология" },
}

export default function ChatDemo() {
  const { t, lang } = useLang()
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')
  const [typing, setTyping] = useState(false)
  const [activeScenario, setActiveScenario] = useState(null)
  const [fallbackCount, setFallbackCount] = useState(0)

  const canSend = value.trim().length > 0 && !typing

  const loadScenario = (scenarioId) => {
    setActiveScenario(scenarioId)
    setMessages([])
    setTyping(true)
    setFallbackCount(0)
    
    // Simulate someone typing the initial message
    const initialText = PREFILL_MESSAGES[scenarioId][lang] || PREFILL_MESSAGES[scenarioId]['en']
    
    setTimeout(() => {
      setMessages([{ from: 'user', text: initialText }])
      
      // Simulate bot replying to the initial message
      setTimeout(() => {
        const response = reply(initialText, lang, 0)
        setMessages((m) => [...m, { from: 'bot', text: response.text }])
        setTyping(false)
      }, 700)
    }, 400)
  }

  const send = () => {
    const text = value.trim()
    if (!text) return
    const next = [...messages, { from: 'user', text }]
    setMessages(next)
    setValue('')
    setTyping(true)
    setTimeout(() => {
      const response = reply(text, lang, fallbackCount)
      if (response.isFallback) {
        setFallbackCount(prev => prev + 1)
      }
      setMessages((m) => [...m, { from: 'bot', text: response.text }])
      setTyping(false)
    }, 700)
  }

  const empty = messages.length === 0

  return (
    <section className="border-b border-ink-700 bg-ink-950">
      <div className="mx-auto max-w-2xl px-5 py-20">
        <h2 className="text-center font-mono text-xl font-semibold text-paper sm:text-2xl">{t.chat_title}</h2>
        
        {/* Scenario Switcher */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {Object.entries(t.chat_scenarios).map(([key, label]) => (
            <button
              key={key}
              onClick={() => loadScenario(key)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-colors focus-ring ${
                activeScenario === key 
                  ? 'bg-signal text-ink-950' 
                  : 'border border-ink-600 text-mist hover:text-paper hover:border-mist'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-ink-600 bg-ink-900 shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-ink-700 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-2 font-mono text-xs text-mist">ai.assistant</span>
          </div>

          <div className="flex min-h-[220px] flex-col gap-3 px-4 py-4 overflow-y-auto max-h-[400px]">
            {empty && !typing && <p className="text-sm text-mist text-center mt-auto mb-auto">{t.chat_intro}</p>}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm animate-fadeUp ${
                  m.from === 'user'
                    ? 'self-end rounded-br-sm bg-zalo text-white'
                    : 'self-start rounded-bl-sm bg-ink-700 text-paper'
                }`}
              >
                {m.text}
              </div>
            ))}

            {typing && (
              <div className="self-start rounded-lg rounded-bl-sm bg-ink-700 px-3 py-2 text-sm text-mist animate-fadeUp">
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
