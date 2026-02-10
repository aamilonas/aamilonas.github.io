import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import ThemeToggle from '../ui/ThemeToggle'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/software', label: 'Software' },
  { path: '/mobile-apps', label: 'Mobile Apps' },
  { path: '/data-analytics', label: 'Data Analytics' },
]

export default function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="navbar bg-base-100/95 backdrop-blur-sm sticky top-0 z-50 border-b border-base-300">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="text-h5 font-serif text-base-content hover:text-primary transition-colors">
            Angelo Milonas
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-none gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`btn btn-ghost btn-sm font-sans relative ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-ink-500 dark:text-ink-300 hover:text-base-content'
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex-none flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="btn btn-ghost btn-circle md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 bg-base-100 border-b border-base-300 md:hidden"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`btn btn-ghost justify-start font-sans ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-ink-500 dark:text-ink-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  )
}
