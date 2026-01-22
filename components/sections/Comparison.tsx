import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { X, Check } from 'lucide-react'

export function Comparison() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Warum andere Lernmethoden scheitern
          </h2>
          <p className="text-center text-muted text-lg mb-12">
            Vergleiche selbst: Selbststudium vs. Präsenz-Seminar vs. Unser System
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Selbststudium */}
            <Card className="relative">
              <div className="absolute -top-3 left-4">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Nicht empfohlen
                </span>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-2">Selbststudium</h3>
                <p className="text-muted text-sm">mit Büchern</p>
              </div>
              <ul className="space-y-3 mb-6">
                <ComparisonItem icon="negative" text="300+ Seiten trockene Theorie" />
                <ComparisonItem icon="negative" text="Keine praktischen Übungen" />
                <ComparisonItem icon="negative" text="Erfolgsquote: ~34%" />
                <ComparisonItem icon="negative" text="4-6 Monate Zeitaufwand" />
                <ComparisonItem icon="negative" text="Auf dich allein gestellt" />
              </ul>
              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted">Kosten: ~€50</p>
              </div>
            </Card>

            {/* Präsenz-Seminar */}
            <Card className="relative">
              <div className="absolute -top-3 left-4">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Teuer & unflexibel
                </span>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-2">Präsenz-Seminar</h3>
                <p className="text-muted text-sm">3-5 Tage</p>
              </div>
              <ul className="space-y-3 mb-6">
                <ComparisonItem icon="negative" text="€800-1500 Kosten" />
                <ComparisonItem icon="negative" text="Urlaub nötig (3-5 Tage)" />
                <ComparisonItem icon="negative" text="Kein Nachschlagen möglich" />
                <ComparisonItem icon="negative" text="Überforderung durch Tempo" />
                <ComparisonItem icon="negative" text="Keine Praxiserfahrung" />
              </ul>
              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted">Erfolgsquote: ~70%</p>
              </div>
            </Card>

            {/* Unser System */}
            <Card className="relative border-2 border-accent shadow-lg">
              <div className="absolute -top-3 left-4">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ⭐ Empfohlen
                </span>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-2 text-accent">Unser System</h3>
                <p className="text-muted text-sm">Kurs + DiTeLe</p>
              </div>
              <ul className="space-y-3 mb-6">
                <ComparisonItem icon="positive" text="128 Lerneinheiten strukturiert" />
                <ComparisonItem icon="positive" text="45+ Praxisübungen in DiTeLe" />
                <ComparisonItem icon="positive" text="Erfolgsquote: 87%" />
                <ComparisonItem icon="positive" text="8 Wochen (2h/Woche)" />
                <ComparisonItem icon="positive" text="Lifetime Access" />
              </ul>
              <div className="text-center pt-4 border-t border-accent/30">
                <p className="text-sm font-semibold mb-4">Kosten: €299</p>
                <Button variant="primary" size="sm" className="bg-accent hover:bg-accent/90 w-full">
                  Jetzt starten
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted mb-4">
              💡 Mit unserem System sparst du <span className="text-accent font-bold">mindestens €500</span> <br className="hidden md:block" />
              und hast <span className="text-accent font-bold">2,5x höhere Erfolgschancen</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ComparisonItem({ icon, text }: { icon: 'positive' | 'negative', text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      {icon === 'positive' ? (
        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
      ) : (
        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
      )}
      <span>{text}</span>
    </li>
  )
}
