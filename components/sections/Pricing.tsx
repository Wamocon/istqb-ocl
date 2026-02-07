'use client'

import * as React from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PurchaseDialog } from '@/components/ui/PurchaseDialog'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Check } from 'lucide-react'

export function Pricing() {
  const [showPurchase, setShowPurchase] = React.useState(false)
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background-red-dark">
      <div className="container mx-auto px-6">
        <PurchaseDialog
          open={showPurchase}
          onOpenChange={setShowPurchase}
          productName="ISTQB CTFL 4.0 KOMPLETT"
          price={497}
        />
        <div className="max-w-5xl mx-auto">
          <ScrollReveal animation="fade-up" width="100%">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
              Investiere in deine IT-Zukunft
            </h2>
            <p className="text-center text-muted text-lg mb-12">
              Alles in einem Paket - Transparente Preise
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={0.2} width="100%">
            <Card className="border-2 border-accent p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white font-bold animate-pulse">
                  🔥 SONDERAKTION: Erste 100 Teilnehmer
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  ISTQB CTFL 4.0 KOMPLETT
                </h3>
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-2xl text-muted line-through">€747</span>
                  <span className="text-5xl md:text-6xl font-bold text-accent">€497</span>
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">-33%</span>
                </div>
                <p className="text-muted">
                  Einmalzahlung oder 5x €100/Monat
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Online-Kurs */}
                <div>
                  <h4 className="font-bold mb-4 text-lg">ONLINE-KURS</h4>
                  <ul className="space-y-3">
                    <FeatureItem>128 Lerneinheiten</FeatureItem>
                    <FeatureItem>7+ Stunden Videomaterial</FeatureItem>
                    <FeatureItem>84 Praxisbeispiele</FeatureItem>
                    <FeatureItem>Flexibler Lernplan (8 Wochen neben dem Beruf)</FeatureItem>
                  </ul>
                </div>

                {/* DiTeLe */}
                <div>
                  <h4 className="font-bold mb-4 text-lg">DiTeLe PRAXIS-TOOL</h4>
                  <ul className="space-y-3">
                    <FeatureItem>45+ interaktive Übungen</FeatureItem>
                    <FeatureItem>300+ Übungsfragen</FeatureItem>

                    <FeatureItem>Progress Tracking</FeatureItem>
                    <FeatureItem>Prüfungssimulation</FeatureItem>
                    <FeatureItem>Web-App (Desktop & Mobile)</FeatureItem>
                  </ul>
                </div>
              </div>

              {/* Bonus */}
              <div className="bg-background-alt p-6 rounded-lg mb-8">
                <h4 className="font-bold mb-4 text-lg">BONUS</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  <FeatureItem>12 Monate Zugriff</FeatureItem>
                  <FeatureItem>Alle zukünftigen Updates</FeatureItem>
                  <FeatureItem>Email-Support</FeatureItem>
                  <FeatureItem>30-Tage Geld-zurück-Garantie*</FeatureItem>
                </div>
              </div>

              {/* Value Stack */}
              <div className="border-t border-border pt-6 mb-8">
                <h4 className="font-bold mb-4 text-center">Wert-Aufschlüsselung:</h4>
                <div className="space-y-2 max-w-sm mx-auto text-muted">
                  <ValueRow label="Online-Kurs allein:" value="€499" />
                  <ValueRow label="DiTeLe-Zugang:" value="€349" />
                  <ValueRow label="Support & Updates:" value="€99" />
                  <div className="border-t border-border my-2" />
                  <ValueRow label="Gesamt-Wert:" value="€947" bold />
                  <ValueRow label="Paketpreis:" value="€747" />
                  <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-2 rounded-lg mt-2">
                    <ValueRow label="🔥 Sonderpreis (erste 100):" value="€497" accent bold />
                  </div>
                </div>
                <p className="text-center mt-4 text-sm font-semibold">
                  <span className="text-accent">Du sparst: €450 (47% Rabatt)</span>
                  <span className="text-muted ml-2">vs. Gesamt-Wert</span>
                </p>
              </div>

              <div className="text-center">
                <Button variant="primary" size="xl" className="bg-accent hover:bg-accent/90 mb-4"
                  onClick={() => setShowPurchase(true)}
                >
                  🔥 JETZT KAUFEN - <span className="line-through opacity-70">€747</span> €497
                </Button>
                <p className="text-sm text-muted">
                  Sichere Zahlung • Sofortiger Zugang • Kein Abo
                </p>
                <p className="text-xs text-muted mt-3">
                  * Bei nicht-bestandener Prüfung mit Nachweis vollständiger Kurs-Durcharbeit
                </p>
              </div>
            </Card>
          </ScrollReveal>

          {/* Comparison Table */}
          <ScrollReveal animation="fade-in" delay={0.4} width="100%">
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-6">
                Vergleich mit Alternativen
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="py-3 px-4 text-left">Feature</th>
                      <th className="py-3 px-4 text-center bg-accent/10 font-bold text-accent">Unser Paket</th>
                      <th className="py-3 px-4 text-center">Präsenz-Seminar</th>
                      <th className="py-3 px-4 text-center">Nur Bücher</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ComparisonRow feature="Preis" ours="€497" presential="€1.300-2.000" books="€50" />
                    <ComparisonRow feature="Theorie" ours="✅ 128 LE" presential="✅ Ja" books="✅ Ja" />
                    <ComparisonRow feature="Praxis (DiTeLe)" ours="✅ 45+ Übungen" presential="❌ Nein" books="❌ Nein" />
                    <ComparisonRow feature="Flexibel" ours="✅ Ja" presential="❌ Nein" books="✅ Ja" />
                    <ComparisonRow feature="Zugriffsdauer" ours="✅ 12 Monate" presential="❌ Seminardauer" books="✅Lebenslang" />
                    <ComparisonRow feature="Erfolgsquote" ours=">87%" presential="~70%" books="Variabel" />
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in" delay={0.6} width="100%">
            <div className="mt-8 text-center">
              <p className="text-lg text-muted">
                <strong className="text-accent">DiTeLe allein gibt es nirgendwo sonst</strong> - das ist dein Vorteil!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  )
}

function ValueRow({
  label,
  value,
  bold = false,
  accent = false
}: {
  label: string
  value: string
  bold?: boolean
  accent?: boolean
}) {
  return (
    <div className="flex justify-between items-center">
      <span className={bold ? 'font-semibold' : ''}>{label}</span>
      <span className={`font-mono ${bold ? 'font-bold text-xl' : ''} ${accent ? 'text-accent' : ''}`}>
        {value}
      </span>
    </div>
  )
}

function ComparisonRow({
  feature,
  ours,
  presential,
  books
}: {
  feature: string
  ours: string
  presential: string
  books: string
}) {
  return (
    <tr className="border-b border-border/50">
      <td className="py-3 px-4 font-semibold">{feature}</td>
      <td className="py-3 px-4 text-center bg-accent/5 font-semibold">{ours}</td>
      <td className="py-3 px-4 text-center text-muted">{presential}</td>
      <td className="py-3 px-4 text-center text-muted">{books}</td>
    </tr>
  )
}
