'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Email Insights Agent',
      description: 'AI-powered email management system with two modes: batch analysis (categorization, action items, VIP detection) and real-time conversational interface. Text WhatsApp or SMS to manage your inbox via Claude with tool-use reasoning. Features Gmail OAuth with send/reply capabilities, Twilio integration, conversation history, and daily cron daemon.',
      tech: ['Python', 'Claude API', 'Gmail API', 'Flask', 'Twilio', 'Rich CLI'],
      link: 'https://github.com/Trissaan/email-insights-agent',
    },
    {
      title: 'AI Job Application Automation Agent',
      description: 'End-to-end AI-powered platform that scrapes job listings, generates tailored resumes and cover letters using LLM APIs.',
      tech: ['Python', 'FastAPI', 'Playwright', 'LLM APIs'],
      link: 'https://github.com/trissaan/Job_Apply_Agent',
    },
    {
      title: 'Enterprise Operations Data Platform',
      description: 'Relational data platform with normalised schema for enterprise operations, featuring ETL pipelines and analytics-ready datasets.',
      tech: ['PostgreSQL', 'Python', 'SQL', 'Pandas'],
      link: 'https://github.com/trissaan/enterprise-operations-data-platform',
    },
    {
      title: 'Speech Emotion Recognition using CNN',
      description: 'Machine learning model that detects human emotions and affective states from speech using convolutional neural networks.',
      tech: ['Python', 'TensorFlow', 'CNN', 'Audio Processing'],
      link: 'https://github.com/trissaan/Speech-Emotion-Recognition-Using-CNN',
    },
    {
      title: 'Autonomous Warehouse Robot',
      description: 'Prototype of an automated robot using computer vision for warehouse operations with minimal supervision.',
      tech: ['Python', 'Computer Vision', 'Robotics', 'OpenCV'],
      link: 'https://github.com/trissaan/Autonomous-Warehouse-Robot-using-Computer-Vision',
    },
    {
      title: 'Heart Disease Prediction Model',
      description: 'Machine learning classification model for predicting heart disease risk using health indicators.',
      tech: ['Python', 'Scikit-learn', 'Random Forest', 'Data Analysis'],
      link: 'https://github.com/trissaan/Heart_Disease_Prediction_Application_using_Random_Forest_Model',
    },
    {
      title: "Parkinson's Disease Prediction",
      description: "Applied ML classification models to biomedical gait sensor data for predicting Parkinson's disease progression.",
      tech: ['Python', 'Scikit-learn', 'PCA', 'SVM'],
      link: 'https://github.com/trissaan/Parkinsons-Disease-prediction',
    },
    {
      title: 'Road Sign Classification',
      description: 'Deep learning model using convolutional neural networks for traffic sign recognition and classification.',
      tech: ['Python', 'TensorFlow', 'CNN', 'Image Processing'],
      link: 'https://github.com/trissaan',
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
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all group"
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
            </motion.a>
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
