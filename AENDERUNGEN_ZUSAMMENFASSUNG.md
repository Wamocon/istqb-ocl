# 📝 Änderungen-Zusammenfassung: Ausgefüllter Fragenkatalog

**Datum:** 2026-01-21
**Status:** Bereit zur Umsetzung

---

## 🔴 KRITISCHE ÄNDERUNGEN (Sofort umsetzen)

### 1. Firmeninformationen
```
Firmenname: WAMOCON Academy GmbH
Rechtsform: GmbH
USt-IdNr: DE344930486
Adresse: Mergenthaleralee 79 - 81, 65760 Eschborn, Deutschland
Geschäftsführer: Dipl.-Ing. Waleri Moretz
Handelsregister: Eschborn HRB 123666
```

**Zu aktualisieren in:**
- Footer-Komponente (Impressum-Link-Ziel)
- Neue Seite: `app/impressum/page.tsx` erstellen

---

### 2. Kontaktdaten
```
ALLE E-Mail-Adressen: info@test-it-academy.de
  - Support
  - Verkauf
  - Datenschutz
  - Rechnung

Telefon: +49 (0) 6196 5838312
```

**Zu aktualisieren in:**
- `components/shared/Footer.tsx` (aktuell: support@example.com)
- `components/sections/FinalCTA.tsx` (Email-Input Placeholder)
- Alle anderen Komponenten mit Email-Referenzen

---

### 3. PREIS-ÄNDERUNG ⚠️
```
ALT: €299 Einmalzahlung / 3x €109 Ratenzahlung
NEU: €497 Einmalzahlung / 5x €100 Ratenzahlung
```

**Zu aktualisieren in:**
- `components/sections/Pricing.tsx` (Hauptpreis, Ratenzahlung, Wert-Stack)
- `components/sections/FinalCTA.tsx` (CTA-Buttons)
- `components/sections/Hero.tsx` (falls Preis erwähnt)
- Alle weiteren Preis-Erwähnungen

---

### 4. KURS-DAUER ⚠️
```
ALT: 8 Wochen Lernplan
NEU: 4 Wochen Lernplan
```

**Zu aktualisieren in:**
- `components/sections/Hero.tsx` (Statistik-Grid)
- `components/sections/Curriculum.tsx` (Überschrift/Beschreibung)
- `data/curriculum.ts` (Wochen-Struktur anpassen)

---

### 5. Kurs-Hosting & Plattformen
```
Kurs-Plattform: Eloomi
URL: https://360-tm.eloomi.io/app/login?redirect=/courses

DiTeLe-App: https://ditele-learn.ai/de
Status: Bereits live (nur Web-App, keine iOS/Android Native Apps)
```

**Zu aktualisieren in:**
- `components/sections/DiTeleDemo.tsx` (Link zur App)
- `components/sections/DiTeleDeepDive.tsx` (App-Erwähnung)
- `components/sections/FinalCTA.tsx` (Zugangs-Beschreibung)

---

### 6. TESTIMONIALS ⚠️
```
STATUS: Alle 3 Testimonials sind PLATZHALTER
- Lisa M. → Platzhalter
- Thomas K. → Platzhalter
- Sarah W. → Platzhalter (Firma "Digital Solutions AG" auch Platzhalter)

ECHTE TESTIMONIALS: Verfügbar auf https://test-it-academy.com/bewertungen
```

**AKTION ERFORDERLICH:**
1. Testimonials von test-it-academy.com holen
2. Zustimmung zur Veröffentlichung einholen
3. `data/testimonials.ts` aktualisieren
4. ODER: Testimonials-Sektion vorübergehend ausblenden

---

### 7. Geld-zurück-Garantie (Bedingungen geändert)
```
ALT: "30 Tage Geld-zurück-Garantie - ohne Angabe von Gründen"
NEU: "30 Tage Geld-zurück-Garantie bei:
  - Nachweis zur nicht-bestandenen Prüfung UND
  - Eloomi + DiTeLe Zertifizierung zur Durcharbeit und Bestehen der Online-Kurse"
```

**Zu aktualisieren in:**
- `components/sections/Pricing.tsx` (Garantie-Text)
- `components/sections/FinalCTA.tsx` (Garantie-Erwähnung)
- Zukünftige AGB

---

### 8. Erfolgszahlen (Hero-Statistiken)
```
"87% Erfolgsquote" → PLATZHALTER (echte Zahl TBD)
"316+ Prüfungsfragen" → BESTÄTIGT auf "300+ Prüfungsfragen"
"8 Wochen Lernplan" → ÄNDERN auf "4 Wochen Lernplan"
```

