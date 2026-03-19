'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { projectsData } from '@/app/lib/projectsData'

export default function Projects() {
  const projects = projectsData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="projects" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <Link key={idx} href={`/projects/${project.slug}`}>
              <motion.div
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all group cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.02, translateY: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="text-gray-400 group-hover:text-cyan-400 transition-colors" size={20} />
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-4">
            Check out more projects on GitHub
          </p>
          <motion.a
            href="https://github.com/trissaan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-cyan-400 font-semibold rounded-lg hover:bg-gray-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            Visit GitHub Profile
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
