'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, MapPin, Globe } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'trissaan@gmail.com',
      link: 'mailto:trissaan@gmail.com',
      color: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0434 549 364',
      link: 'tel:0434549364',
      color: 'from-violet-500/20 to-purple-500/20',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'in/trissaan',
      link: 'https://linkedin.com/in/trissaan',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/trissaan',
      link: 'https://github.com/trissaan',
      color: 'from-slate-600/20 to-slate-700/20',
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'datascienceportfol.io',
      link: 'https://www.datascienceportfol.io/trissaan',
      color: 'from-amber-500/20 to-orange-500/20',
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
    <section id="contact" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Let's Connect</span>
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          I'd love to discuss opportunities, collaborate on projects, or just chat about data science and AI.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, idx) => {
              const IconComponent = method.icon
              return (
                <motion.a
                  key={idx}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`bg-gradient-to-r ${method.color} p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all group`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, translateX: 5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-lg text-cyan-400 group-hover:bg-white/20 transition-colors">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{method.label}</p>
                      <p className="text-lg font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Info Box */}
          <motion.div
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-cyan-500/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">About Me</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex gap-3 items-start">
                <MapPin className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-gray-400">Melbourne, VIC, Australia</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-cyan-400 mb-2">Quick Facts</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• MS Data Science (Deakin, 2024)</li>
                  <li>• AWS Certified Data Engineer</li>
                  <li>• 2+ years enterprise analytics</li>
                  <li>• Full Australian work rights</li>
                  <li>• Open to relocation</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/30 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you have a job opportunity, project collaboration, or just want to chat,
            I'm always open to connecting with fellow data enthusiasts!
          </p>
          <motion.a
            href="mailto:trissaan@gmail.com"
            className="inline-block px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Me an Email
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-12 pt-8 border-t border-slate-700 text-center text-gray-500 text-sm space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© 2026 Trissaan A Shanmugasundaram. Built with Next.js, Tailwind CSS, and Framer Motion.</p>
          <p>
            Also view my portfolio on{' '}
            <a
              href="https://www.datascienceportfol.io/trissaan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              datascienceportfol.io
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
