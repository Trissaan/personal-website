'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { appleEasing } from '../lib/animations'

const terminalLines = [
  { text: '$ spark-submit pipeline.py --env prod', type: 'command' },
  { text: 'Loading 15,432 records from PostgreSQL...', type: 'info' },
  { text: 'Running validation gates...', type: 'info' },
  { text: '✓ Schema check passed', type: 'success' },
  { text: '✓ Anomaly detection — 0 flags', type: 'success' },
  { text: 'Transforming with PySpark...', type: 'info' },
  { text: '✓ 12 DAX measures refreshed', type: 'success' },
  { text: '✓ Dashboard synced to Power BI', type: 'success' },
  { text: 'Pipeline complete — 4.2s', type: 'done' },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const delay = visibleLines === 0 ? 1500 : 500 + Math.random() * 400
      const timeout = setTimeout(() => setVisibleLines((v) => v + 1), delay)
      return () => clearTimeout(timeout)
    }
    const timeout = setTimeout(() => {
      setVisibleLines(0)
      setCycle((c) => c + 1)
    }, 3500)
    return () => clearTimeout(timeout)
  }, [visibleLines])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080d] via-[#0a0c16] to-[#0d1020]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px]"
          style={{ animation: 'float-orb 12s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[130px]"
          style={{ animation: 'float-orb-reverse 15s ease-in-out infinite' }}
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="absolute inset-0 film-grain pointer-events-none z-[2]" />
      <div className="absolute inset-0 vignette pointer-events-none z-[2]" />

      {/* Two-column content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-24 lg:pt-0">
        {/* Left — Editorial text */}
        <div>
          <motion.p
            className="font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-cyan-400/70 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: appleEasing }}
          >
            Trissaan A. Shanmugasundaram
          </motion.p>

          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-7xl text-white mb-8 leading-[1.08] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: appleEasing }}
          >
            I don&apos;t just
            <br />
            analyse data.
            <br />
            <span className="hero-gradient-text italic">I build systems</span>
            <br />
            <span className="hero-gradient-text italic">that act on it.</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-400 mb-3 max-w-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: appleEasing }}
          >
            MS Data Science &middot; AWS Certified Data Engineer &middot; 2+ years building
            production data systems for Mondelez, Nestl&eacute;, L&apos;Or&eacute;al, and Asahi.
          </motion.p>

          <motion.p
            className="text-sm text-gray-600 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: appleEasing }}
          >
            Melbourne, Australia &middot; Open to Work &middot; Full work rights (485 visa, valid Feb 2028)
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: appleEasing }}
          >
            <motion.a
              href="#contact"
              className="group px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-3.5 border border-white/15 text-white font-medium rounded-full hover:border-white/30 hover:bg-white/5 transition-all text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Right — Animated terminal */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: appleEasing }}
        >
          <div className="relative">
            {/* Glow behind terminal */}
            <div className="absolute -inset-6 bg-cyan-500/[0.04] rounded-3xl blur-3xl" />

            {/* Terminal window */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d1117]/90 backdrop-blur-xl shadow-2xl">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-xs text-gray-500 ml-3">pipeline.py — production</span>
              </div>

              {/* Terminal content */}
              <div className="p-5 font-mono text-[13px] leading-relaxed space-y-2 min-h-[300px]">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={`${cycle}-${i}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className={
                      line.type === 'command'
                        ? 'text-cyan-300'
                        : line.type === 'success'
                          ? 'text-emerald-400'
                          : line.type === 'done'
                            ? 'text-amber-300 font-semibold'
                            : 'text-gray-500'
                    }
                  >
                    {line.text}
                  </motion.div>
                ))}
                {visibleLines < terminalLines.length && (
                  <motion.span
                    className="inline-block w-2 h-[18px] bg-cyan-400/80 rounded-[1px]"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                  />
                )}
                {visibleLines >= terminalLines.length && (
                  <motion.p
                    className="text-gray-600 text-xs mt-4 font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Waiting for next run...
                  </motion.p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-gray-600 font-mono">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={16} className="text-gray-600" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d1020] to-transparent z-[3]" />
    </section>
  )
}
