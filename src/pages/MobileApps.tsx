import { motion } from 'framer-motion'
import ProjectCard from '../components/ui/ProjectCard'
import { mobileProjects } from '../data/projects'

export default function MobileApps() {
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
          Mobile Applications
        </h1>
        <p className="text-body-lg text-ink-500 dark:text-ink-300">
          Cross-platform mobile apps built with offline-first architecture,
          real-time synchronization, and native performance. Focused on
          delivering seamless user experiences across devices.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mobileProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  )
}
