import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import WhatIDo from "@/app/components/WhatIDo";
import Experience from "@/app/components/Experience";
import Impact from "@/app/components/Impact";
import FeaturedProject from "@/app/components/FeaturedProject";
import Projects from "@/app/components/Projects";
import Engineering from "@/app/components/Engineering";
import Thesis from "@/app/components/Thesis";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WhatIDo />
      <Experience />
      <Impact />
      <FeaturedProject />
      <Projects />
      <Engineering />
      <Thesis />
      <Contact />
      <Footer />
    </>
  );
}
