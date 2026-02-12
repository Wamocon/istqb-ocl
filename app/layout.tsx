import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { CookieConsentProvider } from "@/components/providers/CookieConsentProvider";
import { CookieBanner, CookieSettingsButton } from "@/components/shared/CookieBanner";
import { Analytics } from "@/components/analytics";
import JsonLd from "@/components/seo/JsonLd"; // New import
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://onlinekurs.test-it-academy.de'),
  title: {
    default: "ISTQB CTFL 4.0 Online-Kurs + DiTeLe Praxis-Tool | Softwaretester werden",
    template: "%s | Test-IT-Academy"
  },
  description: "Werde zertifizierter Softwaretester in 8 Wochen (neben dem Beruf). 128 Lerneinheiten + 300+ Praxisübungen in DiTeLe. Praxisorientiert. Keine Vorkenntnisse nötig.",
  keywords: [
    "ISTQB CTFL 4.0",
    "Softwaretester werden",
    "ISTQB-Zertifizierung",
    "DiTeLe",
    "Softwaretesten lernen",
    "Weiterbildung IT Quereinsteiger",
    "Test-IT-Academy"
  ],
  authors: [{ name: "Waleri Moretz", url: "https://onlinekurs.test-it-academy.de/impressum" }],
  creator: "WAMOCON Academy GmbH",
  publisher: "WAMOCON Academy GmbH",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Softwaretester werden mit ISTQB CTFL 4.0 + DiTeLe",
    description: "Online-Kurs + 300+ Praxisübungen. Praxisorientiert. Der sichere Weg zum Zertifikat in 8 Wochen.",
    url: 'https://onlinekurs.test-it-academy.de',
    siteName: 'Test-IT-Academy',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg', // Placeholder - User should add this file
        width: 1200,
        height: 630,
        alt: 'ISTQB CTFL 4.0 Online-Kurs Vorschau',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Werde Softwaretester: Theorie + Praxis in einem Kurs",
    description: "Der einzige ISTQB-Kurs mit echtem Praxis-Simulator (DiTeLe).",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`antialiased ${poppins.variable} font-sans`}>
        <JsonLd /> {/* Structured Data */}
        <CookieConsentProvider>
          {/* Analytics - lädt nur bei Einwilligung */}
          <Analytics />

          <div className="print:hidden">
            <Header />
          </div>
          {children}
          <div className="print:hidden">
            <Footer />
          </div>

          {/* Cookie Banner & Settings */}
          <CookieBanner />
          <CookieSettingsButton />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
