# Vercel Deployment mit E-Mail-Benachrichtigungen

Schritt-für-Schritt-Anleitung zur Einrichtung der automatischen E-Mails beim Deployment auf Vercel.

## 📋 Voraussetzungen

- Vercel-Account (https://vercel.com)
- Resend-Account (https://resend.com) - empfohlen, kostenlos bis 3.000 E-Mails/Monat
- Verifizierte Domain oder E-Mail-Adresse

---

## 🚀 Schritt 1: Resend einrichten

### 1.1 Resend-Account erstellen
1. Gehe zu https://resend.com
2. Erstelle einen kostenlosen Account
3. Bestätige deine E-Mail-Adresse

### 1.2 Domain verifizieren
**Option A: Eigene Domain (empfohlen für Produktion)**
1. Gehe zu **Domains** → **Add Domain**
2. Füge deine Domain hinzu (z.B. `test-it-academy.de`)
3. Füge die DNS-Einträge hinzu (SPF, DKIM, DMARC):
   ```
   TXT  @  v=spf1 include:_spf.resend.com ~all
   CNAME resend._domainkey [dein-wert-von-resend]
   TXT _dmarc v=DMARC1; p=none; pct=100; rua=mailto:dmarc@test-it-academy.de
   ```
4. Warte auf Verifizierung (kann bis zu 48h dauern, meist innerhalb von Minuten)

**Option B: Resend Test-Domain (für Tests)**
- Nutze `onboarding@resend.dev` als Absender
- Kann nur an deine eigene E-Mail-Adresse senden
- Perfekt zum Testen!

### 1.3 API-Schlüssel erstellen
1. Gehe zu **API Keys** → **Create API Key**
2. Name: `WAMOCON Academy Production` (oder ähnlich)
3. Permission: **Sending access**
4. Kopiere den API-Key (beginnt mit `re_...`)
5. ⚠️ **WICHTIG:** Speichere ihn sicher, er wird nur einmal angezeigt!

---

## 🔧 Schritt 2: Vercel konfigurieren

### 2.1 Projekt auf Vercel deployen

**Erste Deployment:**
```bash
# 1. Vercel CLI installieren (falls noch nicht geschehen)
npm i -g vercel

# 2. Login
vercel login

# 3. Projekt deployen
vercel

# 4. Produktions-Deployment
vercel --prod
```

**Oder via GitHub:**
1. Push dein Projekt zu GitHub
2. Verbinde Vercel mit deinem GitHub-Repo
3. Automatisches Deployment bei jedem Push

### 2.2 Umgebungsvariablen setzen

1. Gehe zu deinem Projekt auf Vercel
2. **Settings** → **Environment Variables**
3. Füge folgende Variablen hinzu:

**Für Production und Preview:**

| Name | Wert | Umgebung |
|------|------|----------|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` | Production, Preview |
| `EMAIL_FROM` | `info@test-it-academy.de` | Production, Preview |
| `ADMIN_EMAIL` | `info@test-it-academy.de` | Production, Preview |
| `NEXT_PUBLIC_DOMAIN` | `https://your-domain.vercel.app` | Production, Preview |

**Wichtige Hinweise:**
- `EMAIL_FROM` muss eine verifizierte E-Mail-Adresse in Resend sein
- `NEXT_PUBLIC_DOMAIN` sollte deine echte Vercel-URL sein (für Logo-Links)
- Setze alle Variablen für **Production** UND **Preview** Umgebungen

### 2.3 Re-Deploy nach Umgebungsvariablen

Nach dem Setzen der Umgebungsvariablen musst du neu deployen:
```bash
vercel --prod
```

Oder über Vercel Dashboard: **Deployments** → **Redeploy**

---

## ✅ Schritt 3: Testen

### 3.1 Test-Bestellung durchführen

1. Öffne deine deployed Seite
2. Klicke auf einen "Jetzt kaufen"-Button
3. Fülle das Bestellformular mit Test-Daten aus
4. **Wichtig:** Nutze eine echte E-Mail-Adresse, auf die du Zugriff hast!
5. Klicke auf "Kostenpflichtig bestellen"

### 3.2 E-Mails überprüfen

Du solltest 2 E-Mails erhalten:
1. **An Kunden** (deine Test-E-Mail):
   - Betreff: "Bestellbestätigung [Bestellnummer] - WAMOCON Academy"
   - Mit WAMOCON Logo
   - Bestelldetails
   - Info über nächste Schritte

2. **An Admin** (info@test-it-academy.de):
   - Betreff: "🔔 Neue Bestellung: [Bestellnummer] - [Name]"
   - Alle Kundendaten
   - Handlungsempfehlungen

### 3.3 Probleme beheben

**E-Mails kommen nicht an?**
- Prüfe Spam-Ordner
- Prüfe Resend-Dashboard → Logs
- Prüfe Vercel-Logs: `vercel logs [deployment-url]`
- Prüfe Browser-Konsole auf API-Fehler

**Logo wird nicht angezeigt?**
- Stelle sicher, dass `NEXT_PUBLIC_DOMAIN` korrekt gesetzt ist
- Logo muss öffentlich zugänglich sein unter `/logo/WAMOCON_ACADEMY_LOGO.png`

**API-Fehler?**
- Prüfe, ob `RESEND_API_KEY` korrekt gesetzt ist
- Prüfe Resend-Dashboard → API-Schlüssel noch gültig?
- Prüfe Email-Limit nicht überschritten (3.000/Monat im Free-Plan)

---

## 🔍 Schritt 4: Monitoring

### 4.1 Resend-Dashboard nutzen
- **Logs:** Alle gesendeten E-Mails
- **Analytics:** Öffnungsraten, Bounces, etc.
- **Webhooks:** Optional für erweiterte Tracking

### 4.2 Vercel-Logs
```bash
# Echtzeit-Logs ansehen
vercel logs --follow

# Logs einer bestimmten Function
vercel logs --follow /api/send-order-emails
```

### 4.3 Supabase prüfen
Alle Bestellungen werden in Supabase gespeichert. Prüfe regelmäßig:
1. Öffne Supabase Dashboard
2. Gehe zu **Table Editor** → `orders`
3. Filtere nach `status = 'pending'`
4. Bearbeite Bestellungen entsprechend

---

## 📊 Schritt 5: Produktiv gehen

### 5.1 Domain verifizierung abschließen
- Stelle sicher, dass deine Domain in Resend vollständig verifiziert ist
- SPF, DKIM und DMARC müssen grün sein
- Teste E-Mail-Zustellbarkeit mit https://www.mail-tester.com

### 5.2 E-Mail-Design finalisieren
- Logo-URL auf finale Domain aktualisieren
- Texte überprüfen
- Rechtschreibung prüfen
- Alle Platzhalter testen

### 5.3 Limits überwachen
**Resend Free Plan:**
- 3.000 E-Mails/Monat
- 100 E-Mails/Tag

**Wenn du mehr brauchst:**
- Upgrade zu Pro Plan ($20/Monat für 50.000 E-Mails)
- Oder nutze SendGrid, AWS SES, etc.

---

## 🛡️ Best Practices

### Sicherheit
- ✅ API-Keys niemals im Code committen
- ✅ Nutze Umgebungsvariablen
- ✅ Rate-Limiting implementieren (falls viele Bestellungen)
- ✅ Input-Validierung im API-Endpoint

### E-Mail-Zustellbarkeit
- ✅ SPF, DKIM, DMARC korrekt konfigurieren
- ✅ Absender-Domain = E-Mail-Domain
- ✅ Keine Spam-Wörter in Betreff/Inhalt
- ✅ Authentische Absender-Adresse verwenden

### Monitoring
- ✅ Resend-Logs regelmäßig prüfen
- ✅ Bounces und Spam-Reports beachten
- ✅ E-Mail-Zustellrate überwachen (sollte >95% sein)

---

## 🆘 Troubleshooting

### Problem: "RESEND_API_KEY is not defined"
**Lösung:**
1. Prüfe Vercel Environment Variables
2. Re-deploye nach dem Setzen
3. Stelle sicher, dass Variable für richtige Umgebung gesetzt ist

### Problem: E-Mails landen im Spam
**Lösung:**
1. Prüfe SPF/DKIM/DMARC in Resend
2. Verwende verifizierte Domain
3. Reduziere Spam-Wörter ("kostenlos", "gratis", etc.)
4. Teste mit https://www.mail-tester.com

### Problem: "Failed to send emails"
**Lösung:**
1. Prüfe Vercel-Logs: `vercel logs`
2. Prüfe Resend-Dashboard → Logs
3. API-Key noch gültig?
4. Email-Limit erreicht?

### Problem: Logo wird nicht angezeigt
**Lösung:**
1. Prüfe `NEXT_PUBLIC_DOMAIN` Umgebungsvariable
2. Logo öffentlich zugänglich? Teste: `https://your-domain.vercel.app/logo/WAMOCON_ACADEMY_LOGO.png`
3. Alternativ: Base64-Encoded Logo verwenden

---

## 📞 Support

**Resend Support:**
- Dokumentation: https://resend.com/docs
- Discord: https://resend.com/discord

**Vercel Support:**
- Dokumentation: https://vercel.com/docs
- Discord: https://vercel.com/discord

**Bei Fragen zum Projekt:**
- E-Mail: info@test-it-academy.de
- Projektdokumentation: `emails/README.md`

---

**Viel Erfolg mit deinem Deployment! 🚀**
