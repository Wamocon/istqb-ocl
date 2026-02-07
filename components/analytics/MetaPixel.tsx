'use client'

import Script from 'next/script'
import { useCookieConsent } from '@/components/providers/CookieConsentProvider'

interface MetaPixelProps {
    pixelId: string
}

/**
 * Meta (Facebook) Pixel Integration
 * 
 * Wird NUR geladen, wenn der Nutzer die Marketing-Cookies akzeptiert hat.
 * DSGVO-konform durch Einwilligungs-basiertes Laden.
 */
export function MetaPixel({ pixelId }: MetaPixelProps) {
    const { consent, hasDecided } = useCookieConsent()

    // Nicht laden, wenn keine Entscheidung getroffen wurde oder keine Einwilligung
    if (!hasDecided || !consent.marketing) {
        return null
    }

    // Keine ID konfiguriert
    if (!pixelId || pixelId === 'XXXXXXXXXXXXXXX') {
        console.warn('Meta Pixel: Keine gültige Pixel ID konfiguriert')
        return null
    }

    return (
        <>
            <Script id="meta-pixel" strategy="afterInteractive">
                {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
            </Script>
            {/* NoScript Fallback für Nutzer ohne JavaScript */}
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                    alt=""
                />
            </noscript>
        </>
    )
}

/**
 * Meta Pixel Standard Events
 * Dokumentation: https://developers.facebook.com/docs/meta-pixel/reference
 */
export const MetaPixelEvents = {
    // E-Commerce Events
    Purchase: (value: number, currency = 'EUR', contentName?: string) => {
        if (typeof window !== 'undefined' && 'fbq' in window) {
            // @ts-ignore
            window.fbq('track', 'Purchase', { value, currency, content_name: contentName })
        }
    },

    AddToCart: (value: number, currency = 'EUR', contentName?: string) => {
        if (typeof window !== 'undefined' && 'fbq' in window) {
            // @ts-ignore
            window.fbq('track', 'AddToCart', { value, currency, content_name: contentName })
        }
    },

    InitiateCheckout: (value: number, currency = 'EUR') => {
        if (typeof window !== 'undefined' && 'fbq' in window) {
            // @ts-ignore
            window.fbq('track', 'InitiateCheckout', { value, currency })
        }
    },

    // Lead Generation
    Lead: (contentName?: string) => {
        if (typeof window !== 'undefined' && 'fbq' in window) {
            // @ts-ignore
            window.fbq('track', 'Lead', { content_name: contentName })
        }
    },

    CompleteRegistration: (contentName?: string) => {
        if (typeof window !== 'undefined' && 'fbq' in window) {
            // @ts-ignore
            window.fbq('track', 'CompleteRegistration', { content_name: contentName })
        }
    },

    // Content Engagement
    ViewContent: (contentName?: string, contentCategory?: string, value?: number) => {
        if (typeof window !== 'undefined' && 'fbq' in window) {
            // @ts-ignore
            window.fbq('track', 'ViewContent', {
                content_name: contentName,
                content_category: contentCategory,
                value,
                currency: 'EUR'
            })
        }
    },

    // Custom Events
    Custom: (eventName: string, params?: Record<string, unknown>) => {
        if (typeof window !== 'undefined' && 'fbq' in window) {
            // @ts-ignore
            window.fbq('trackCustom', eventName, params)
        }
    },
}
