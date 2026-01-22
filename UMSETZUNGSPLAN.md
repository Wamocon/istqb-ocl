# 🚀 Umsetzungsplan: Vollständige Webseite mit E-Mail & Survey-Funktionen

**Projekt:** ISTQB Landing Page → Vollständige Webplattform
**Erstellungsdatum:** 2026-01-21
**Status:** Planning Phase

---

## 📋 Executive Summary

Dieser Plan transformiert die bestehende Landing Page in eine vollständige, funktionsfähige Webseite mit:
- ✅ E-Mail-Marketing & Lead-Management
- ✅ Survey-System für Feedback & User Research
- ✅ Payment-Integration (Stripe)
- ✅ Backend-API-Infrastruktur
- ✅ Datenschutz & rechtliche Compliance
- ✅ Analytics & Tracking

**Geschätzte Komplexität:** 5 Entwicklungsphasen mit 15-20 Major Features

---

## 🎯 Phase 1: Backend-Infrastruktur & API-Grundlagen

### 1.1 Database Setup
**Priorität:** 🔴 Kritisch
**Abhängigkeiten:** Keine

#### Aufgaben:
- [ ] **Datenbank-Technologie wählen**
  - Option A: PostgreSQL (Supabase) - Empfohlen
  - Option B: MongoDB Atlas
  - Option C: PlanetScale (MySQL)

- [ ] **Schema Design & Migration**
  - Users-Tabelle (Email, Name, Subscription-Status, etc.)
  - Purchases-Tabelle (Bestellungen, Payment-Status)
  - Survey-Responses-Tabelle
  - Lead-Magnets-Tabelle (Downloads)
  - Email-Subscriptions-Tabelle (Mailchimp Sync)

- [ ] **ORM/Client installieren**
  - Prisma (empfohlen) oder Drizzle ORM
  - Migrations einrichten

**Technische Dependencies:**
```bash
npm install @prisma/client prisma
# oder
npm install drizzle-orm drizzle-kit
```

---

### 1.2 Next.js API Routes Setup
**Priorität:** 🔴 Kritisch
**Abhängigkeiten:** Database Setup

#### Zu erstellende API-Endpunkte:

##### **Payment/Checkout:**
- `POST /api/checkout` - Stripe Checkout-Session erstellen
- `POST /api/webhook/stripe` - Stripe Webhooks verarbeiten
- `GET /api/order/[id]` - Bestellstatus abrufen

##### **Lead Management:**
- `POST /api/lead-magnet` - Lead-Magnet-Download & Email-Capture
- `POST /api/newsletter` - Newsletter-Anmeldung (Mailchimp)
- `POST /api/waitlist` - Warteliste (optional)

##### **Survey System:**
- `POST /api/survey/submit` - Survey-Antworten speichern
- `GET /api/survey/[id]` - Survey-Daten abrufen
- `GET /api/survey/results` - Survey-Ergebnisse (Admin)

##### **User Management:**
- `POST /api/user/register` - User-Registrierung (nach Kauf)
- `GET /api/user/profile` - User-Profil abrufen
- `PATCH /api/user/profile` - User-Profil aktualisieren

**Dateistruktur:**
```
app/
├── api/
│   ├── checkout/
│   │   └── route.ts
│   ├── webhook/
│   │   └── stripe/
│   │       └── route.ts
│   ├── lead-magnet/
│   │   └── route.ts
│   ├── newsletter/
│   │   └── route.ts
│   ├── survey/
│   │   ├── [id]/
│   │   │   └── route.ts
│   │   └── submit/
│   │       └── route.ts
│   └── user/
│       └── profile/
│           └── route.ts
```

---

## 🎯 Phase 2: E-Mail-Service-Integration

### 2.1 Mailchimp Integration
**Priorität:** 🟠 Hoch
**Abhängigkeiten:** API Routes Setup

#### Aufgaben:
- [ ] **Mailchimp Account einrichten**
  - API-Key generieren
  - Audience (Liste) erstellen
  - Tags definieren (z.B. "Lead Magnet", "Paid Customer")

- [ ] **SDK installieren**
```bash
npm install @mailchimp/mailchimp_marketing
```

- [ ] **Email-Service-Klasse erstellen**
  - `lib/email/mailchimp.ts` - Wrapper für Mailchimp API
  - Methoden: `addSubscriber()`, `updateTags()`, `sendCampaign()`

