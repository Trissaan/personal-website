'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowDown } from 'lucide-react'

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
        className="max-w-6xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column - Text Content */}
        <div>
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full border border-green-500/40 text-green-400 text-sm font-semibold tracking-wider uppercase">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Data Engineer</span>
              <br />
              <span className="hero-gradient-text">Building Scalable</span>
              <br />
              <span className="text-white">Data Pipelines</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Experienced in designing, optimizing, and automating large-scale data pipelines using PySpark, Databricks, and AWS across logistics, telecom, and finance sectors.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 flex-wrap"
          >
            <motion.a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Get in Touch
            </motion.a>

            <motion.a
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-400 hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column - Code Snippet */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:block"
        >
          <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-8 font-mono text-sm md:text-base shadow-2xl">
            {/* Window dots */}
            <div className="flex gap-2 mb-6">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
              <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
            </div>

            {/* Code content */}
            <div className="space-y-2 text-[15px] leading-relaxed">
              <p>
                <span className="text-blue-400">class</span>{' '}
                <span className="text-green-400">DataEngineer</span>
                <span className="text-gray-300">(</span>
                <span className="text-yellow-300">Trissaan</span>
                <span className="text-gray-300">):</span>
              </p>
              <p className="pl-6">
                <span className="text-gray-300">stack</span>
                <span className="text-gray-500"> = </span>
                <span className="text-gray-300">[</span>
                <span className="text-amber-300">&quot;PySpark&quot;</span>
                <span className="text-gray-300">, </span>
                <span className="text-amber-300">&quot;AWS&quot;</span>
                <span className="text-gray-300">, </span>
                <span className="text-amber-300">&quot;SQL&quot;</span>
                <span className="text-gray-300">]</span>
              </p>
              <p className="pl-6">
                <span className="text-gray-300">tools</span>
                <span className="text-gray-500"> = </span>
                <span className="text-gray-300">[</span>
                <span className="text-amber-300">&quot;Databricks&quot;</span>
                <span className="text-gray-300">, </span>
                <span className="text-amber-300">&quot;Glue&quot;</span>
                <span className="text-gray-300">]</span>
              </p>
              <p className="pl-6">
                <span className="text-gray-300">data</span>
                <span className="text-gray-500"> = </span>
                <span className="text-gray-300">[</span>
                <span className="text-amber-300">&quot;Delta Lake&quot;</span>
                <span className="text-gray-300">, </span>
                <span className="text-amber-300">&quot;Snowflake&quot;</span>
                <span className="text-gray-300">]</span>
              </p>
              <p className="pl-6">
                <span className="text-gray-300">cert</span>
                <span className="text-gray-500"> = </span>
                <span className="text-amber-300">&quot;AWS Data Engineer&quot;</span>
              </p>
              <p className="mt-2 pl-6">
                <span className="text-blue-400">def</span>{' '}
                <span className="text-green-400">build_pipeline</span>
                <span className="text-gray-300">(self):</span>
              </p>
              <p className="pl-12">
                <span className="text-purple-400">return</span>{' '}
                <span className="text-amber-300">&quot;production_ready&quot;</span>{' '}
                <span role="img" aria-label="rocket">🚀</span>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll down arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
          <ArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  )
}
