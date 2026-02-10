
// ==========================================
// SUPABASE EDGE FUNCTION: send-order-emails
// BUNDLED VERSION - NO CONFIG REQUIRED!
// ==========================================

import "jsr:@supabase/functions-js/edge-runtime.d.ts";

// --- CONFIGURATION (SECURE ENV VARS) ---
// Secrets are loaded from Supabase Vault (Environment Variables)
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const EMAIL_FROM = Deno.env.get('EMAIL_FROM') || 'info@test-it-academy.de';
const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') || 'info@test-it-academy.de';
const DOMAIN = Deno.env.get('DOMAIN') || 'https://onlinekurs.test-it-academy.de';

// --- INLINED TEMPLATES (MINIFIED) ---
// No file uploads needed!

const TEMPLATE_CUSTOMER = `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Bestellbestätigung - WAMOCON Academy</title><style>body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;background-color:#f4f4f5;color:#18181b;line-height:1.6}.container{max-width:600px;margin:0 auto;background-color:#ffffff}.header{background:linear-gradient(135deg,#0F172A 0%,#1e293b 100%);padding:40px 30px;text-align:center}.logo{max-width:200px;height:auto;margin-bottom:20px}.header-title{color:#ffffff;font-size:24px;font-weight:600;margin:0}.content{padding:40px 30px}.greeting{font-size:18px;font-weight:600;color:#0F172A;margin-bottom:20px}.message{font-size:16px;color:#3f3f46;margin-bottom:30px}.success-badge{background-color:#dcfce7;border-left:4px solid #10B981;padding:20px;margin:30px 0;border-radius:4px}.success-badge h3{color:#059669;margin:0 0 10px 0;font-size:18px}.success-badge p{color:#065f46;margin:0;font-size:14px}.info-box{background-color:#f4f4f5;border-radius:8px;padding:25px;margin:30px 0}.info-box h3{color:#0F172A;font-size:16px;margin:0 0 15px 0;font-weight:600}.info-row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e4e4e7}.info-row:last-child{border-bottom:none}.info-label{color:#71717a;font-size:14px}.info-value{color:#18181b;font-size:14px;font-weight:600;text-align:right}.next-steps{background:linear-gradient(135deg,#10B981 0%,#059669 100%);color:#ffffff;padding:25px;border-radius:8px;margin:30px 0}.next-steps h3{color:#ffffff;margin:0 0 15px 0;font-size:18px}.next-steps ul{margin:0;padding-left:20px}.next-steps li{margin-bottom:10px;font-size:14px}.footer{background-color:#0F172A;color:#a1a1aa;padding:30px;text-align:center;font-size:13px}.footer p{margin:5px 0}.footer a{color:#10B981;text-decoration:none}.divider{height:1px;background-color:#e4e4e7;margin:30px 0}@media only screen and (max-width:600px){.content{padding:25px 20px}.header{padding:30px 20px}.info-row{flex-direction:column;gap:5px}.info-value{text-align:left}}</style></head><body><div class="container"><div class="header"><img src="{{LOGO_URL}}" alt="WAMOCON Academy Logo" class="logo"><h1 class="header-title">Bestellbestätigung</h1></div><div class="content"><p class="greeting">Hallo {{anrede}} {{vorname}} {{nachname}},</p><p class="message">vielen Dank für Ihre Bestellung bei der WAMOCON Academy! Wir haben Ihre Bestellung erfolgreich erhalten und bearbeiten diese nun.</p><div class="success-badge"><h3>✓ Bestellung erfolgreich eingegangen</h3><p>Bestellnummer: {{order_number}}</p></div><div class="info-box"><h3>Ihre Bestelldetails</h3><div class="info-row"><span class="info-label">Produkt:</span><span class="info-value">{{product_name}}</span></div><div class="info-row"><span class="info-label">Zahlungsart:</span><span class="info-value">{{zahlungsart}}</span></div><div class="info-row"><span class="info-label">Gesamtbetrag:</span><span class="info-value">{{total_amount}}€</span></div><div class="info-row"><span class="info-label">Bestelldatum:</span><span class="info-value">{{order_date}}</span></div></div><div class="next-steps"><h3>🎯 Wie geht es weiter?</h3><ul><li><strong>Persönliche Beratung:</strong> Einer unserer Experten von der WAMOCON Academy wird sich in Kürze bei Ihnen melden.</li><li><strong>Individuelle Abstimmung:</strong> Wir klären gemeinsam alle offenen Fragen.</li><li><strong>Kursstart:</strong> Nach Zahlungseingang erhalten Sie Ihre Zugangsdaten.</li></ul></div><div class="divider"></div><p class="message">Falls Sie noch Fragen haben, können Sie uns jederzeit unter <a href="mailto:info@test-it-academy.de" style="color:#10B981;text-decoration:none;font-weight:600;">info@test-it-academy.de</a> erreichen.</p><p style="font-size:16px;color:#0F172A;margin-top:30px;">Mit freundlichen Grüßen<br><strong>Ihr Team der WAMOCON Academy</strong></p></div><div class="footer"><p><strong>WAMOCON Academy</strong></p><p>E-Mail: <a href="mailto:info@test-it-academy.de">info@test-it-academy.de</a></p><p style="margin-top:20px;font-size:12px;">Diese E-Mail wurde automatisch generiert.</p></div></div></body></html>`;