- [ ] **Double-Opt-In implementieren**
  - Confirmation-Email-Flow
  - DSGVO-konform

#### Integration Points:
1. **Lead-Magnet-Download** → Mailchimp "Lead Magnet" Tag
2. **Newsletter-Anmeldung** → Mailchimp "Newsletter" Tag
3. **Kauf abgeschlossen** → Mailchimp "Customer" Tag + Transactional Email

---

### 2.2 Transactional Email (Alternative: Resend/SendGrid)
**Priorität:** 🟠 Hoch
**Abhängigkeiten:** Keine

#### Aufgaben:
- [ ] **Email-Provider wählen**
  - **Resend** (empfohlen, moderner, React Email Support)
  - SendGrid
  - Postmark

- [ ] **Email-Templates erstellen**
  - Purchase-Confirmation (mit Zugangslink)
  - Lead-Magnet-Delivery (PDF-Download)
  - Welcome-Email (nach Newsletter-Anmeldung)
  - Password-Reset (falls User-Auth später kommt)

- [ ] **React Email nutzen** (für Resend)
```bash
npm install resend react-email @react-email/components
```

**Email-Template-Struktur:**
```
emails/
├── PurchaseConfirmation.tsx
├── LeadMagnetDelivery.tsx
├── WelcomeEmail.tsx
└── components/
    ├── EmailLayout.tsx
    └── Button.tsx
```

#### Email-Typen:
| Email-Typ | Trigger | Provider | Priorität |
|-----------|---------|----------|-----------|
| Kaufbestätigung | Stripe Webhook | Resend | 🔴 Kritisch |
| Lead-Magnet PDF | Lead-Form Submit | Resend | 🔴 Kritisch |
| Newsletter-Welcome | Newsletter-Signup | Mailchimp | 🟡 Mittel |
| Survey-Einladung | 7 Tage nach Kauf | Mailchimp | 🟢 Nice-to-Have |

---

## 🎯 Phase 3: Payment-Integration (Stripe)

### 3.1 Stripe Setup
**Priorität:** 🔴 Kritisch
**Abhängigkeiten:** Database, API Routes

#### Aufgaben:
- [ ] **Stripe-Account einrichten**
  - Test-Mode Keys
  - Produkte erstellen (€299 Einmalzahlung, €109/Monat x3)
  - Webhooks konfigurieren

- [ ] **Stripe SDK installieren**
```bash
npm install stripe @stripe/stripe-js
```

- [ ] **Checkout-Flow implementieren**
  - `components/CheckoutButton.tsx` - Button-Komponente
  - `app/api/checkout/route.ts` - Checkout-Session erstellen
  - Success/Cancel-Seiten erstellen

- [ ] **Webhook-Handler**
  - `app/api/webhook/stripe/route.ts`
  - Events verarbeiten:
    - `checkout.session.completed` → User aktivieren + Email senden
    - `payment_intent.succeeded` → Payment-Status aktualisieren
    - `payment_intent.failed` → Error-Handling

#### Neue Komponenten:
```typescript
// components/payment/CheckoutButton.tsx
// components/payment/PriceSelector.tsx (Einmalzahlung vs. Ratenzahlung)
// app/success/page.tsx (Purchase Success Page)
// app/cancel/page.tsx (Purchase Cancelled Page)
```

---

### 3.2 Post-Purchase Flow
**Priorität:** 🟠 Hoch
**Abhängigkeiten:** Stripe Setup, Email Integration

#### Aufgaben:
- [ ] **Success-Seite mit Zugangsinfos**
  - Login-Link/Button
  - Download-Links (falls PDF-Materialien)
  - Willkommens-Video

- [ ] **User-Aktivierung**
  - Nach Webhook: User in DB als "Active" markieren
  - Zugang zu Kursplattform gewähren (Link zu LMS?)
  - Mailchimp-Tag "Customer" hinzufügen

- [ ] **Invoice-Generation** (optional)
  - Automatische Rechnung erstellen
  - Per Email versenden

---

## 🎯 Phase 4: Survey-System

### 4.1 Survey-Infrastruktur
**Priorität:** 🟡 Mittel
**Abhängigkeiten:** Database, API Routes

#### Aufgaben:
- [ ] **Survey-Datenmodell**
```typescript
// types/survey.ts
interface Survey {
  id: string
  title: string
  questions: Question[]
  status: 'draft' | 'active' | 'closed'
  createdAt: Date
}

interface Question {
  id: string
  type: 'multiple-choice' | 'rating' | 'text' | 'nps'
  text: string
  options?: string[]
  required: boolean
}

interface Response {
  surveyId: string
  userId?: string
  answers: Answer[]
  submittedAt: Date
}
```