**Zu aktualisieren in:**
- `components/sections/Hero.tsx` (Alle 3 Statistiken)

---

## 🟠 WICHTIGE INFORMATIONEN (Für Umsetzung beachten)

### 9. Social Media
```
LinkedIn: Nicht vorhanden (-)
Instagram: https://www.instagram.com/bildungszentrum_wma/
YouTube: https://www.youtube.com/@WAMOCONACADEMY
Facebook: https://tr-tr.facebook.com/WAMOCONACADEMY/
```

**Zu aktualisieren in:**
- `components/shared/Footer.tsx` (Social-Media-Links hinzufügen)

---

### 10. Brand Color (leichte Anpassung)
```
ALT: #ff0b00 (WAMOCON Red)
NEU: #fe0404 (WAMOCON Red - leicht angepasst)
```

**Zu aktualisieren in:**
- `tailwind.config.ts` (colors.accent.DEFAULT)

---

### 11. Lead-Magnets geplant
```
- Video-Tutorial: Ja
- Kostenlose Mini-Lektion: Ja
- Quiz/Assessment: Ja
- PDF "ISTQB-Checkliste": Muss erstellt werden
```

**Für spätere Phase:** Lead-Magnet-Sektion erweitern

---

### 12. Payment & Tools
```
Stripe: Noch nicht vorhanden (muss eingerichtet werden)
Mailchimp: Noch nicht vorhanden (muss eingerichtet werden)
Hosting: Strato (aktuell), EU-Server
```

---

### 13. Datenschutz-Tools
```
Aktuell genutzt:
- Google Analytics (geplant)
- Google Maps
- reCAPTCHA
- AdSense

Alle Cookies erwünscht:
- Notwendige
- Analytics
- Marketing
```

---

### 14. Trainer-Info (noch zu ergänzen)
```
Name: Waleri Moretz
Titel/Qualifikationen: TBD
Bio: TBD
Foto: Nicht verfügbar
```

**Aktion:** Trainer-Sektion später hinzufügen, wenn Infos vorhanden

---

### 15. Domain
```
Website-URL: TBD (noch nicht festgelegt)
```

**Aktion:** Domain-Entscheidung erforderlich vor Deployment

---

## 📋 UMSETZUNGS-CHECKLISTE

### Phase 1: Kritische Daten-Updates (SOFORT)

- [ ] **Pricing aktualisieren**
  - [ ] `components/sections/Pricing.tsx` → €497 / 5x€100
  - [ ] `components/sections/FinalCTA.tsx` → €497
  - [ ] Wert-Stack neu berechnen

- [ ] **Kurs-Dauer aktualisieren**
  - [ ] `components/sections/Hero.tsx` → "4 Wochen"
  - [ ] `components/sections/Curriculum.tsx` → "4 Wochen"
  - [ ] `data/curriculum.ts` → Wochen-Struktur anpassen

- [ ] **E-Mail-Adressen ersetzen**
  - [ ] Alle `support@example.com` → `info@test-it-academy.de`
  - [ ] Footer, FinalCTA, etc.

- [ ] **Hero-Statistiken aktualisieren**
  - [ ] "8 Wochen" → "4 Wochen"
  - [ ] "316+" → "300+"
  - [ ] "87%" → TBD oder entfernen

- [ ] **DiTeLe-Links aktualisieren**
  - [ ] Link zu https://ditele-learn.ai/de
  - [ ] "Web, iOS, Android" → "Web-App" (keine nativen Apps)

- [ ] **Geld-zurück-Garantie Bedingungen**
  - [ ] Text in Pricing-Sektion anpassen
  - [ ] Disclaimer zu Bedingungen hinzufügen

---

### Phase 2: Testimonials (KRITISCH vor Launch)

- [ ] **Echte Testimonials beschaffen**
  - [ ] Von https://test-it-academy.com/bewertungen holen
  - [ ] Zustimmung zur Veröffentlichung einholen
  - [ ] Fotos anfordern
  - [ ] `data/testimonials.ts` aktualisieren

- [ ] **ODER: Testimonials vorübergehend ausblenden**
  - [ ] Social-Proof-Sektion kommentieren/entfernen
  - [ ] Bis echte Testimonials verfügbar sind

---

### Phase 3: Rechtliche Seiten erstellen

- [ ] **Impressum**
  - [ ] `app/impressum/page.tsx` erstellen
  - [ ] Firmendaten einfügen (alle Infos vorhanden)

