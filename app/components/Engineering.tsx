'use client'

import { Fragment } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Database, Code, GitBranch, BarChart3, Brain } from 'lucide-react'
import { containerVariants, itemVariants, viewportConfig, appleEasing } from '../lib/animations'

const pipelineSteps = [
  { icon: Database, name: 'Ingest', tool: 'PostgreSQL', glow: 'bg-cyan-500/20' },
  { icon: Code, name: 'Transform', tool: 'Python + PySpark', glow: 'bg-blue-500/20' },
  { icon: GitBranch, name: 'Orchestrate', tool: 'Airflow / DAGs', glow: 'bg-violet-500/20' },
  { icon: BarChart3, name: 'Visualize', tool: 'Power BI', glow: 'bg-amber-500/20' },
  { icon: Brain, name: 'Automate', tool: 'AI / LLM', glow: 'bg-emerald-500/20' },
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f122a] via-[#0e1128] to-[#0c0f22]" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/4 rounded-full blur-[200px]"
          style={{ animation: 'pulse-glow 8s ease-in-out infinite' }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Film grain */}
      <div className="absolute inset-0 film-grain pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
        <motion.h2
          className="apple-headline text-white mb-6"
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
          <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-white/5" />
          <motion.div
            className="absolute top-1/2 left-[10%] h-px bg-gradient-to-r from-cyan-500/50 via-violet-500/50 to-emerald-500/50"
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
                className="relative flex flex-col items-center p-6 rounded-xl bg-white/[0.03] border border-white/5 w-36 md:w-40 hover:border-white/15 hover:bg-white/[0.06] transition-all duration-500 group"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 ${step.glow} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 flex flex-col items-center">
                  <step.icon size={28} className="text-cyan-400 mb-3" />
                  <p className="text-white font-semibold text-sm">{step.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{step.tool}</p>
                </div>
              </motion.div>
              {i < pipelineSteps.length - 1 && (
                <>
                  <motion.span
                    variants={itemVariants}
                    className="text-gray-600 text-xl hidden md:block"
                  >
                    &rarr;
                  </motion.span>
                  <motion.span
                    variants={itemVariants}
                    className="text-gray-600 text-xl md:hidden"
                  >
                    &darr;
                  </motion.span>
                </>
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>

      {/* Transition gradients */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0f122a] to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0c0f22] to-transparent z-[2]" />
    </section>
  )
}
