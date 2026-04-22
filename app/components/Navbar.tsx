'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#work', label: 'What I Do' },
  { href: '#agent', label: 'AI Agent' },
  { href: '#projects', label: 'Projects' },
  { href: '#impact', label: 'Impact' },
  { href: '#engineering', label: 'Engineering' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>('hero')

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const ids = ['hero', ...navLinks.map((l) => l.href.slice(1))]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    const observed: HTMLElement[] = []
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
        observed.push(el)
      }
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-carbon-900/60 backdrop-blur-xl border-b border-carbon-500/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          Trissaan A
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const active = activeId === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors ${
                  active ? 'text-carbon-100' : 'text-carbon-300 hover:text-carbon-100'
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-sage-300 to-sage-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
          <motion.a
            href="#contact"
            className="px-6 py-2 bg-carbon-100 text-carbon-900 font-semibold rounded-full hover:bg-white transition-all text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Talk
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-carbon-200 p-1 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-sage-400 via-sage-300 to-sage-200"
        style={{ scaleX }}
      />

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          id="mobile-nav"
          className="md:hidden bg-carbon-900/95 backdrop-blur-xl border-t border-carbon-500/40"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = activeId === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    active ? 'text-sage-300' : 'text-carbon-200 hover:text-carbon-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              )
            })}
            <a
              href="#contact"
              className="px-6 py-2 bg-carbon-100 text-carbon-900 font-semibold rounded-full text-center hover:bg-white transition-all"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
