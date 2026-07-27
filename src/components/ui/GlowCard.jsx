import { motion } from 'framer-motion'

/**
 * GlowCard — glassmorphic card with a cursor-following radial glow on hover.
 * Used for service cards, portfolio cards and pricing cards.
 */
export default function GlowCard({ children, className = '', as = 'div', ...rest }) {
  function handleMouseMove(e) {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  const Component = motion[as] || motion.div

  return (
    <Component
      onMouseMove={handleMouseMove}
      className={`glow-card group relative overflow-hidden rounded-2xl glass p-8 ${className}`}
      {...rest}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(360px circle at var(--x, 50%) var(--y, 50%), rgba(59,130,246,0.14), transparent 70%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </Component>
  )
}
