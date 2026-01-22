import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-background-card rounded-lg border border-border p-8 shadow-card',
        hover && 'transition-all duration-300 hover:shadow-card-hover hover:border-accent/50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
