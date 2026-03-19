'use client'

import { motion } from 'framer-motion'
import { Github, ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { getProjectBySlug } from '@/app/lib/projectsData'
import { notFound } from 'next/navigation'

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
    <main className="w-full overflow-hidden bg-slate-900 text-white">
      <section className="section-padding max-w-4xl mx-auto min-h-screen flex flex-col pt-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Projects
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">{project.title}</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Detailed Description */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">About</h2>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {project.detailedDescription}
            </p>
          </motion.div>

          {/* Approach */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Technical Approach</h2>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {project.approach}
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Key Achievements</h2>
            <ul className="space-y-3">
              {project.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300 flex gap-3">
                  <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Challenges & Learning</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="text-gray-300 flex gap-3">
                  <span className="text-amber-400 mt-1 flex-shrink-0">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants} className="pt-8 flex flex-wrap gap-4">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/20 text-cyan-400 font-semibold rounded-lg border border-cyan-500/40 hover:bg-cyan-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              View on GitHub
            </motion.a>

            {project.demoLink && (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 text-blue-400 font-semibold rounded-lg border border-blue-500/40 hover:bg-blue-500/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
                Live Demo
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
