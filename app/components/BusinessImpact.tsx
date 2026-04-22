'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { Database, BarChart3, Zap, Shield } from 'lucide-react'
import { containerVariants, itemVariants, viewportConfig, appleEasing } from '../lib/animations'
import DagBackground from './DagBackground'
import CountUp from './CountUp'

type ImpactCard = {
  icon: typeof Database
  titleNode: ReactNode
  description: string
  color: string
}

const impactCards: ImpactCard[] = [
  {
    icon: Database,
    titleNode: (
      <>
        <CountUp to={15000} suffix="+" /> Daily Records
      </>
    ),
    description: 'SQL + Python pipelines with automated validation gates processing transactional data for Mondelez (~$2M), Nestl\u00e9, L\u2019Or\u00e9al, and Asahi.',
    color: 'text-sage-300',
  },
  {
    icon: BarChart3,
    titleNode: 'Power BI Dashboards',
    description: 'DAX-based KPI measures across financial, logistics, and client performance. Used by operations, finance, and C-suite for decision-making.',
    color: 'text-sage-200',
  },
  {
    icon: Zap,
    titleNode: 'Manual \u2192 Automated',
    description: 'Replaced Excel-based workflows with Python + SQL automation and Power Automate distribution, eliminating manual handoffs.',
    color: 'text-carbon-200',
  },
  {
    icon: Shield,
    titleNode: 'Data Quality Gates',
    description: 'Anomaly detection, data drift monitoring, and systematic reconciliation workflows catching errors before they reach downstream systems.',
    color: 'text-sage-400',
  },
]

export default function BusinessImpact() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative min-h-screen flex items-center overflow-hidden py-32"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-800 via-carbon-800 to-carbon-700" />
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <DagBackground accent="sageDeep" variant={3} intensity={0.8} />
        </motion.div>
      </div>
      <div className="absolute inset-0 film-grain pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.p
          className="text-sm tracking-[0.3em] uppercase text-sage-300/70 mb-6 font-medium font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
        >
          Packcentre Marketing Services &middot; Apr 2024 &ndash; Mar 2026
        </motion.p>

        <motion.h2
          className="apple-headline text-carbon-100 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8, ease: appleEasing }}
        >
          From 15,000+ records
          <br />
          <span className="hero-gradient-text">to real decisions.</span>
        </motion.h2>

        <motion.p
          className="apple-body mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.2, ease: appleEasing }}
        >
          Owned the full lifecycle of reporting systems &mdash; from schema design through deployment.
          Partnered with operations, finance, and C-suite to translate requirements into data products.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {impactCards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group p-8 rounded-2xl bg-carbon-100/[0.02] border border-carbon-500/40 hover:border-sage-300/30 hover:bg-sage-300/[0.02] transition-colors duration-500"
            >
              <div className={`${card.color} mb-5`}>
                <card.icon size={36} />
              </div>
              <h3 className="text-xl font-bold text-carbon-100 mb-3">{card.titleNode}</h3>
              <p className="text-carbon-300 leading-relaxed text-sm">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
