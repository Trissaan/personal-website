'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: 'Data Scientist & Analytics Engineer',
      company: 'Packcentre Marketing Services',
      location: 'Melbourne, VIC',
      period: 'Apr 2024 - Mar 2026',
      highlights: [
        'Pipeline Engineering & Quality Gates: Engineered SQL and Python data pipelines processing 15,000+ daily records with automated validation checks acting as quality gates',
        'Anomaly Detection & Observability: Implemented systematic data validation and reconciliation workflows that detected anomalies and data drift early in pipeline lifecycle',
        'Automated Testing & Workflow Automation: Replaced manual Excel processes with automated Python and SQL workflows, increasing reliability and reducing human error',
        'Dashboard & KPI Instrumentation: Built Power BI dashboards with DAX-based KPI measures across financial, logistics, and client performance data',
        'Cross-functional Delivery: Partnered with operations, finance, and C-suite to translate requirements into data products with clear acceptance criteria',
        'Production System Ownership: Owned full lifecycle of reporting systems from schema design through deployment, documentation, and maintenance',
        'Power Automate Integration: Built notification and distribution workflows, reducing manual handoffs and accelerating data delivery cycles',
      ],
    },
    {
      role: 'Project Engineer - Data & Automation',
      company: 'Wipro',
      location: 'Remote',
      period: 'May 2022 - Feb 2023',
      highlights: [
        'Supported enterprise data migration project from legacy systems to AWS',
        'Developed SQL queries for data extraction and validation across environments',
        'Performed dataset reconciliation to ensure data integrity',
        'Collaborated with senior engineers and stakeholders on complex migrations',
        'Gained experience with enterprise-scale data integration workflows',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="gradient-text">Professional Experience</span>
        </h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
              variants={itemVariants}
              whileHover={{ translateY: -5 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-cyan-400" size={20} />
                    <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                  </div>
                  <p className="text-lg text-gray-300">{exp.company}</p>
                </div>
                <div className="text-right md:text-left">
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-300 flex gap-3 text-sm md:text-base">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
