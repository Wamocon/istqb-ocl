'use client'

import * as React from 'react'
import { CookieConsent, defaultConsent, getStoredConsent, saveConsent, hasUserDecided } from '@/lib/cookieConsent'

interface CookieConsentContextType {
    consent: CookieConsent
    hasDecided: boolean
    showBanner: boolean
    setShowBanner: (show: boolean) => void
    acceptAll: () => void
    acceptSelected: (selected: Partial<CookieConsent>) => void
    rejectAll: () => void
    openSettings: () => void
}

const CookieConsentContext = React.createContext<CookieConsentContextType | null>(null)

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
    const [consent, setConsent] = React.useState<CookieConsent>(defaultConsent)
    const [hasDecided, setHasDecided] = React.useState(true) // Start with true to prevent flash
    const [showBanner, setShowBanner] = React.useState(false)
    const [showSettings, setShowSettings] = React.useState(false)

    // Load consent on mount
    React.useEffect(() => {
        const stored = getStoredConsent()
        if (stored) {
            setConsent(stored)
            setHasDecided(true)
            setShowBanner(false)
        } else {
            setHasDecided(false)
            setShowBanner(true)
        }
    }, [])

    const acceptAll = React.useCallback(() => {
        const newConsent = saveConsent({
            necessary: true,
            statistics: true,
            marketing: true,
        })
        setConsent(newConsent)
        setHasDecided(true)
        setShowBanner(false)
        setShowSettings(false)

        // Reload to activate tracking scripts
        window.location.reload()
    }, [])

    const acceptSelected = React.useCallback((selected: Partial<CookieConsent>) => {
        const newConsent = saveConsent({
            necessary: true,
            statistics: selected.statistics ?? false,
            marketing: selected.marketing ?? false,
        })
        setConsent(newConsent)
        setHasDecided(true)
        setShowBanner(false)
        setShowSettings(false)

        // Reload to activate/deactivate tracking scripts
        window.location.reload()
    }, [])

    const rejectAll = React.useCallback(() => {
        const newConsent = saveConsent({
            necessary: true,
            statistics: false,
            marketing: false,
        })
        setConsent(newConsent)
        setHasDecided(true)
        setShowBanner(false)
        setShowSettings(false)
    }, [])

    const openSettings = React.useCallback(() => {
        setShowSettings(true)
    }, [])

    const value = React.useMemo(() => ({
        consent,
        hasDecided,
        showBanner,
        setShowBanner,
        acceptAll,
        acceptSelected,
        rejectAll,
        openSettings,
    }), [consent, hasDecided, showBanner, acceptAll, acceptSelected, rejectAll, openSettings])

    return (
        <CookieConsentContext.Provider value={value}>
            {children}
        </CookieConsentContext.Provider>
    )
}

export function useCookieConsent() {
    const context = React.useContext(CookieConsentContext)
    if (!context) {
        throw new Error('useCookieConsent must be used within CookieConsentProvider')
    }
    return context
}
