export const appleEasing = [0.25, 0.46, 0.45, 0.94]

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: appleEasing },
  },
}

export const viewportConfig = { once: true, margin: '-100px' as const }
