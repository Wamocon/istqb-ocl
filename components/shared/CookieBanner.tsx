'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCookieConsent } from '@/components/providers/CookieConsentProvider'
import { X, Cookie, BarChart3, Target, Shield, ChevronDown, ChevronUp, Settings } from 'lucide-react'

interface CookieCategory {
    id: 'necessary' | 'statistics' | 'marketing'
    name: string
    description: string
    icon: React.ReactNode
    required: boolean
    cookies: { name: string; purpose: string; duration: string }[]
}

const cookieCategories: CookieCategory[] = [
    {
        id: 'necessary',
        name: 'Notwendig',
        description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
        icon: <Shield className="w-5 h-5" />,
        required: true,
        cookies: [
            { name: 'cookie_consent', purpose: 'Speichert Ihre Cookie-Einstellungen', duration: '1 Jahr' },
        ],
    },
    {
        id: 'statistics',
        name: 'Statistik',
        description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
        icon: <BarChart3 className="w-5 h-5" />,
        required: false,
        cookies: [
            { name: '_ga', purpose: 'Google Analytics - Unterscheidung von Nutzern', duration: '2 Jahre' },
            { name: '_gid', purpose: 'Google Analytics - Unterscheidung von Nutzern', duration: '24 Stunden' },
            { name: '_gat', purpose: 'Google Analytics - Drosselung der Anfragen', duration: '1 Minute' },
        ],
    },
    {
        id: 'marketing',
        name: 'Marketing',
        description: 'Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.',
        icon: <Target className="w-5 h-5" />,
        required: false,
        cookies: [
            { name: '_fbp', purpose: 'Meta Pixel - Identifizierung von Browsern', duration: '3 Monate' },
            { name: '_fbc', purpose: 'Meta Pixel - Speichert Klick-IDs', duration: '3 Monate' },
        ],
    },
]

