import { motion } from 'framer-motion'
import { Globe, Bot, BrainCircuit, Workflow, ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import GlowCard from '../ui/GlowCard.jsx'

export const services = [
  {
    icon: Globe,
    title: 'Веб-разработка',
    description: 'Сайты и веб-приложения с продуманным UX, быстрой загрузкой и адаптивной вёрсткой под любые экраны.',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    icon: Bot,
    title: 'Telegram-боты',
    description: 'Боты для продаж, поддержки и автоматизации: платежи, интеграции с CRM, сценарии диалогов.',
    tags: ['Node.js', 'Telegram API', 'Webhooks'],
  },
  {
    icon: BrainCircuit,
    title: 'AI-ассистенты',
    description: 'Голосовые и текстовые AI-помощники, обученные на данных вашей компании, для клиентов и команды.',
    tags: ['LLM', 'RAG', 'Function Calling'],
  },
  {
    icon: Workflow,
    title: 'Автоматизация',
    description: 'Связываем сервисы и процессы в единую систему: от заявки до отчёта — без ручной рутины.',
    tags: ['n8n', 'API', 'CRM'],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function ServicesSection() {
  const navigate = useNavigate()

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-nova">
        <div className="max-w-xl">
          <p className="eyebrow">Что мы делаем</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Услуги, которые <span className="text-gradient">двигают бизнес</span>
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={item}>
              <GlowCard
                onClick={() => navigate('/services')}
                className="h-full cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  <s.icon size={22} />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <ArrowUpRight size={18} className="mt-1 shrink-0 text-muted transition-colors group-hover:text-white" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
