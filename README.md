# ai-business-landing

React + Vite + Tailwind сайт-портфолио для AI/автоматизации бизнеса. EN/VI переключатель языка, демо-чат внизу страницы.

## Публикация на GitHub Pages

1. Создай репозиторий `ai-business-landing` на GitHub (если имя другое — поменяй `base` в `vite.config.js` на `/<имя-репозитория>/`).
2. Залей эти файлы в репозиторий (через мобильное приложение GitHub или веб-загрузку — просто закинь все файлы, сохранив структуру папок, включая `.github/workflows/deploy.yml`).
3. В репозитории: Settings → Pages → Source → выбери **GitHub Actions**.
4. При каждом пуше в `main` сайт соберётся и опубликуется автоматически — ничего собирать локально не нужно.
5. Сайт будет доступен по адресу `https://<твой-юзернейм>.github.io/ai-business-landing/`.

## Локальная разработка (если понадобится)

```
npm install
npm run dev
```

## Open Graph превью (для Telegram/Zalo/FB)

В `index.html` `og:image` сейчас указан относительным путём — это может не сработать в некоторых мессенджерах. После публикации замени `%BASE_URL%og-image.png` на полный адрес, например:
`https://<твой-юзернейм>.github.io/ai-business-landing/og-image.png`

## Что заменить перед публикацией

- `mailto:hello@example.com` → твой email (Hero.jsx, Contact.jsx)
- `https://t.me/` → ссылка на твой Telegram (Hero.jsx)
- Ссылка "Contact via Zalo" сейчас ведёт на `#contact` — замени на `https://zalo.me/<твой номер>` в Hero.jsx
- Тексты кейсов (Cases.jsx / i18n.jsx) — на реальные проекты, когда появятся

## Демо-чат

Внизу страницы — чат с простыми правилами (по ключевым словам restaurant/hotel/store), без реального AI-бэкенда. Когда будет готов бэкенд с настоящей моделью — просто замени функцию `reply()` в `src/components/ChatDemo.jsx` на вызов своего API.
