'use client'

import { Fragment } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Database, Code, GitBranch, BarChart3, Brain } from 'lucide-react'
import { containerVariants, itemVariants, viewportConfig, appleEasing } from '../lib/animations'
import DagBackground from './DagBackground'

const pipelineSteps = [
  { icon: Database, name: 'Ingest', tool: 'PostgreSQL' },
  { icon: Code, name: 'Transform', tool: 'Python + PySpark' },
  { icon: GitBranch, name: 'Orchestrate', tool: 'Airflow / DAGs' },
  { icon: BarChart3, name: 'Visualize', tool: 'Power BI' },
  { icon: Brain, name: 'Automate', tool: 'AI / LLM' },
]

export default function Engineering() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.6], ['0%', '100%'])

  return (
    <section
      ref={sectionRef}
      id="engineering"
      className="relative min-h-screen flex items-center overflow-hidden py-32"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-700 via-carbon-800 to-carbon-800" />
        <DagBackground accent="sage" variant={1} intensity={0.8} />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(232,233,234,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232,233,234,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Film grain */}
      <div className="absolute inset-0 film-grain pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
        <motion.h2
          className="apple-headline text-carbon-100 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8, ease: appleEasing }}
        >
          Not just dashboards.
          <br />
          <span className="hero-gradient-text">Systems.</span>
        </motion.h2>

        <motion.p
          className="apple-body mb-24 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.2, ease: appleEasing }}
        >
          End-to-end data infrastructure, from ingestion to insight.
        </motion.p>

        {/* Animated connecting line (desktop) */}
        <div className="hidden md:block relative mb-8">
          <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-carbon-500/60" />
          <motion.div
            className="absolute top-1/2 left-[10%] h-px bg-gradient-to-r from-sage-400/70 via-sage-300/70 to-sage-200/70"
            style={{ width: lineWidth }}
          />
        </div>

        {/* Pipeline visual */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {pipelineSteps.map((step, i) => (
            <Fragment key={step.name}>
              <motion.div
                variants={itemVariants}
                className="relative flex flex-col items-center p-6 rounded-xl bg-carbon-100/[0.02] border border-carbon-500/40 w-36 md:w-40 hover:border-sage-300/40 hover:bg-sage-300/[0.04] transition-all duration-500 group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-sage-300/[0.15] rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center">
                  <step.icon size={28} className="text-sage-300 mb-3" />
                  <p className="text-carbon-100 font-semibold text-sm">{step.name}</p>
                  <p className="text-carbon-400 text-xs mt-1">{step.tool}</p>
                </div>
              </motion.div>
              {i < pipelineSteps.length - 1 && (
                <>
                  <motion.span
                    variants={itemVariants}
                    className="text-carbon-400 text-xl hidden md:block"
                  >
                    &rarr;
                  </motion.span>
                  <motion.span
                    variants={itemVariants}
                    className="text-carbon-400 text-xl md:hidden"
                  >
                    &darr;
                  </motion.span>
                </>
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
