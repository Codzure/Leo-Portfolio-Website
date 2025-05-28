"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ExternalLink, Github, Users, Smartphone, Globe, Brain } from 'lucide-react'

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      title: "Equity Mobile App",
      role: "Lead Android Engineer",
      impact: "Scaled to 10M+ users across 6+ markets with 4.7★ rating (253K+ reviews)",
      highlights: "Revamped architecture, introduced feature modularization, improved session management and CI/CD pipelines. Multi-language support (English, French, Kinyarwanda, Swahili, 中文) with biometric authentication.",
      tech: ["Kotlin", "Jetpack", "MVI", "CI/CD"],
      icon: <Smartphone className="w-8 h-8" />,
      status: "Live",
      gradient: "from-blue-500 to-purple-600",
      playStore: "https://play.google.com/store/apps/details?id=ke.co.equitygroup.equitymobile&hl=en"
    },
    {
      title: "EquityBCDC App",
      role: "Lead Android Engineer",
      impact: "Launched and scaled mobile banking app for DRC market with 100K+ users and 4.5★ rating (9.8K+ reviews)",
      highlights: "Led development of market-specific features, integrated with local payment systems, and optimized for low-bandwidth conditions. Multi-language support with dark mode and biometric authentication.",
      tech: ["Kotlin", "Jetpack", "MVI", "CI/CD"],
      icon: <Smartphone className="w-8 h-8" />,
      status: "Live",
      gradient: "from-blue-500 to-purple-600",
      playStore: "https://play.google.com/store/apps/details?id=ke.co.equitygroup.equitymobilebcdc&hl=en"
    },
    {
      title: "Inua Jamii",
      role: "Lead Engineer",
      impact: "Enabled cash disbursement for vulnerable households in remote regions without internet access",
      highlights: "Pioneered hybrid sync for seamless online-offline experience.",
      tech: ["Kotlin", "Jetpack", "Offline-first"],
      icon: <Users className="w-8 h-8" />,
      status: "Live",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "BiasharaAI",
      description: "An intelligent multi-tenant business management platform empowering African entrepreneurs through comprehensive digital operations and AI-driven business intelligence. Helps small businesses manage inventory, track sales and expenses, generate reports, and gain valuable insights.",
      image: "/biasharaai.png",
      github: "https://github.com/Codzure/BiasharaAI",
      tech: [
        "React.js", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL", 
        "OpenAI API", "Pesapal API", "M-PESA", "React Query", "Wouter"
      ]
    },
    {
      title: "Cryptalk",
      description: "A modern, secure messaging application built with cutting-edge Android development practices. Provides end-to-end encrypted messaging with a clean, intuitive user interface.",
      image: "/cryptalk.png",
      github: "https://github.com/Codzure/Cryptalk",
      tech: ["Jetpack Compose", "Kotlin Coroutines", "PostgreSQL", "Supabase"]
    },
    {
      title: "Outrite",
      description: "A modern Android application that allows users to report and track community issues like potholes, garbage dumps, vandalism, and more. Helps improve communities by enabling citizens to report problems and track their resolution in real-time.",
      image: "/outrite.png",
      github: "https://github.com/Codzure/Outrite",
      tech: [
        "Kotlin", "Jetpack Compose", "MVVM", "Navigation Component",
        "Material Design 3", "Navigation Compose"
      ]
    },
    {
      title: "BambaSwap",
      description: "An innovative platform that provides emergency M-Pesa cash to Kenyans by converting airtime, transforming lives through accessible financial solutions.",
      image: "/bambaswap.jpeg",
      github: "https://github.com/Codzure/BambaSwap",
      figma: "https://www.figma.com/file/dHaPDYEevDujj5o1nLjL5I/BambaSwap",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "M-PESA API"]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of my recent work showcasing innovative solutions across mobile and web platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 xl:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform hover:scale-[1.02] transition-transform duration-300"
            >
              {project.image ? (
                // For open source projects
                <>
                  <div className="relative h-40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary-400 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.figma && (
                          <a
                            href={project.figma}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary-400 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                // For work experience projects
                <div className="p-4 flex-1 flex flex-col">
                  <div className={`h-0.5 bg-gradient-to-r ${project.gradient} rounded-full mb-3`} />
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                          {project.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {project.playStore && (
                        <a
                          href={project.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                        project.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3 flex-1">
                    <div className="mb-2">
                      <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">Impact</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">
                        {project.impact}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">Key Achievements</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">
                        {project.highlights}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects