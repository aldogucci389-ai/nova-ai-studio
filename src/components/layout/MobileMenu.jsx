import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'

const links = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/portfolio', label: 'Портфолио' },
  { to: '/pricing', label: 'Цены' },
  { to: '/about', label: 'О нас' },
  { to: '/contact', label: 'Контакты' },
]

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="container-nova flex items-center justify-between py-5">
            <span className="font-display text-lg font-semibold text-gradient">NOVA STUDIO</span>
            <button
              onClick={onClose}
              aria-label="Закрыть меню"
              className="rounded-full border border-white/10 p-2 text-white/80 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="container-nova mt-8 flex flex-col gap-2">
            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
              >
                <NavLink
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block border-b border-white/5 py-4 font-display text-2xl ${
                      isActive ? 'text-gradient' : 'text-white/85'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          <div className="container-nova absolute bottom-10 left-0 right-0">
            <p className="eyebrow">Свяжитесь с нами</p>
            <a href="mailto:hello@novastudio.ai" className="mt-1 block font-display text-lg">
              hello@novastudio.ai
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
