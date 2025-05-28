"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, BookOpen, Code, MessageSquare } from 'lucide-react'

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "leonard.mutugi.m@gmail.com",
      link: "mailto:leonard.mutugi.m@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+254797035505",
      link: "tel:+254797035505"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      info: "Nairobi, Kenya",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Codzure",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/leonardmutugi",
      color: "hover:text-blue-600"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      name: "Medium",
      url: "https://medium.com/@codzure",
      color: "hover:text-green-600"
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "LeetCode",
      url: "https://leetcode.com/u/codzure/",
      color: "hover:text-yellow-500"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Build Something Meaningful Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project, collaboration, or opportunity in mind? Let's discuss how we can create impact together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <div className="text-center">
              <div className="mb-6 inline-block p-4 bg-green-100 dark:bg-green-900 rounded-full">
                <MessageSquare className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Chat on WhatsApp
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Quick responses, direct communication. Let's discuss your ideas and opportunities.
              </p>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/254797035505"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl w-full md:w-auto"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Start WhatsApp Chat</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, 
                and ways to create positive impact through technology. Let's connect!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.info}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect on Social
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200 shadow-md hover:shadow-lg`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Leonard Mutugi. Building the future, one line of code at a time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 