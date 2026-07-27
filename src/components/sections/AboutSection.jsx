import { motion } from 'framer-motion'
import { Target, Users, Zap } from 'lucide-react'
import GlowCard from '../ui/GlowCard.jsx'

const values = [
  {
    icon: Target,
    title: 'Фокус на результат',
    description: 'Мы измеряем успех метриками бизнеса, а не количеством строк кода.',
  },
  {
    icon: Zap,
    title: 'Скорость без компромиссов',
    description: 'Запускаем MVP за недели, но никогда не жертвуем качеством кода.',
  },
  {
    icon: Users,
    title: 'Партнёрство, а не подряд',
    description: 'Погружаемся в продукт клиента так, будто это наш собственный.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function AboutSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-nova">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">О студии</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Команда инженеров и дизайнеров, влюблённая в <span className="text-gradient">AI-продукты</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              NOVA STUDIO — это команда фронтенд- и бэкенд-инженеров, дизайнеров и специалистов по AI. Мы работаем с
              бизнесом от идеи до продакшена: проектируем архитектуру, пишем код и отвечаем за результат после запуска.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              За последние годы мы запустили десятки продуктов — от лендингов до сложных AI-платформ — и знаем, как
              довести проект до готового к продажам состояния.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={item}>
                <GlowCard className="flex items-start gap-5 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <v.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.description}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
