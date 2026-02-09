# E-Mail-Vorlagen für Vercel Integration

Dieses Verzeichnis enthält HTML-E-Mail-Vorlagen für automatische Benachrichtigungen bei Kundenbestellungen.

## 📧 Vorlagen-Übersicht

### 1. `customer-confirmation.html` - Kundenbestätigung
**Zweck:** Wird an den Kunden gesendet, nachdem er auf "Kostenpflichtig bestellen" geklickt hat.

**Absender:** info@test-it-academy.de

**Enthält:**
- WAMOCON Academy Logo
- Bestellbestätigung mit Bestellnummer
- Bestelldetails (Produkt, Zahlungsart, Gesamtbetrag)
- Information über nächste Schritte
- Hinweis, dass sich WAMOCON Academy melden wird

**Platzhalter/Variablen:**
- `{{anrede}}` - Herr/Frau/Divers
- `{{vorname}}` - Vorname des Kunden
- `{{nachname}}` - Nachname des Kunden
- `{{order_number}}` - Automatisch generierte Bestellnummer
- `{{product_name}}` - Name des bestellten Produkts
- `{{zahlungsart}}` - Einmalzahlung/Ratenzahlung
- `{{total_amount}}` - Gesamtbetrag in Euro
- `{{order_date}}` - Bestelldatum

---

### 2. `admin-notification.html` - Admin-Benachrichtigung
**Zweck:** Wird an info@test-it-academy.de gesendet, wenn ein Kunde bestellt.

**Absender:** noreply@your-domain.com (oder Vercel-Standard)

**Enthält:**
- Vollständige Bestellübersicht
- Alle Kundendaten aus dem Formular
- Rechnungsadresse
- Firmendaten (falls angegeben)
- Rechtliche Bestätigungen
- Handlungsempfehlungen für nächste Schritte

**Platzhalter/Variablen:**
- `{{order_number}}` - Bestellnummer
- `{{order_date}}` - Bestelldatum
- `{{product_name}}` - Produktname
- `{{price}}` - Einzelpreis
- `{{zahlungsart}}` - Zahlungsart (Einmalzahlung/Ratenzahlung)
- `{{total_amount}}` - Gesamtbetrag
- `{{anrede}}` - Anrede
- `{{vorname}}` - Vorname
- `{{nachname}}` - Nachname
- `{{email}}` - E-Mail-Adresse des Kunden
- `{{strasse}}` - Straße
- `{{hausnummer}}` - Hausnummer
- `{{plz}}` - Postleitzahl
- `{{ort}}` - Ort
- `{{land}}` - Land
- `{{firma}}` - Firmenname (optional)
- `{{ust_id_nr}}` - USt-IdNr (optional)
- `{{agb_akzeptiert}}` - Ja/Nein
- `{{widerrufsbelehrung_akzeptiert}}` - Ja/Nein
- `{{datenschutz_akzeptiert}}` - Ja/Nein

---

## 🚀 Integration in Vercel

### Option 1: Vercel Edge Functions + Resend/SendGrid

1. **E-Mail-Service einrichten:**
   ```bash
   npm install resend
   # oder
   npm install @sendgrid/mail
   ```

2. **Umgebungsvariablen in Vercel setzen:**
   - `RESEND_API_KEY` oder `SENDGRID_API_KEY`
   - `EMAIL_FROM=info@test-it-academy.de`
   - `ADMIN_EMAIL=info@test-it-academy.de`

3. **API Route erstellen** (`app/api/send-order-emails/route.ts`):
   ```typescript
   import { NextResponse } from 'next/server'
   import { Resend } from 'resend'
   import fs from 'fs'
   import path from 'path'

   const resend = new Resend(process.env.RESEND_API_KEY)

   export async function POST(request: Request) {
     try {
       const orderData = await request.json()

       // Load email templates
       const customerTemplate = fs.readFileSync(
         path.join(process.cwd(), 'emails/customer-confirmation.html'),
         'utf-8'
       )
       const adminTemplate = fs.readFileSync(
         path.join(process.cwd(), 'emails/admin-notification.html'),
         'utf-8'
       )

       // Replace placeholders
       const customerEmail = replaceTemplate(customerTemplate, orderData)
       const adminEmail = replaceTemplate(adminTemplate, orderData)

       // Send customer confirmation
       await resend.emails.send({
         from: 'WAMOCON Academy <info@test-it-academy.de>',
         to: orderData.email,
         subject: 'Bestellbestätigung - WAMOCON Academy',
         html: customerEmail,
       })

       // Send admin notification
       await resend.emails.send({
         from: 'WAMOCON Academy <noreply@your-domain.com>',
         to: 'info@test-it-academy.de',
         subject: `Neue Bestellung: ${orderData.order_number}`,
         html: adminEmail,
       })

       return NextResponse.json({ success: true })
     } catch (error) {
       console.error('Error sending emails:', error)
       return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 })
     }
   }

   function replaceTemplate(template: string, data: any): string {
     let result = template
     Object.keys(data).forEach(key => {
       const regex = new RegExp(`{{${key}}}`, 'g')
       result = result.replace(regex, data[key] || '-')
     })
     return result
   }
   ```