const TEMPLATE_ADMIN = `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Neue Bestellung</title><style>body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;background-color:#f4f4f5;color:#18181b;line-height:1.6}.container{max-width:700px;margin:0 auto;background-color:#ffffff}.header{background:linear-gradient(135deg,#dc2626 0%,#991b1b 100%);padding:40px 30px;text-align:center}.header-icon{font-size:48px;margin-bottom:15px}.header-title{color:#ffffff;font-size:26px;font-weight:700;margin:0}.header-subtitle{color:#fecaca;font-size:14px;margin:10px 0 0 0}.content{padding:40px 30px}.alert-box{background:linear-gradient(135deg,#fee2e2 0%,#fecaca 100%);border-left:4px solid #dc2626;padding:20px;margin-bottom:30px;border-radius:4px}.alert-box h2{color:#991b1b;margin:0 0 10px 0;font-size:20px}.section{margin-bottom:30px}.section-title{background-color:#0F172A;color:#ffffff;padding:12px 20px;font-size:16px;font-weight:600;margin:0 0 15px 0;border-radius:4px}.data-table{width:100%;border-collapse:collapse;margin-bottom:20px}.data-table tr{border-bottom:1px solid #e4e4e7}.data-table td{padding:12px 15px;font-size:14px}.data-table td:first-child{font-weight:600;color:#52525b;width:40%;vertical-align:top}.highlight-row{background-color:#fef3c7}.highlight-row td{font-weight:700;color:#854d0e}.priority-box{background:linear-gradient(135deg,#10B981 0%,#059669 100%);color:#ffffff;padding:25px;border-radius:8px;margin:30px 0}.badge{display:inline-block;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600;margin-left:8px}.badge-new{background-color:#dc2626;color:#ffffff}.badge-pending{background-color:#f59e0b;color:#ffffff}.footer{background-color:#0F172A;color:#a1a1aa;padding:25px 30px;text-align:center;font-size:13px}</style></head><body><div class="container"><div class="header"><div class="header-icon">🔔</div><h1 class="header-title">Neue Kundenbestellung</h1><p class="header-subtitle">WAMOCON Academy - Bestellbenachrichtigung</p></div><div class="content"><div class="alert-box"><h2>⚡ Aktion erforderlich!</h2><p>Ein neuer Kunde hat soeben eine Bestellung aufgegeben.</p></div><div class="section"><h2 class="section-title">📦 Bestellübersicht</h2><table class="data-table"><tr><td>Bestellnummer:</td><td><strong>{{order_number}}</strong> <span class="badge badge-new">NEU</span></td></tr><tr><td>Bestelldatum:</td><td>{{order_date}}</td></tr><tr><td>Produkt:</td><td><strong>{{product_name}}</strong></td></tr><tr><td>Preis:</td><td>{{price}}€</td></tr><tr><td>Zahlungsart:</td><td>{{zahlungsart}}</td></tr><tr class="highlight-row"><td>Gesamtbetrag:</td><td>{{total_amount}}€</td></tr><tr><td>Status:</td><td><span class="badge badge-pending">AUSSTEHEND</span></td></tr></table></div><div class="section"><h2 class="section-title">👤 Kundendaten</h2><table class="data-table"><tr><td>Anrede:</td><td>{{anrede}}</td></tr><tr><td>Vorname:</td><td>{{vorname}}</td></tr><tr><td>Nachname:</td><td>{{nachname}}</td></tr><tr class="highlight-row"><td>E-Mail:</td><td><a href="mailto:{{email}}" style="color:#18181b;text-decoration:none;font-weight:700;">{{email}}</a></td></tr></table></div><div class="section"><h2 class="section-title">📍 Rechnungsadresse</h2><table class="data-table"><tr><td>Straße / Nr.:</td><td>{{strasse}} {{hausnummer}}</td></tr><tr><td>PLZ / Ort:</td><td>{{plz}} {{ort}}</td></tr><tr><td>Land:</td><td>{{land}}</td></tr></table></div><div class="section"><h2 class="section-title">🏢 Firmendaten</h2><table class="data-table"><tr><td>Firma:</td><td>{{firma}}</td></tr><tr><td>USt-IdNr.:</td><td>{{ust_id_nr}}</td></tr></table></div><div class="section"><h2 class="section-title">✓ Rechtliche Bestätigungen</h2><table class="data-table"><tr><td>AGB akzeptiert:</td><td>{{agb_akzeptiert}}</td></tr><tr><td>Datenschutz:</td><td>{{datenschutz_akzeptiert}}</td></tr></table></div><div class="priority-box"><h3>🎯 Nächste Schritte</h3><ul><li><strong>Kundenkontakt aufnehmen:</strong> <a href="mailto:{{email}}" style="color:#ffffff">{{email}}</a> kontaktieren.</li><li><strong>Rechnung erstellen:</strong> Nach deutschen Standards.</li><li><strong>Kurszugang vorbereiten:</strong> Zugangsdaten senden.</li></ul></div></div><div class="footer"><p><strong>WAMOCON Academy</strong></p><p>E-Mail: info@test-it-academy.de</p></div></div></body></html>`;

