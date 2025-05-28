"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, ChevronUp, Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [expandedRole, setExpandedRole] = useState<number | null>(null)

  const toggleRole = (index: number) => {
    setExpandedRole(expandedRole === index ? null : index)
  }

  const experiences = [
    {
      title: "Lead Android Engineer",
      company: "Equity Group Holdings",
      duration: "Feb 2024 - Present · 1 yr 4 mos",
      location: "Nairobi County, Kenya · On-site",
      type: "Full-time",
      achievements: [
        {
          title: "Digital Transformation",
          description: "Led digital transformation by transitioning traditional banking services to mobile-first platforms. Spearheaded scaling of Equity Mobile app to 10M+ users and led adoption of offline-first architectures that expanded financial inclusion to rural communities through the Inua Jamii app."
        },
        {
          title: "Product Digitization", 
          description: "Led end-to-end digitization of core services including payments, account onboarding and customer engagement by building intuitive mobile apps integrated with backend systems, leading to seamless digital experiences while unlocking new revenue streams."
        },
        {
          title: "Technology Leadership",
          description: "Oversaw mobile engineering strategy, architectural decisions and mentorship of junior developers. Introduced best practices in testing, version control, and continuous integration, enabling faster feature delivery and improved code quality."
        },
        {
          title: "Strategic Planning & Product Management",
          description: "Contributed to long-term product roadmaps by aligning technical development with business priorities. Collaborated with product managers, UI/UX designers and stakeholders to deliver impactful solutions that addressed user pain points."
        }
      ],
      skills: ["Android Development", "Digital Product Development", "Team Leadership"]
    },
    {
      title: "Senior Android Engineer", 
      company: "Equity Group Holdings",
      duration: "Apr 2021 - Jan 2024 · 2 yrs 10 mos",
      location: "Nairobi County, Kenya · On-site",
      type: "Full-time",
      achievements: [
        {
          title: "Country-Specific Features & Product Rollout",
          description: "Contributed to successful rollout of Equity Mobile app across six regional markets—DRC, Rwanda, Uganda, Tanzania, South Sudan, and Diaspora customers—by delivering localized, country-specific features that scaled the platform to 10M+ active users."
        },
        {
          title: "Mobile Architecture Modernization",
          description: "Led transition from monolithic Android codebase to scalable multi-module architecture, enhancing maintainability, reducing build times, and enabling independent feature development."
        },
        {
          title: "End-to-End Android Delivery",
          description: "Supported full lifecycle of Android feature development using Kotlin, Jetpack libraries, and MVI. Worked closely with backend, UI/UX designers and product teams to ensure smooth rollouts and contributed to peer mentorship."
        }
      ],
      skills: ["Mobile Application Development", "Modular Architecture", "Cross-platform Integration"]
    },
    {
      title: "Android Software Engineer",
      company: "Equity Group Holdings", 
      duration: "Mar 2020 - Mar 2021 · 1 yr 1 mo",
      location: "Nairobi County, Kenya · Remote",
      type: "Full-time",
      achievements: [
        {
          title: "Scaled Mobile Banking Platform",
          description: "Contributed to development and rollout of Equity Mobile app across Tanzania, Uganda, DRC, Rwanda, and South Sudan, enabling seamless migration from legacy EazzyBanking app and acquiring 250,000 users within first three months."
        },
        {
          title: "Core Financial Features",
          description: "Implemented robust Transact capabilities for cross-platform money transfers and bill payments, collaborating with UI/UX designers to deliver user-friendly interfaces that enhanced customer engagement."
        },
        {
          title: "Code Quality & Release Stability",
          description: "Participated in code reviews, knowledge-sharing sessions, and structured app release processes, improving code maintainability, feature scalability, and overall app performance."
        }
      ],
      skills: ["Mobile App Development", "Cross-Border Product Deployment", "Financial Services"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            5+ years of driving digital transformation and scaling mobile solutions at Equity Group Holdings
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              {/* Role Header */}
              <div
                onClick={() => toggleRole(index)}
                className="p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                        {experience.company}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-xs">
                          {experience.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: expandedRole === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </motion.div>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedRole === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="p-6 space-y-6">
                      {/* Achievements */}
                      <div className="grid gap-4">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: achievementIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                ✅ {achievement.title}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {achievement.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Key Skills & Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 