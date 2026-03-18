'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm an AI/Data Scientist specializing in production-grade LLM systems, ML pipelines, and data assurance frameworks.
              MS in Data Science (Deakin), AWS Certified Data Engineer, with 2+ years building enterprise AI/data systems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I engineer data quality gates, anomaly detection systems, and observability frameworks for high-volume data workflows.
              Built agentic AI systems using LLM APIs, FastAPI, and Playwright. Developed SQL/Python pipelines processing 15,000+ daily records with automated validation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Delivered production data systems for enterprise clients including Mondelez (~$2M), Nestlé, L'Oréal, and Asahi.
              Passionate about building reliable, observable AI systems and production-grade ML infrastructure.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Actively seeking roles in AI systems, ML engineering, data science, and AI assurance.
              Full Australian work rights (485 visa, valid to Feb 2028), Melbourne-based, open to relocation.
            </p>
          </div>

          <motion.div
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-lg border border-cyan-500/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-cyan-400 font-semibold mb-2">Location</h3>
                <p className="text-gray-300">Melbourne, VIC, Australia</p>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-2">Work Rights</h3>
                <p className="text-gray-300">Full Australian (485 visa, valid to Feb 2028)</p>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-2">Status</h3>
                <p className="text-gray-300">
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                    Open to Work
                  </span>
                </p>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-2">Contact</h3>
                <p className="text-gray-300 text-sm">
                  <a href="mailto:trissaan@gmail.com" className="hover:text-cyan-400 transition">
                    trissaan@gmail.com
                  </a>
                  <br />
                  <a href="tel:0434549364" className="hover:text-cyan-400 transition">
                    0434 549 364
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
