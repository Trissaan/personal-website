'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Github, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { containerVariants, itemVariants, viewportConfig, appleEasing } from '../lib/animations'
import DagBackground from './DagBackground'

const secondary = [
  {
    slug: 'enterprise-operations-data-platform',
    title: 'Enterprise Data Platform',
    description:
      "End-to-end reporting for Mondelez, Nestlé, L'Oréal. 15,000+ daily records, automated Power BI dashboards.",
    tech: ['Python', 'SQL', 'Power BI', 'Power Automate'],
  },
  {
    slug: 'speech-emotion-recognition',
    title: 'Speech Emotion Recognition',
    description:
      'CNN-based audio classification detecting emotions from speech patterns. Real-time inference pipeline.',
    tech: ['Python', 'TensorFlow', 'Librosa', 'CNN'],
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])

  const [spot, setSpot] = useState({ x: 80, y: 20 })

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen flex items-center overflow-hidden py-32"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-800 via-carbon-800 to-carbon-700" />
        <DagBackground accent="sage" variant={0} intensity={0.8} />
      </div>
      <div className="absolute inset-0 film-grain pointer-events-none z-[1]" />

      <motion.div className="relative z-10 max-w-6xl mx-auto px-6 w-full" style={{ opacity }}>
        <motion.p
          className="text-sm tracking-[0.3em] uppercase text-sage-300/70 mb-6 font-medium font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
        >
          Selected Projects
        </motion.p>

        <motion.h2
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-carbon-100 mb-6 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8, ease: appleEasing }}
        >
          Things I&apos;ve
          <br />
          <span className="hero-gradient-text italic">built.</span>
        </motion.h2>

        <motion.p
          className="apple-body mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.2, ease: appleEasing }}
        >
          From LLM-powered agents to enterprise data platforms — a few highlights.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-6"
        >
          {/* Featured: Email Insights Agent — wide, two-column internal */}
          <motion.div variants={itemVariants}>
            <Link
              href="/projects/email-insights-agent"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                setSpot({
                  x: ((e.clientX - rect.left) / rect.width) * 100,
                  y: ((e.clientY - rect.top) / rect.height) * 100,
                })
              }}
              className="group relative block rounded-3xl bg-gradient-to-br from-carbon-100/[0.03] to-carbon-100/[0.01] border border-sage-300/20 hover:border-sage-300/50 transition-all duration-500 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(520px circle at ${spot.x}% ${spot.y}%, rgba(125,211,192,0.14), transparent 55%)`,
                }}
              />
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at top right, rgba(125,211,192,0.08), transparent 60%)',
                }}
              />

              <div className="relative grid md:grid-cols-5 gap-8 p-8 md:p-10">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-2 mb-5">
                    <Sparkles size={14} className="text-sage-300" />
                    <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-sage-300/80">
                      Featured · LLM Agent
                    </p>
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl font-bold text-carbon-100 mb-4 leading-tight group-hover:text-sage-100 transition-colors">
                    Email Insights Agent
                  </h3>

                  <p className="text-carbon-200 text-base leading-relaxed mb-5">
                    AI-powered inbox analysis over WhatsApp/SMS. Ask in natural language —
                    Claude uses tool-use reasoning to search Gmail, summarise threads, and
                    surface what actually matters.
                  </p>

                  <p className="text-carbon-400 text-sm leading-relaxed mb-6">
                    Gmail OAuth for secure access, Twilio for two-way messaging, and a
                    reasoning loop that plans multi-step searches before answering.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Python', 'Claude API', 'Gmail API', 'Twilio', 'OAuth 2.0'].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 text-xs font-medium rounded-full border text-sage-200 bg-sage-300/[0.06] border-sage-300/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-sage-300">
                    Read case study
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>

                <div className="md:col-span-2 flex items-start">
                  <ul className="space-y-4 w-full">
                    {[
                      { label: 'Interface', value: 'WhatsApp · SMS' },
                      { label: 'Reasoning', value: 'Claude tool-use loop' },
                      { label: 'Access', value: 'Gmail OAuth 2.0' },
                      { label: 'Delivery', value: 'Twilio messaging API' },
                    ].map((row) => (
                      <li
                        key={row.label}
                        className="flex items-start justify-between gap-4 pb-3 border-b border-carbon-500/40"
                      >
                        <span className="text-[11px] tracking-[0.22em] uppercase text-carbon-400 font-mono pt-1">
                          {row.label}
                        </span>
                        <span className="text-sm text-carbon-100 font-medium text-right">
                          {row.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary: 2 smaller cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {secondary.map((project) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full p-7 rounded-2xl bg-carbon-100/[0.02] border border-carbon-500/40 hover:border-sage-300/40 hover:bg-sage-300/[0.02] transition-all duration-500"
                >
                  <h3 className="text-lg font-bold text-carbon-100 mb-3 group-hover:text-sage-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-carbon-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-full border text-carbon-200 bg-carbon-100/[0.02] border-carbon-500/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="https://github.com/trissaan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 mt-12 text-carbon-300 hover:text-carbon-100 transition-colors group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ delay: 0.4 }}
        >
          <Github size={20} />
          <span className="text-sm font-medium">More projects on GitHub</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>

    </section>
  )
}
