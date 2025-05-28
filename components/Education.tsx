"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, School, Code } from 'lucide-react'

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const education = [
    {
      institution: "Strathmore University",
      degree: "Master of Science in Computing and Information Systems",
      period: "May 2024 — Present",
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: "from-purple-500 to-blue-600",
      highlights: [
        "Core Subjects:",
        "Data Communications and Networks",
        "Database Management Systems (SQL, MongoDB)",
        "Mathematics for Computing (Logical reasoning)",
        "Programming Concepts (Python, C++)",
        "Advanced Networking Concepts",
        "Object Oriented Programming (Python, C++)",
        "Project Management in Information Technology",
        "Systems Modeling",
        "Business Ethics and Governance",
        "Data Structures and Algorithms (Python, C++)",
        "Research Methodology, IS Dissertation Proposal",
        "Web Applications Development (HTML, CSS, Javascript, PHP, MySQL)",
        "Data Science Concepts (Python, R)",
        "Mobile Applications Development (Android Studio, Java)"
      ]
    },
    {
      institution: "eMobilis Technology Training Institute",
      degree: "Full Stack Software Development Certification",
      period: "Graduated: 2019",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600",
      highlights: [
        "Tech stack: HTML5, CSS3, Bootstrap, PHP, MySQL, Java, Kotlin, Android",
        "Built and deployed a working mobile loan lending app for the capstone project.",
        "Solidified foundation in backend and Android mobile development."
      ]
    },
    {
      institution: "Kenyatta University",
      degree: "Bachelor of Commerce (Finance Major)",
      period: "Graduated: 2018",
      icon: <School className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-600",
      highlights: [
        "Specialized in finance, financial modeling, and business strategy.",
        "Strengthened skills in cost control, managerial accounting, and forecasting."
      ]
    }
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Continuous learning and growth through formal education and professional development
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${item.gradient} text-white`}>
                    {item.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.period}
                    </p>
                    
                    {item.highlights && (
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className="leading-relaxed">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 