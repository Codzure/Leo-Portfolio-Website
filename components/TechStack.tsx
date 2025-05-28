"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Smartphone, Server, Cloud, Zap } from 'lucide-react'

const TechStack = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const techCategories = [
    {
      title: "Mobile & Frontend",
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        "Kotlin", "Jetpack", "MVI", "Flutter", 
        "Jetpack Compose", "ReactJS", "TypeScript"
      ],
      description: "Modular architecture, Clean Architecture, UI/UX strategy",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend & API",
      icon: <Server className="w-8 h-8" />,
      skills: [
        "Supabase", "Firebase", "Retrofit", "REST APIs",
        "Node.js", "Express", "PostgreSQL"
      ],
      description: "Offline-first design, background sync, real-time data",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud & Dev Tools",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        "GitHub", "GitLab", "Bitrise", "CI/CD",
        "Jira", "Figma", "Docker", "AWS"
      ],
      description: "Analytics & A/B testing, performance monitoring",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Product & Strategy",
      icon: <Zap className="w-8 h-8" />,
      skills: [
        "Product Digitization", "Fintech Solutions", 
        "AI for Business", "Civic Tech Engagement"
      ],
      description: "User-Centered Design, Growth Tactics",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="tech" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Tech Stack & Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building with modern technologies to deliver scalable, impactful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
              
              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.gradient} text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Always Learning, Always Growing
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                📱 Mobile Excellence
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                6+ years building scalable Android apps with modern architecture patterns
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                🚀 Product Innovation
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                End-to-end product development from ideation to 10M+ user scale
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                🌍 Social Impact
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Building technology solutions that drive real change in communities
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack 