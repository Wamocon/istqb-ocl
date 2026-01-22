import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-slate-800 text-white">
      <div className="container mx-auto px-6">
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
            <Card className="bg-background-card text-foreground">
              <div className="mb-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-2">Option 1: Direkt durchstarten</h3>
                <p className="text-muted text-sm">Der schnellste Weg zu deiner IT-Karriere</p>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 mb-6"
              >
                🎯 JETZT KAUFEN - €497
              </Button>

              <ul className="space-y-3 text-sm text-left">
                <CTAFeature>Sofortiger Zugang zu allen 128 Lerneinheiten</CTAFeature>
                <CTAFeature>Voller DiTeLe-Zugang mit 45+ Praxisübungen</CTAFeature>
                <CTAFeature>300+ Übungsfragen + 18 Vertiefungsübungen</CTAFeature>
                <CTAFeature>30-Tage Geld-zurück-Garantie*</CTAFeature>
                <CTAFeature>Lifetime Access - für immer</CTAFeature>
              </ul>

              <div className="mt-6 pt-6 border-t border-border text-xs text-muted text-center">
                Starte in 2 Minuten mit Lektion 1
              </div>
            </Card>

            {/* Option 2: Lead Magnet */}
            <Card className="bg-background-card text-foreground">
              <div className="mb-6">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-2xl font-bold mb-2">Option 2: Erstmal reinschnuppern</h3>
                <p className="text-muted text-sm">Kostenlose Einblicke in ISTQB & DiTeLe</p>
              </div>

              <Button
                variant="secondary"
                size="lg"
                className="w-full mb-6"
              >
                Kostenlose ISTQB-Checkliste
              </Button>

              <div className="text-sm text-left space-y-4">
                <div>
                  <p className="font-semibold mb-2">💡 Du erhältst:</p>
                  <ul className="space-y-2 text-muted">
                    <li>• "Die 10 häufigsten ISTQB-Prüfungsfehler" (PDF)</li>
                    <li>• 3 Bonus-Tipps für deine Prüfungsvorbereitung</li>
                    <li>• Exklusive Einblicke in DiTeLe</li>
                  </ul>
                </div>

                <div className="bg-background-alt p-4 rounded-lg">
                  <input
                    type="email"
                    placeholder="deine@email.de"
                    className="w-full px-4 py-2 border border-border rounded-md mb-3 text-foreground"
                  />
                  <Button variant="tertiary" size="sm" className="w-full">
                    Jetzt herunterladen
                  </Button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border text-xs text-muted text-center">
                Kein Spam - nur wertvolle Tipps
              </div>
            </Card>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-foreground-muted">
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Deine Daten sind sicher (DSGVO)</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💳</span>
              <span>Sichere Zahlung via Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🇩🇪</span>
              <span>Deutscher Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTAFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="text-accent font-bold flex-shrink-0">✅</span>
      <span>{children}</span>
    </li>
  )
}
