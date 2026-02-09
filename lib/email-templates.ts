import fs from 'fs'
import path from 'path'

interface TemplateData {
    [key: string]: string | number | boolean | null | undefined
}

/**
 * Lädt eine HTML-E-Mail-Vorlage aus dem emails-Verzeichnis
 * @param templateName - Name der Template-Datei (z.B. 'customer-confirmation.html')
 * @returns HTML-String der Vorlage
 */
export function loadEmailTemplate(templateName: string): string {
    const templatePath = path.join(process.cwd(), 'emails', templateName)
    return fs.readFileSync(templatePath, 'utf-8')
}

/**
 * Ersetzt alle Platzhalter ({{variable}}) in einem Template mit tatsächlichen Werten
 * @param template - HTML-Template-String mit Platzhaltern
 * @param data - Objekt mit Daten zum Ersetzen
 * @returns HTML-String mit ersetzten Werten
 */
export function replaceTemplatePlaceholders(
    template: string,
    data: TemplateData
): string {
    let result = template

    // Alle Platzhalter ersetzen
    Object.keys(data).forEach((key) => {
        const regex = new RegExp(`{{${key}}}`, 'g')
        let value = data[key]

        // Konvertiere Werte zu lesbaren Strings
        if (value === null || value === undefined || value === '') {
            value = '-'
        } else if (typeof value === 'boolean') {
            value = value ? 'Ja' : 'Nein'
        }

        result = result.replace(regex, String(value))
    })

    return result
}

/**
 * Bereitet Bestelldaten für E-Mail-Versand auf
 * @param orderData - Rohe Bestelldaten aus dem Formular
 * @returns Formatierte Daten für E-Mail-Template
 */
export function prepareOrderEmailData(orderData: {
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
}): TemplateData {
    return {
        order_number: orderData.order_number,
        order_date: new Date(orderData.created_at).toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }),
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
            orderData.zahlungsart === 'einmalzahlung'
                ? 'Einmalzahlung'
                : 'Ratenzahlung (5 Raten)',
        total_amount: orderData.total_amount,
        agb_akzeptiert: orderData.agb_akzeptiert,
        widerrufsbelehrung_akzeptiert: orderData.widerrufsbelehrung_akzeptiert,
        datenschutz_akzeptiert: orderData.datenschutz_akzeptiert,
    }
}
