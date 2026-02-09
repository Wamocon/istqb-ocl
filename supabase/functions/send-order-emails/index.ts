// Supabase Edge Function: send-order-emails
// Purpose: Send confirmation email to customer and notification to admin
// Triggered by: Database trigger on orders table
// Runtime: Deno

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

// Configuration from environment variables
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const EMAIL_FROM = Deno.env.get('EMAIL_FROM') || 'info@test-it-academy.de'
const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') || 'info@test-it-academy.de'
const DOMAIN = Deno.env.get('DOMAIN') || 'https://your-domain.vercel.app'

// CORS headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface OrderData {
    order_id: string
    order_number: string
    created_at: string
    anrede: string
    vorname: string
    nachname: string
    email: string
    strasse: string
    hausnummer: string
    plz: string
    ort: string
    land: string
    firma?: string | null
    ust_id_nr?: string | null
    product_name: string
    price: number
    zahlungsart: 'einmalzahlung' | 'ratenzahlung'
    total_amount: number
    agb_akzeptiert: boolean
    widerrufsbelehrung_akzeptiert: boolean
    datenschutz_akzeptiert: boolean
}

// Helper function to format date
function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })
}

// Helper function to convert boolean to Ja/Nein
function boolToJaNein(value: boolean): string {
    return value ? 'Ja' : 'Nein'
}

// Load email template
async function loadTemplate(templateName: string): Promise<string> {
    try {
        // Templates are stored in the function directory
        const templatePath = `./templates/${templateName}`
        const template = await Deno.readTextFile(templatePath)
        return template
    } catch (error) {
        console.error(`Error loading template ${templateName}:`, error)
        throw new Error(`Failed to load template: ${templateName}`)
    }
}

// Replace placeholders in template
function replaceTemplateVariables(template: string, data: Record<string, string | number>): string {
    let result = template

    Object.keys(data).forEach((key) => {
        const regex = new RegExp(`{{${key}}}`, 'g')
        const value = data[key] !== null && data[key] !== undefined ? String(data[key]) : '-'
        result = result.replace(regex, value)
    })

    return result
}

// Prepare order data for email template
function prepareTemplateData(orderData: OrderData): Record<string, string | number> {
    return {
        order_number: orderData.order_number,
        order_date: formatDate(orderData.created_at),
        anrede: orderData.anrede,
        vorname: orderData.vorname,
        nachname: orderData.nachname,
        email: orderData.email,
        strasse: orderData.strasse,
        hausnummer: orderData.hausnummer,
        plz: orderData.plz,
        ort: orderData.ort,
        land: orderData.land,
        firma: orderData.firma || '-',
        ust_id_nr: orderData.ust_id_nr || '-',
        product_name: orderData.product_name,
        price: orderData.price,
        zahlungsart:
            orderData.zahlungsart === 'einmalzahlung' ? 'Einmalzahlung' : 'Ratenzahlung (5 Raten)',
        total_amount: orderData.total_amount,
        agb_akzeptiert: boolToJaNein(orderData.agb_akzeptiert),
        widerrufsbelehrung_akzeptiert: boolToJaNein(orderData.widerrufsbelehrung_akzeptiert),
        datenschutz_akzeptiert: boolToJaNein(orderData.datenschutz_akzeptiert),
    }
}

// Send email via Resend API
async function sendEmail(
    to: string,
    subject: string,
    html: string,
    replyTo?: string
): Promise<{ success: boolean; id?: string; error?: string }> {
    if (!RESEND_API_KEY) {
        throw new Error('RESEND_API_KEY is not set')
    }

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: `WAMOCON Academy <${EMAIL_FROM}>`,
                to: [to],
                subject: subject,
                html: html,
                ...(replyTo && { replyTo: replyTo }),
            }),
        })

        const data = await response.json()

        if (!response.ok) {
            console.error('Resend API error:', data)
            return { success: false, error: data.message || 'Unknown error' }
        }

        return { success: true, id: data.id }
    } catch (error) {
        console.error('Error sending email:', error)
        return { success: false, error: error.message }
    }
}

serve(async (req) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        // Parse request body
        const orderData: OrderData = await req.json()

        console.log('Processing order:', orderData.order_number)

        // Validate required fields
        if (!orderData.email || !orderData.order_number) {
            throw new Error('Missing required fields: email or order_number')
        }

        // Prepare template data
        const templateData = prepareTemplateData(orderData)

        // Load templates
        const customerTemplate = await loadTemplate('customer-confirmation.html')
        const adminTemplate = await loadTemplate('admin-notification.html')

        // Replace placeholders
        let customerEmailHtml = replaceTemplateVariables(customerTemplate, templateData)
        let adminEmailHtml = replaceTemplateVariables(adminTemplate, templateData)

        // Replace logo URL
        const logoUrl = `${DOMAIN}/logo/WAMOCON_ACADEMY_LOGO.png`
        customerEmailHtml = customerEmailHtml.replace(
            'https://your-domain.com/logo/WAMOCON_ACADEMY_LOGO.png',
            logoUrl
        )

        // Send emails in parallel
        const [customerResult, adminResult] = await Promise.allSettled([
            sendEmail(
                orderData.email,
                `Bestellbestätigung ${orderData.order_number} - WAMOCON Academy`,
                customerEmailHtml
            ),
            sendEmail(
                ADMIN_EMAIL,
                `🔔 Neue Bestellung: ${orderData.order_number} - ${orderData.vorname} ${orderData.nachname}`,
                adminEmailHtml,
                orderData.email // Reply-To customer email
            ),
        ])

        // Check results
        const results = {
            customerEmail: customerResult.status === 'fulfilled' ? customerResult.value : { success: false, error: customerResult.reason },
            adminEmail: adminResult.status === 'fulfilled' ? adminResult.value : { success: false, error: adminResult.reason },
        }

        console.log('Email results:', results)

        // Return response
        return new Response(
            JSON.stringify({
                success: true,
                customerEmailSent: results.customerEmail.success,
                adminEmailSent: results.adminEmail.success,
                results,
            }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 200,
            }
        )
    } catch (error) {
        console.error('Error in send-order-emails function:', error)

        return new Response(
            JSON.stringify({
                success: false,
                error: error.message,
            }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 500,
            }
        )
    }
})
