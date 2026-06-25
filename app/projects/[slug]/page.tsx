'use client'

import { motion } from 'framer-motion'
import { Github, ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { getProjectBySlug } from '@/app/lib/projectsData'
import { notFound } from 'next/navigation'
import Nav from '@/app/components/Nav'

const border = 'rgba(26,23,18,.12)'
const borderMed = 'rgba(26,23,18,.18)'
const muted = '#4a443a'
const muted2 = '#5c554a'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.16em',
        textTransform: 'uppercase',
        color: '#8a8170',
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  )
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f5f2ea' }}>
      <Nav />

      <article style={{ maxWidth: 880, margin: '0 auto', padding: 'calc(72px*var(--d)) 56px calc(96px*var(--d))' }}>
        {/* Back link */}
        <Link
          href="/#projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 13.5,
            fontWeight: 600,
            color: muted2,
            marginBottom: 40,
          }}
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Header */}
          <motion.div variants={item} style={{ marginBottom: 56 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: 22,
              }}
            >
              Case Study
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 52,
                lineHeight: 1.04,
                fontWeight: 400,
                letterSpacing: '-.015em',
                margin: '0 0 24px',
                textWrap: 'balance',
              }}
            >
              {project.title}
            </h1>
            <p style={{ fontSize: 18.5, lineHeight: 1.6, color: muted, margin: 0 }}>{project.description}</p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={item} style={{ marginBottom: 52, paddingTop: 36, borderTop: `1px solid ${border}` }}>
            <SectionLabel>Tech Stack</SectionLabel>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 12.5,
                    fontFamily: 'var(--font-mono)',
                    padding: '6px 13px',
                    border: `1px solid ${borderMed}`,
                    borderRadius: 100,
                    color: muted2,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* About */}
          <motion.div variants={item} style={{ marginBottom: 52 }}>
            <SectionLabel>About</SectionLabel>
            <p style={{ fontSize: 16.5, lineHeight: 1.72, color: muted, margin: 0, whiteSpace: 'pre-line' }}>
              {project.detailedDescription}
            </p>
          </motion.div>

          {/* Technical Approach */}
          <motion.div variants={item} style={{ marginBottom: 52 }}>
            <SectionLabel>Technical Approach</SectionLabel>
            <p style={{ fontSize: 16.5, lineHeight: 1.72, color: muted, margin: 0, whiteSpace: 'pre-line' }}>
              {project.approach}
            </p>
          </motion.div>

          {/* Key Achievements */}
          <motion.div variants={item} style={{ marginBottom: 52 }}>
            <SectionLabel>Key Achievements</SectionLabel>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {project.achievements.map((a, i) => (
                <li key={i} style={{ display: 'flex', gap: 14, fontSize: 16, lineHeight: 1.6, color: muted }}>
                  <span style={{ width: 14, height: 1.5, background: 'var(--accent)', flexShrink: 0, marginTop: 12 }} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges & Learning */}
          <motion.div variants={item} style={{ marginBottom: 56 }}>
            <SectionLabel>Challenges &amp; Learning</SectionLabel>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {project.challenges.map((c, i) => (
                <li key={i} style={{ display: 'flex', gap: 14, fontSize: 16, lineHeight: 1.6, color: muted }}>
                  <span style={{ color: '#8a8170', flexShrink: 0, marginTop: 1 }}>•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div variants={item} style={{ display: 'flex', flexWrap: 'wrap', gap: 14, paddingTop: 40, borderTop: `1px solid ${border}` }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                fontSize: 14,
                fontWeight: 600,
                color: '#fff',
                background: 'var(--accent)',
                padding: '12px 22px',
                borderRadius: 2,
              }}
            >
              <Github size={17} />
              View on GitHub
            </a>

            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 9,
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--accent)',
                  border: '1px solid var(--accent)',
                  padding: '12px 22px',
                  borderRadius: 2,
                }}
              >
                <ExternalLink size={17} />
                Live Demo
              </a>
            )}
          </motion.div>
        </motion.div>
      </article>
    </main>
  )
}