export function CookieBanner() {
    const { showBanner, acceptAll, acceptSelected, rejectAll } = useCookieConsent()
    const [showDetails, setShowDetails] = React.useState(false)
    const [selections, setSelections] = React.useState({
        necessary: true,
        statistics: false,
        marketing: false,
    })
    const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null)

    const handleToggle = (id: 'statistics' | 'marketing') => {
        setSelections(prev => ({ ...prev, [id]: !prev[id] }))
    }

    const handleSaveSelected = () => {
        acceptSelected(selections)
    }

    return (
        <AnimatePresence>
            {showBanner && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
                        aria-hidden="true"
                    />

                    {/* Banner */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="cookie-banner-title"
                    >
                        <div className="max-w-4xl mx-auto bg-background-card border border-border rounded-2xl shadow-2xl overflow-hidden">
                            {/* Header */}
                            <div className="p-6 pb-4 border-b border-border/50">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent/10 rounded-xl">
                                        <Cookie className="w-6 h-6 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 id="cookie-banner-title" className="text-xl font-bold text-foreground mb-2">
                                            🍪 Wir respektieren Ihre Privatsphäre
                                        </h2>
                                        <p className="text-foreground-muted text-sm leading-relaxed">
                                            Wir verwenden Cookies und ähnliche Technologien, um Ihre Erfahrung auf unserer Website
                                            zu verbessern und unsere Dienste zu analysieren. Einige Cookies sind notwendig, andere
                                            helfen uns, unsere Website und Marketing zu optimieren.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Details Section */}
                            <AnimatePresence>
                                {showDetails && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-4 border-b border-border/50 bg-background/50 max-h-[40vh] overflow-y-auto">
                                            <div className="space-y-4">
                                                {cookieCategories.map((category) => (
                                                    <div
                                                        key={category.id}
                                                        className="bg-background-card/50 border border-border/30 rounded-xl overflow-hidden"
                                                    >
                                                        {/* Category Header */}
                                                        <div className="p-4 flex items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <div className={`p-2 rounded-lg ${category.required
                                                                        ? 'bg-green-500/10 text-green-500'
                                                                        : 'bg-accent/10 text-accent'
                                                                    }`}>
                                                                    {category.icon}
                                                                </div>
                                                                <div>
                                                                    <div className="flex items-center gap-2">
                                                                        <h3 className="font-semibold text-foreground">{category.name}</h3>
                                                                        {category.required && (
                                                                            <span className="text-[10px] font-medium uppercase tracking-wide px-2 py-0.5 bg-green-500/10 text-green-500 rounded">
                                                                                Erforderlich
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    <p className="text-xs text-foreground-muted mt-0.5">
                                                                        {category.description}
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-center gap-3">
                                                                {/* Toggle Switch */}
                                                                <label className="relative inline-flex items-center cursor-pointer">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selections[category.id]}
                                                                        disabled={category.required}
                                                                        onChange={() => !category.required && handleToggle(category.id as 'statistics' | 'marketing')}
                                                                        className="sr-only peer"
                                                                    />
                                                                    <div className={`
                                    w-11 h-6 rounded-full peer transition-colors duration-200
                                    ${category.required
                                                                            ? 'bg-green-500 cursor-not-allowed'
                                                                            : selections[category.id]
                                                                                ? 'bg-accent'
                                                                                : 'bg-gray-600'
                                                                        }
                                    after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                                    after:bg-white after:rounded-full after:h-5 after:w-5 
                                    after:transition-all after:duration-200
                                    ${selections[category.id] ? 'after:translate-x-5' : ''}
                                  `} />
                                                                </label>

                                                                {/* Expand Button */}
                                                                <button
                                                                    onClick={() => setExpandedCategory(
                                                                        expandedCategory === category.id ? null : category.id
                                                                    )}
                                                                    className="p-1.5 hover:bg-background rounded-lg transition-colors"
                                                                    aria-label={`${category.name} Details anzeigen`}
                                                                >
                                                                    {expandedCategory === category.id
                                                                        ? <ChevronUp className="w-4 h-4 text-foreground-muted" />
                                                                        : <ChevronDown className="w-4 h-4 text-foreground-muted" />
                                                                    }
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {/* Cookie Details */}
                                                        <AnimatePresence>
                                                            {expandedCategory === category.id && (
                                                                <motion.div
                                                                    initial={{ height: 0 }}
                                                                    animate={{ height: 'auto' }}
                                                                    exit={{ height: 0 }}
                                                                    className="overflow-hidden"
                                                                >
                                                                    <div className="px-4 pb-4">
                                                                        <table className="w-full text-xs">
                                                                            <thead>
                                                                                <tr className="text-foreground-muted border-b border-border/30">
                                                                                    <th className="text-left py-2 font-medium">Cookie</th>
                                                                                    <th className="text-left py-2 font-medium">Zweck</th>
                                                                                    <th className="text-left py-2 font-medium">Dauer</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {category.cookies.map((cookie) => (
                                                                                    <tr key={cookie.name} className="border-b border-border/20 last:border-0">
                                                                                        <td className="py-2 font-mono text-accent">{cookie.name}</td>
                                                                                        <td className="py-2 text-foreground-muted">{cookie.purpose}</td>
                                                                                        <td className="py-2 text-foreground-muted">{cookie.duration}</td>
                                                                                    </tr>
                                                                                ))}
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Legal Links */}
                                            <div className="mt-4 pt-4 border-t border-border/30 text-xs text-foreground-muted">
                                                <p>
                                                    Weitere Informationen finden Sie in unserer{' '}
                                                    <a href="/datenschutz" className="text-accent hover:underline">
                                                        Datenschutzerklärung
                                                    </a>
                                                    .
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Actions */}
                            <div className="p-6 pt-4 flex flex-col sm:flex-row gap-3">
                                {/* Left side - Settings toggle */}
                                <button
                                    onClick={() => setShowDetails(!showDetails)}
                                    className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground-muted hover:text-foreground border border-border rounded-xl hover:bg-background transition-colors"
                                >
                                    <Settings className="w-4 h-4" />
                                    {showDetails ? 'Weniger Optionen' : 'Cookie-Einstellungen'}
                                </button>

                                {/* Right side - Main actions */}
                                <div className="flex-1 flex flex-col sm:flex-row gap-3 sm:justify-end">
                                    <button
                                        onClick={rejectAll}
                                        className="px-6 py-2.5 text-sm font-medium text-foreground-muted hover:text-foreground border border-border rounded-xl hover:bg-background transition-colors"
                                    >
                                        Nur Notwendige
                                    </button>

                                    {showDetails ? (
                                        <button
                                            onClick={handleSaveSelected}
                                            className="px-6 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-colors shadow-lg shadow-accent/20"
                                        >
                                            Auswahl speichern
                                        </button>
                                    ) : (
                                        <button
                                            onClick={acceptAll}
                                            className="px-6 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-colors shadow-lg shadow-accent/20"
                                        >
                                            Alle akzeptieren
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

/**
 * Kleiner Button zum erneuten Öffnen der Cookie-Einstellungen
 * Wird in der Footer-Nähe angezeigt
 */
export function CookieSettingsButton() {
    const { hasDecided, setShowBanner } = useCookieConsent()

    if (!hasDecided) return null

    return (
        <button
            onClick={() => setShowBanner(true)}
            className="fixed bottom-4 left-4 z-[100] p-3 bg-background-card border border-border rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
            aria-label="Cookie-Einstellungen öffnen"
            title="Cookie-Einstellungen"
        >
            <Cookie className="w-5 h-5 text-foreground-muted group-hover:text-accent transition-colors" />
        </button>
    )
}
