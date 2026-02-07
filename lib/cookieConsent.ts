'use client'

/**
 * Cookie Consent Management - DSGVO-konform für Deutschland
 * 
 * Kategorien:
 * - necessary: Technisch notwendige Cookies (keine Einwilligung erforderlich)
 * - statistics: Analyse-Tools wie Google Analytics
 * - marketing: Werbe-Tracking wie Meta Pixel
 */

export interface CookieConsent {
    necessary: boolean // Immer true, nicht änderbar
    statistics: boolean // Google Analytics
    marketing: boolean // Meta Pixel, etc.
    timestamp: string // Zeitpunkt der Einwilligung
    version: string // Version der Consent-Anfrage
}

const CONSENT_COOKIE_NAME = 'cookie_consent'
const CONSENT_VERSION = '1.0.0'

/**
 * Standardwerte: Alles außer notwendige Cookies ist deaktiviert
 */
export const defaultConsent: CookieConsent = {
    necessary: true,
    statistics: false,
    marketing: false,
    timestamp: '',
    version: CONSENT_VERSION,
}

/**
 * Liest die gespeicherte Cookie-Einwilligung aus dem LocalStorage
 */
export function getStoredConsent(): CookieConsent | null {
    if (typeof window === 'undefined') return null

    try {
        const stored = localStorage.getItem(CONSENT_COOKIE_NAME)
        if (!stored) return null

        const consent = JSON.parse(stored) as CookieConsent

        // Prüfen ob Version aktuell ist
        if (consent.version !== CONSENT_VERSION) {
            return null // Erneute Einwilligung erforderlich
        }

        return consent
    } catch {
        return null
    }
}

/**
 * Speichert die Cookie-Einwilligung im LocalStorage
 */
export function saveConsent(consent: Partial<CookieConsent>): CookieConsent {
    const fullConsent: CookieConsent = {
        necessary: true, // Immer true
        statistics: consent.statistics ?? false,
        marketing: consent.marketing ?? false,
        timestamp: new Date().toISOString(),
        version: CONSENT_VERSION,
    }

    if (typeof window !== 'undefined') {
        localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(fullConsent))
    }

    return fullConsent
}

/**
 * Entfernt die gespeicherte Einwilligung
 */
export function revokeConsent(): void {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(CONSENT_COOKIE_NAME)

        // Auch alle Tracking-Cookies entfernen
        clearTrackingCookies()
    }
}

/**
 * Entfernt alle Tracking-Cookies von Google und Meta
 */
function clearTrackingCookies(): void {
    // Google Analytics Cookies
    const gaCookies = ['_ga', '_gid', '_gat', '_gac']

    // Meta Pixel Cookies
    const metaCookies = ['_fbp', '_fbc']

    const allCookies = [...gaCookies, ...metaCookies]

    allCookies.forEach(cookieName => {
        // Cookie mit verschiedenen Pfaden/Domains löschen
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`
    })
}

/**
 * Prüft, ob eine bestimmte Cookie-Kategorie erlaubt ist
 */
export function hasConsent(category: keyof Omit<CookieConsent, 'timestamp' | 'version'>): boolean {
    const consent = getStoredConsent()
    if (!consent) return category === 'necessary'
    return consent[category]
}

/**
 * Prüft, ob der Benutzer bereits eine Entscheidung getroffen hat
 */
export function hasUserDecided(): boolean {
    return getStoredConsent() !== null
}
