import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { CookieConsentProvider } from "@/components/providers/CookieConsentProvider";
import { CookieBanner, CookieSettingsButton } from "@/components/shared/CookieBanner";
import { Analytics } from "@/components/analytics";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ISTQB CTFL 4.0 Online-Kurs + DiTeLe Praxis-Tool | Softwaretester werden",
  description: "Werde zertifizierter Softwaretester in 8 Wochen (neben dem Beruf). 128 Lerneinheiten + 300+ Praxisübungen in DiTeLe. Praxisorientiert. Keine Vorkenntnisse nötig.",
  keywords: ["ISTQB CTFL 4.0", "Softwaretester werden", "ISTQB-Zertifizierung", "DiTeLe", "Softwaretesten lernen"],
  openGraph: {
    title: "Softwaretester werden mit ISTQB CTFL 4.0 + DiTeLe",
    description: "Online-Kurs + 300+ Praxisübungen. Praxisorientiert.",
    type: "website",
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
