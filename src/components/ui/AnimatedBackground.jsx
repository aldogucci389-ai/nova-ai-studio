import { useEffect, useRef } from 'react'

/**
 * AnimatedBackground — signature visual of NOVA STUDIO.
 * A slow-drifting neural-network node graph rendered on canvas, layered
 * under soft gradient blobs and a masked grid. Evokes "AI thinking" without
 * being a literal robot/brain cliché. Respects prefers-reduced-motion.
 */
export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width, height, dpr
    let nodes = []
    let animationId

    const NODE_COUNT_BASE = 46

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.parentElement.offsetWidth
      height = canvas.parentElement.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.max(18, Math.round((width * height) / 34000))
      nodes = Array.from({ length: Math.min(count, NODE_COUNT_BASE + 20) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      const maxDist = Math.min(160, width / 6)

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.16
            ctx.strokeStyle = `rgba(139, 156, 246, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(196, 181, 253, 0.55)'
        ctx.fill()
      }

      if (!prefersReduced) {
        animationId = requestAnimationFrame(step)
      }
    }

    resize()
    step()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement)

    return () => {
      cancelAnimationFrame(animationId)
      ro.disconnect()
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-mask" />

      <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[140px]" />
      <div className="absolute top-20 right-0 h-[480px] w-[480px] rounded-full bg-accent/25 blur-[140px]" />

      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  )
}
