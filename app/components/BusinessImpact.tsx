'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Database, BarChart3, Zap, Shield } from 'lucide-react'
import { containerVariants, itemVariants, viewportConfig, appleEasing } from '../lib/animations'

const impactCards = [
  {
    icon: Database,
    title: '15,000+ Daily Records',
    description: 'SQL + Python pipelines with automated validation gates processing transactional data for Mondelez (~$2M), Nestl\u00e9, L\u2019Or\u00e9al, and Asahi.',
    color: 'text-cyan-400',
  },
  {
    icon: BarChart3,
    title: 'Power BI Dashboards',
    description: 'DAX-based KPI measures across financial, logistics, and client performance. Used by operations, finance, and C-suite for decision-making.',
    color: 'text-blue-400',
  },
  {
    icon: Zap,
    title: 'Manual \u2192 Automated',
    description: 'Replaced Excel-based workflows with Python + SQL automation and Power Automate distribution, eliminating manual handoffs.',
    color: 'text-amber-400',
  },
  {
    icon: Shield,
    title: 'Data Quality Gates',
    description: 'Anomaly detection, data drift monitoring, and systematic reconciliation workflows catching errors before they reach downstream systems.',
    color: 'text-emerald-400',
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f22] via-[#0e1126] to-[#0d1024]" />
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[160px]" style={{ animation: 'float-orb 20s ease-in-out infinite' }} />
          <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-emerald-600/4 rounded-full blur-[140px]" style={{ animation: 'float-orb-reverse 18s ease-in-out infinite' }} />
        </motion.div>
      </div>
      <div className="absolute inset-0 film-grain pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.p
          className="text-sm tracking-[0.3em] uppercase text-cyan-400/60 mb-6 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
        >
          Packcentre Marketing Services &middot; Apr 2024 &ndash; Mar 2026
        </motion.p>

        <motion.h2
          className="apple-headline text-white mb-6"
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
          {impactCards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className={`${card.color} mb-5`}>
                <card.icon size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0c0f22] to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d1024] to-transparent z-[2]" />
    </section>
  )
}
