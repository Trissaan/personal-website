import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trissaan A Shanmugasundaram - AI/Data Scientist | LLM Systems | ML Pipelines',
  description: 'Professional portfolio of Trissaan A Shanmugasundaram, an AI/Data Scientist specializing in LLM systems, agentic AI, ML pipelines, and data assurance. AWS Certified. Open to AI and ML roles.',
  keywords: 'AI Engineer, Data Scientist, LLM Systems, ML Pipelines, Agentic AI, Python, AWS, Data Assurance',
  openGraph: {
    title: 'Trissaan A Shanmugasundaram - AI/Data Scientist',
    description: 'Professional portfolio and open to work',
    type: 'website',
    locale: 'en_AU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
