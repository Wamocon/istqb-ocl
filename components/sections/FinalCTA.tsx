'use client'

import * as React from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PurchaseDialog } from '@/components/ui/PurchaseDialog'
import { LeadMagnetDialog } from '@/components/ui/LeadMagnetDialog'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function FinalCTA() {
  const [showPurchase, setShowPurchase] = React.useState(false)
  const [showLeadMagnet, setShowLeadMagnet] = React.useState(false)

  return (
    <section className="py-16 md:py-24 bg-background-red-dark text-white">
      <PurchaseDialog
        open={showPurchase}
        onOpenChange={setShowPurchase}
        productName="ISTQB CTFL 4.0 KOMPLETT"
        price={497}
      />
      <LeadMagnetDialog
        open={showLeadMagnet}
        onOpenChange={setShowLeadMagnet}
      />
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up" width="100%">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Deine Entscheidung: <br className="hidden md:block" />
              IT-Karriere starten oder weiter warten?
            </h2>
            <p className="text-xl text-foreground-muted mb-12">
              Hunderte haben bereits den Schritt gewagt. Was hält dich noch zurück?
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Option 1: Direct Purchase */}
              <ScrollReveal animation="scale-up" delay={0.2}>
                <Card className="bg-background-card text-foreground h-full">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">Option 1: Direkt durchstarten</h3>
                    <p className="text-muted text-sm">Der schnellste Weg zu deiner IT-Karriere</p>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 mb-6"
                    onClick={() => setShowPurchase(true)}
                  >
                    JETZT KAUFEN - €497
                  </Button>

                  <ul className="space-y-3 text-sm text-left">
                    <CTAFeature>Sofortiger Zugang zu allen 128 Lerneinheiten</CTAFeature>
                    <CTAFeature>Voller DiTeLe-Zugang mit 45+ Praxisübungen</CTAFeature>
                    <CTAFeature>300+ Übungsfragen + 18 Vertiefungsübungen</CTAFeature>
                    <CTAFeature>30-Tage Geld-zurück-Garantie*</CTAFeature>
                    <CTAFeature>Lifetime Access - für immer</CTAFeature>
                  </ul>

                  <div className="mt-6 pt-6 border-t border-border text-xs text-muted text-center mt-auto">
                    Starte in 2 Minuten mit Lektion 1
                  </div>
                </Card>
              </ScrollReveal>

              {/* Option 2: Lead Magnet */}
              <ScrollReveal animation="scale-up" delay={0.3}>
                <Card className="bg-background-card text-foreground h-full">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">Option 2: Erstmal reinschnuppern</h3>
                    <p className="text-muted text-sm">Kostenlose Einblicke in ISTQB & DiTeLe</p>
                  </div>

                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full mb-6"
                    onClick={() => setShowLeadMagnet(true)}
                  >
                    Kostenlose ISTQB-Checkliste
                  </Button>

                  <div className="text-sm text-left space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Du erhältst:</p>
                      <ul className="space-y-2 text-muted">
                        <li>• "Die 10 häufigsten ISTQB-Prüfungsfehler" (PDF)</li>
                        <li>• 3 Bonus-Tipps für deine Prüfungsvorbereitung</li>
                        <li>• Exklusive Einblicke in DiTeLe</li>
                      </ul>
                    </div>

                    <div className="bg-background-alt/50 p-4 rounded-lg">
                      <p className="text-sm mb-3">Sichere dir jetzt deinen Vorteil:</p>
                      <Button
                        variant="tertiary"
                        size="sm"
                        className="w-full"
                        onClick={() => setShowLeadMagnet(true)}
                      >
                        📥 Jetzt kostenlos anfordern
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border text-xs text-muted text-center mt-auto">
                    Kein Spam - nur wertvolle Tipps
                  </div>
                </Card>
              </ScrollReveal>
            </div>

            {/* Trust Signals */}
            <ScrollReveal animation="fade-in" delay={0.5} width="100%">
              <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-foreground-muted">
                <span>Deine Daten sind sicher (DSGVO)</span>
                <span>•</span>
                <span>Sichere Zahlung via Stripe</span>
                <span>•</span>
                <span>Deutscher Support</span>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function CTAFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="text-accent font-bold flex-shrink-0">✓</span>
      <span>{children}</span>
    </li>
  )
}
