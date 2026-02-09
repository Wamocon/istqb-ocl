# E-Mail Template Variablen Referenz

Dieses Dokument listet alle verfügbaren Platzhalter/Variablen auf, die in den E-Mail-Vorlagen verwendet werden können.

## 📋 Verfügbare Variablen

### Bestellinformationen
| Variable | Beschreibung | Beispielwert | Typ |
|----------|--------------|--------------|-----|
| `{{order_number}}` | Automatisch generierte Bestellnummer | `BD-2024-0042` | String |
| `{{order_date}}` | Bestelldatum im deutschen Format | `09.02.2026` | String |
| `{{product_name}}` | Name des bestellten Produkts | `ISTQB CTFL 4.0 Komplettkurs + DiTeLe` | String |
| `{{price}}` | Einzelpreis des Produkts | `299` | Number |
| `{{total_amount}}` | Gesamtbetrag (inkl. Ratenzuschlag falls zutreffend) | `299` oder `303` | Number |
| `{{zahlungsart}}` | Gewählte Zahlungsart | `Einmalzahlung` oder `Ratenzahlung (5 Raten)` | String |

### Kundendaten
| Variable | Beschreibung | Beispielwert | Typ |
|----------|--------------|--------------|-----|
| `{{anrede}}` | Anrede des Kunden | `Herr`, `Frau`, `Divers` | String |
| `{{vorname}}` | Vorname des Kunden | `Max` | String |
| `{{nachname}}` | Nachname des Kunden | `Mustermann` | String |
| `{{email}}` | E-Mail-Adresse des Kunden | `max.mustermann@example.com` | String |

### Rechnungsadresse
| Variable | Beschreibung | Beispielwert | Typ |
|----------|--------------|--------------|-----|
| `{{strasse}}` | Straßenname | `Musterstraße` | String |
| `{{hausnummer}}` | Hausnummer | `42` | String |
| `{{plz}}` | Postleitzahl | `12345` | String |
| `{{ort}}` | Ort | `Berlin` | String |
| `{{land}}` | Land | `Deutschland`, `Österreich`, `Schweiz` | String |

### Firmendaten (Optional)
| Variable | Beschreibung | Beispielwert | Typ |
|----------|--------------|--------------|-----|
| `{{firma}}` | Firmenname (oder `-` wenn leer) | `Musterfirma GmbH` oder `-` | String |
| `{{ust_id_nr}}` | Umsatzsteuer-ID (oder `-` wenn leer) | `DE123456789` oder `-` | String |

### Rechtliche Bestätigungen
| Variable | Beschreibung | Beispielwert | Typ |
|----------|--------------|--------------|-----|
| `{{agb_akzeptiert}}` | AGB akzeptiert | `Ja` | String (Boolean → String) |
| `{{widerrufsbelehrung_akzeptiert}}` | Widerrufsbelehrung zur Kenntnis genommen | `Ja` | String (Boolean → String) |
| `{{datenschutz_akzeptiert}}` | Datenschutzerklärung akzeptiert | `Ja` | String (Boolean → String) |

---

## 🔄 Datentyp-Konvertierung

Die `prepareOrderEmailData()` Funktion in `lib/email-templates.ts` konvertiert die Rohdaten automatisch:

- **Boolean → String**: `true` → `"Ja"`, `false` → `"Nein"`
- **null/undefined → String**: `null` → `"-"`
- **Date → String**: `2026-02-09T14:30:00Z` → `09.02.2026`
- **Zahlungsart → Lesbarer Text**: `einmalzahlung` → `Einmalzahlung`

---

## 📝 Verwendung in Templates

### Syntax
```html
<p>Hallo {{anrede}} {{vorname}} {{nachname}},</p>
<p>Ihre Bestellnummer: {{order_number}}</p>
<p>Gesamtbetrag: {{total_amount}}€</p>
```

### Bedingungen
HTML unterstützt keine nativen Bedingungen. Für bedingte Inhalte gibt es zwei Optionen:

**Option 1: Separate Templates**
```
customer-confirmation-de.html  (Deutsche Version)
customer-confirmation-en.html  (Englische Version)
```

**Option 2: JavaScript vor dem Senden**
```typescript
let template = loadEmailTemplate('customer-confirmation.html')

// Entferne Firmensektion wenn keine Firma
if (!orderData.firma) {
  template = template.replace(/<!-- FIRMA_START -->.*<!-- FIRMA_END -->/s, '')
}
```

