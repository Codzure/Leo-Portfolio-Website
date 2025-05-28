import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Education from '@/components/Education'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <TechStack />
      <Contact />
    </main>
  )
} 