// --- MAIN LOGIC ---

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface OrderData {
    order_id: string; order_number: string; created_at: string;
    anrede: string; vorname: string; nachname: string; email: string;
    strasse: string; hausnummer: string; plz: string; ort: string; land: string;
    firma?: string; ust_id_nr?: string; product_name: string; price: number;
    zahlungsart: string; total_amount: number;
    agb_akzeptiert: boolean; widerrufsbelehrung_akzeptiert: boolean; datenschutz_akzeptiert: boolean;
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function boolToJaNein(value: boolean): string { return value ? 'Ja' : 'Nein' }

function replaceTemplateVariables(template: string, data: Record<string, string | number>): string {
    let result = template
    Object.keys(data).forEach((key) => {
        const regex = new RegExp(`{{${key}}}`, 'g')
        const value = data[key] !== null && data[key] !== undefined ? String(data[key]) : '-'
        result = result.replace(regex, value)
    })
    return result
}

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
        zahlungsart: orderData.zahlungsart === 'einmalzahlung' ? 'Einmalzahlung' : 'Ratenzahlung (5 Raten)',
        total_amount: orderData.total_amount,
        agb_akzeptiert: boolToJaNein(orderData.agb_akzeptiert),
        widerrufsbelehrung_akzeptiert: boolToJaNein(orderData.widerrufsbelehrung_akzeptiert),
        datenschutz_akzeptiert: boolToJaNein(orderData.datenschutz_akzeptiert),
        LOGO_URL: `${DOMAIN}/logo/WAMOCON_ACADEMY_LOGO.png`,
    }
}

async function sendEmail(to: string, subject: string, html: string, replyTo?: string): Promise<{ success: boolean; id?: string; error?: string }> {
    if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY not configured')
    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_API_KEY}` },
            body: JSON.stringify({
                from: `WAMOCON Academy <${EMAIL_FROM}>`,
                to: [to],
                subject,
                html,
                ...(replyTo && { reply_to: replyTo }),
            }),
        })
        const data = await response.json()
        if (!response.ok) { console.error('Resend Error:', data); return { success: false, error: data.message } }
        return { success: true, id: data.id }
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        console.error('Sending Error:', message);
        return { success: false, error: message }
    }
}

Deno.serve(async (req: Request): Promise<Response> => {
    if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
    try {
        const orderData: OrderData = await req.json()
        console.log('Processing:', orderData.order_number)

        const templateData = prepareTemplateData(orderData)

        const customerHtml = replaceTemplateVariables(TEMPLATE_CUSTOMER, templateData);
        const adminHtml = replaceTemplateVariables(TEMPLATE_ADMIN, templateData);

        const [res1, res2] = await Promise.allSettled([
            sendEmail(orderData.email, `Bestellbestätigung ${orderData.order_number} - WAMOCON Academy`, customerHtml),
            sendEmail(ADMIN_EMAIL!, `🔔 Neue Bestellung: ${orderData.order_number}`, adminHtml, orderData.email)
        ])

        const results = {
            customer: res1.status === 'fulfilled' ? res1.value : { success: false, error: String(res1.reason) },
            admin: res2.status === 'fulfilled' ? res2.value : { success: false, error: String(res2.reason) }
        }
        console.log('Results:', results)

        return new Response(JSON.stringify({ success: true, results }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 })
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        console.error('Fatal Error:', message)
        return new Response(JSON.stringify({ success: false, error: message }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 })
    }
})