- [ ] **Survey-Builder (Admin)**
  - `app/admin/surveys/new/page.tsx`
  - Drag-and-drop Question-Builder (optional: einfacher JSON-Editor)

- [ ] **Survey-Display-Komponente**
  - `components/survey/SurveyForm.tsx`
  - Multi-Step-Form mit Progress
  - Validierung

---

### 4.2 Survey-Integration in User Journey
**Priorität:** 🟡 Mittel
**Abhängigkeiten:** Survey-Infrastruktur

#### Survey-Typen:

**1. Pre-Purchase Survey (Lead Qualification)**
- Eingebettet in Landing Page (vor Pricing-Sektion)
- Fragen:
  - "Wie viel IT-Erfahrung hast du?" (Beginner/Intermediate/Advanced)
  - "Was ist dein Hauptziel?" (Karrierewechsel/Zertifizierung/Skillupgrade)
  - "Wann möchtest du starten?" (Sofort/1-3 Monate/später)
- Nutzen: Personalisierte Empfehlungen, bessere Sales-Insights

**2. Post-Purchase Survey (Feedback nach Kurs)**
- Trigger: 7-14 Tage nach Kauf
- Email mit Survey-Link
- Fragen:
  - NPS: "Wie wahrscheinlich würdest du WAMOCON weiterempfehlen?" (0-10)
  - "Was hat dir am besten gefallen?"
  - "Was können wir verbessern?"
  - "Dürfen wir dein Feedback als Testimonial nutzen?" (Checkbox)

**3. Lead-Magnet-Survey (Micro-Survey)**
- Vor Download des PDFs
- 1-2 Fragen:
  - "Woher kennst du uns?" (Google/Social/Empfehlung/etc.)
  - "Was ist deine größte Herausforderung bei ISTQB?"

#### Implementation:
```typescript
// components/survey/PrePurchaseSurvey.tsx
// components/survey/PostPurchaseSurvey.tsx
// components/survey/MicroSurvey.tsx (für Lead Magnet)
```

---

### 4.3 Survey-Analytics Dashboard
**Priorität:** 🟢 Nice-to-Have
**Abhängigkeiten:** Survey-Infrastruktur

#### Aufgaben:
- [ ] **Admin-Dashboard**
  - `app/admin/surveys/[id]/results/page.tsx`
  - Charts: Response-Rate, NPS-Score, Question-Breakdown
  - Export als CSV

- [ ] **Visualisierung-Library**
```bash
npm install recharts
# oder
npm install chart.js react-chartjs-2
```

---

## 🎯 Phase 5: Legal & Compliance

### 5.1 DSGVO-Compliance
**Priorität:** 🔴 Kritisch (vor Launch)
**Abhängigkeiten:** Database, Email-Integration

#### Aufgaben:
- [ ] **Cookie-Banner**
  - Tool: CookieYes, Cookiebot, oder Custom
  - Google Analytics nur nach Consent laden

- [ ] **Privacy Policy Page**
  - `app/datenschutz/page.tsx`
  - Inhalt: Welche Daten werden gespeichert, wie, warum

- [ ] **Terms of Service**
  - `app/agb/page.tsx`
  - Kaufbedingungen, Widerrufsrecht

- [ ] **Impressum**
  - `app/impressum/page.tsx`
  - Firmeninfos, Kontakt, Verantwortlicher

- [ ] **Data Retention Policy**
  - Automatisches Löschen von Daten nach X Jahren
  - User-Daten-Export (DSGVO-Anfrage)
  - User-Daten-Löschung (DSGVO-Anfrage)

#### API-Endpunkte für DSGVO:
- `GET /api/user/export-data` - User-Daten als JSON exportieren
- `DELETE /api/user/delete-account` - User-Account löschen

---

### 5.2 Legal Pages Content
**Priorität:** 🔴 Kritisch (vor Launch)
**Abhängigkeiten:** Keine (Content-Erstellung)

Siehe **Fragenkatalog** (Sektion unten) für notwendige Informationen.

---

## 🎯 Phase 6: Analytics & Tracking

### 6.1 Google Analytics 4
**Priorität:** 🟠 Hoch
**Abhängigkeiten:** Cookie-Banner (DSGVO)

