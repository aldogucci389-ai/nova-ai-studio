# NOVA STUDIO

Премиальный сайт digital-студии NOVA STUDIO (бренд NOVA AI): React 18 + Vite + Tailwind CSS v4 + Framer Motion + React Router.

## Установка

```bash
npm install
npm run dev
```

## Сборка для продакшена

```bash
npm run build
npm run preview
```

## Деплой на Vercel

1. Запушьте проект в GitHub.
2. Импортируйте репозиторий в Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

## Структура проекта

```
src/
  components/
    layout/    — Header, MobileMenu, Footer
    sections/  — Hero, Services, Portfolio, Pricing, About, Contact
    ui/        — GlowCard, GradientButton, AnimatedBackground, PageHeader, PageTransition
  pages/       — Home, Services, Portfolio, Pricing, About, Contact
  App.jsx
  main.jsx
  index.css
```
