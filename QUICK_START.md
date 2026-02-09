# 🚀 QUICK START - E-MAIL SYSTEM

**Automatisches E-Mail-System für Bestellbestätigungen**

---

## ⚡ SCHNELLSTART (5 Minuten)

### **1. Supabase CLI installieren**
```bash
npm install -g supabase
supabase login
```

### **2. Projekt verknüpfen**
```bash
cd d:/Testprojekt/istqb-landingpage
supabase link --project-ref YOUR_PROJECT_REF
```
**Project Ref finden:** Supabase Dashboard → Settings → General → Reference ID

### **3. Migration ausführen**
```bash
supabase db push
```

### **4. pg_net Extension aktivieren**
Im **Supabase SQL Editor**:
```sql
CREATE EXTENSION IF NOT EXISTS pg_net;
```

### **5. App Settings**
Im **Supabase SQL Editor**:
```sql
-- Supabase URL (ersetze YOUR_PROJECT mit deiner Project Ref)
ALTER DATABASE postgres SET "app.settings.supabase_url" 
TO 'https://YOUR_PROJECT.supabase.co';

-- Service Role Key (aus Supabase Dashboard → Settings → API)
ALTER DATABASE postgres SET "app.settings.supabase_service_role_key" 
TO 'YOUR_SERVICE_ROLE_KEY';
```

### **6. Secrets setzen**
```bash
supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxxx
supabase secrets set EMAIL_FROM=info@test-it-academy.de
supabase secrets set ADMIN_EMAIL=info@test-it-academy.de
supabase secrets set DOMAIN=https://your-domain.vercel.app
```

### **7. Edge Function deployen**
```bash
supabase functions deploy send-order-emails
```

---

## ✅ FERTIG!

**Test durchführen:**
```sql
-- Im Supabase SQL Editor:
INSERT INTO orders (
  anrede, vorname, nachname, email,
  strasse, hausnummer, plz, ort, land,
  product_name, price, zahlungsart, total_amount,
  agb_akzeptiert, widerrufsbelehrung_akzeptiert, datenschutz_akzeptiert
) VALUES (
  'Herr', 'Test', 'User', 'DEINE-EMAIL@example.com',
  'Teststraße', '42', '12345', 'Berlin', 'Deutschland',
  'ISTQB CTFL 4.0 Komplettkurs + DiTeLe', 299, 'einmalzahlung', 299,
  true, true, true
);
```

**Erwartetes Ergebnis:**
- ✅ 2 E-Mails erhalten (nach 5-10 Sekunden)
- ✅ Kundenbestätigung an deine E-Mail
- ✅ Admin-Benachrichtigung an info@test-it-academy.de

---

## 📚 VOLLSTÄNDIGE DOKUMENTATION

- **[FINALE_VERSION.md](FINALE_VERSION.md)** - Komplette Übersicht
- **[supabase/DEPLOYMENT.md](supabase/DEPLOYMENT.md)** - Detaillierte Anleitung
- **[supabase/TESTING.md](supabase/TESTING.md)** - Test-Methoden
- **[SUPABASE_EMAIL_SYSTEM.md](SUPABASE_EMAIL_SYSTEM.md)** - Architektur

---

## 🆘 PROBLEME?

### E-Mails kommen nicht an?
```bash
# Logs prüfen
supabase functions logs send-order-emails --tail 20

# Resend Dashboard prüfen
# https://resend.com/emails

# Secrets prüfen
supabase secrets list
```

### Function nicht deployed?
```bash
supabase functions deploy send-order-emails
```

### Trigger nicht aktiv?
```sql
SELECT trigger_name FROM information_schema.triggers 
WHERE trigger_name = 'on_order_created';
```

---

## 💰 KOSTEN

**$0 für 100 Bestellungen/Monat**
- Resend: Kostenlos bis 3.000 E-Mails/Monat
- Supabase: Kostenlos

---

**Viel Erfolg! 🚀**
