'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { viewportConfig, appleEasing } from '../lib/animations'

const socials = [
  { icon: Github, href: 'https://github.com/trissaan', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/trissaan', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:trissaan@gmail.com', label: 'Email' },
]

export default function CTA() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#090c18] via-[#080a14] to-[#07080d]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/5 rounded-full blur-[180px]" style={{ animation: 'pulse-glow 6s ease-in-out infinite' }} />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-600/4 rounded-full blur-[120px]" style={{ animation: 'float-orb 15s ease-in-out infinite' }} />
      </div>
      <div className="absolute inset-0 film-grain pointer-events-none z-[1]" />
      <div className="absolute inset-0 vignette pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          className="apple-headline text-white mb-6"
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
          className="flex items-center justify-center text-sm text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ delay: 0.3 }}
        >
          <a href="mailto:trissaan@gmail.com" className="hover:text-white transition-colors">
            trissaan@gmail.com
          </a>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.4, ease: appleEasing }}
        >
          <motion.a
            href="mailto:trissaan@gmail.com"
            className="relative px-10 py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-gray-100 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            className="px-10 py-4 border border-white/20 text-white font-semibold rounded-full text-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
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
              className="text-gray-600 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.3, y: -2 }}
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <div className="w-16 h-px bg-white/10 mx-auto mb-8" />

        <motion.p
          className="text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
        >
          &copy; {new Date().getFullYear()} Trissaan A Shanmugasundaram
        </motion.p>
      </div>

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent z-[2]" />
    </section>
  )
}