#### Aufgaben:
- [ ] **GA4-Property einrichten**
  - Measurement ID in `.env` hinzufügen
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

- [ ] **Google Tag Manager (empfohlen)** oder direkte Integration
```bash
npm install @next/third-parties
```

- [ ] **Event-Tracking implementieren**
  - `lib/analytics.ts` - Wrapper für GA Events
  - Events:
    - `view_pricing` (Pricing-Sektion in Viewport)
    - `click_cta_buy` (CTA-Button geklickt)
    - `lead_magnet_download` (Lead-Magnet heruntergeladen)
    - `survey_completed` (Survey abgeschickt)
    - `purchase_completed` (Kauf abgeschlossen - via Stripe Webhook)

```typescript
// lib/analytics.ts
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', eventName, params)
  }
}
```

---

### 6.2 Conversion-Tracking
**Priorität:** 🟠 Hoch
**Abhängigkeiten:** GA4 Setup

#### Aufgaben:
- [ ] **Funnel definieren**
  1. Landing Page View
  2. Scroll to Pricing
  3. Click "Jetzt Kaufen"
  4. Stripe Checkout View
  5. Purchase Completed

- [ ] **Custom Dashboards in GA4**
  - Conversion-Rate
  - Absprungrate bei Pricing
  - Lead-Magnet → Purchase-Rate

---

## 🎯 Phase 7: User-Features & Plattform-Erweiterung

### 7.1 User-Dashboard (Optional, aber empfohlen)
**Priorität:** 🟢 Nice-to-Have
**Abhängigkeiten:** Database, User-Auth

#### Aufgaben:
- [ ] **Authentication implementieren**
  - NextAuth.js (empfohlen) oder Clerk
  - Login/Signup-Seiten

- [ ] **User-Dashboard**
  - `app/dashboard/page.tsx`
  - Kurs-Progress (falls LMS integriert)
  - Download-Bereich (PDFs, Materialien)
  - Invoice-Historie

```bash
npm install next-auth
```

---

### 7.2 Content-Delivery (Kurs-Zugang)
**Priorität:** 🟠 Hoch (abhängig von Business-Model)
**Abhängigkeiten:** User-Dashboard

#### Szenarien:

**Option A: Externe LMS-Plattform (z.B. Teachable, Thinkific)**
- Nach Kauf: User erhält Email mit Link zu externer Plattform
- Kein User-Dashboard notwendig

**Option B: Eigenes LMS (in Next.js)**
- Kurs-Content in `app/course/` hosten
- Video-Hosting: Vimeo (private Videos) oder AWS S3
- Progress-Tracking in DB

**Option C: Hybrid**
- Landing Page + Checkout hier
- Kurs-Delivery auf externer Plattform
- Webhook von Stripe → Externes LMS-Account erstellen

**→ Siehe Fragenkatalog für Entscheidung**

---

## 🎯 Phase 8: Optimierung & A/B-Testing

### 8.1 Performance-Optimierung
**Priorität:** 🟢 Nice-to-Have
**Abhängigkeiten:** Alle Features implementiert

#### Aufgaben:
- [ ] **Image-Optimierung**
  - Next.js Image-Component nutzen
  - WebP-Format
  - Lazy-Loading

- [ ] **Code-Splitting**
  - Dynamic Imports für große Komponenten
  - Route-basiertes Splitting (automatisch in Next.js)

- [ ] **Bundle-Analyse**
```bash
npm install @next/bundle-analyzer
```

---

### 8.2 A/B-Testing (Optional)
**Priorität:** 🟢 Nice-to-Have
**Abhängigkeiten:** Analytics

#### Aufgaben:
- [ ] **Testing-Tool wählen**
  - Google Optimize (kostenlos, deprecated 2023)
  - Vercel Edge-Config + Middleware (selbst bauen)
  - PostHog (Open-Source, empfohlen)

- [ ] **Test-Szenarien**
  - CTA-Button-Text: "Jetzt kaufen" vs. "Kurs starten"
  - Pricing-Position: Früh vs. spät auf der Seite
  - Lead-Magnet-Angebot: PDF vs. Video-Kurs

---

## 📦 Technologie-Stack: Finale Empfehlungen

### Core Stack (bereits vorhanden):
- ✅ **Frontend:** Next.js 15, React 19, TypeScript
- ✅ **Styling:** Tailwind CSS, Framer Motion
- ✅ **Icons:** Lucide React

