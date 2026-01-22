import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-bold rounded-md transition-all duration-300 inline-flex items-center justify-center gap-2 uppercase tracking-wide'

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover hover:shadow-cta hover:scale-105 font-black',
    secondary: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white',
    tertiary: 'bg-background-card text-foreground hover:bg-primary-light border border-border normal-case tracking-normal'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-12 py-6 text-xl'
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
