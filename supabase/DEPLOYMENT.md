# Supabase Edge Function Deployment Guide

Schritt-für-Schritt-Anleitung zur Einrichtung des automatischen E-Mail-Versands über Supabase.

---

## 📋 Voraussetzungen

- ✅ Supabase-Projekt erstellt
- ✅ Resend-Account mit API-Key
- ✅ Supabase CLI installiert

---

## 🚀 Schritt 1: Supabase CLI installieren

```bash
# Installation via npm (empfohlen)
npm install -g supabase

# Oder via Scoop (Windows)
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

**Prüfen:**
```bash
supabase --version
```

---

## 🔐 Schritt 2: Supabase Login

```bash
# Login mit Access Token
supabase login

# Oder direkt mit Token
supabase login --token YOUR_ACCESS_TOKEN
```

**Access Token erstellen:**
1. Gehe zu https://app.supabase.com/account/tokens
2. Klicke auf "Generate New Token"
3. Name: `WAMOCON Academy CLI`
4. Kopiere den Token

---

## 📁 Schritt 3: Projekt mit Supabase verknüpfen

```bash
# Im Projektverzeichnis
cd d:/Testprojekt/istqb-landingpage

# Projekt verknüpfen
supabase link --project-ref YOUR_PROJECT_REF
```

**Project Ref finden:**
1. Öffne https://app.supabase.com
2. Dein Projekt öffnen
3. Settings → General → Reference ID kopieren

---

## 🗄️ Schritt 4: Database Migration ausführen

```bash
# Migration anwenden (erstellt den Trigger)
supabase db push

# Oder direkt im Supabase Dashboard:
# SQL Editor → Neue Query → Inhalt von:
# supabase/migrations/20260209_create_order_email_trigger.sql
# Einfügen und ausführen
```

**Was passiert:**
- ✅ Erstellt Funktion `send_order_emails()`
- ✅ Erstellt Trigger `on_order_created`
- ✅ Trigger feuert bei jedem INSERT in `orders`

---

## ⚙️ Schritt 5: Supabase Settings konfigurieren

### 5.1 App Settings in Supabase konfigurieren

```sql
-- Im Supabase SQL Editor ausführen:

-- Supabase URL setzen
ALTER DATABASE postgres SET "app.settings.supabase_url" TO 'https://YOUR_PROJECT_REF.supabase.co';

-- Service Role Key setzen (WICHTIG: Nur im SQL Editor, NIEMALS committen!)
ALTER DATABASE postgres SET "app.settings.supabase_service_role_key" TO 'YOUR_SERVICE_ROLE_KEY';
```

**Service Role Key finden:**
1. Supabase Dashboard → Settings → API
2. "Project API keys" → `service_role` (secret) kopieren
3. ⚠️ **ACHTUNG:** Niemals in Git committen!

### 5.2 pg_net Extension aktivieren

```sql
-- Im Supabase SQL Editor ausführen:
CREATE EXTENSION IF NOT EXISTS pg_net;
```

**Was ist pg_net?**
- Erlaubt HTTP-Requests aus Database Functions
- Wird vom Trigger benötigt um Edge Function aufzurufen

---

## 📧 Schritt 6: Edge Function deployen

### 6.1 Secrets setzen

```bash
# Resend API Key setzen
supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxxx

# E-Mail-Adressen setzen
supabase secrets set EMAIL_FROM=info@test-it-academy.de
supabase secrets set ADMIN_EMAIL=info@test-it-academy.de

# Domain setzen (für Logo-URLs)
supabase secrets set DOMAIN=https://your-domain.vercel.app
```

### 6.2 Function deployen

```bash
# Edge Function deployen
supabase functions deploy send-order-emails

# Mit Import Map (falls benötigt)
supabase functions deploy send-order-emails --import-map supabase/functions/import_map.json
```

**Output sollte sein:**
```
Deploying function send-order-emails...
Function send-order-emails deployed successfully.
URL: https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-order-emails
```

---

## ✅ Schritt 7: Testen

### 7.1 Manueller Test via SQL

```sql
-- Im Supabase SQL Editor:
INSERT INTO orders (
  anrede, vorname, nachname, email,
  strasse, hausnummer, plz, ort, land,
  product_name, price, zahlungsart, total_amount,
  agb_akzeptiert, widerrufsbelehrung_akzeptiert, datenschutz_akzeptiert
) VALUES (
  'Herr', 'Test', 'User', 'deine-email@example.com',
  'Teststraße', '42', '12345', 'Berlin', 'Deutschland',
  'ISTQB CTFL 4.0 Komplettkurs + DiTeLe', 299, 'einmalzahlung', 299,
  true, true, true
);
```

**Erwartetes Ergebnis:**
- ✅ Bestellung wird in DB gespeichert
- ✅ Trigger feuert automatisch
- ✅ E-Mail an `deine-email@example.com`
- ✅ E-Mail an `info@test-it-academy.de`

### 7.2 Logs prüfen

```bash
# Edge Function Logs ansehen
supabase functions logs send-order-emails

