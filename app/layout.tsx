import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ISTQB CTFL 4.0 Online-Kurs + DiTeLe Praxis-Tool | Software-Tester werden",
  description: "Werde zertifizierter Software-Tester in 4-8 Wochen. 128 Lerneinheiten + 300+ Praxisübungen in DiTeLe. Praxisorientiert. Keine Vorkenntnisse nötig.",
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
      <body className={`antialiased ${poppins.variable} font-sans`}>
        <div className="print:hidden">
          <Header />
        </div>
        {children}
        <div className="print:hidden">
          <Footer />
        </div>
      </body>
    </html>
  );
}
