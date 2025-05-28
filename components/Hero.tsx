"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, BookOpen } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400"
          >
            Leonard Mutugi
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300 tracking-wide">
              <span className="text-primary-600 dark:text-primary-400">Software Engineering</span> |{" "}
              <span className="text-purple-600 dark:text-purple-400">Product Engineering</span> |{" "}
              <span className="text-blue-600 dark:text-blue-400">Product Digitization</span> |{" "}
              <span className="text-indigo-600 dark:text-indigo-400">Digital Banking Innovation</span>
              <br className="hidden md:block" />
              <span className="text-violet-600 dark:text-violet-400">Systems & Design Thinking</span> |{" "}
              <span className="text-fuchsia-600 dark:text-fuchsia-400">Android & Fintech Solutions Specialist</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl mb-12 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Building high-impact mobile solutions that scale, empower, and transform.
            <br />
            From 10M+ user fintech apps to platforms driving real change in emerging markets.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              View Portfolio
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg font-semibold transition-all duration-200 text-lg"
            >
              Connect with Me
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-8 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/Codzure"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Github size={28} className="text-gray-700 dark:text-gray-300" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.linkedin.com/in/leonardmutugi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Linkedin size={28} className="text-gray-700 dark:text-gray-300" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://medium.com/@codzure"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <BookOpen size={28} className="text-gray-700 dark:text-gray-300" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="mailto:leonard.mutugi.m@gmail.com"
              className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Mail size={28} className="text-gray-700 dark:text-gray-300" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => scrollToSection('#about')}
            className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-white dark:hover:bg-gray-700"
          >
            <ArrowDown size={28} className="text-gray-700 dark:text-gray-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 