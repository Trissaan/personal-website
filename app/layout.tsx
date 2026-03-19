import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trissaan A Shanmugasundaram - Data Analyst & AI Practitioner | SQL · Python · Power BI',
  description: 'Professional portfolio of Trissaan A Shanmugasundaram, a Data Analyst & AI Practitioner specializing in SQL, Python, Power BI, and data analysis. Open to analytics and AI roles.',
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
      <body className="bg-slate-900 text-white">
        {children}
      </body>
    </html>
  )
}
