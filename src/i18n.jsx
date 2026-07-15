import React, { createContext, useContext, useMemo, useState } from 'react'

const dict = {
  en: {
    brand_name: 'SmartAI VN',
    brand_tagline: 'AI Automation for Local Business',
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
    hero_body: 'I build AI assistants and automation for small businesses across Vietnam — restaurants, hotels, dental clinics, spas, beauty salons, shops and more. Fully custom solutions, in any language.',
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
    why_title: 'Everything a busy local business actually needs.',
    why_items: [
      'Replies instantly, 24/7',
      'Works in Vietnamese, English, Russian — or any language',
      'Works on Telegram, Zalo & Facebook',
      'Handles bookings, orders & appointments',
      'Custom AI trained for your business, not a generic script',
      'No expensive software to buy or maintain',
    ],

    problem_eyebrow: 'The cost of slow replies',
    problem_title: "Don't lose customers because of slow replies.",
    problem_1_title: 'Missed messages',
    problem_1_body: 'Customers write after hours, on Zalo, on Telegram, on Instagram. Half never get a reply at all.',
    problem_2_title: 'Manual work',
    problem_2_body: 'The same questions, answered by hand, every single day — prices, hours, availability, booking.',
    problem_3_title: 'Lost revenue',
    problem_3_body: 'A slow reply is a booking that goes to the competitor who answered first.',

    solutions_eyebrow: 'What I build',
    solutions_title: 'Solutions built for how your business actually runs.',
    solutions_items: [
      { t: 'AI Assistant', d: 'Answers questions, takes bookings, qualifies leads — in your brand voice.' },
      { t: 'Chatbots', d: 'Deployed where your customers already are.' },
      { t: 'Restaurant & Hotel Assistant', d: 'Menu, rooms, availability, delivery and bookings, handled automatically.' },
      { t: 'Clinic & Salon Assistant', d: 'Dental clinics, spas, massage and beauty salons — appointments answered instantly.' },
      { t: 'CRM Integration', d: 'Every conversation becomes a lead you can follow up on.' },
      { t: 'Google Sheets', d: 'Orders and bookings land in a sheet your team already knows.' },
      { t: 'Telegram Bots', d: 'Internal tools and customer-facing bots, built to spec.' },
      { t: 'Custom Automation', d: 'Any business, any language — if it is repetitive, it can run itself.' },
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
    cases_note: 'A few examples — every solution is built custom, for any industry and any language.',
    cases_items: [
      { t: 'Restaurant & Hotel', d: 'Menu and room Q&A, delivery orders, table and room bookings via chat.' },
      { t: 'Dental Clinic', d: 'Appointment scheduling, service pricing, reminders — answered instantly.' },
      { t: 'Spa, Massage & Beauty Salon', d: 'Booking slots, service menus and prices, handled automatically.' },
      { t: 'Retail & Services', d: 'Product questions, stock checks and order tracking.' },
      { t: "Don't see your industry?", d: "Every solution is custom-built — tell me about your business and I'll design an assistant around it." },
    ],

    faq_eyebrow: 'Questions',
    faq_title: 'Frequently asked questions.',
    faq_items: [
      { q: 'Does it work with Zalo?', a: 'Yes — Zalo is the primary channel I build for, alongside Telegram and Facebook Messenger.' },
      { q: 'Do you only work with restaurants?', a: 'No — I build for any local business: hotels, dental clinics, spas, beauty salons, shops and services. Every solution is custom.' },
      { q: 'Can it work in my language?', a: 'Yes — Vietnamese, English, Russian, or any language your customers use.' },
      { q: 'How long does setup take?', a: 'Most projects are ready in 3–5 days, depending on scope.' },
      { q: 'Do I need ChatGPT?', a: 'No separate subscription needed — the AI is built into your assistant from day one.' },
    ],

    about_eyebrow: 'Who is behind this',
    about_title: 'Meet the developer',
    about_greeting: "Hi, I'm Artem.",
    about_body: "I'm an automation engineer with years of experience building industrial SCADA systems, business automation, and AI assistants. I help local businesses — restaurants, hotels, clinics, salons and more — automate bookings, customer support, and orders through Telegram, Zalo, and other messaging platforms.",
    about_note: 'Every solution is built specifically for your business — not from a generic template.',

    contact_eyebrow: 'Start here',
    contact_title: 'Tell me about your business.',
    contact_body: "I'll reply personally — usually within the hour.",
    contact_cta: 'Start your AI project',

    chat_title: 'Try it — describe your business',
    chat_placeholder: 'e.g. I run a dental clinic',
    chat_send: 'Send',
    chat_intro: 'Type what kind of business you run, and see the kind of reply your customers could get.',

    footer_tagline: 'AUTOMATE. INNOVATE. GROW.',
    footer_services_title: 'Services',
    footer_services: ['AI Automation', 'Chatbots', 'Integrations', 'Custom Solutions'],
    footer_company_title: 'About',
    footer_company: ['About', 'By industry', 'FAQ', 'Contact'],
    footer_contact_title: 'Contact',
    footer_location: 'Nha Trang, Vietnam',
    footer_rights: 'All rights reserved.',
  },
  vi: {
    brand_name: 'SmartAI VN',
    brand_tagline: 'Tự động hoá AI cho doanh nghiệp địa phương',
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
    hero_body: 'Tôi xây dựng trợ lý AI và tự động hoá cho doanh nghiệp nhỏ tại Việt Nam — nhà hàng, khách sạn, phòng khám nha khoa, spa, salon làm đẹp, cửa hàng và hơn thế nữa. Giải pháp hoàn toàn tuỳ chỉnh, bằng bất kỳ ngôn ngữ nào.',
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
    why_title: 'Mọi thứ một doanh nghiệp địa phương bận rộn thực sự cần.',
    why_items: [
      'Trả lời ngay lập tức, 24/7',
      'Hoạt động bằng tiếng Việt, Anh, Nga — hoặc bất kỳ ngôn ngữ nào',
      'Hoạt động trên Telegram, Zalo & Facebook',
      'Xử lý đặt chỗ, đặt món & lịch hẹn',
      'AI được huấn luyện riêng cho doanh nghiệp bạn, không phải kịch bản chung chung',
      'Không cần mua hay bảo trì phần mềm đắt tiền',
    ],

    problem_eyebrow: 'Cái giá của việc trả lời chậm',
    problem_title: 'Đừng để mất khách chỉ vì trả lời chậm.',
    problem_1_title: 'Tin nhắn bị bỏ lỡ',
    problem_1_body: 'Khách nhắn ngoài giờ, trên Zalo, Telegram, Instagram. Một nửa không bao giờ được trả lời.',
    problem_2_title: 'Việc thủ công',
    problem_2_body: 'Cùng những câu hỏi, trả lời bằng tay, mỗi ngày — giá cả, giờ mở cửa, chỗ trống, đặt lịch.',
    problem_3_title: 'Mất doanh thu',
    problem_3_body: 'Trả lời chậm nghĩa là đơn hàng rơi vào tay đối thủ trả lời trước.',

    solutions_eyebrow: 'Tôi xây dựng',
    solutions_title: 'Giải pháp phù hợp với cách doanh nghiệp bạn vận hành.',
    solutions_items: [
      { t: 'Trợ lý AI', d: 'Trả lời câu hỏi, nhận đặt chỗ, sàng lọc khách hàng tiềm năng — đúng giọng thương hiệu của bạn.' },
      { t: 'Chatbot', d: 'Triển khai ngay nơi khách hàng của bạn đang có mặt.' },
      { t: 'Trợ lý nhà hàng & khách sạn', d: 'Thực đơn, phòng, chỗ trống, giao hàng và đặt chỗ — tự động hoàn toàn.' },
      { t: 'Trợ lý phòng khám & salon', d: 'Nha khoa, spa, massage và salon làm đẹp — lịch hẹn trả lời ngay lập tức.' },
      { t: 'Tích hợp CRM', d: 'Mỗi cuộc trò chuyện trở thành một khách hàng tiềm năng để theo dõi.' },
      { t: 'Google Sheets', d: 'Đơn hàng và đặt chỗ đổ thẳng vào bảng tính đội của bạn đã quen dùng.' },
      { t: 'Bot Telegram', d: 'Công cụ nội bộ và bot khách hàng, xây theo yêu cầu.' },
      { t: 'Tự động hoá riêng', d: 'Bất kỳ ngành nào, bất kỳ ngôn ngữ nào — việc gì lặp lại, việc đó có thể tự chạy.' },
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
    cases_note: 'Một vài ví dụ — mọi giải pháp đều được xây dựng riêng, cho bất kỳ ngành và ngôn ngữ nào.',
    cases_items: [
      { t: 'Nhà hàng & Khách sạn', d: 'Hỏi đáp thực đơn và phòng, đặt món giao hàng, đặt bàn/phòng qua chat.' },
      { t: 'Phòng khám nha khoa', d: 'Đặt lịch hẹn, giá dịch vụ, nhắc lịch — trả lời ngay lập tức.' },
      { t: 'Spa, Massage & Salon làm đẹp', d: 'Đặt lịch, thực đơn dịch vụ và giá cả, xử lý tự động.' },
      { t: 'Bán lẻ & Dịch vụ', d: 'Hỏi đáp sản phẩm, kiểm tra tồn kho và theo dõi đơn hàng.' },
      { t: 'Không thấy ngành của bạn?', d: 'Mọi giải pháp đều được xây dựng riêng — hãy kể cho tôi nghe về doanh nghiệp của bạn.' },
    ],

    faq_eyebrow: 'Câu hỏi',
    faq_title: 'Câu hỏi thường gặp.',
    faq_items: [
      { q: 'Có hoạt động với Zalo không?', a: 'Có — Zalo là kênh chính tôi xây dựng, cùng với Telegram và Facebook Messenger.' },
      { q: 'Chỉ làm cho nhà hàng thôi à?', a: 'Không — tôi xây dựng cho mọi doanh nghiệp địa phương: khách sạn, phòng khám nha khoa, spa, salon làm đẹp, cửa hàng và dịch vụ. Mọi giải pháp đều tuỳ chỉnh.' },
      { q: 'Có thể hoạt động bằng ngôn ngữ của tôi không?', a: 'Có — tiếng Việt, Anh, Nga, hoặc bất kỳ ngôn ngữ nào khách hàng của bạn dùng.' },
      { q: 'Thiết lập mất bao lâu?', a: 'Hầu hết dự án sẵn sàng sau 3–5 ngày, tuỳ phạm vi công việc.' },
      { q: 'Tôi có cần ChatGPT không?', a: 'Không cần đăng ký riêng — AI đã được tích hợp sẵn trong trợ lý của bạn ngay từ đầu.' },
    ],

    about_eyebrow: 'Người đứng sau',
    about_title: 'Gặp gỡ nhà phát triển',
    about_greeting: 'Xin chào, tôi là Artem.',
    about_body: 'Tôi là kỹ sư tự động hoá với nhiều năm kinh nghiệm xây dựng hệ thống SCADA công nghiệp, tự động hoá doanh nghiệp và trợ lý AI. Tôi giúp các doanh nghiệp địa phương — nhà hàng, khách sạn, phòng khám, salon và hơn thế nữa — tự động hoá đặt chỗ, chăm sóc khách hàng và đơn hàng qua Telegram, Zalo và các nền tảng nhắn tin khác.',
    about_note: 'Mỗi giải pháp được xây dựng riêng cho doanh nghiệp của bạn — không phải từ mẫu có sẵn.',

    contact_eyebrow: 'Bắt đầu tại đây',
    contact_title: 'Kể cho tôi nghe về doanh nghiệp của bạn.',
    contact_body: 'Tôi sẽ tự tay trả lời — thường trong vòng một giờ.',
    contact_cta: 'Bắt đầu dự án AI',

    chat_title: 'Thử ngay — mô tả doanh nghiệp của bạn',
    chat_placeholder: 'vd: Tôi có phòng khám nha khoa',
    chat_send: 'Gửi',
    chat_intro: 'Gõ loại hình doanh nghiệp của bạn, xem thử khách hàng có thể nhận được câu trả lời như thế nào.',

    footer_tagline: 'TỰ ĐỘNG HOÁ. ĐỔI MỚI. PHÁT TRIỂN.',
    footer_services_title: 'Dịch vụ',
    footer_services: ['Tự động hoá AI', 'Chatbot', 'Tích hợp', 'Giải pháp riêng'],
    footer_company_title: 'Giới thiệu',
    footer_company: ['Giới thiệu', 'Theo ngành', 'Hỏi đáp', 'Liên hệ'],
    footer_contact_title: 'Liên hệ',
    footer_location: 'Nha Trang, Việt Nam',
    footer_rights: 'Đã đăng ký bản quyền.',
  },
  ru: {
    brand_name: 'SmartAI VN',
    brand_tagline: 'ИИ-автоматизация для локального бизнеса',
    nav_solutions: 'Решения',
    nav_why: 'Почему мы',
    nav_process: 'Процесс',
    nav_cases: 'По отраслям',
    nav_faq: 'Вопросы',
    nav_about: 'Обо мне',
    nav_contact: 'Контакты',
    hero_eyebrow: 'AI-ассистент · Автоматизация · Индивидуальные решения',
    hero_title_1: 'Клиенты пишут вам сообщения.',
    hero_title_2: 'Кто-то должен отвечать за секунды — а не за дни.',
    hero_body: 'Я делаю AI-ассистентов и автоматизацию для малого бизнеса во Вьетнаме — рестораны, отели, стоматологии, спа, салоны красоты, магазины и другое. Полностью индивидуальные решения, на любом языке.',
    hero_cta_zalo: 'Написать в Zalo',
    hero_cta_telegram: 'Telegram',
    hero_cta_email: 'Email',
    hero_demo_label: 'время ответа',

    value_items: [
      { t: 'Готово за 3–5 дней' },
      { t: 'Без ежемесячных контрактов' },
      { t: 'Личная поддержка' },
      { t: 'Размещение на вашем сервере или в облаке' },
    ],

    why_eyebrow: 'Почему SmartAI VN',
    why_title: 'Всё, что реально нужно занятому локальному бизнесу.',
    why_items: [
      'Отвечает мгновенно, 24/7',
      'Работает на вьетнамском, английском, русском — или любом языке',
      'Работает в Telegram, Zalo и Facebook',
      'Обрабатывает бронирования, заказы и записи',
      'ИИ обучен именно под ваш бизнес, а не общий скрипт',
      'Не нужно покупать или обслуживать дорогой софт',
    ],

    problem_eyebrow: 'Цена медленных ответов',
    problem_title: 'Не теряйте клиентов из-за медленных ответов.',
    problem_1_title: 'Пропущенные сообщения',
    problem_1_body: 'Клиенты пишут в нерабочее время — в Zalo, Telegram, Instagram. Половина сообщений остаётся вообще без ответа.',
    problem_2_title: 'Ручная работа',
    problem_2_body: 'Одни и те же вопросы, вручную, каждый день — цены, часы работы, наличие мест, запись.',
    problem_3_title: 'Потерянная выручка',
    problem_3_body: 'Медленный ответ — это заказ, который уходит конкуренту, ответившему первым.',

    solutions_eyebrow: 'Что я делаю',
    solutions_title: 'Решения под реальную работу вашего бизнеса.',
    solutions_items: [
      { t: 'AI-ассистент', d: 'Отвечает на вопросы, принимает записи, квалифицирует лиды — голосом вашего бренда.' },
      { t: 'Чат-боты', d: 'Разворачиваются там, где уже есть ваши клиенты.' },
      { t: 'Ассистент для ресторана и отеля', d: 'Меню, номера, наличие, доставка и бронирования — полностью автоматически.' },
      { t: 'Ассистент для клиник и салонов', d: 'Стоматологии, спа, массаж и салоны красоты — записи обрабатываются мгновенно.' },
      { t: 'Интеграция с CRM', d: 'Каждый диалог превращается в лид, с которым можно работать дальше.' },
      { t: 'Google Sheets', d: 'Заказы и записи попадают прямо в таблицу, с которой уже привыкла работать ваша команда.' },
      { t: 'Боты для Telegram', d: 'Внутренние инструменты и боты для клиентов, под задачу.' },
      { t: 'Индивидуальная автоматизация', d: 'Любой бизнес, любой язык — если задача повторяется, она может выполняться сама.' },
    ],

    process_eyebrow: 'Как мы работаем',
    process_title: 'Пять шагов — от первого сообщения до запуска.',
    process_items: [
      { t: 'Бесплатная консультация', d: 'Обсуждаем, что реально тормозит ваш бизнес.' },
      { t: 'Анализ бизнеса', d: 'Я разбираю ваш реальный процесс — не общий шаблон.' },
      { t: 'Разработка решения', d: 'Ассистент, автоматизация или интеграция — под ваш случай.' },
      { t: 'Запуск', d: 'Работает в тех каналах, которыми уже пользуются ваши клиенты.' },
      { t: 'Поддержка', d: 'Я остаюсь на связи, дорабатываю и расширяю по мере роста.' },
    ],

    cases_eyebrow: 'По отраслям',
    cases_title: 'Решения для вашего бизнеса',
    cases_note: 'Несколько примеров — каждое решение делается индивидуально, под любую отрасль и язык.',
    cases_items: [
      { t: 'Ресторан и отель', d: 'Вопросы по меню и номерам, доставка, бронирование столов и номеров через чат.' },
      { t: 'Стоматология', d: 'Запись на приём, цены на услуги, напоминания — ответ мгновенно.' },
      { t: 'Спа, массаж и салон красоты', d: 'Запись на услуги, прайс-лист, обработка автоматически.' },
      { t: 'Розница и услуги', d: 'Вопросы по товарам, наличие на складе и отслеживание заказов.' },
      { t: 'Не нашли свою отрасль?', d: 'Каждое решение делается индивидуально — расскажите о своём бизнесе, и я спроектирую ассистента под него.' },
    ],

    faq_eyebrow: 'Вопросы',
    faq_title: 'Частые вопросы.',
    faq_items: [
      { q: 'Работает с Zalo?', a: 'Да — Zalo основной канал, под который я делаю решения, вместе с Telegram и Facebook Messenger.' },
      { q: 'Вы делаете только для ресторанов?', a: 'Нет — я работаю с любым локальным бизнесом: отели, стоматологии, спа, салоны красоты, магазины и услуги. Каждое решение индивидуально.' },
      { q: 'Может работать на моём языке?', a: 'Да — вьетнамский, английский, русский или любой язык, на котором говорят ваши клиенты.' },
      { q: 'Сколько занимает настройка?', a: 'Большинство проектов готовы за 3–5 дней, в зависимости от объёма.' },
      { q: 'Нужна ли мне подписка на ChatGPT?', a: 'Нет, отдельная подписка не нужна — ИИ уже встроен в вашего ассистента с первого дня.' },
    ],

    about_eyebrow: 'Кто за этим стоит',
    about_title: 'Разработчик',
    about_greeting: 'Привет, я Артём.',
    about_body: 'Я инженер по автоматизации с многолетним опытом создания промышленных SCADA-систем, бизнес-автоматизации и AI-ассистентов. Я помогаю локальному бизнесу — ресторанам, отелям, клиникам, салонам и другим — автоматизировать бронирования, поддержку клиентов и заказы через Telegram, Zalo и другие мессенджеры.',
    about_note: 'Каждое решение делается конкретно под ваш бизнес — а не по общему шаблону.',

    contact_eyebrow: 'Начните здесь',
    contact_title: 'Расскажите о своём бизнесе.',
    contact_body: 'Отвечу лично — обычно в течение часа.',
    contact_cta: 'Начать AI-проект',

    chat_title: 'Попробуйте — опишите свой бизнес',
    chat_placeholder: 'например: у меня стоматология',
    chat_send: 'Отправить',
    chat_intro: 'Напишите, каким бизнесом вы занимаетесь, и посмотрите, какой ответ могли бы получить ваши клиенты.',

    footer_tagline: 'АВТОМАТИЗАЦИЯ. ИННОВАЦИИ. РОСТ.',
    footer_services_title: 'Услуги',
    footer_services: ['ИИ-автоматизация', 'Чат-боты', 'Интеграции', 'Индивидуальные решения'],
    footer_company_title: 'Обо мне',
    footer_company: ['Обо мне', 'По отраслям', 'Вопросы', 'Контакты'],
    footer_contact_title: 'Контакты',
    footer_location: 'Нячанг, Вьетнам',
    footer_rights: 'Все права защищены.',
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
