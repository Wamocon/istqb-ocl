'use client'

import { GoogleAnalytics } from './GoogleAnalytics'
import { MetaPixel } from './MetaPixel'

/**
 * Analytics Wrapper Komponente
 * 
 * Zentralisiert alle Analytics-Skripte an einem Ort.
 * Die einzelnen Komponenten prüfen selbst, ob sie laden dürfen (Cookie Consent).
 */
export function Analytics() {
    // IDs aus Umgebungsvariablen laden
    const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''
    const fbPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || ''

    return (
        <>
            <GoogleAnalytics measurementId={gaId} />
            <MetaPixel pixelId={fbPixelId} />
        </>
    )
}

// Re-export für einfachen Import
export { GoogleAnalytics, trackPageView, trackEvent } from './GoogleAnalytics'
export { MetaPixel, MetaPixelEvents } from './MetaPixel'
