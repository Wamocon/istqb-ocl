'use client'

import Script from 'next/script'
import { useCookieConsent } from '@/components/providers/CookieConsentProvider'

interface GoogleAnalyticsProps {
    measurementId: string
}

/**
 * Google Analytics 4 (GA4) Integration
 * 
 * Wird NUR geladen, wenn der Nutzer die Statistik-Cookies akzeptiert hat.
 * DSGVO-konform durch Einwilligungs-basiertes Laden.
 */
export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
    const { consent, hasDecided } = useCookieConsent()

    // Nicht laden, wenn keine Entscheidung getroffen wurde oder keine Einwilligung
    if (!hasDecided || !consent.statistics) {
        return null
    }

    // Keine ID konfiguriert
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
        console.warn('Google Analytics: Keine gültige Measurement ID konfiguriert')
        return null
    }

    return (
        <>
            {/* Google Analytics Script */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
            </Script>
        </>
    )
}

/**
 * Google Analytics Page View Tracking
 * Optionale Funktion für Single Page Apps um Seitenaufrufe manuell zu tracken
 */
export function trackPageView(url: string) {
    if (typeof window !== 'undefined' && 'gtag' in window) {
        // @ts-ignore
        window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
            page_path: url,
        })
    }
}

/**
 * Google Analytics Event Tracking
 * Für Custom Events wie Button-Klicks, Formular-Absendungen, etc.
 */
export function trackEvent(action: string, category: string, label?: string, value?: number) {
    if (typeof window !== 'undefined' && 'gtag' in window) {
        // @ts-ignore
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}
