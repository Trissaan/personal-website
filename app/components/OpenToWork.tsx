'use client'

import { motion } from 'framer-motion'
import { Briefcase, ExternalLink, CheckCircle2 } from 'lucide-react'

export default function OpenToWork() {
  const jobBoards = [
    {
      name: 'Seek',
      url: 'https://www.seek.com.au/jobs?keywords=Data%20Scientist&location=Melbourne%2C%20VIC',
      description: 'Australian job board - Search for Data Scientist roles in Melbourne',
      icon: '🔍',
    },
    {
      name: 'LinkedIn Jobs',
      url: 'https://www.linkedin.com/jobs/search/?keywords=Data%20Scientist&location=Melbourne&geoId=104017254',
      description: 'Global professional network - Data Science & ML opportunities',
      icon: '💼',
    },
    {
      name: 'Indeed',
      url: 'https://au.indeed.com/jobs?q=Data%20Scientist&l=Melbourne&ts=1',
      description: 'International job board - Multiple Data Science positions',
      icon: '🌐',
    },
    {
      name: 'AngelList',
      url: 'https://angel.co/jobs?filter_commitment[]=full_time&q=data+scientist',
      description: 'Startup jobs - Data Science & AI focused companies',
      icon: '🚀',
    },
  ]

  const responsibilities = [
    'Building machine learning models and data pipelines',
    'Designing and optimizing data architectures',
    'Creating AI-powered automation solutions',
    'Leading analytics projects end-to-end',
    'Collaborating with cross-functional teams',
    'Translating data into business insights',
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
    <section id="open-to-work" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="gradient-text">Open to Work</span>
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Opportunities */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-lg border border-green-500/20">
              <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <CheckCircle2 size={28} />
                Actively Seeking
              </h3>
              <p className="text-gray-300 mb-4">
                Recently transitioned out of my previous role and am actively exploring opportunities in:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  Data Science
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  Machine Learning Engineering
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  Generative AI
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  Data Engineering
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-lg font-bold text-blue-400 mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>📍 Location: Melbourne, VIC (Open to relocation)</li>
                <li>📄 Work Rights: Full Australian (485 visa, valid Feb 2028)</li>
                <li>🎓 Education: MS Data Science (2024)</li>
                <li>🏢 Experience: 2+ years enterprise analytics</li>
                <li>📧 Email: <a href="mailto:trissaan@gmail.com" className="text-blue-400 hover:text-blue-300">trissaan@gmail.com</a></li>
                <li>📱 Phone: <a href="tel:0434549364" className="text-blue-400 hover:text-blue-300">0434 549 364</a></li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Responsibilities */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 p-6 rounded-lg border border-violet-500/20">
              <h3 className="text-2xl font-bold text-violet-400 mb-4 flex items-center gap-2">
                <Briefcase size={28} />
                What I'm Looking For
              </h3>
              <ul className="space-y-3">
                {responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-violet-400 mt-1">▸</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Job Boards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Job Search Resources</h3>
          <motion.div
            className="grid md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {jobBoards.map((board, idx) => (
              <motion.a
                key={idx}
                href={board.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-cyan-500/40 p-6 rounded-lg transition-all group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{board.icon}</span>
                    <h4 className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300">
                      {board.name}
                    </h4>
                  </div>
                  <ExternalLink className="text-gray-400 group-hover:text-cyan-400 transition-colors" size={20} />
                </div>
                <p className="text-gray-400 text-sm">{board.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Discuss Opportunities?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm eager to talk about how I can contribute to your team's data science and AI initiatives.
            Reach out directly or connect on LinkedIn!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.a
              href="mailto:trissaan@gmail.com"
              className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Email
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/trissaan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect on LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
