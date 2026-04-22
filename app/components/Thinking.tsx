'use client'

import { motion } from 'framer-motion'
import { appleEasing } from '../lib/animations'
import DagBackground from './DagBackground'

const ticker = [
  'DATA PIPELINES',
  'PYSPARK',
  'SQL',
  'POWER BI',
  'AWS',
  'PYTHON',
  'FASTAPI',
  'POSTGRESQL',
  'LLM SYSTEMS',
  'DATABRICKS',
  'AUTOMATION',
  'DATA QUALITY',
  'ETL',
  'ORCHESTRATION',
]

export default function Thinking() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-carbon-800 via-carbon-900 to-carbon-900" />
      <div className="absolute inset-0">
        <DagBackground accent="sage" variant={3} intensity={0.5} />
      </div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(125,211,192,0.08) 0%, rgba(125,211,192,0.03) 40%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 film-grain pointer-events-none z-[1]" />

      {/* Top marquee */}
      <div className="relative z-10 mb-8 md:mb-12 opacity-25">
        <div className="marquee-container">
          <div className="marquee-track" aria-hidden="true">
            {[...ticker, ...ticker].map((item, i) => (
              <span
                key={i}
                className="font-mono text-xs md:text-sm tracking-[0.2em] text-carbon-200/50 uppercase whitespace-nowrap"
              >
                {item}
                <span className="mx-5 md:mx-8 text-sage-300/35">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Centerpiece */}
      <div className="relative z-10 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: appleEasing }}
        >
          <div className="flex items-center gap-5 mb-10 md:mb-14">
            <span className="font-mono text-[11px] md:text-xs tracking-[0.4em] uppercase text-sage-300/90">
              Thesis
            </span>
            <motion.div
              className="h-px bg-gradient-to-r from-sage-300/70 via-sage-400/40 to-transparent flex-1 max-w-[240px]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: appleEasing }}
              style={{ transformOrigin: 'left' }}
            />
            <span className="font-mono text-[11px] md:text-xs tracking-[0.3em] text-carbon-400 tabular-nums">
              01 / 01
            </span>
          </div>

          <h2 className="font-display font-bold leading-[0.92] tracking-[-0.02em]">
            <span className="block outline-text text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9.5rem]">
              Dashboards
            </span>
            <span className="block outline-text text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9.5rem] pl-[5%] md:pl-[12%]">
              don&rsquo;t matter.
            </span>
            <span className="block sage-gradient-text italic text-[3rem] sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] mt-3 md:mt-6">
              Decisions&nbsp;do.
            </span>
          </h2>

          <motion.div
            className="flex items-start gap-6 mt-12 md:mt-16 max-w-2xl ml-auto"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: appleEasing }}
          >
            <div className="h-px w-12 bg-sage-300/60 mt-3 shrink-0" />
            <p className="text-base md:text-lg text-carbon-300 leading-relaxed">
              Every pipeline I ship exists to shorten the distance between a number and an
              action. Visualisation is the garnish — the work is upstream.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom marquee */}
      <div className="relative z-10 mt-8 md:mt-12 opacity-25">
        <div className="marquee-container">
          <div className="marquee-track marquee-reverse" aria-hidden="true">
            {[...ticker, ...ticker].map((item, i) => (
              <span
                key={i}
                className="font-mono text-xs md:text-sm tracking-[0.2em] text-carbon-200/50 uppercase whitespace-nowrap"
              >
                {item}
                <span className="mx-5 md:mx-8 text-sage-300/35">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
