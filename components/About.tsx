"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Users, Lightbulb, Target } from 'lucide-react'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const strengths = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Android & Mobile Architecture",
      description: "Kotlin, Jetpack, MVI"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Product Digitization & Strategy",
      description: "End-to-end product development"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cross-functional Leadership",
      description: "Leading diverse technical teams"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI Integration & Cloud Platforms",
      description: "Modern cloud-native solutions"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I am Leonard Mutugi - a technology leader and product digitization strategist passionate about building impactful, scalable digital solutions that drive real business value. With over 6 years of hands-on experience in solution development and leading high-performance fintech products, I specialize in aligning technology execution with strategic business objectives.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                As Lead Mobile Developer at Equity Group Holdings, I have played a pivotal role in digitizing core banking services. I led the scaling of the Equity Mobile app to over 10M+ users, introduced offline-first architectures to expand financial inclusion (notably through the Inua Jamii app) and delivered UI/UX transformations that reduced onboarding drop-offs by 30%. Beyond mobile, I champion cross-functional collaboration, data-informed product decisions and team mentorship to drive innovation at scale.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I thrive at the intersection of technology, innovation and transformation - from architecting resilient, scalable systems and leading agile development teams, to delivering cutting-edge solutions like local digital payments and cross-border remittances that reshape user experiences in emerging markets.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am now focused on driving product-led digital transformation through strategic leadership in product management and digitization - especially within fintech, real estate, and impact-driven sectors. I bring deep expertise in mobile-first strategies, AI integration, and cloud-native platforms, underpinned by a clear vision for sustainable tech innovation across Africa and beyond.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              My core strengths span:
            </h3>
            
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 p-2 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                  {strength.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {strength.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {strength.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 