'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { containerVariants, itemVariants, viewportConfig, appleEasing } from '../lib/animations'

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#10132a] via-[#0f1128] to-[#0c0f22]" />
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[180px]" style={{ animation: 'float-orb 16s ease-in-out infinite' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/6 rounded-full blur-[140px]" style={{ animation: 'float-orb-reverse 14s ease-in-out infinite' }} />
        </motion.div>
      </div>
      <div className="absolute inset-0 film-grain pointer-events-none z-[1]" />
      <div className="absolute inset-0 vignette pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.p
          className="text-sm tracking-[0.3em] uppercase text-indigo-400/80 mb-6 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
        >
          Featured Project
        </motion.p>

        <motion.h2
          className="apple-headline text-white mb-6"
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
          className="text-gray-500 text-sm mb-16 max-w-2xl"
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
              className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-500"
            >
              <p className="text-xs tracking-widest uppercase text-gray-600 mb-3">Step {i + 1}</p>
              <p className="text-lg md:text-xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
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
            <span key={tech} className="px-4 py-2 text-sm rounded-full bg-white/[0.03] text-gray-400 border border-white/5">
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
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-lg font-medium group"
          >
            View Full Case Study
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#10132a] to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0c0f22] to-transparent z-[2]" />
    </section>
  )
}