# Oder im Dashboard:
# Edge Functions → send-order-emails → Logs
```

---

## 🔍 Schritt 8: Debugging

### Problem: "pg_net extension not found"
```sql
-- Lösung: Extension aktivieren
CREATE EXTENSION IF NOT EXISTS pg_net;
```

### Problem: "Function URL not accessible"
```bash
# Prüfe ob Function deployed ist
supabase functions list

# Re-deploy
supabase functions deploy send-order-emails
```

### Problem: "RESEND_API_KEY not set"
```bash
# Secrets prüfen
supabase secrets list

# Secret neu setzen
supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### Problem: "No emails received"
1. **Prüfe Resend Dashboard** → Logs
2. **Prüfe Edge Function Logs** → `supabase functions logs send-order-emails`
3. **Prüfe Spam-Ordner**
4. **Prüfe E-Mail-Adresse** in Resend verifiziert?

---

## 🔄 Schritt 9: Frontend anpassen (WICHTIG!)

### PurchaseDialog.tsx ändern

Da die E-Mails jetzt automatisch vom Database Trigger gesendet werden, können wir den E-Mail-Aufruf aus dem Frontend **entfernen**:

```typescript
// VORHER (nicht mehr nötig):
const emailResponse = await fetch('/api/send-order-emails', { ... })

// NACHHER (nur noch Bestellung speichern):
const order = await createOrder({ ... })
// E-Mails werden automatisch vom Database Trigger gesendet! ✅
```

**Ich habe das für Sie bereits vorbereitet. Soll ich die Datei jetzt aktualisieren?**

---

## 📊 Schritt 10: Monitoring

### Resend Dashboard
- https://resend.com/emails
- Zeigt alle gesendeten E-Mails
- Zustellstatus, Bounces, etc.

### Supabase Logs
```bash
# Echtzeit-Logs
supabase functions logs send-order-emails --follow

# Letzte 100 Zeilen
supabase functions logs send-order-emails --tail 100
```

### Database Trigger Logs
```sql
-- Letzte Bestellungen prüfen
SELECT 
  order_number, 
  email, 
  created_at,
  status
FROM orders
ORDER BY created_at DESC
LIMIT 10;
```

---

## 🎯 Zusammenfassung - Was passiert jetzt?

```
1. Kunde füllt Bestellformular aus
   ↓
2. Frontend: createOrder() → INSERT in Supabase
   ↓
3. Database Trigger feuert automatisch
   ↓
4. Trigger ruft Edge Function auf
   ↓
5. Edge Function:
   - Lädt HTML-Templates
   - Ersetzt Platzhalter
   - Sendet via Resend
   ↓
6. Kunde bekommt Bestätigung
   Admin bekommt Benachrichtigung
```

**Alles automatisch! Keine Frontend-Logik nötig! ✅**

---

## 📋 Checkliste

- [ ] Supabase CLI installiert
- [ ] Projekt mit `supabase link` verknüpft
- [ ] Migration mit `supabase db push` ausgeführt
- [ ] `pg_net` Extension aktiviert
- [ ] App Settings (`supabase_url`, `service_role_key`) gesetzt
- [ ] Secrets (`RESEND_API_KEY`, etc.) gesetzt
- [ ] Edge Function mit `supabase functions deploy` deployed
- [ ] Test-Bestellung durchgeführt
- [ ] E-Mails erhalten
- [ ] Frontend-Code angepasst (E-Mail-Call entfernt)

---

## 🆘 Support

**Supabase Dokumentation:**
- Edge Functions: https://supabase.com/docs/guides/functions
- Database Triggers: https://supabase.com/docs/guides/database/postgres/triggers

**Resend Dokumentation:**
- API: https://resend.com/docs/api-reference/emails/send-email

**Bei Problemen:**
1. Prüfe Supabase Function Logs
2. Prüfe Resend Dashboard
3. Prüfe Database Logs

---

**Viel Erfolg! 🚀**
