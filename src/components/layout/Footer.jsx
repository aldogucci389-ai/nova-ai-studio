import { NavLink } from 'react-router-dom'
import { Sparkles, Send, Mail, Github } from 'lucide-react'

const columns = [
  {
    title: 'Услуги',
    links: [
      { to: '/services', label: 'Веб-разработка' },
      { to: '/services', label: 'Telegram-боты' },
      { to: '/services', label: 'AI-ассистенты' },
      { to: '/services', label: 'Автоматизация' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { to: '/about', label: 'О нас' },
      { to: '/portfolio', label: 'Портфолио' },
      { to: '/pricing', label: 'Цены' },
      { to: '/contact', label: 'Контакты' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-surface/60">
      <div className="container-nova py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Sparkles size={16} className="text-white" />
              </span>
              <span className="font-display text-lg font-semibold">NOVA STUDIO</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Проектируем и запускаем AI-продукты, сайты и Telegram-ботов для бизнеса, который хочет расти быстрее.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="mailto:hello@novastudio.ai" aria-label="Email" className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:text-white">
                <Mail size={16} />
              </a>
              <a href="https://t.me/novastudio" target="_blank" rel="noreferrer" aria-label="Telegram" className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:text-white">
                <Send size={16} />
              </a>
              <a href="https://github.com/novastudio" target="_blank" rel="noreferrer" aria-label="GitHub" className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:text-white">
                <Github size={16} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <NavLink to={link.to} className="text-sm text-muted transition-colors hover:text-white">
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="eyebrow">Контакты</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>hello@novastudio.ai</li>
              <li>@novastudio</li>
              <li>Москва · Удалённо по миру</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} NOVA STUDIO. Все права защищены.</p>
          <p>Бренд NOVA AI · Сделано с фокусом на результат</p>
        </div>
      </div>
    </footer>
  )
}