### Neu zu installieren:

#### Database & ORM:
```bash
npm install @prisma/client prisma
npm install @supabase/supabase-js  # falls Supabase
```

#### Payment:
```bash
npm install stripe @stripe/stripe-js
```

#### Email:
```bash
npm install resend react-email @react-email/components
npm install @mailchimp/mailchimp_marketing
```

#### Analytics:
```bash
npm install @next/third-parties  # für Google Analytics
```

#### Forms & Validation:
```bash
npm install react-hook-form zod @hookform/resolvers
```

#### Auth (Optional):
```bash
npm install next-auth
```

#### Charts (für Survey-Dashboard):
```bash
npm install recharts
```

---

## 🗂️ Finale Dateistruktur

```
istqb-landingpage/
├── app/
│   ├── page.tsx                    # Landing Page (aktuell)
│   ├── api/                        # 🆕 Backend API
│   │   ├── checkout/
│   │   ├── webhook/
│   │   ├── lead-magnet/
│   │   ├── newsletter/
│   │   ├── survey/
│   │   └── user/
│   ├── success/                    # 🆕 Purchase Success Page
│   ├── cancel/                     # 🆕 Purchase Cancelled
│   ├── survey/                     # 🆕 Survey-Seiten
│   │   └── [id]/
│   ├── dashboard/                  # 🆕 User-Dashboard (optional)
│   ├── datenschutz/                # 🆕 Privacy Policy
│   ├── agb/                        # 🆕 Terms of Service
│   └── impressum/                  # 🆕 Impressum
├── components/
│   ├── sections/                   # ✅ Landing Page Sections (vorhanden)
│   ├── ui/                         # ✅ UI Components (vorhanden)
│   ├── payment/                    # 🆕 Payment-Komponenten
│   │   ├── CheckoutButton.tsx
│   │   └── PriceSelector.tsx
│   ├── survey/                     # 🆕 Survey-Komponenten
│   │   ├── SurveyForm.tsx
│   │   ├── PrePurchaseSurvey.tsx
│   │   └── QuestionTypes/
│   └── forms/                      # 🆕 Formular-Komponenten
│       ├── LeadMagnetForm.tsx
│       └── NewsletterForm.tsx
├── lib/
│   ├── db/                         # 🆕 Database Client
│   │   └── prisma.ts
│   ├── email/                      # 🆕 Email-Services
│   │   ├── resend.ts
│   │   └── mailchimp.ts
│   ├── payment/                    # 🆕 Payment-Logic
│   │   └── stripe.ts
│   ├── analytics.ts                # 🆕 Analytics-Wrapper
│   └── utils.ts                    # ✅ (vorhanden)
├── emails/                         # 🆕 Email-Templates
│   ├── PurchaseConfirmation.tsx
│   ├── LeadMagnetDelivery.tsx
│   └── WelcomeEmail.tsx
├── prisma/                         # 🆕 Database Schema
│   ├── schema.prisma
│   └── migrations/
├── data/                           # ✅ (vorhanden)
│   ├── curriculum.ts
│   ├── testimonials.ts
│   ├── faq.ts
│   └── surveys.ts                  # 🆕 Survey-Definitionen
├── types/                          # ✅ (vorhanden + neue Types)
│   ├── index.ts
│   ├── survey.ts                   # 🆕
│   └── payment.ts                  # 🆕
└── public/
    ├── images/
    └── lead-magnets/               # 🆕 PDFs für Downloads
        └── istqb-checkliste.pdf
```

---

## 🎯 Prioritäts-Matrix

### Must-Have (Vor Launch):
1. ✅ **Payment-Integration (Stripe)** - Ohne kein Umsatz
2. ✅ **E-Mail-Integration (Resend + Mailchimp)** - Kaufbestätigung & Leads
3. ✅ **Legal Pages (Impressum, Datenschutz, AGB)** - Rechtlich verpflichtend
4. ✅ **Cookie-Banner (DSGVO)** - Rechtlich verpflichtend
5. ✅ **Lead-Magnet-Funktion** - Lead-Generierung
6. ✅ **Database Setup** - Datenspeicherung
7. ✅ **API-Routes (Checkout, Lead-Magnet, Newsletter)** - Backend-Logik

### Should-Have (Launch + 1 Monat):
8. ✅ **Google Analytics 4** - Tracking
9. ✅ **Post-Purchase Survey** - Feedback-Loop
10. ✅ **Pre-Purchase Micro-Survey** - Lead-Qualification
11. ✅ **Success/Cancel-Seiten** - User-Experience

