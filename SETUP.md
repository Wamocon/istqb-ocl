# Setup Guide - ISTQB Landingpage

## ✅ Projekt ist fertig installiert!

Der Development-Server läuft bereits auf: **http://localhost:3001**

---

## 📁 Projekt-Übersicht

**Pfad:** `d:\Testprojekt\istqb-landingpage`

### Was wurde erstellt:

✅ **Next.js 15 Projekt** mit TypeScript & Tailwind CSS
✅ **9 vollständige Sections** (Hero, DiTeLe Demo, Comparison, Deep-Dive, Curriculum, Pricing, Social Proof, FAQ, Final CTA)
✅ **Komponenten-Bibliothek** (Button, Card, Footer)
✅ **Daten-Files** (Curriculum, Testimonials, FAQ)
✅ **Design-System** (Farben, Fonts, Spacing aus KONZEPT.md)
✅ **Animationen** (Framer Motion integriert)
✅ **Responsive Design** (Mobile-First)

---

## 🖥️ Im Browser öffnen

1. Browser öffnen
2. Navigiere zu: **http://localhost:3001**
3. Die Landingpage sollte komplett geladen sein!

---

## 🎨 Erste Schritte

### 1. Schaue dir die Landingpage an

Scrolle durch alle 9 Sections:

1. **Hero** - Gradient-Background, 3-Spalten Stats, DiTeLe prominent
2. **DiTeLe Demo** - Klicke auf die Quiz-Antworten, sieh das Feedback
3. **Comparison** - 3-Wege-Vergleich mit Pricing
4. **DiTeLe Deep-Dive** - 45+ Übungen visualisiert
5. **Curriculum** - 8-Wochen-Plan expandieren
6. **Pricing** - €299 mit Value Stack & Vergleichstabelle
7. **Social Proof** - Klicke auf die Filter-Tabs (Quereinsteiger/Absolventen/Alle)
8. **FAQ** - Klicke auf Fragen, sieh Accordion-Animation
9. **Final CTA** - Dual-Option (Kaufen + Lead Magnet)

### 2. Teste die Interaktivität

- **DiTeLe Demo:** Wähle eine Antwort → sieh Feedback & Progress Bar
- **FAQ:** Klicke auf Fragen → Accordion öffnet/schließt
- **Social Proof:** Wechsle Filter → Testimonials ändern sich
- **CTAs:** Klicke "Zum Kurs - €299" → scrollt zu Pricing

### 3. Teste Mobile

Öffne Developer Tools (F12) → Toggle Device Toolbar → Wähle "iPhone 12"
→ Scrolle durch die Seite → Alles sollte responsive sein

---

## ✏️ Content anpassen

### Preis ändern

**Aktuell:** €299
**Wo:** Suche in allen Dateien nach `€299` und ersetze

```bash
# In VSCode: Ctrl+Shift+F → Suche "€299" → Replace All
```

### Testimonials anpassen

**Datei:** `data/testimonials.ts`

```typescript
{
  name: 'Dein Name',
  role: 'Vorher → Nachher',
  text: 'Dein Testimonial...',
  result: 'Dein Erfolg',
  // ...
}
```

### FAQ anpassen

**Datei:** `data/faq.ts`

Füge neue Fragen hinzu oder bearbeite bestehende.

### Email-Adressen ändern

Suche nach `info@test-it-academy.de` und ersetze durch deine Email.

---

## 🎨 Design anpassen

### Farben ändern

**Datei:** `tailwind.config.ts`

```typescript
colors: {
  primary: {
    DEFAULT: "#0F172A", // Ändere hier
  },
  accent: {
    DEFAULT: "#10B981", // Ändere hier
  },
}
```

### Fonts ändern

**Datei:** `app/globals.css`

```css
:root {
  --font-inter: 'Deine Schriftart', sans-serif;
}
```

---

## 🚀 Deployment

### Option 1: Vercel (Empfohlen)

1. Push Code zu GitHub
2. Gehe zu [vercel.com](https://vercel.com)
3. Import GitHub Repo
4. Deploy → Fertig!

### Option 2: Manueller Build

```bash
npm run build
npm start
```

---

## 📊 Performance-Check

Nach Deployment, prüfe Lighthouse-Score:

```
1. Öffne Chrome DevTools (F12)
2. Lighthouse Tab
3. Generate Report
4. Ziel: Performance > 90, SEO > 95
```

---

## 🐛 Troubleshooting

### Port bereits belegt?

Server läuft automatisch auf Port 3001 (Port 3000 war belegt).

### Fehler beim Start?

```bash
# Lösche node_modules und installiere neu
rm -rf node_modules
npm install
npm run dev
```

### Styling funktioniert nicht?

Prüfe ob Tailwind läuft:
```bash
# Sollte keine Errors zeigen
npm run build
```

---

## 📚 Nächste To-Dos

- [ ] **Bilder hinzufügen:** `public/images/testimonials/*.jpg`
- [ ] **Lead Magnet PDF:** Erstellen und hochladen
- [ ] **Analytics:** Google Analytics einrichten
- [ ] **Payment:** Stripe Checkout integrieren
- [ ] **Rechtliches:** Impressum, Datenschutz, AGB erstellen
- [ ] **Email-Marketing:** Mailchimp API integrieren
- [ ] **A/B-Testing:** Nach Launch starten

---

## 💡 Hilfreiche Commands

```bash
# Development
npm run dev          # Startet Dev-Server

# Production
npm run build        # Baut für Production
npm start            # Startet Production-Server

# Code Quality
npm run lint         # ESLint check
npx tsc --noEmit     # TypeScript check
```

---

## 📞 Support

Bei Fragen oder Problemen:

1. Schau in die Dokumentation: [README.md](README.md)
2. Prüfe das Konzept: [../New_Landingpage/KONZEPT.md](../New_Landingpage/KONZEPT.md)
3. Technische Details: [../New_Landingpage/TECHNICAL_SPEC.md](../New_Landingpage/TECHNICAL_SPEC.md)

---

**🎉 Viel Erfolg mit deiner ISTQB-Landingpage!**

Deine Landingpage läuft auf: **http://localhost:3001**
