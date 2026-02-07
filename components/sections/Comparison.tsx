'use client'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Check, X, Info } from 'lucide-react'

export function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-background-alt relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up" width="100%">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Warum andere Lernmethoden scheitern
            </h2>
            <p className="text-muted text-lg md:text-xl">
              Vergleiche selbst: Selbststudium vs. Präsenz-Seminar vs. Unser System
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Selbststudium */}
          <ScrollReveal animation="fade-up" delay={0.2} className="h-full" width="100%">
            <div className="relative h-full p-8 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm flex flex-col hover:bg-white/[0.05] transition-colors">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Nicht empfohlen
                </span>
              </div>
              <div className="text-center mb-8 mt-4">
                <h3 className="text-xl font-bold mb-2">Selbststudium</h3>
                <p className="text-muted text-sm">reines Buchstudium</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <ComparisonItem icon="negative" text="300+ Seiten trockene Theorie" />
                <ComparisonItem icon="negative" text="Keine praktischen Übungen" />
                <ComparisonItem icon="negative" text="Niedrigere Erfolgsquote" />
                <ComparisonItem icon="negative" text="4-6 Monate Zeitaufwand" />
                <ComparisonItem icon="negative" text="Auf dich allein gestellt" />
              </ul>
              <div className="text-center pt-6 border-t border-white/10 mt-auto">
                <p className="text-sm text-muted">Kosten: ~€50</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Präsenz-Seminar */}
          <ScrollReveal animation="fade-up" delay={0.3} className="h-full" width="100%">
            <div className="relative h-full p-8 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm flex flex-col hover:bg-white/[0.05] transition-colors">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Teuer & unflexibel
                </span>
              </div>
              <div className="text-center mb-8 mt-4">
                <h3 className="text-xl font-bold mb-2">Präsenz-Seminar</h3>
                <p className="text-muted text-sm">3-5 Tage Intensivkurs</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <ComparisonItem icon="negative" text="€1.300-2.000 Kosten" />
                <ComparisonItem icon="negative" text="Urlaub nötig (3-5 Tage)" />
                <ComparisonItem icon="negative" text="Überforderung durch Tempo" />
                <ComparisonItem icon="negative" text="Kein späteres Nachschlagen" />
                <ComparisonItem icon="negative" text="Wenig echte Praxis" />
              </ul>
              <div className="text-center pt-6 border-t border-white/10 mt-auto">
                <p className="text-sm text-muted">Erfolgsquote: ~70%</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Unser System */}
          <ScrollReveal animation="scale-up" delay={0.4} className="h-full" width="100%">
            <div className="relative h-full p-8 rounded-2xl bg-accent/5 border border-accent/30 backdrop-blur-sm flex flex-col shadow-[0_8px_30px_rgba(254,4,4,0.15)] transform md:-translate-y-4 z-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg shadow-accent/20">
                  Empfohlene Wahl
                </span>
              </div>
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold mb-2 text-accent">Unser System</h3>
                <p className="text-foreground-muted text-sm">Online-Kurs + DiTeLe App</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <ComparisonItem icon="positive" text="128 Lerneinheiten strukturiert" highlight />
                <ComparisonItem icon="positive" text="45+ Praxisübungen in DiTeLe" highlight />
                <ComparisonItem icon="positive" text="Erfolgsquote: 87% (Nachweisbar)" highlight />
                <ComparisonItem icon="positive" text="Flexible 8 Wochen (2h/Woche)" highlight />
                <ComparisonItem icon="positive" text="12 Monate Zugriff & Updates" highlight />
              </ul>
              <div className="text-center pt-6 border-t border-accent/20 mt-auto">
                <p className="text-lg font-bold mb-4">Investition: <span className="line-through text-muted">€747</span> <span className="text-accent">€497</span></p>
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-accent hover:bg-accent-hover w-full shadow-[0_4px_20px_rgba(254,4,4,0.3)] hover:shadow-[0_4px_25px_rgba(254,4,4,0.4)]"
                  onClick={() => {
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Jetzt durchstarten
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-in" delay={0.6} width="100%">
          <div className="mt-16 text-center bg-white/[0.02] border border-white/5 rounded-xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Mit unserem System sparst du <span className="text-accent font-bold">bis zu €1.500</span> gegenüber Seminaren und profitierst von <span className="text-accent font-bold">praxisorientiertem Lernen</span> für höhere Erfolgschancen.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function ComparisonItem({ icon, text, highlight = false }: { icon: 'positive' | 'negative', text: string, highlight?: boolean }) {
  return (
    <li className={`flex items-start gap-3 text-[15px] ${highlight ? 'text-white font-medium' : 'text-muted'}`}>
      {icon === 'positive' ? (
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
          <Check className="w-3.5 h-3.5 text-accent" />
        </div>
      ) : (
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
          <X className="w-3.5 h-3.5 text-red-500/70" />
        </div>
      )}
      <span>{text}</span>
    </li>
  )
}
