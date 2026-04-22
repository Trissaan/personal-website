'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { viewportConfig, appleEasing } from '../lib/animations'
import DagBackground from './DagBackground'
import MagneticWrapper from './MagneticWrapper'
import { useState } from 'react'
import { Check } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/trissaan', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/trissaan', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:trissaan@gmail.com', label: 'Email' },
]

export default function CTA() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('trissaan@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — silently fall through to mailto
    }
  }

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-800 via-carbon-900 to-carbon-900" />
        <DagBackground accent="sage" variant={2} intensity={0.65} />
      </div>
      <div className="absolute inset-0 film-grain pointer-events-none z-[1]" />
      <div className="absolute inset-0 vignette pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          className="apple-headline text-carbon-100 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8, ease: appleEasing }}
        >
          Let&apos;s build something
          <br />
          <span className="hero-gradient-text">that actually works.</span>
        </motion.h2>

        <motion.p
          className="apple-body mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.2, ease: appleEasing }}
        >
          Looking for roles in data engineering, AI systems, and analytics.
          Melbourne-based, open to relocation, full Australian work rights.
        </motion.p>

        {/* Contact details */}
        <motion.div
          className="flex items-center justify-center text-sm text-carbon-300 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-2 hover:text-carbon-100 transition-colors"
            aria-label={copied ? 'Email address copied to clipboard' : 'Copy email address to clipboard'}
          >
            <span>trissaan@gmail.com</span>
            <span
              className={`inline-flex items-center gap-1 text-xs font-mono transition-all duration-300 ${
                copied ? 'text-sage-300 opacity-100' : 'text-carbon-400 opacity-0 group-hover:opacity-100'
              }`}
              aria-live="polite"
            >
              {copied ? (
                <>
                  <Check size={12} /> copied
                </>
              ) : (
                'click to copy'
              )}
            </span>
          </button>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.4, ease: appleEasing }}
        >
          <MagneticWrapper strength={0.3}>
            <motion.a
              href="mailto:trissaan@gmail.com"
              className="relative px-10 py-4 bg-carbon-100 text-carbon-900 font-semibold rounded-full text-lg hover:bg-white transition-all"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </MagneticWrapper>

          <MagneticWrapper strength={0.25}>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              className="px-10 py-4 border border-carbon-500 text-carbon-100 font-semibold rounded-full text-lg hover:border-sage-300/60 hover:bg-sage-300/[0.04] transition-all duration-300 inline-block"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </MagneticWrapper>
        </motion.div>

        {/* Social icons */}
        <motion.div
          className="flex justify-center gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-carbon-400 hover:text-sage-300 transition-colors duration-300"
              whileHover={{ scale: 1.3, y: -2 }}
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <div className="w-16 h-px bg-carbon-500/60 mx-auto mb-8" />

        <motion.p
          className="text-carbon-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
        >
          &copy; {new Date().getFullYear()} Trissaan A Shanmugasundaram
        </motion.p>
      </div>

    </section>
  )
}
