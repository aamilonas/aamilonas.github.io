import { motion } from 'framer-motion'
import ProjectCard from '../components/ui/ProjectCard'
import { dataProjects } from '../data/projects'

export default function DataAnalytics() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-12"
    >
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mb-12"
      >
        <h1 className="font-serif text-h1 text-base-content mb-4">
          Data Analytics
        </h1>
        <p className="text-body-lg text-ink-500 dark:text-ink-300">
          End-to-end machine learning pipelines, predictive models, and
          analytical systems that transform data into actionable insights.
          Each project delivers measurable business impact through statistical
          rigor and production-ready deployment.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  )
}
