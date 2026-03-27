import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Trissaan A Shanmugasundaram | Data + AI Systems',
  description: 'I don\'t just analyse data. I build systems that act on it. Data pipelines, automation, and AI systems — end-to-end.',
  keywords: 'Data Engineer, AI Systems, Data Pipelines, PySpark, Databricks, AWS, Python, Automation, LLM',
  openGraph: {
    title: 'Trissaan A Shanmugasundaram | Data + AI Systems',
    description: 'Data pipelines. Automation. AI systems. End-to-end.',
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
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#07080d] text-white font-body">
        {children}
      </body>
    </html>
  )
}
