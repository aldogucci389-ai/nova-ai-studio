import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import GlowCard from '../ui/GlowCard.jsx'

export const projects = [
  {
    id: 'ai-crm-dashboard',
    title: 'AI CRM Dashboard',
    description: 'Панель управления продажами с AI-скорингом лидов, автоматическими отчётами и прогнозом выручки.',
    stack: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL'],
    gradient: 'from-primary/40 via-surface to-accent/30',
  },
  {
    id: 'crypto-p2p-bot',
    title: 'Crypto P2P Telegram Bot',
    description: 'Бот для P2P-обмена криптовалюты со встроенным эскроу, рейтингом пользователей и мультивалютностью.',
    stack: ['Telegram API', 'Node.js', 'Redis', 'PostgreSQL'],
    gradient: 'from-accent/40 via-surface to-primary/30',
  },
  {
    id: 'ai-content-studio',
    title: 'AI Content Studio',
    description: 'Генерация текста, изображений и видео-сценариев для маркетинговых команд в едином рабочем пространстве.',
    stack: ['Next.js', 'LLM', 'Stable Diffusion', 'S3'],
    gradient: 'from-primary/30 via-surface to-accent/40',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function PortfolioSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-nova">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Наши проекты</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Портфолио <span className="text-gradient">избранных запусков</span>
            </h2>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.div key={p.id} variants={item}>
              <GlowCard className="flex h-full flex-col p-0 transition-transform duration-300 hover:-translate-y-1">
                <div className={`relative h-48 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br ${p.gradient}`}>
                  <div className="absolute inset-0 grid-mask opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-sm text-white/70">{p.title}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="group mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-white">
                    Подробнее
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
