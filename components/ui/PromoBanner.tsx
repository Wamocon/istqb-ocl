'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Users } from 'lucide-react'

interface PromoBannerProps {
    remainingSpots?: number
}

export function PromoBanner({ remainingSpots = 47 }: PromoBannerProps) {
    const [isVisible, setIsVisible] = useState(true)
    const [spots, setSpots] = useState(remainingSpots)

    // Simulate spots decreasing occasionally (for demo effect)
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.7 && spots > 10) {
                setSpots(prev => prev - 1)
            }
        }, 30000) // Every 30 seconds, 30% chance to decrease
        return () => clearInterval(interval)
    }, [spots])

    if (!isVisible) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-3 px-4 shadow-lg"
            >
                <div className="container mx-auto flex items-center justify-center gap-4 text-sm md:text-base">

                    <div className="flex items-center gap-2 font-bold">
                        <span className="hidden sm:inline">🔥 SONDERAKTION:</span>
                        <span className="sm:hidden">🔥</span>
                        <span>Erste 100 Teilnehmer sparen <span className="bg-white text-orange-600 px-2 py-0.5 rounded font-black">33%</span></span>
                    </div>

                    <div className="hidden md:flex items-center gap-2 border-l border-white/30 pl-4">
                        <Users className="w-4 h-4" />
                        <span className="font-mono font-bold">
                            Noch <span className="text-yellow-200">{spots}</span> Plätze verfügbar!
                        </span>
                    </div>

                    <a
                        href="#pricing"
                        className="ml-2 bg-white text-orange-600 px-4 py-1.5 rounded-full font-bold text-sm hover:bg-yellow-100 transition-colors shadow-md"
                        onClick={(e) => {
                            e.preventDefault()
                            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        Jetzt sichern
                    </a>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="ml-2 p-1 hover:bg-white/20 rounded transition-colors"
                        aria-label="Banner schließen"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

// Floating promotional badge component
export function PromoFloatingBadge() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 5000) // Show after 5 seconds
        return () => clearTimeout(timer)
    }, [])

    if (!isVisible) return null

    return (
        <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            className="fixed bottom-24 right-6 z-40"
        >
            <motion.div
                animate={{
                    y: [0, -5, 0],
                    rotate: [-2, 2, -2]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative"
            >
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-white p-4 rounded-2xl shadow-2xl max-w-[200px]">
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute -top-2 -right-2 bg-white text-orange-500 rounded-full p-1 shadow-md hover:bg-gray-100"
                        aria-label="Schließen"
                    >
                        <X className="w-3 h-3" />
                    </button>
                    <div className="text-center">
                        <div className="text-xs font-semibold mb-1">🎉 LIMITIERT</div>
                        <div className="text-2xl font-black mb-1">-33%</div>
                        <div className="text-xs">für die ersten 100 Teilnehmer</div>
                        <a
                            href="#pricing"
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                                setIsVisible(false)
                            }}
                            className="mt-2 block bg-white text-orange-600 px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-yellow-50 transition-colors"
                        >
                            Jetzt sichern →
                        </a>
                    </div>
                </div>
                {/* Pulsing ring effect */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-orange-400 rounded-2xl -z-10"
                />
            </motion.div>
        </motion.div>
    )
}
