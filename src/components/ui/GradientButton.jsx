import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/**
 * GradientButton — primary call-to-action button used across the site.
 * variant: 'solid' | 'ghost'
 */
export default function GradientButton({
  children,
  onClick,
  type = 'button',
  variant = 'solid',
  icon = true,
  className = '',
  as = 'button',
  href,
}) {
  const Component = as === 'a' ? motion.a : motion.button

  const base =
    'group relative inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm tracking-wide transition-shadow duration-300 focus-visible:outline-2 focus-visible:outline-primary'

  const solid =
    'text-white bg-gradient-to-r from-primary to-accent shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] hover:shadow-[0_0_28px_rgba(139,92,246,0.55)]'

  const ghost =
    'text-white glass hover:border-primary/50 hover:bg-white/[0.06]'

  return (
    <Component
      href={href}
      type={as === 'button' ? type : undefined}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`${base} ${variant === 'solid' ? solid : ghost} ${className}`}
    >
      <span>{children}</span>
      {icon && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />}
    </Component>
  )
}
