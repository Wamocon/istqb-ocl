# Lokales Testen - Schritt für Schritt

## 🏠 Option 1: Supabase Local Development (BESTE für Tests)

### 1. Supabase lokal starten

```bash
# Im Projektverzeichnis
cd d:/Testprojekt/istqb-landingpage

# Supabase lokal initialisieren (falls noch nicht geschehen)
supabase init

# Lokale Supabase Instanz starten (benötigt Docker!)
supabase start
```

**Output:**
```
Started supabase local development setup.

API URL: http://localhost:54321
GraphQL URL: http://localhost:54321/graphql/v1
DB URL: postgresql://postgres:postgres@localhost:54322/postgres
Studio URL: http://localhost:54323
Inbucket URL: http://localhost:54324  ← E-Mail-Inbox (für Tests!)
JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
anon key: eyJhb...
service_role key: eyJhb...
```

### 2. .env.local für Lokal anpassen

```bash
# In .env.local:
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhb...  # aus "supabase start" Output
```

### 3. Edge Function lokal laufen lassen

```bash
# In neuem Terminal:
supabase functions serve send-order-emails --env-file .env.local
```

### 4. Test-Request senden

**Via curl:**
```bash
curl -i --location --request POST 'http://localhost:54321/functions/v1/send-order-emails' \
  --header 'Authorization: Bearer eyJhb...' \
  --header 'Content-Type: application/json' \
  --data '{
    "order_number": "TEST-2024-001",
    "created_at": "2026-02-09T15:00:00Z",
    "anrede": "Herr",
    "vorname": "Test",
    "nachname": "User",
    "email": "test@example.com",
    "strasse": "Teststraße",
    "hausnummer": "42",
    "plz": "12345",
    "ort": "Berlin",
    "land": "Deutschland",
    "product_name": "ISTQB CTFL 4.0 Komplettkurs + DiTeLe",
    "price": 299,
    "zahlungsart": "einmalzahlung",
    "total_amount": 299,
    "agb_akzeptiert": true,
    "widerrufsbelehrung_akzeptiert": true,
    "datenschutz_akzeptiert": true
  }'
```

### 5. E-Mails prüfen

**Inbucket öffnen:**
```
http://localhost:54324
```

Hier siehst du ALLE gesendeten E-Mails (lokal, kein echtes Senden)!

---

## 🌐 Option 2: Production Supabase (Echtes Testen)

### Voraussetzung: Function bereits deployed

```bash
supabase functions deploy send-order-emails
```

### Test via SQL Insert im Supabase Dashboard

1. **Gehe zu:** https://app.supabase.com
2. **Dein Projekt öffnen**
3. **SQL Editor öffnen**
4. **Neuer Query:**

```sql
-- Test-Bestellung einfügen (triggert automatisch E-Mail!)
INSERT INTO orders (
  anrede, 
  vorname, 
  nachname, 
  email,
  strasse, 
  hausnummer, 
  plz, 
  ort, 
  land,
  product_name, 
  price, 
  zahlungsart, 
  total_amount,
  agb_akzeptiert, 
  widerrufsbelehrung_akzeptiert, 
  datenschutz_akzeptiert
) VALUES (
  'Herr', 
  'Test', 
  'User', 
  'DEINE-ECHTE-EMAIL@example.com',  -- ⚠️ WICHTIG: Deine echte E-Mail!
  'Teststraße', 
  '42', 
  '12345', 
  'Berlin', 
  'Deutschland',
  'ISTQB CTFL 4.0 Komplettkurs + DiTeLe', 
  299, 
  'einmalzahlung', 
  299,
  true, 
  true, 
  true
) RETURNING *;
```

5. **Query ausführen** (Grüner Play-Button)
6. **E-Mail-Postfach prüfen** (deine echte E-Mail!)
7. **Logs prüfen:**
   - Edge Functions → send-order-emails → Logs

---

## 🖥️ Option 3: Über die Webseite (End-to-End Test)

### 1. Next.js Dev Server starten

```bash
npm run dev
```

### 2. Webseite öffnen

```
http://localhost:3001
```

### 3. Test-Bestellung durchführen

1. **Klicke auf "Jetzt kaufen"** (z.B. beim Pricing)
2. **Fülle Formular aus:**
   - ⚠️ **WICHTIG:** Nutze deine echte E-Mail!
   - Alle Pflichtfelder ausfüllen
