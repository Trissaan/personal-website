'use client'

import { motion } from 'framer-motion'
import { Github, ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { getProjectBySlug } from '@/app/lib/projectsData'
import { notFound } from 'next/navigation'
import Navbar from '@/app/components/Navbar'
import DagBackground from '@/app/components/DagBackground'

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="w-full overflow-hidden relative min-h-screen">
      {/* Background — matches main page */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-900 via-carbon-800 to-carbon-900" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(125,211,192,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,192,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <DagBackground accent="sage" variant={0} intensity={0.6} />
      </div>
      <div className="fixed inset-0 film-grain pointer-events-none z-[1]" />

      <Navbar />

      <section className="relative z-10 section-padding max-w-4xl mx-auto min-h-screen flex flex-col pt-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sage-300 hover:text-sage-200 transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back Home
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="hero-gradient-text">{project.title}</span>
            </h1>
            <p className="text-lg text-carbon-200 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-bold mb-4 text-sage-300 font-mono tracking-wide uppercase text-sm">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-carbon-100/[0.03] text-carbon-200 text-sm rounded-full border border-carbon-500/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Detailed Description */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-bold mb-4 text-sage-300 font-mono tracking-wide uppercase text-sm">About</h2>
            <p className="text-carbon-300 leading-relaxed whitespace-pre-line">
              {project.detailedDescription}
            </p>
          </motion.div>

          {/* Approach */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-bold mb-4 text-sage-300 font-mono tracking-wide uppercase text-sm">Technical Approach</h2>
            <p className="text-carbon-300 leading-relaxed whitespace-pre-line">
              {project.approach}
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-bold mb-4 text-sage-300 font-mono tracking-wide uppercase text-sm">Key Achievements</h2>
            <ul className="space-y-3">
              {project.achievements.map((achievement, i) => (
                <li key={i} className="text-carbon-300 flex gap-3">
                  <span className="text-sage-300 mt-1 flex-shrink-0">✓</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-bold mb-4 text-sage-300 font-mono tracking-wide uppercase text-sm">Challenges & Learning</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="text-carbon-300 flex gap-3">
                  <span className="text-sage-400 mt-1 flex-shrink-0">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants} className="pt-8 pb-16 flex flex-wrap gap-4">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-carbon-100/[0.04] text-carbon-100 font-semibold rounded-full border border-carbon-500/60 hover:bg-carbon-100/[0.08] hover:border-carbon-500 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={18} />
              View on GitHub
            </motion.a>

            {project.demoLink && (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sage-300/10 text-sage-300 font-semibold rounded-full border border-sage-300/20 hover:bg-sage-300/20 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={18} />
                Live Demo
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
