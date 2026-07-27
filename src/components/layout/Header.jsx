import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, Sparkles } from 'lucide-react'
import MobileMenu from './MobileMenu.jsx'
import GradientButton from '../ui/GradientButton.jsx'

const links = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/portfolio', label: 'Портфолио' },
  { to: '/pricing', label: 'Цены' },
  { to: '/about', label: 'О нас' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`container-nova flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
            scrolled ? 'glass' : ''
          }`}
        >
          <NavLink to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Sparkles size={16} className="text-white" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">NOVA STUDIO</span>
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-muted hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <GradientButton onClick={() => navigate('/contact')} className="!px-5 !py-2.5 text-sm">
              Заказать проект
            </GradientButton>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
            className="rounded-full border border-white/10 p-2 text-white md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