### Mehrsprachigkeit
Aktuell sind die Templates nur auf Deutsch. Für internationale Kunden:

1. **Separate Templates pro Sprache:**
   ```
   emails/
   ├── customer-confirmation-de.html
   ├── customer-confirmation-en.html
   ├── admin-notification-de.html
   └── admin-notification-en.html
   ```

2. **Template-Auswahl in API:**
   ```typescript
   const lang = orderData.land === 'Deutschland' ? 'de' : 'en'
   const template = loadEmailTemplate(`customer-confirmation-${lang}.html`)
   ```

---

## 🎨 Spezielle Variablen

### Logo-URL
```html
<!-- Wird automatisch ersetzt in route.ts -->
<img src="https://your-domain.com/logo/WAMOCON_ACADEMY_LOGO.png" alt="WAMOCON Academy Logo">

<!-- Wird zu: -->
<img src="https://istqb-landingpage.vercel.app/logo/WAMOCON_ACADEMY_LOGO.png" alt="WAMOCON Academy Logo">
```

Die Logo-URL wird basierend auf der `NEXT_PUBLIC_DOMAIN` Umgebungsvariable ersetzt.

---

## ✅ Testing Checkliste

Beim Erstellen neuer Templates oder Ändern bestehender:

- [ ] Alle Platzhalter korrekt geschrieben? (`{{variable}}` nicht `{variable}`)
- [ ] Keine Tippfehler in Variablennamen?
- [ ] Fallback für leere Werte vorhanden? (wird zu `-`)
- [ ] Mobile-Darstellung getestet?
- [ ] Spam-Score geprüft? (https://www.mail-tester.com)
- [ ] Logo wird korrekt angezeigt?
- [ ] Links funktionieren?
- [ ] Test-E-Mail gesendet und geprüft?

---

## 🔍 Debugging

### Template-Platzhalter nicht ersetzt?
```typescript
// In app/api/send-order-emails/route.ts
console.log('Template data:', templateData)
console.log('Final email:', customerEmailHtml.substring(0, 500))
```

### Welche Variablen werden gesendet?
```typescript
// Nach await request.json()
console.log('Order data received:', JSON.stringify(orderData, null, 2))
```

### Email-Preview im Browser
```typescript
// Temporärer Test-Endpoint
export async function GET() {
  const testData = { /* ... test order data ... */ }
  const template = loadEmailTemplate('customer-confirmation.html')
  const html = replaceTemplatePlaceholders(template, prepareOrderEmailData(testData))
  return new Response(html, { headers: { 'Content-Type': 'text/html' } })
}
```

Dann öffne: `https://localhost:3001/api/send-order-emails`

---

## 📚 Beispiel: Vollständiges Order-Objekt

```javascript
{
  "order_number": "BD-2024-0042",
  "created_at": "2026-02-09T14:30:00.000Z",
  "anrede": "Herr",
  "vorname": "Max",
  "nachname": "Mustermann",
  "email": "max.mustermann@example.com",
  "strasse": "Musterstraße",
  "hausnummer": "42",
  "plz": "12345",
  "ort": "Berlin",
  "land": "Deutschland",
  "firma": "Musterfirma GmbH",
  "ust_id_nr": "DE123456789",
  "product_name": "ISTQB CTFL 4.0 Komplettkurs + DiTeLe",
  "price": 299,
  "zahlungsart": "einmalzahlung",
  "total_amount": 299,
  "agb_akzeptiert": true,
  "widerrufsbelehrung_akzeptiert": true,
  "datenschutz_akzeptiert": true
}
```

Nach `prepareOrderEmailData()`:
```javascript
{
  "order_number": "BD-2024-0042",
  "order_date": "09.02.2026",
  "anrede": "Herr",
  "vorname": "Max",
  "nachname": "Mustermann",
  "email": "max.mustermann@example.com",
  "strasse": "Musterstraße",
  "hausnummer": "42",
  "plz": "12345",
  "ort": "Berlin",
  "land": "Deutschland",
  "firma": "Musterfirma GmbH",
  "ust_id_nr": "DE123456789",
  "product_name": "ISTQB CTFL 4.0 Komplettkurs + DiTeLe",
  "price": 299,
  "zahlungsart": "Einmalzahlung",
  "total_amount": 299,
  "agb_akzeptiert": "Ja",
  "widerrufsbelehrung_akzeptiert": "Ja",
  "datenschutz_akzeptiert": "Ja"
}
```

---

**Letzte Aktualisierung:** 2026-02-09
