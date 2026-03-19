'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Download, ArrowDown, Globe } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-3xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Trissaan A Shanmugasundaram</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6">
            Data Analyst & AI Practitioner | SQL · Python · Power BI
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            LLM APIs • Agentic Systems • ML Pipelines • Python • AWS Certified
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-base md:text-lg">
            Production AI engineer building LLM-powered automation agents, ML pipelines, and data quality frameworks.
            2+ years designing data assurance systems and agentic AI workflows.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap mb-12"
        >
          <motion.a
            href="https://github.com/trissaan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            GitHub
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/trissaan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
            LinkedIn
          </motion.a>

          <motion.a
            href="/resume.pdf"
            className="flex items-center gap-2 px-6 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Resume
          </motion.a>

          <motion.a
            href="https://www.datascienceportfol.io/trissaan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-amber-500 text-amber-400 font-semibold rounded-lg hover:bg-amber-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe size={20} />
            Portfolio
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16"
        >
          <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
