'use client'

import { motion } from 'framer-motion'
import { appleEasing } from '../lib/animations'

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
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f22] via-[#0a0d1c] to-[#090c18]" />
      <div className="absolute inset-0 film-grain pointer-events-none z-[1]" />

      {/* Top marquee */}
      <div className="relative z-10 mb-8 opacity-30">
        <div className="marquee-container">
          <div className="marquee-track" aria-hidden="true">
            {[...ticker, ...ticker].map((item, i) => (
              <span
                key={i}
                className="font-mono text-xs md:text-sm tracking-[0.2em] text-white/40 uppercase whitespace-nowrap"
              >
                {item}
                <span className="mx-5 md:mx-8 text-cyan-500/30">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center statement */}
      <div className="relative z-10 py-12 md:py-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: appleEasing }}
        >
          <motion.div
            className="w-12 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-10 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: appleEasing }}
          />
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
            Dashboards don&apos;t matter.
            <br />
            <span className="hero-gradient-text italic">Decisions do.</span>
          </h2>
        </motion.div>
      </div>

      {/* Bottom marquee — reversed */}
      <div className="relative z-10 mt-8 opacity-30">
        <div className="marquee-container">
          <div className="marquee-track marquee-reverse" aria-hidden="true">
            {[...ticker, ...ticker].map((item, i) => (
              <span
                key={i}
                className="font-mono text-xs md:text-sm tracking-[0.2em] text-white/40 uppercase whitespace-nowrap"
              >
                {item}
                <span className="mx-5 md:mx-8 text-cyan-500/30">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0c0f22] to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#090c18] to-transparent z-[2]" />
    </section>
  )
}