4. **In PurchaseDialog.tsx integrieren:**
   ```typescript
   // Nach erfolgreichem createOrder()
   await fetch('/api/send-order-emails', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       order_number: order.order_number,
       order_date: new Date().toLocaleDateString('de-DE'),
       anrede: formData.anrede,
       vorname: formData.vorname,
       nachname: formData.nachname,
       email: formData.email,
       product_name: productName,
       price: price,
       zahlungsart: formData.zahlungsart === 'einmalzahlung' ? 'Einmalzahlung' : 'Ratenzahlung',
       total_amount: calculateTotalAmount(),
       strasse: formData.strasse,
       hausnummer: formData.hausnummer,
       plz: formData.plz,
       ort: formData.ort,
       land: formData.land,
       firma: formData.firma || '-',
       ust_id_nr: formData.ustIdNr || '-',
       agb_akzeptiert: formData.agbAkzeptiert ? 'Ja' : 'Nein',
       widerrufsbelehrung_akzeptiert: formData.widerrufsbelehrungAkzeptiert ? 'Ja' : 'Nein',
       datenschutz_akzeptiert: formData.datenschutzAkzeptiert ? 'Ja' : 'Nein',
     })
   })
   ```

---

### Option 2: Supabase Edge Functions

Alternativ können Sie auch Supabase Edge Functions mit Trigger verwenden:

1. **Trigger in Supabase erstellen:**
   ```sql
   CREATE OR REPLACE FUNCTION send_order_emails()
   RETURNS TRIGGER AS $$
   BEGIN
     -- Call Edge Function to send emails
     PERFORM net.http_post(
       url := 'https://your-project.supabase.co/functions/v1/send-order-emails',
       headers := '{"Content-Type": "application/json"}'::jsonb,
       body := row_to_json(NEW)::jsonb
     );
     RETURN NEW;
   END;
   $$ LANGUAGE plpgsql;

   CREATE TRIGGER order_created_trigger
   AFTER INSERT ON orders
   FOR EACH ROW
   EXECUTE FUNCTION send_order_emails();
   ```

---

## 🎨 Logo-Integration

**Wichtig:** Das Logo muss öffentlich zugänglich sein!

### Variante 1: Logo auf Vercel hosten
```html
<!-- In customer-confirmation.html -->
<img src="https://your-domain.vercel.app/logo/WAMOCON_ACADEMY_LOGO.png" alt="WAMOCON Academy Logo" class="logo">
```

### Variante 2: Logo als Base64 einbetten
```bash
# Logo zu Base64 konvertieren
node -e "const fs = require('fs'); const data = fs.readFileSync('public/logo/WAMOCON_ACADEMY_LOGO.png').toString('base64'); console.log(data);" > logo-base64.txt
```

Dann in HTML:
```html
<img src="data:image/png;base64,iVBORw0KG..." alt="WAMOCON Academy Logo" class="logo">
```

### Variante 3: Logo auf CDN (empfohlen)
- Cloudinary
- AWS S3
- Vercel Blob Storage

---

## 🔧 Weitere Anpassungen

### Bestellnummer-Format
Die Bestellnummer wird automatisch von Supabase generiert. Falls Sie ein spezifisches Format wünschen (z.B. `WAM-2024-0001`), können Sie dies in der Datenbank konfigurieren.

### Mehrsprachigkeit
Aktuell sind die Vorlagen nur auf Deutsch. Für internationale Kunden können Sie:
- `customer-confirmation-en.html` erstellen
- Sprache basierend auf `land` oder Browser-Einstellung wählen

### Design-Anpassungen
- Farben in den `<style>`-Tags anpassen
- Logo-Größe in `.logo` CSS-Klasse ändern
- Schriftart über Google Fonts einbinden

---

## ✅ Checkliste vor Deployment

- [ ] Logo-URL in `customer-confirmation.html` anpassen
- [ ] E-Mail-Service (Resend/SendGrid) konfigurieren
- [ ] API-Keys in Vercel Umgebungsvariablen hinterlegen
- [ ] Absender-Domain verifizieren (SPF, DKIM, DMARC)
- [ ] Test-E-Mail senden
- [ ] Spam-Filter testen
- [ ] Mobile-Darstellung prüfen

---

## 📞 Support

Bei Fragen zur Integration:
- E-Mail: info@test-it-academy.de
- Projekt: ISTQB Landing Page

---

**Erstellt:** 2026-02-09
**Letzte Aktualisierung:** 2026-02-09
