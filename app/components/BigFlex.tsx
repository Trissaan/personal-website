'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { containerVariants, itemVariants, viewportConfig, appleEasing } from '../lib/animations'
import DagBackground from './DagBackground'

const stats = [
  { value: 'Seek', label: 'Job Board Scraping' },
  { value: 'GPT', label: 'Resume & Cover Letter Tailoring' },
  { value: 'Cognito', label: 'JWT Auth + User Accounts' },
  { value: 'Live', label: 'Progress Dashboard' },
]

const techStack = ['Python', 'FastAPI', 'Playwright', 'OpenAI API', 'Next.js', 'TypeScript', 'MongoDB', 'AWS Cognito']

export default function BigFlex() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section
      ref={sectionRef}
      id="agent"
      className="relative min-h-screen flex items-center overflow-hidden py-32"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-700 via-carbon-800 to-carbon-800" />
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <DagBackground accent="sageSoft" variant={2} intensity={0.85} />
        </motion.div>
      </div>
      <div className="absolute inset-0 film-grain pointer-events-none z-[1]" />
      <div className="absolute inset-0 vignette pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.p
          className="text-sm tracking-[0.3em] uppercase text-sage-300/80 mb-6 font-medium font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
        >
          Featured Project
        </motion.p>

        <motion.h2
          className="apple-headline text-carbon-100 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8, ease: appleEasing }}
        >
          I built an AI that applies
          <br />
          <span className="hero-gradient-text">to jobs for me.</span>
        </motion.h2>

        <motion.p
          className="apple-body mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.2, ease: appleEasing }}
        >
          Full-stack platform: Playwright scrapes Seek listings, GPT tailors my resume &
          cover letter per job, then tracks every application in a live dashboard.
          Backend on FastAPI + MongoDB, frontend on Next.js, auth via AWS Cognito.
        </motion.p>

        <motion.p
          className="text-carbon-400 text-sm mb-16 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ delay: 0.3 }}
        >
          Background schedulers continuously monitor new listings matching my criteria.
          No manual applications &mdash; the system handles end-to-end.
        </motion.p>

        {/* How it works */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-carbon-100/[0.02] border border-carbon-500/40 backdrop-blur-sm hover:border-sage-300/40 hover:bg-sage-300/[0.03] transition-all duration-500"
            >
              <p className="text-xs tracking-widest uppercase text-carbon-400 mb-3 font-mono">Step {i + 1}</p>
              <p className="text-lg md:text-xl font-bold text-carbon-100 mb-1">{stat.value}</p>
              <p className="text-carbon-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech stack */}
        <motion.div
          className="flex flex-wrap gap-3 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {techStack.map((tech) => (
            <span key={tech} className="px-4 py-2 text-sm rounded-full bg-carbon-100/[0.03] text-carbon-300 border border-carbon-500/40">
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/projects/ai-job-application-automation"
            className="inline-flex items-center gap-2 text-sage-300 hover:text-sage-200 transition-colors text-lg font-medium group"
          >
            View Full Case Study
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </motion.div>
      </div>

    </section>
  )
}
