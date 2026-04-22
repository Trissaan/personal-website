'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ReactNode, useRef } from 'react'

type Props = {
  children: ReactNode
  strength?: number
  className?: string
}

export default function MagneticWrapper({ children, strength = 0.22, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.2 })

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={(e) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        x.set((e.clientX - rect.left - rect.width / 2) * strength)
        y.set((e.clientY - rect.top - rect.height / 2) * strength)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      <motion.div style={{ x: springX, y: springY }} className="inline-block">
        {children}
      </motion.div>
    </div>
  )
}
