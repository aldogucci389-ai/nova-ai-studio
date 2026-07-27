import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Send, User, AtSign, MessageSquare } from 'lucide-react'
import GradientButton from '../ui/GradientButton.jsx'

const initialForm = { name: '', telegram: '', email: '', description: '' }

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Укажите имя'
    if (!form.telegram.trim()) next.telegram = 'Укажите Telegram'
    if (!form.email.trim()) {
      next.email = 'Укажите email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Некорректный email'
    }
    if (!form.description.trim()) next.description = 'Опишите проект'
    return next
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
    setForm(initialForm)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const fields = [
    { name: 'name', label: 'Имя', placeholder: 'Как к вам обращаться', icon: User, type: 'text' },
    { name: 'telegram', label: 'Telegram', placeholder: '@username', icon: Send, type: 'text' },
    { name: 'email', label: 'Email', placeholder: 'you@company.com', icon: AtSign, type: 'email' },
  ]

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-nova">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Свяжитесь с нами</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Расскажите о <span className="text-gradient">своём проекте</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Заполните форму — мы ответим в течение рабочего дня и предложим план запуска, сроки и стоимость.
            </p>

            <div className="mt-10 space-y-4 text-sm text-muted">
              <p>hello@novastudio.ai</p>
              <p>@novastudio</p>
              <p>Москва · Удалённо по миру</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative glass rounded-2xl p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent"
                  >
                    <CheckCircle2 size={30} className="text-white" />
                  </motion.div>
                  <h3 className="mt-6 font-display text-xl font-semibold">Заявка отправлена</h3>
                  <p className="mt-2 max-w-xs text-sm text-muted">
                    Спасибо! Мы свяжемся с вами в ближайшее время, чтобы обсудить детали проекта.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  {fields.map((f) => (
                    <div key={f.name}>
                      <label htmlFor={f.name} className="mb-2 block text-xs font-medium text-muted">
                        {f.label}
                      </label>
                      <div className="relative">
                        <f.icon size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                        <input
                          id={f.name}
                          name={f.name}
                          type={f.type}
                          value={form[f.name]}
                          onChange={handleChange}
                          placeholder={f.placeholder}
                          className={`w-full rounded-xl border bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/30 focus:border-primary/60 focus:outline-none ${
                            errors[f.name] ? 'border-red-500/60' : 'border-white/10'
                          }`}
                        />
                      </div>
                      {errors[f.name] && <p className="mt-1.5 text-xs text-red-400">{errors[f.name]}</p>}
                    </div>
                  ))}

                  <div>
                    <label htmlFor="description" className="mb-2 block text-xs font-medium text-muted">
                      Описание проекта
                    </label>
                    <div className="relative">
                      <MessageSquare size={16} className="pointer-events-none absolute left-4 top-4 text-muted" />
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Что хотите создать и какие задачи решить?"
                        className={`w-full resize-none rounded-xl border bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/30 focus:border-primary/60 focus:outline-none ${
                          errors.description ? 'border-red-500/60' : 'border-white/10'
                        }`}
                      />
                    </div>
                    {errors.description && <p className="mt-1.5 text-xs text-red-400">{errors.description}</p>}
                  </div>

                  <GradientButton type="submit" as="button" className="w-full justify-center">
                    Отправить заявку
                  </GradientButton>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
