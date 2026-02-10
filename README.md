# WAMOCON Academy — ISTQB CTFL 4.0 Landing Page

Conversion-optimized landing page for the **ISTQB CTFL 4.0** online course & **DiTeLe** practice tool, built with Next.js 15 and deployed on Vercel.

**Live:** [https://onlinekurs.test-it-academy.de](https://onlinekurs.test-it-academy.de)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Database** | Supabase (PostgreSQL) |
| **Email** | Resend + Supabase Edge Functions |
| **Hosting** | Vercel |
| **Domain** | Strato (test-it-academy.de) |

---

## Architecture

```
┌─────────────────────┐     ┌──────────────────┐     ┌─────────────┐
│   Vercel (Frontend)  │────▶│  Supabase (DB)   │────▶│  Resend API │
│   Next.js 15         │     │  PostgreSQL      │     │  Email      │
│   onlinekurs.        │     │  + Edge Functions │     │  Delivery   │
│   test-it-academy.de │     │  + Vault         │     │             │
└─────────────────────┘     └──────────────────┘     └─────────────┘
```

### Email Flow (fully automatic)
```
Customer submits order → INSERT into orders table
  → Database trigger fires automatically
  → Edge Function called via pg_net
  → 2 emails sent via Resend:
      ├── Customer confirmation
      └── Admin notification
```

---

## Project Structure

```
istqb-landingpage/
├── app/
│   ├── page.tsx                    # Landing page (all sections)
│   ├── layout.tsx                  # Root layout + meta tags
│   ├── globals.css                 # Global styles
│   ├── api/                        # API routes
│   ├── agb/                        # Terms & conditions
│   ├── datenschutz/                # Privacy policy
│   ├── impressum/                  # Legal notice
│   ├── checkliste/                 # Checklist page
│   └── selbsttest/                 # Self-assessment quiz
├── components/
│   ├── sections/                   # Landing page sections
│   ├── ui/                         # Reusable UI components
│   ├── shared/                     # Header, Footer, CookieBanner
│   ├── analytics/                  # GA4 + Meta Pixel (GDPR)
│   └── providers/                  # Context providers
├── data/                           # Static content data
├── lib/
│   ├── api.ts                      # Supabase API calls
│   ├── supabase.ts                 # Supabase client
│   ├── cookieConsent.ts            # GDPR cookie management
│   └── utils.ts                    # Utility functions
├── types/                          # TypeScript type definitions
├── public/logo/                    # Logo assets
└── supabase/
    ├── migrations/                 # Database migrations
    └── functions/send-order-emails/
        └── index_BUNDLED.ts        # Edge Function (deployed)
```

---

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server runs on `http://localhost:3000` (or next available port).

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

| Variable | Where Used | Description |
|----------|-----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Vercel | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Vercel | Supabase anonymous key |
| `NEXT_PUBLIC_DOMAIN` | Vercel | Live site URL (for logo in emails) |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` | Vercel | GA4 measurement ID |
| `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` | Vercel | Meta Pixel ID |
| `RESEND_API_KEY` | Supabase Vault | Resend API key |
| `EMAIL_FROM` | Supabase Vault | Sender email address |
| `ADMIN_EMAIL` | Supabase Vault | Admin notification recipient |
| `DOMAIN` | Supabase Vault | Domain for email logo URL |

> **Note:** Email-related secrets (`RESEND_API_KEY`, `EMAIL_FROM`, `ADMIN_EMAIL`, `DOMAIN`) are stored in **Supabase Vault** (encrypted at rest) and read by the Edge Function at runtime. They are NOT needed in Vercel.

---

## Deployment

### Frontend (Vercel)
The project auto-deploys from Git. For manual deployment:

```bash
vercel --prod
```

### Email System (Supabase)
The email system consists of:
1. **Database trigger** — fires on every `INSERT` into `orders`
2. **Edge Function** — `send-order-emails` (deployed as `index_BUNDLED.ts`)
3. **Secrets** — stored in Supabase Vault

To redeploy the Edge Function after changes:
```bash
supabase functions deploy send-order-emails
```

Or deploy via the Supabase MCP / Dashboard.

---

## Email Templates

Both email templates (customer confirmation + admin notification) are **inlined** in the Edge Function (`index_BUNDLED.ts`). To customize:

1. Edit the HTML/CSS in `TEMPLATE_CUSTOMER` or `TEMPLATE_ADMIN` constants
2. Template variables use `{{variable_name}}` syntax
3. Redeploy the Edge Function

**Available template variables:**
`order_number`, `order_date`, `anrede`, `vorname`, `nachname`, `email`, `strasse`, `hausnummer`, `plz`, `ort`, `land`, `firma`, `ust_id_nr`, `product_name`, `price`, `zahlungsart`, `total_amount`, `agb_akzeptiert`, `datenschutz_akzeptiert`, `LOGO_URL`

---

## DNS & Email Configuration (Strato → Resend)

The domain `test-it-academy.de` is registered at Strato with the following DNS records for email delivery:

| Record | Subdomain | Value |
|--------|-----------|-------|
| TXT (DKIM) | `resend._domainkey` | Resend DKIM key |
| TXT (SPF) | `send` | `v=spf1 include:amazonses.com ~all` |
| MX | `send` | `feedback-smtp.eu-west-1.amazonses.com` (priority 10) |

Root domain MX points to Microsoft 365 for regular email.

---

## License

Private — WAMOCON Academy. All rights reserved.
