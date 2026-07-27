import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import AnimatedBackground from '../ui/AnimatedBackground.jsx'
import GradientButton from '../ui/GradientButton.jsx'

const stats = [
  { value: '40+', label: 'запущенных продуктов' },
  { value: '98%', label: 'клиентов продлевают сотрудничество' },
  { value: '2–4 нед.', label: 'средний срок запуска MVP' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="relative flex min-h-screen items-center pt-32 pb-20">
      <AnimatedBackground />

      <div className="container-nova">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(139,92,246,0.8)]" />
            <span className="eyebrow">NOVA AI · DIGITAL STUDIO</span>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            Создаём <span className="text-gradient">AI-продукты</span>, сайты и{' '}
            <span className="text-gradient">Telegram-ботов</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            NOVA STUDIO помогает бизнесу автоматизировать процессы и запускать современные цифровые продукты — от идеи до продакшена.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <GradientButton onClick={() => navigate('/contact')}>Заказать проект</GradientButton>
            <GradientButton variant="ghost" icon={false} onClick={() => navigate('/portfolio')}>
              <span className="flex items-center gap-2">
                <Play size={14} />
                Смотреть работы
              </span>
            </GradientButton>
          </motion.div>

          <motion.div variants={item} className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/8 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-mono text-2xl font-medium text-white sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        aria-label="Прокрутить вниз"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted md:flex"
      >
        <span className="eyebrow">Листайте</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </motion.span>
      </motion.button>
    </section>
  )
}
