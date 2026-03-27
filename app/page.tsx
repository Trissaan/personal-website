import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatYouDo from './components/WhatYouDo'
import BigFlex from './components/BigFlex'
import BusinessImpact from './components/BusinessImpact'
import Projects from './components/Projects'
import Engineering from './components/Engineering'
import Thinking from './components/Thinking'
import CTA from './components/CTA'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <WhatYouDo />
      <BigFlex />
      <BusinessImpact />
      <Projects />
      <Engineering />
      <Thinking />
      <CTA />
    </main>
  )
}
