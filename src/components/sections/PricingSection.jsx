import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import GradientButton from '../ui/GradientButton.jsx'

export const plans = [
  {
    name: 'Start',
    price: 'от 90 000 ₽',
    description: 'Быстрый запуск для проверки гипотезы.',
    features: ['Лендинг', 'Telegram-бот', 'Базовая поддержка'],
    highlight: false,
  },
  {
    name: 'Business',
    price: 'от 250 000 ₽',
    description: 'Полноценный продукт с интеграциями и AI.',
    features: ['Многостраничный сайт', 'Интеграции', 'AI-функции'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'по запросу',
    description: 'Комплексная автоматизация бизнеса.',
    features: ['Полная автоматизация', 'CRM', 'AI-агенты', 'Приоритетная поддержка'],
    highlight: false,
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

export default function PricingSection() {
  const navigate = useNavigate()

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-nova">
        <div className="max-w-xl">
          <p className="eyebrow">Тарифы</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Прозрачные <span className="text-gradient">пакеты услуг</span>
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.highlight
                  ? 'glass border-primary/40 shadow-[0_0_60px_-10px_rgba(59,130,246,0.35)] lg:-translate-y-3'
                  : 'glass'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-medium text-white">
                  Рекомендуем
                </span>
              )}

              <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>
              <p className="mt-6 font-display text-3xl font-semibold">{plan.price}</p>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/85">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check size={12} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <GradientButton
                variant={plan.highlight ? 'solid' : 'ghost'}
                className="mt-8 w-full justify-center"
                onClick={() => navigate('/contact')}
              >
                Выбрать план
              </GradientButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
