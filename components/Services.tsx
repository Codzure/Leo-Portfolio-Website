'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Smartphone, 
  Building2, 
  CreditCard, 
  Brain, 
  Users,
  ChevronRight,
  CheckCircle,
  ArrowUpRight
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Software Engineering',
    description: 'Full-stack development with modern architectures, scalable systems, and clean code practices',
    features: [
      'Modern web and mobile applications',
      'Microservices architecture',
      'API design and development',
      'Database optimization',
      'Performance tuning'
    ],
    technologies: ['Kotlin', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Android & Mobile Solutions',
    description: 'Native Android development with cutting-edge technologies, scaled to millions of users',
    features: [
      'Native Android applications',
      'Jetpack Compose UI',
      'Offline-first architecture',
      'Real-time synchronization',
      'Cross-platform solutions'
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Coroutines', 'Material Design'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Building2,
    title: 'Product Engineering',
    description: 'End-to-end product development from ideation to scalable implementation',
    features: [
      'Product strategy and roadmapping',
      'Technical architecture design',
      'Agile development processes',
      'User experience optimization',
      'Performance monitoring'
    ],
    technologies: ['Figma', 'Analytics', 'A/B Testing', 'CI/CD', 'Monitoring'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: CreditCard,
    title: 'Digital Banking Innovation',
    description: 'Revolutionary fintech solutions for digital banking, payments, and financial services',
    features: [
      'Mobile banking platforms',
      'Digital payment systems',
      'KYC and onboarding flows',
      'Cross-border transactions',
      'Financial analytics dashboards'
    ],
    technologies: ['Payment APIs', 'Encryption', 'Biometrics', 'Blockchain', 'AI/ML'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Brain,
    title: 'Product Digitization',
    description: 'Transform traditional business processes into modern digital experiences',
    features: [
      'Digital transformation strategy',
      'Legacy system modernization',
      'Process automation',
      'Cloud migration',
      'Digital workflow optimization'
    ],
    technologies: ['Cloud Services', 'APIs', 'Automation Tools', 'Analytics', 'Integration'],
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Users,
    title: 'Technical Leadership',
    description: 'Strategic technology leadership, team building, and engineering excellence',
    features: [
      'Technical strategy and vision',
      'Team leadership and mentoring',
      'Code review and best practices',
      'Technology stack decisions',
      'Engineering culture development'
    ],
    technologies: ['Agile', 'DevOps', 'Code Review', 'Mentoring', 'Strategy'],
    gradient: 'from-teal-500 to-cyan-500'
  }
]

const achievements = [
  {
    metric: '10M+',
    description: 'Users across mobile platforms',
    icon: Users
  },
  {
    metric: '6+',
    description: 'Years of fintech experience',
    icon: Building2
  },
  {
    metric: '30%',
    description: 'Improvement in user onboarding',
    icon: CheckCircle
  },
  {
    metric: '6',
    description: 'Countries with deployed solutions',
    icon: ArrowUpRight
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Solutions & Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions that drive innovation, scale businesses, 
            and transform digital experiences across Africa and beyond.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4">
                <achievement.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {achievement.metric}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {achievement.description}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 relative z-10`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Digital Vision?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how these solutions can accelerate your business growth 
              and create exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start a Conversation
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 