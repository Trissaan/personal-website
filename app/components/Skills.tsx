'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'AI & LLM Systems',
      skills: ['LLM APIs', 'Agentic Systems', 'FastAPI', 'Playwright', 'Prompt Engineering', 'RAG', 'Structured Output Parsing', 'MCP'],
      color: 'from-cyan-500/20 to-cyan-500/5',
    },
    {
      title: 'ML & Data Science',
      skills: ['Python (Scikit-learn, TensorFlow)', 'Classification Models', 'Feature Engineering', 'PCA', 'Model Evaluation', 'Neural Networks'],
      color: 'from-blue-500/20 to-blue-500/5',
    },
    {
      title: 'Pipelines & Assurance',
      skills: ['Data Validation Gates', 'Anomaly Detection', 'Observability', 'CI/CD', 'ETL Pipeline Design', 'Data Quality Frameworks', 'Eval Pipelines'],
      color: 'from-violet-500/20 to-violet-500/5',
    },
    {
      title: 'Data Engineering & Cloud',
      skills: ['SQL (PostgreSQL, TSQL)', 'Python (Pandas, NumPy)', 'AWS (S3, Data Services)', 'Production ETL', 'Power BI', 'Power Automate'],
      color: 'from-amber-500/20 to-amber-500/5',
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
    <section id="skills" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className={`bg-gradient-to-br ${category.color} p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -5 }}
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-12 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-green-400 mb-3">Certifications</h3>
          <div className="space-y-2 text-gray-300">
            <p>✓ AWS Certified Data Engineer - Associate</p>
            <p>✓ Master of Science in Data Science, Deakin University (2024)</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
