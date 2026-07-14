import React, { createContext, useContext, useMemo, useState } from 'react'

const dict = {
  en: {
    nav_solutions: 'Solutions',
    nav_process: 'Process',
    nav_cases: 'Cases',
    nav_contact: 'Contact',
    hero_eyebrow: 'AI Assistant · Automation · Custom Software',
    hero_title_1: 'Your customers message you.',
    hero_title_2: 'Someone should answer in seconds — not days.',
    hero_body: 'I build AI assistants and automation for small businesses across Vietnam — restaurants, hotels, shops. Fewer missed messages, less manual work, more bookings.',
    hero_cta_zalo: 'Contact via Zalo',
    hero_cta_telegram: 'Telegram',
    hero_cta_email: 'Email',
    hero_demo_label: 'live reply time',
    problem_eyebrow: 'The cost of slow replies',
    problem_title: "Don't lose customers because of slow replies.",
    problem_1_title: 'Missed messages',
    problem_1_body: 'Customers write after hours, on Zalo, on Telegram, on Instagram. Half never get a reply at all.',
    problem_2_title: 'Manual work',
    problem_2_body: 'The same questions, answered by hand, every single day — menu, prices, hours, availability.',
    problem_3_title: 'Lost revenue',
    problem_3_body: 'A slow reply is a booking that goes to the competitor who answered first.',
    solutions_eyebrow: 'What I build',
    solutions_title: 'Solutions built for how your business actually runs.',
    solutions_items: [
      { t: 'AI Assistant', d: 'Answers questions, takes orders, qualifies leads — in your brand voice.' },
      { t: 'Chatbots', d: 'Deployed where your customers already are.' },
      { t: 'Restaurant Assistant', d: 'Menu, orders, delivery and table bookings, handled automatically.' },
      { t: 'Hotel Assistant', d: 'Availability, pricing and reservations, answered instantly.' },
      { t: 'CRM Integration', d: 'Every conversation becomes a lead you can follow up on.' },
      { t: 'Google Sheets', d: 'Orders and bookings land in a sheet your team already knows.' },
      { t: 'Telegram Bots', d: 'Internal tools and customer-facing bots, built to spec.' },
      { t: 'Custom Automation', d: 'If it is repetitive, it can probably run itself.' },
    ],
    process_eyebrow: 'How we work',
    process_title: 'Five steps, from first message to launch.',
    process_items: [
      { t: 'Free consultation', d: 'We talk through what is actually slowing you down.' },
      { t: 'Analyze your business', d: 'I map your real workflow — not a generic template.' },
      { t: 'Build custom solution', d: 'Assistant, automation or integration, built for your case.' },
      { t: 'Launch', d: 'Live on the channels your customers already use.' },
      { t: 'Support', d: 'I stay on to tune and extend it as you grow.' },
    ],
    cases_eyebrow: 'Examples',
    cases_title: 'What this looks like, by industry.',
    cases_note: 'Demo scenarios — case studies with real clients coming soon.',
    cases_items: [
      { t: 'Restaurant', d: 'Menu Q&A, delivery orders, table bookings via chat.' },
      { t: 'Hotel', d: 'Room availability, pricing and reservations, answered instantly.' },
      { t: 'Store', d: 'Product questions, stock checks and order tracking.' },
    ],
    contact_eyebrow: 'Start here',
    contact_title: 'Tell me about your business.',
    contact_body: "I'll reply personally — usually within the hour.",
    contact_cta: 'Start your AI project',
    chat_title: 'Try it — describe your business',
    chat_placeholder: 'e.g. I own a restaurant',
    chat_send: 'Send',
    chat_intro: 'Type what kind of business you run, and see the kind of reply your customers could get.',
    footer_rights: 'All rights reserved.',
  },
  vi: {
    nav_solutions: 'Giải pháp',
    nav_process: 'Quy trình',
    nav_cases: 'Ví dụ',
    nav_contact: 'Liên hệ',
    hero_eyebrow: 'Trợ lý AI · Tự động hoá · Phần mềm riêng',
    hero_title_1: 'Khách hàng nhắn tin cho bạn.',
    hero_title_2: 'Ai đó nên trả lời trong vài giây — không phải vài ngày.',
    hero_body: 'Tôi xây dựng trợ lý AI và tự động hoá cho doanh nghiệp nhỏ tại Việt Nam — nhà hàng, khách sạn, cửa hàng. Ít tin nhắn bị bỏ lỡ hơn, ít việc thủ công hơn, nhiều đơn đặt hơn.',
    hero_cta_zalo: 'Liên hệ qua Zalo',
    hero_cta_telegram: 'Telegram',
    hero_cta_email: 'Email',
    hero_demo_label: 'thời gian phản hồi',
    problem_eyebrow: 'Cái giá của việc trả lời chậm',
    problem_title: 'Đừng để mất khách chỉ vì trả lời chậm.',
    problem_1_title: 'Tin nhắn bị bỏ lỡ',
    problem_1_body: 'Khách nhắn ngoài giờ, trên Zalo, Telegram, Instagram. Một nửa không bao giờ được trả lời.',
    problem_2_title: 'Việc thủ công',
    problem_2_body: 'Cùng những câu hỏi, trả lời bằng tay, mỗi ngày — thực đơn, giá, giờ mở cửa, chỗ trống.',
    problem_3_title: 'Mất doanh thu',
    problem_3_body: 'Trả lời chậm nghĩa là đơn hàng rơi vào tay đối thủ trả lời trước.',
    solutions_eyebrow: 'Tôi xây dựng',
    solutions_title: 'Giải pháp phù hợp với cách doanh nghiệp bạn vận hành.',
    solutions_items: [
      { t: 'Trợ lý AI', d: 'Trả lời câu hỏi, nhận đơn, sàng lọc khách hàng tiềm năng — đúng giọng thương hiệu của bạn.' },
      { t: 'Chatbot', d: 'Triển khai ngay nơi khách hàng của bạn đang có mặt.' },
      { t: 'Trợ lý nhà hàng', d: 'Thực đơn, đặt món, giao hàng và đặt bàn — tự động hoàn toàn.' },
      { t: 'Trợ lý khách sạn', d: 'Phòng trống, giá phòng và đặt phòng, trả lời ngay lập tức.' },
      { t: 'Tích hợp CRM', d: 'Mỗi cuộc trò chuyện trở thành một khách hàng tiềm năng để theo dõi.' },
      { t: 'Google Sheets', d: 'Đơn hàng và đặt chỗ đổ thẳng vào bảng tính đội của bạn đã quen dùng.' },
      { t: 'Bot Telegram', d: 'Công cụ nội bộ và bot khách hàng, xây theo yêu cầu.' },
      { t: 'Tự động hoá riêng', d: 'Việc gì lặp lại, việc đó có thể tự chạy.' },
    ],
    process_eyebrow: 'Cách chúng ta làm việc',
    process_title: 'Năm bước, từ tin nhắn đầu tiên đến khi ra mắt.',
    process_items: [
      { t: 'Tư vấn miễn phí', d: 'Chúng ta trao đổi về điều thực sự đang làm bạn chậm lại.' },
      { t: 'Phân tích doanh nghiệp', d: 'Tôi lập bản đồ quy trình thực tế của bạn — không phải mẫu chung chung.' },
      { t: 'Xây dựng giải pháp riêng', d: 'Trợ lý, tự động hoá hoặc tích hợp, xây cho đúng trường hợp của bạn.' },
      { t: 'Ra mắt', d: 'Hoạt động trên các kênh khách hàng của bạn đã dùng.' },
      { t: 'Hỗ trợ', d: 'Tôi tiếp tục điều chỉnh và mở rộng khi bạn phát triển.' },
    ],
    cases_eyebrow: 'Ví dụ',
    cases_title: 'Trông sẽ như thế nào, theo từng ngành.',
    cases_note: 'Kịch bản demo — case study với khách hàng thật sắp có.',
    cases_items: [
      { t: 'Nhà hàng', d: 'Hỏi đáp thực đơn, đặt món giao hàng, đặt bàn qua chat.' },
      { t: 'Khách sạn', d: 'Phòng trống, giá phòng và đặt phòng, trả lời ngay.' },
      { t: 'Cửa hàng', d: 'Hỏi đáp sản phẩm, kiểm tra tồn kho và theo dõi đơn hàng.' },
    ],
    contact_eyebrow: 'Bắt đầu tại đây',
    contact_title: 'Kể cho tôi nghe về doanh nghiệp của bạn.',
    contact_body: 'Tôi sẽ tự tay trả lời — thường trong vòng một giờ.',
    contact_cta: 'Bắt đầu dự án AI',
    chat_title: 'Thử ngay — mô tả doanh nghiệp của bạn',
    chat_placeholder: 'vd: Tôi có một nhà hàng',
    chat_send: 'Gửi',
    chat_intro: 'Gõ loại hình doanh nghiệp của bạn, xem thử khách hàng có thể nhận được câu trả lời như thế nào.',
    footer_rights: 'Đã đăng ký bản quyền.',
  },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = useMemo(() => dict[lang], [lang])
  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
