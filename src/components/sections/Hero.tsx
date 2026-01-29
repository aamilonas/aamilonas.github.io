import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ContactCard from '../ui/ContactCard'
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

const categories = [
  {
    path: '/software',
    title: 'Software Engineering',
    description: 'Distributed systems, APIs, and production-grade infrastructure',
    icon: CodeBracketIcon,
  },
  {
    path: '/mobile-apps',
    title: 'Mobile Applications',
    description: 'Cross-platform apps with real-time sync and offline-first design',
    icon: DevicePhoneMobileIcon,
  },
  {
    path: '/data-analytics',
    title: 'Data Analytics',
    description: 'ML pipelines, predictive models, and actionable insights',
    icon: ChartBarIcon,
  },
]

export default function Hero() {
  return (
    <section className="bg-base-100">
      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Contact Card */}
        <ContactCard
          name="Angelo Milonas"
          title="Software Engineer & Data Scientist"
          bio="MS Computer Science @ FAU (4.0 GPA). Certified in AI and Big Data. Building scalable systems and data-driven solutions with entrepreneurial precision."
          email="contact@example.com"
          linkedInUrl="#"
          githubUrl="#"
        />

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <p className="text-body-lg text-ink-500 dark:text-ink-300">
            Delivering production-ready systems with measurable impact.
            From high-throughput distributed architectures to ML pipelines
            that drive business decisions.
          </p>
        </motion.div>

        {/* Category Navigation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {categories.map((category, index) => (
            <Link key={category.path} to={category.path}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="card bg-base-100 border border-base-300 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="card-body">
                  <div className="flex items-center justify-between mb-2">
                    <category.icon className="h-8 w-8 text-primary" />
                    <ArrowRightIcon className="h-4 w-4 text-ink-400 dark:text-ink-500 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 className="card-title font-serif text-base-content text-h5">
                    {category.title}
                  </h3>
                  <p className="text-body-sm text-ink-500 dark:text-ink-300">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
