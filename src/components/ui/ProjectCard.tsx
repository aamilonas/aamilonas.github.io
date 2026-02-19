import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card bg-base-100 border border-base-300 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {/* Thumbnail */}
      <figure className="aspect-video bg-base-200 overflow-hidden">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-ink-300 dark:text-ink-600 text-display font-serif">{project.title.charAt(0)}</span>
          </div>
        )}
      </figure>

      <div className="card-body">
        <h3 className="card-title font-serif text-h4 text-base-content">{project.title}</h3>

        <p className="text-body-sm text-ink-500 dark:text-ink-300 line-clamp-3">
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.metrics.map((metric, i) => (
              <span
                key={i}
                className="badge badge-sm bg-accent-subtle dark:bg-accent-subtle-dark text-primary dark:text-accent-light border-0 font-medium"
              >
                {metric}
              </span>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="badge badge-outline badge-sm text-ink-500 dark:text-ink-300 border-base-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="card-actions justify-end mt-4">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View on GitHub
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
