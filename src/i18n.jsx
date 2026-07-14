import React, { createContext, useContext, useMemo, useState } from 'react'

const dict = {
  en: {
    brand_name: 'SmartAI VN',
    brand_tagline: 'AI Automation for Restaurants',
    nav_solutions: 'Solutions',
    nav_why: 'Why us',
    nav_process: 'Process',
    nav_cases: 'By industry',
    nav_faq: 'FAQ',
    nav_about: 'About',
    nav_contact: 'Contact',
    hero_eyebrow: 'AI Assistant · Automation · Custom Software',
    hero_title_1: 'Your customers message you.',
    hero_title_2: 'Someone should answer in seconds — not days.',
    hero_body: 'I build AI assistants and automation for small businesses across Vietnam — restaurants, hotels, shops. Fewer missed messages, less manual work, more bookings.',
    hero_cta_zalo: 'Contact via Zalo',
    hero_cta_telegram: 'Telegram',
    hero_cta_email: 'Email',
    hero_demo_label: 'live reply time',

    value_items: [
      { t: 'Ready in 3–5 days' },
      { t: 'No monthly contracts' },
      { t: 'Personal support' },
      { t: 'Hosted on your server or in the cloud' },
    ],

    why_eyebrow: 'Why SmartAI VN',
    why_title: 'Everything a busy small business actually needs.',
    why_items: [
      'Replies instantly, 24/7',
      'Speaks Vietnamese, English and Russian',
      'Works on Telegram, Zalo & Facebook',
      'Handles reservations & delivery',
      'Custom AI trained for your business',
      'No expensive software to buy or maintain',
    ],

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

    cases_eyebrow: 'By industry',
    cases_title: 'Solutions for Your Business',
    cases_note: 'Demo scenarios — case studies with real clients coming soon.',
    cases_items: [
      { t: 'Restaurant', d: 'Menu Q&A, delivery orders, table bookings via chat.' },
      { t: 'Hotel', d: 'Room availability, pricing and reservations, answered instantly.' },
      { t: 'Store', d: 'Product questions, stock checks and order tracking.' },
    ],

    faq_eyebrow: 'Questions',
    faq_title: 'Frequently asked questions.',
    faq_items: [
      { q: 'Does it work with Zalo?', a: 'Yes — Zalo is the primary channel I build for, alongside Telegram and Facebook Messenger.' },
      { q: 'Can you customize it?', a: 'Every assistant is trained on your menu, prices and rules — nothing generic or off-the-shelf.' },
      { q: 'How long does setup take?', a: 'Most projects are ready in 3–5 days, depending on scope.' },
      { q: 'Do I need ChatGPT?', a: 'No separate subscription needed — the AI is built into your assistant from day one.' },
    ],

    about_eyebrow: 'Who is behind this',
    about_title: 'Meet the developer',
    about_greeting: "Hi, I'm Artem.",
    about_body: "I'm an automation engineer with years of experience building industrial SCADA systems, business automation, and AI assistants. I help restaurants automate reservations, customer support, and ordering through Telegram, Zalo, and other messaging platforms.",
    about_note: 'Every solution is built specifically for your business — not from a generic template.',

    contact_eyebrow: 'Start here',
    contact_title: 'Tell me about your business.',
    contact_body: "I'll reply personally — usually within the hour.",
    contact_cta: 'Start your AI project',

    chat_title: 'Try it — describe your business',
    chat_placeholder: 'e.g. I own a restaurant',
    chat_send: 'Send',
    chat_intro: 'Type what kind of business you run, and see the kind of reply your customers could get.',

    footer_location: 'Nha Trang, Vietnam',
    footer_rights: 'All rights reserved.',
  },
  vi: {
    brand_name: 'SmartAI VN',
    brand_tagline: 'Tự động hoá AI cho nhà hàng',
    nav_solutions: 'Giải pháp',
    nav_why: 'Vì sao chọn chúng tôi',
    nav_process: 'Quy trình',
    nav_cases: 'Theo ngành',
    nav_faq: 'Hỏi đáp',
    nav_about: 'Giới thiệu',
    nav_contact: 'Liên hệ',
    hero_eyebrow: 'Trợ lý AI · Tự động hoá · Phần mềm riêng',
    hero_title_1: 'Khách hàng nhắn tin cho bạn.',
    hero_title_2: 'Ai đó nên trả lời trong vài giây — không phải vài ngày.',
    hero_body: 'Tôi xây dựng trợ lý AI và tự động hoá cho doanh nghiệp nhỏ tại Việt Nam — nhà hàng, khách sạn, cửa hàng. Ít tin nhắn bị bỏ lỡ hơn, ít việc thủ công hơn, nhiều đơn đặt hơn.',
    hero_cta_zalo: 'Liên hệ qua Zalo',
    hero_cta_telegram: 'Telegram',
    hero_cta_email: 'Email',
    hero_demo_label: 'thời gian phản hồi',

    value_items: [
      { t: 'Sẵn sàng sau 3–5 ngày' },
      { t: 'Không hợp đồng hàng tháng' },
      { t: 'Hỗ trợ trực tiếp, cá nhân' },
      { t: 'Lưu trữ trên server của bạn hoặc trên cloud' },
    ],

    why_eyebrow: 'Vì sao chọn SmartAI VN',
    why_title: 'Mọi thứ một doanh nghiệp nhỏ bận rộn thực sự cần.',
    why_items: [
      'Trả lời ngay lập tức, 24/7',
      'Nói được tiếng Việt, Anh và Nga',
      'Hoạt động trên Telegram, Zalo & Facebook',
      'Xử lý đặt bàn & giao hàng',
      'AI được huấn luyện riêng cho doanh nghiệp bạn',
      'Không cần mua hay bảo trì phần mềm đắt tiền',
    ],

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

    cases_eyebrow: 'Theo ngành',
    cases_title: 'Giải pháp cho doanh nghiệp của bạn',
    cases_note: 'Kịch bản demo — case study với khách hàng thật sắp có.',
    cases_items: [
      { t: 'Nhà hàng', d: 'Hỏi đáp thực đơn, đặt món giao hàng, đặt bàn qua chat.' },
      { t: 'Khách sạn', d: 'Phòng trống, giá phòng và đặt phòng, trả lời ngay.' },
      { t: 'Cửa hàng', d: 'Hỏi đáp sản phẩm, kiểm tra tồn kho và theo dõi đơn hàng.' },
    ],

    faq_eyebrow: 'Câu hỏi',
    faq_title: 'Câu hỏi thường gặp.',
    faq_items: [
      { q: 'Có hoạt động với Zalo không?', a: 'Có — Zalo là kênh chính tôi xây dựng, cùng với Telegram và Facebook Messenger.' },
      { q: 'Có thể tuỳ chỉnh không?', a: 'Mỗi trợ lý được huấn luyện theo thực đơn, giá cả và quy tắc riêng của bạn — không có gì chung chung.' },
      { q: 'Thiết lập mất bao lâu?', a: 'Hầu hết dự án sẵn sàng sau 3–5 ngày, tuỳ phạm vi công việc.' },
      { q: 'Tôi có cần ChatGPT không?', a: 'Không cần đăng ký riêng — AI đã được tích hợp sẵn trong trợ lý của bạn ngay từ đầu.' },
    ],

    about_eyebrow: 'Người đứng sau',
    about_title: 'Gặp gỡ nhà phát triển',
    about_greeting: 'Xin chào, tôi là Artem.',
    about_body: 'Tôi là kỹ sư tự động hoá với nhiều năm kinh nghiệm xây dựng hệ thống SCADA công nghiệp, tự động hoá doanh nghiệp và trợ lý AI. Tôi giúp các nhà hàng tự động hoá đặt bàn, chăm sóc khách hàng và đặt món qua Telegram, Zalo và các nền tảng nhắn tin khác.',
    about_note: 'Mỗi giải pháp được xây dựng riêng cho doanh nghiệp của bạn — không phải từ mẫu có sẵn.',

    contact_eyebrow: 'Bắt đầu tại đây',
    contact_title: 'Kể cho tôi nghe về doanh nghiệp của bạn.',
    contact_body: 'Tôi sẽ tự tay trả lời — thường trong vòng một giờ.',
    contact_cta: 'Bắt đầu dự án AI',

    chat_title: 'Thử ngay — mô tả doanh nghiệp của bạn',
    chat_placeholder: 'vd: Tôi có một nhà hàng',
    chat_send: 'Gửi',
    chat_intro: 'Gõ loại hình doanh nghiệp của bạn, xem thử khách hàng có thể nhận được câu trả lời như thế nào.',

    footer_location: 'Nha Trang, Việt Nam',
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
