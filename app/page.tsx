import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import OpenToWork from './components/OpenToWork'
import Blog from './components/Blog'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <OpenToWork />
      <Blog />
      <Contact />
    </main>
  )
}