3. **Klicke "Kostenpflichtig bestellen"**
4. **Erwartetes Ergebnis:**
   - ✅ "Bestellung erfolgreich!" Meldung
   - ✅ 2 E-Mails erhalten:
     - Kundenbestätigung (an deine E-Mail)
     - Admin-Benachrichtigung (an info@test-it-academy.de)

### 4. Logs prüfen

**Browser Console:**
- F12 → Console
- Sollte zeigen: `Order created: [Bestellnummer]`

**Supabase Function Logs:**
```bash
supabase functions logs send-order-emails --follow
```

---

## 🔧 Option 4: Direkter Function Call (für Debugging)

### Test-Script erstellen

```typescript
// test-email-function.ts
const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co'
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhb...'

const testData = {
  order_number: 'TEST-2024-001',
  created_at: new Date().toISOString(),
  anrede: 'Herr',
  vorname: 'Test',
  nachname: 'User',
  email: 'deine-email@example.com',  // DEINE echte E-Mail!
  strasse: 'Teststraße',
  hausnummer: '42',
  plz: '12345',
  ort: 'Berlin',
  land: 'Deutschland',
  product_name: 'ISTQB CTFL 4.0 Komplettkurs + DiTeLe',
  price: 299,
  zahlungsart: 'einmalzahlung',
  total_amount: 299,
  agb_akzeptiert: true,
  widerrufsbelehrung_akzeptiert: true,
  datenschutz_akzeptiert: true,
}

fetch(`${SUPABASE_URL}/functions/v1/send-order-emails`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
  },
  body: JSON.stringify(testData),
})
  .then(res => res.json())
  .then(data => console.log('Success:', data))
  .catch(err => console.error('Error:', err))
```

**Ausführen:**
```bash
node test-email-function.ts
```

---

## 📊 Vergleich der Test-Methoden

| Methode | Wann nutzen? | Vorteil | Nachteil |
|---------|--------------|---------|----------|
| **Lokal (Inbucket)** | Entwicklung | Keine echten E-Mails, schnell | Benötigt Docker |
| **SQL Insert** | Quick Test | Einfach, direkt | Manuell |
| **Webseite** | End-to-End | Testet gesamten Flow | Langsamer |
| **Direkt Call** | Debugging | Präzise Kontrolle | Benötigt Service Role Key |

---

## ✅ Test-Checkliste

Nach jedem Test solltest du prüfen:

- [ ] **Bestellung in DB gespeichert?**
  ```sql
  SELECT * FROM orders ORDER BY created_at DESC LIMIT 5;
  ```

- [ ] **Edge Function aufgerufen?**
  ```bash
  supabase functions logs send-order-emails --tail 20
  ```

- [ ] **2 E-Mails erhalten?**
  - Kundenbestätigung an Kunden-E-Mail
  - Admin-Benachrichtigung an info@test-it-academy.de

- [ ] **E-Mails korrekt formatiert?**
  - Logo sichtbar?
  - Alle Platzhalter ersetzt?
  - Mobile-Darstellung OK?

- [ ] **Resend Dashboard prüfen:**
  - https://resend.com/emails
  - Status: Delivered?

---

## 🐛 Troubleshooting

### "No emails received"
1. **Spam-Ordner prüfen**
2. **Resend Dashboard** → Logs prüfen
3. **Function Logs** prüfen: `supabase functions logs send-order-emails`
4. **Secrets korrekt?** `supabase secrets list`

### "Function not found"
```bash
# Re-deploy
supabase functions deploy send-order-emails
```

### "Templates not found"
```bash
# Prüfe ob Templates im richtigen Ordner:
ls supabase/functions/send-order-emails/templates/
# Sollte zeigen:
# customer-confirmation.html
# admin-notification.html
```

---

## 📝 Mein Tipp für Sie:

**Für erste Tests:**
1. ✅ **Nutzen Sie SQL Insert** (einfachste Methode)
2. ✅ **Dann End-to-End über Webseite** (realistische Test)

**Für Entwicklung:**
1. ✅ **Supabase lokal mit Inbucket** (keine echten E-Mails)

---

Welche Methode möchten Sie zuerst testen? Ich helfe Ihnen beim Setup! 🚀
