'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

export default function Blog() {
  const posts = [
    {
      title: 'Building Production ML Pipelines',
      excerpt: 'Lessons learned from building scalable machine learning systems in production environments.',
      date: 'Coming Soon',
      category: 'Machine Learning',
      color: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      title: 'Optimizing Power BI Performance',
      excerpt: 'Best practices for designing efficient data models and improving dashboard performance.',
      date: 'Coming Soon',
      category: 'Data Analytics',
      color: 'from-violet-500/20 to-purple-500/20',
    },
    {
      title: 'Generative AI for Data Analysis',
      excerpt: 'How to leverage LLMs and generative AI to accelerate data analysis and insights.',
      date: 'Coming Soon',
      category: 'Generative AI',
      color: 'from-emerald-500/20 to-green-500/20',
    },
  ]

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
    <section className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Blog & Articles</span>
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Insights on data science, machine learning, and AI development.
        </p>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              className={`bg-gradient-to-br ${post.color} p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all cursor-pointer group`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-white/10 text-cyan-300 text-xs rounded-full font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <Calendar size={14} />
                  {post.date}
                </div>
              </div>

              <h3 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Read More <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-3 text-gray-200">
            Blog articles coming soon!
          </h3>
          <p className="text-gray-400 mb-6">
            I'm working on detailed articles about my experiences with ML engineering,
            data architecture, and AI applications. Subscribe for updates.
          </p>
          <p className="text-sm text-gray-500">
            In the meantime, check out my GitHub projects and LinkedIn for updates on my work.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