- [ ] **Datenschutzerklärung**
  - [ ] `app/datenschutz/page.tsx` erstellen
  - [ ] DSGVO-konform (Generator nutzen oder Anwalt)

- [ ] **AGB**
  - [ ] `app/agb/page.tsx` erstellen
  - [ ] Neue Garantie-Bedingungen einarbeiten

---

### Phase 4: Branding & Design

- [ ] **Brand Color aktualisieren**
  - [ ] `tailwind.config.ts` → #fe0404

- [ ] **Logo hinzufügen**
  - [ ] Logo-Dateien anfordern
  - [ ] In Header/Footer einbinden

- [ ] **Social Media Links**
  - [ ] Footer erweitern mit Instagram, YouTube, Facebook

---

### Phase 5: Externe Integrationen

- [ ] **Stripe einrichten**
  - [ ] Account erstellen
  - [ ] Produkte anlegen (€497, 5x€100)
  - [ ] API-Keys in `.env`

- [ ] **Mailchimp einrichten**
  - [ ] Account erstellen
  - [ ] Listen/Tags anlegen
  - [ ] API-Keys in `.env`

---

## ⚠️ WICHTIGE HINWEISE

### Preis-Änderung: €299 → €497
**Das ist eine 66% Preissteigerung!**

Bitte überprüfen:
1. **Wert-Stack neu kalkulieren** in Pricing-Sektion
2. **Marketing-Copy anpassen** - höherer Preis erfordert stärkere Wertargumentation
3. **Vergleichstabelle prüfen** - ist €497 noch konkurrenzfähig?

---

### Testimonials: Platzhalter entfernen
**Fake-Testimonials sind rechtlich problematisch und schaden der Glaubwürdigkeit!**

Empfehlung:
- Entweder echte Testimonials von test-it-academy.com nutzen
- ODER: Sektion vorübergehend ausblenden bis echte vorhanden

---

### Geld-zurück-Garantie: Bedingungen verschärft
**Die neue Garantie ist NICHT "ohne Angabe von Gründen"!**

Bedingungen klar kommunizieren:
- Nachweis nicht-bestandener Prüfung notwendig
- Vollständige Durcharbeit von Eloomi + DiTeLe erforderlich

→ Eventuell separaten FAQ-Eintrag dazu erstellen

---

### Kurs-Plattform: Eloomi (extern)
**Wichtig für Post-Purchase-Flow:**

Nach Stripe-Checkout muss User zu Eloomi weitergeleitet/registriert werden.
- Webhook von Stripe → Eloomi-Account erstellen?
- Oder: Manueller Prozess?
- API-Integration mit Eloomi prüfen

---

## 📊 Priorisierung

### 🔴 SEHR HOHE PRIORITÄT (vor Launch)
1. Preis-Updates (€497)
2. E-Mail-Adressen ersetzen
3. Kurs-Dauer (4 Wochen)
4. Testimonials (entfernen oder ersetzen)
5. Rechtliche Seiten (Impressum, Datenschutz, AGB)

### 🟠 HOHE PRIORITÄT (vor Launch)
6. Hero-Statistiken korrigieren
7. DiTeLe-Links aktualisieren
8. Geld-zurück-Garantie Bedingungen
9. Brand-Color-Update

### 🟡 MITTLERE PRIORITÄT (kann nach Launch)
10. Social-Media-Links hinzufügen
11. Trainer-Sektion (wenn Infos vorhanden)
12. Logo-Integration

### 🟢 NIEDRIGE PRIORITÄT
13. Lead-Magnet-Erweiterung
14. Weitere Design-Anpassungen

---

## 🚀 Empfohlene Reihenfolge

**Schritt 1:** Preis-Updates (€497)
- Größte inhaltliche Änderung
- Betrifft mehrere Komponenten

**Schritt 2:** E-Mail & Kontaktdaten
- Schnell umsetzbar
- Rechtlich wichtig

**Schritt 3:** Testimonials-Entscheidung
- Entweder echte beschaffen oder ausblenden
- Nicht mit Platzhaltern launchen!

**Schritt 4:** Rechtliche Seiten
- Impressum (alle Daten vorhanden)
- Datenschutz (Generator oder Anwalt)
- AGB (Generator oder Anwalt)

**Schritt 5:** Restliche Anpassungen
- Kurs-Dauer, DiTeLe-Links, Statistiken

---

**Erstellt:** 2026-01-21
**Nächster Schritt:** Umsetzung der kritischen Änderungen beginnen
