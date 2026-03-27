'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Github } from 'lucide-react'
import Link from 'next/link'
import { containerVariants, itemVariants, viewportConfig, appleEasing } from '../lib/animations'

const featured = [
  {
    slug: 'email-insights-agent',
    title: 'Email Insights Agent',
    description: 'AI-powered inbox analysis via WhatsApp/SMS. Claude with tool-use reasoning, Gmail OAuth, Twilio integration.',
    tech: ['Python', 'Claude API', 'Gmail API', 'Twilio'],
    accent: 'cyan',
  },
  {
    slug: 'enterprise-operations-data-platform',
    title: 'Enterprise Data Platform',
    description: 'End-to-end reporting for Mondelez, Nestlé, L\'Oréal. 15,000+ daily records, automated Power BI dashboards.',
    tech: ['Python', 'SQL', 'Power BI', 'Power Automate'],
    accent: 'blue',
  },
  {
    slug: 'speech-emotion-recognition',
    title: 'Speech Emotion Recognition',
    description: 'CNN-based audio classification detecting emotions from speech patterns. Real-time inference pipeline.',
    tech: ['Python', 'TensorFlow', 'Librosa', 'CNN'],
    accent: 'violet',
  },
]

const accentMap: Record<string, { border: string; tag: string; hover: string }> = {
  cyan: { border: 'border-cyan-500/20', tag: 'text-cyan-400', hover: 'hover:border-cyan-500/40' },
  blue: { border: 'border-blue-500/20', tag: 'text-blue-400', hover: 'hover:border-blue-500/40' },
  violet: { border: 'border-violet-500/20', tag: 'text-violet-400', hover: 'hover:border-violet-500/40' },
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen flex items-center overflow-hidden py-32"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1024] via-[#0e1128] to-[#0f122a]" />
        <div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[160px]"
          style={{ animation: 'float-orb 22s ease-in-out infinite' }}
        />
      </div>
      <div className="absolute inset-0 film-grain pointer-events-none z-[1]" />

      <motion.div className="relative z-10 max-w-6xl mx-auto px-6 w-full" style={{ opacity }}>
        <motion.p
          className="text-sm tracking-[0.3em] uppercase text-cyan-400/60 mb-6 font-medium font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
        >
          Selected Projects
        </motion.p>

        <motion.h2
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
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
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {featured.map((project) => {
            const colors = accentMap[project.accent]
            return (
              <motion.div key={project.slug} variants={itemVariants}>
                <Link
                  href={`/projects/${project.slug}`}
                  className={`group block p-7 rounded-2xl bg-white/[0.02] border ${colors.border} ${colors.hover} hover:bg-white/[0.04] transition-all duration-500 h-full`}
                >
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 text-xs rounded-full bg-white/[0.04] ${colors.tag} border border-white/5`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.a
          href="https://github.com/trissaan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
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

      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0d1024] to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0f122a] to-transparent z-[2]" />
    </section>
  )
}
