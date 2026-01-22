import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "ISTQB CTFL 4.0 Online-Kurs + DiTeLe Praxis-Tool | Software-Tester werden",
  description: "Werde zertifizierter Software-Tester in 4 Wochen. 128 Lerneinheiten + 300+ Praxisübungen in DiTeLe. Praxisorientiert. Keine Vorkenntnisse nötig.",
  keywords: ["ISTQB CTFL 4.0", "Software-Tester werden", "ISTQB Zertifizierung", "DiTeLe", "Software Testing lernen"],
  openGraph: {
    title: "Software-Tester werden mit ISTQB CTFL 4.0 + DiTeLe",
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
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
