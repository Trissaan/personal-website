'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, BarChart3 } from 'lucide-react'

export default function Education() {
  const education = [
    {
      type: 'degree',
      title: 'Master of Science in Data Science',
      institution: 'Deakin University',
      period: '2023 - 2024',
      location: 'Melbourne, Australia',
      icon: BookOpen,
    },
    {
      type: 'degree',
      title: 'Bachelor of Engineering - Electronics & Communication',
      institution: 'Anna University',
      period: '2018 - 2022',
      location: 'Chennai, India',
      icon: BookOpen,
    },
    {
      type: 'certification',
      title: 'AWS Certified Data Engineer - Associate',
      institution: 'Amazon Web Services',
      period: '2024',
      icon: Award,
    },
  ]

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
    <section id="education" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="gradient-text">Education & Certifications</span>
        </h2>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={idx}
                className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
                variants={itemVariants}
                whileHover={{ translateY: -3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400 flex-shrink-0">
                    <IconComponent size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-cyan-400 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 font-semibold mb-2">
                      {item.institution}
                    </p>
                    <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-400">
                      <span>{item.period}</span>
                      {item.location && <span>{item.location}</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills Highlight */}
        <motion.div
          className="mt-12 p-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg border border-violet-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <BarChart3 className="text-violet-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-bold text-violet-400 mb-3">
                Specialized Training
              </h3>
              <p className="text-gray-300">
                Coursework included advanced data science, machine learning algorithms,
                statistical analysis, big data processing, cloud computing, and generative AI applications.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
