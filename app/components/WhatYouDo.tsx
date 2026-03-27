'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { appleEasing, containerVariants, itemVariants, viewportConfig } from '../lib/animations'

const roles = [
  {
    title: 'Data Scientist & Analytics Engineer',
    place: 'Packcentre Marketing Services',
    period: 'Apr 2024 \u2013 Mar 2026',
    detail: '15,000+ daily records \u00b7 SQL/Python pipelines \u00b7 Power BI dashboards \u00b7 Enterprise clients (~$2M Mondelez, Nestl\u00e9, L\u2019Or\u00e9al)',
  },
  {
    title: 'Project Engineer \u2013 Data & Automation',
    place: 'Wipro',
    period: 'May 2022 \u2013 Feb 2023',
    detail: 'Enterprise data migration to AWS \u00b7 SQL extraction & validation \u00b7 Dataset reconciliation',
  },
]

const credentials = [
  'MS Data Science \u2013 Deakin University',
  'BE Electronics \u2013 Anna University',
  'AWS Certified Data Engineer',
]

export default function WhatYouDo() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative min-h-screen flex items-center overflow-hidden py-32"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1020] via-[#0f1225] to-[#10132a]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/6 rounded-full blur-[150px]" style={{ animation: 'float-orb 18s ease-in-out infinite' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[130px]" style={{ animation: 'float-orb-reverse 20s ease-in-out infinite' }} />
      </div>
      <div className="absolute inset-0 film-grain pointer-events-none z-[1]" />

      <motion.div className="relative z-10 max-w-6xl mx-auto px-6 w-full" style={{ opacity }}>
        {/* Headline */}
        <motion.h2
          className="apple-headline text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8, ease: appleEasing }}
        >
          Data &rarr; Insight &rarr; Action
        </motion.h2>

        <motion.p
          className="apple-body mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.2, ease: appleEasing }}
        >
          SQL pipelines. Python automation. LLM-powered agents. Power BI dashboards.
          I build the full stack from raw data to business decisions.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience column */}
          <div>
            <motion.p
              className="text-sm tracking-[0.3em] uppercase text-cyan-400/60 mb-8 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
            >
              Experience
            </motion.p>
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {roles.map((role) => (
                <motion.div
                  key={role.place}
                  variants={itemVariants}
                  className="border-l-2 border-cyan-500/30 pl-6"
                >
                  <h3 className="text-xl font-bold text-white mb-1">{role.title}</h3>
                  <p className="text-cyan-400 font-medium text-sm mb-1">{role.place}</p>
                  <p className="text-gray-500 text-sm mb-3">{role.period}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{role.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Credentials column */}
          <div>
            <motion.p
              className="text-sm tracking-[0.3em] uppercase text-cyan-400/60 mb-8 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
            >
              Credentials
            </motion.p>
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {credentials.map((cred) => (
                <motion.div
                  key={cred}
                  variants={itemVariants}
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <p className="text-white font-semibold">{cred}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Core stack */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm tracking-[0.3em] uppercase text-cyan-400/60 mb-4 font-medium">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'PySpark', 'Power BI', 'AWS', 'FastAPI', 'PostgreSQL', 'LLM APIs', 'Databricks'].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs rounded-full bg-white/[0.04] text-gray-400 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0d1020] to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#10132a] to-transparent z-[2]" />
    </section>
  )
}
