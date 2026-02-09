import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import {
    loadEmailTemplate,
    replaceTemplatePlaceholders,
    prepareOrderEmailData,
} from '@/lib/email-templates'

// Initialisiere Resend mit API-Key
const resend = new Resend(process.env.RESEND_API_KEY)

// Konfiguration
const EMAIL_FROM = process.env.EMAIL_FROM || 'info@test-it-academy.de'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@test-it-academy.de'
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'https://your-domain.vercel.app'

export async function POST(request: Request) {
    try {
        // Parse Order-Daten
        const orderData = await request.json()

        // Validierung
        if (!orderData.email || !orderData.order_number) {
            return NextResponse.json(
                { error: 'Missing required fields: email or order_number' },
                { status: 400 }
            )
        }

        // Bereite Daten für Templates vor
        const templateData = prepareOrderEmailData(orderData)

        // Lade und befülle Templates
        const customerTemplate = loadEmailTemplate('customer-confirmation.html')
        const adminTemplate = loadEmailTemplate('admin-notification.html')

        let customerEmailHtml = replaceTemplatePlaceholders(
            customerTemplate,
            templateData
        )
        let adminEmailHtml = replaceTemplatePlaceholders(adminTemplate, templateData)

        // Ersetze Logo-URL (falls nicht bereits als absolute URL vorhanden)
        const logoUrl = `${DOMAIN}/logo/WAMOCON_ACADEMY_LOGO.png`
        customerEmailHtml = customerEmailHtml.replace(
            'https://your-domain.com/logo/WAMOCON_ACADEMY_LOGO.png',
            logoUrl
        )

        // E-Mails senden
        const results = await Promise.allSettled([
            // 1. Kundenbestätigung
            resend.emails.send({
                from: `WAMOCON Academy <${EMAIL_FROM}>`,
                to: orderData.email,
                subject: `Bestellbestätigung ${orderData.order_number} - WAMOCON Academy`,
                html: customerEmailHtml,
            }),

            // 2. Admin-Benachrichtigung
            resend.emails.send({
                from: `WAMOCON Academy System <${EMAIL_FROM}>`,
                to: ADMIN_EMAIL,
                subject: `🔔 Neue Bestellung: ${orderData.order_number} - ${orderData.vorname} ${orderData.nachname}`,
                html: adminEmailHtml,
                // Optional: Reply-To auf Kunden-Email setzen
                replyTo: orderData.email,
            }),
        ])

        // Prüfe Ergebnisse
        const customerEmailResult = results[0]
        const adminEmailResult = results[1]

        const errors = []
        if (customerEmailResult.status === 'rejected') {
            console.error('Failed to send customer email:', customerEmailResult.reason)
            errors.push('customer_email_failed')
        }
        if (adminEmailResult.status === 'rejected') {
            console.error('Failed to send admin email:', adminEmailResult.reason)
            errors.push('admin_email_failed')
        }

        // Wenn mindestens eine E-Mail erfolgreich war, ist es OK
        if (errors.length === 2) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Failed to send both emails',
                    details: errors,
                },
                { status: 500 }
            )
        }

        return NextResponse.json({
            success: true,
            customerEmailSent: customerEmailResult.status === 'fulfilled',
            adminEmailSent: adminEmailResult.status === 'fulfilled',
            errors: errors.length > 0 ? errors : undefined,
        })
    } catch (error) {
        console.error('Error in send-order-emails API:', error)
        return NextResponse.json(
            {
                success: false,
                error: 'Internal server error',
                message: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
        )
    }
}
