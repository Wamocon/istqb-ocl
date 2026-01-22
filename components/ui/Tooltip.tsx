'use client'

import { useState, useRef, useEffect } from 'react'

interface TooltipProps {
    content: string
    children: React.ReactNode
    position?: 'top' | 'bottom'
}

export function Tooltip({ content, children, position = 'top' }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const tooltipRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsMobile('ontouchstart' in window)
    }, [])

    const showTooltip = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => setIsVisible(true), 150)
    }

    const hideTooltip = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setIsVisible(false)
    }

    const handleClick = () => {
        if (isMobile) {
            setIsVisible(!isVisible)
        }
    }

    // Close on outside click (mobile)
    useEffect(() => {
        if (!isMobile || !isVisible) return

        const handleOutsideClick = (e: MouseEvent) => {
            if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
                setIsVisible(false)
            }
        }

        document.addEventListener('click', handleOutsideClick)
        return () => document.removeEventListener('click', handleOutsideClick)
    }, [isMobile, isVisible])

    const positionClasses = position === 'top'
        ? 'bottom-full left-1/2 -translate-x-1/2 mb-2'
        : 'top-full left-1/2 -translate-x-1/2 mt-2'

    const arrowClasses = position === 'top'
        ? 'top-full left-1/2 -translate-x-1/2 border-t-background-card border-x-transparent border-b-transparent'
        : 'bottom-full left-1/2 -translate-x-1/2 border-b-background-card border-x-transparent border-t-transparent'

    return (
        <span
            ref={tooltipRef}
            className="relative inline-flex cursor-help"
            onMouseEnter={!isMobile ? showTooltip : undefined}
            onMouseLeave={!isMobile ? hideTooltip : undefined}
            onClick={handleClick}
            role="button"
            aria-describedby={isVisible ? 'tooltip' : undefined}
        >
            {children}
            <span className="ml-0.5 text-accent/60 text-xs align-super">ⓘ</span>

            {isVisible && (
                <span
                    id="tooltip"
                    role="tooltip"
                    className={`absolute z-50 ${positionClasses} px-3 py-2 text-xs font-medium text-foreground bg-background-card border border-border/50 rounded-lg shadow-lg backdrop-blur-sm whitespace-nowrap animate-fade-in`}
                >
                    {content}
                    <span className={`absolute w-0 h-0 border-4 ${arrowClasses}`} />
                </span>
            )}
        </span>
    )
}