### Nice-to-Have (Launch + 3 Monate):
12. ⚪ **User-Dashboard** - Self-Service
13. ⚪ **Survey-Analytics-Dashboard** - Datenanalyse
14. ⚪ **A/B-Testing** - Optimierung
15. ⚪ **Invoice-Generation** - Automatisierung

---

## 🚀 Empfohlene Reihenfolge (Sprint-Plan)

### Sprint 1 (Woche 1-2): Backend & Payment
1. Database Setup (Supabase + Prisma)
2. Stripe-Integration (Checkout + Webhooks)
3. API-Routes (Checkout, Webhook)
4. Success/Cancel-Seiten

**Ziel:** Nutzer können kaufen, Payment wird verarbeitet

---

### Sprint 2 (Woche 3): E-Mail & Leads
5. Resend-Integration (Transactional Emails)
6. Mailchimp-Integration
7. Lead-Magnet-Form + API-Route
8. Newsletter-Form + API-Route
9. Email-Templates (Purchase Confirmation, Lead Magnet)

**Ziel:** Emails werden automatisch versendet, Leads werden erfasst

---

### Sprint 3 (Woche 4): Legal & Compliance
10. Legal Pages erstellen (Impressum, Datenschutz, AGB)
11. Cookie-Banner integrieren
12. DSGVO-API-Endpunkte (Data Export/Deletion)

**Ziel:** Rechtlich compliant, launch-ready

---

### Sprint 4 (Woche 5): Survey-System
13. Survey-Datenmodell + DB-Schema
14. Survey-Komponenten (Form, Question-Types)
15. Pre-Purchase Micro-Survey
16. Post-Purchase Survey + Email-Trigger

**Ziel:** Feedback-Loop etabliert, User-Insights sammeln

---

### Sprint 5 (Woche 6): Analytics & Optimierung
17. Google Analytics 4 + Event-Tracking
18. Conversion-Funnel definieren
19. Performance-Optimierung
20. Testing & Bug-Fixing

**Ziel:** Datenbasierte Optimierung möglich

---

### Sprint 6+ (Optional): Plattform-Features
21. User-Dashboard
22. Survey-Analytics-Dashboard
23. A/B-Testing-Setup

---

## 📊 Kosten-Übersicht (Monatlich)

| Service | Kosten (ca.) | Notwendig? |
|---------|--------------|------------|
| Vercel (Hosting) | €0-20/Monat | ✅ Ja |
| Supabase (Database) | €0-25/Monat | ✅ Ja |
| Stripe (Payment) | 1,4% + €0,25/Transaktion | ✅ Ja |
| Resend (Email) | €0-20/Monat (10k Emails) | ✅ Ja |
| Mailchimp | €0-13/Monat (500 Kontakte) | ✅ Ja |
| Google Analytics | Kostenlos | ✅ Ja |
| Cookiebot (Cookie-Banner) | €0-9/Monat | Optional |
| Domain | €10-15/Jahr | ✅ Ja |
| **GESAMT** | **~€20-100/Monat** | |

**Hinweis:** Kosten steigen mit Nutzeranzahl (Mailchimp, Resend skalieren mit Kontakten/Emails)

---

## 🔒 Sicherheit & Best Practices

### Zu implementieren:
1. **Environment Variables** - Secrets niemals in Code committen
2. **Input-Validierung** - Zod für alle API-Inputs
3. **Rate-Limiting** - Schutz vor Spam (z.B. Vercel Edge Middleware)
4. **CSRF-Protection** - Next.js hat das bereits gebaut-in
5. **SQL-Injection-Prevention** - Prisma nutzt Prepared Statements
6. **Webhook-Signature-Verification** - Stripe-Webhooks signieren & verifizieren

---

## 📝 Nächste Schritte

1. **Fragenkatalog durchgehen** (siehe unten)
2. **Technologie-Entscheidungen treffen** (Database, Email-Provider, etc.)
3. **Sprint 1 starten** (Backend & Payment)
4. **Testumgebung aufsetzen** (Stripe Test-Mode, Mailchimp Test-Liste)
5. **Legal-Content schreiben lassen** (Datenschutz, AGB - ggf. Anwalt konsultieren)

---

**Erstellt:** 2026-01-21
**Autor:** Claude Code
**Version:** 1.0
