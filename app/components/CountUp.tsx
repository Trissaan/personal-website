'use client'

import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Props = {
  to: number
  duration?: number
  prefix?: string
  suffix?: string
  format?: boolean
}

export default function CountUp({
  to,
  duration = 2,
  prefix = '',
  suffix = '',
  format = true,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  const val = format ? display.toLocaleString() : display.toString()
  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  )
}
