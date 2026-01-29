import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'btn font-sans font-medium transition-all duration-200'

  const variantStyles = {
    primary: 'btn-primary text-white',
    secondary: 'btn-secondary text-white',
    outline: 'btn-outline border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'btn-ghost',
  }

  const sizeStyles = {
    sm: 'btn-sm text-body-sm',
    md: 'btn-md text-body',
    lg: 'btn-lg text-body-lg',
  }

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  const MotionComponent = href ? motion.a : motion.button

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </MotionComponent>
  )
}
