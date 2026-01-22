'use client'

import { Button } from '@/components/ui/Button'
import { BookOpen, Code, TrendingUp } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-background-alt text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 11, 0, 0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6 px-6 py-3 bg-accent/20 rounded-full backdrop-blur-sm border border-accent/30 animate-fade-in">
            <span className="text-lg font-semibold">🎓 ISTQB CTFL 4.0 Zertifizierung</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up leading-tight">
            Software-Tester werden – <br />
            Mit Theorie <span className="text-accent">UND</span> Praxis
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-12 text-foreground-muted max-w-3xl mx-auto">
            Online-Kurs + <span className="text-accent font-bold">DiTeLe Praxis-Tool</span> = Dein garantierter Weg zum ISTQB
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <StatCard
              icon={<BookOpen className="w-8 h-8" />}
              title="KURS"
              stats={["128 Lerneinheiten", "7,6h Video", "84 Beispiele"]}
            />
            <StatCard
              icon={<Code className="w-8 h-8" />}
              title="DiTeLe"
              stats={["45+ Praxisübungen", "300+ Fragen", "Hands-on Lernen"]}
              highlight
            />
            <StatCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="ERFOLG"
              stats={["Praxisorientiert", "4 Wochen", "Lifetime Access"]}
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              variant="primary"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white shadow-cta"
              onClick={() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              🎯 Zum Kurs - €497
            </Button>
            <Button
              variant="secondary"
              size="lg"
            >
              📄 Kostenlose ISTQB-Checkliste
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground-muted">
            <TrustBadge text="Sofortiger Zugang zu Kurs + DiTeLe" />
            <TrustBadge text="30-Tage Geld-zurück-Garantie" />
            <TrustBadge text="Kein Abo - Einmalzahlung" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/75 rounded-full" />
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon,
  title,
  stats,
  highlight = false
}: {
  icon: React.ReactNode
  title: string
  stats: string[]
  highlight?: boolean
}) {
  return (
    <div className={`p-6 rounded-lg backdrop-blur-sm border transition-all hover:scale-105 ${
      highlight
        ? 'bg-accent/10 border-accent shadow-lg shadow-accent/20'
        : 'bg-background-card/50 border-border'
    }`}>
      <div className="flex justify-center mb-3 text-accent">{icon}</div>
      <h3 className="font-bold text-lg mb-3">{title}</h3>
      <ul className="space-y-1.5 text-sm text-foreground-muted">
        {stats.map((stat, idx) => (
          <li key={idx}>• {stat}</li>
        ))}
      </ul>
    </div>
  )
}

function TrustBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-accent font-bold">✓</span>
      <span>{text}</span>
    </div>
  )
}
