'use client'

import * as React from 'react'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { BookOpen, Code, TrendingUp } from 'lucide-react'
import { LeadMagnetDialog } from '@/components/ui/LeadMagnetDialog'
import { PurchaseDialog } from '@/components/ui/PurchaseDialog'

export function Hero() {
  const [showLeadMagnet, setShowLeadMagnet] = React.useState(false)

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-background-red-dark text-white overflow-hidden">
      <LeadMagnetDialog
        open={showLeadMagnet}
        onOpenChange={setShowLeadMagnet}
      />

      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.2) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <ScrollReveal animation="fade-in" delay={0.1} width="100%">
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm text-accent-light shadow-[0_0_20px_rgba(254,4,4,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm font-bold tracking-wide uppercase">ISTQB CTFL 4.0 Zertifizierung</span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal animation="fade-up" delay={0.2} width="100%">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Softwaretester werden – <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                Mit Theorie
              </span>{' '}
              <span className="text-accent inline-block transform hover:scale-105 transition-transform duration-300">UND</span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                Praxis
              </span>
            </h1>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal animation="fade-up" delay={0.3} width="100%">
            <p className="text-xl md:text-2xl mb-12 text-foreground-muted max-w-3xl mx-auto leading-relaxed">
              Online-Kurs + <span className="text-white font-semibold border-b-2 border-accent/50">DiTeLe Praxis-Tool</span> = Dein garantierter Weg zum ISTQB® Certified Tester.
            </p>
          </ScrollReveal>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <ScrollReveal animation="scale-up" delay={0.4} className="h-full" width="100%">
              <StatCard
                icon={<BookOpen className="w-8 h-8" />}
                title="KURS"
                stats={["128 Lerneinheiten", "7,6h Video", "84 Beispiele"]}
              />
            </ScrollReveal>
            <ScrollReveal animation="scale-up" delay={0.5} className="h-full" width="100%">
              <StatCard
                icon={<Code className="w-8 h-8" />}
                title="DiTeLe"
                stats={["45+ Praxisübungen", "300+ Fragen", "Hands-on Lernen"]}
                highlight
              />
            </ScrollReveal>
            <ScrollReveal animation="scale-up" delay={0.6} className="h-full" width="100%">
              <StatCard
                icon={<TrendingUp className="w-8 h-8" />}
                title="ERFOLG"
                stats={["Praxisorientiert", "4-8 Wochen", "12 Monate Zugriff"]}
              />
            </ScrollReveal>
          </div>

          {/* CTAs */}
          <ScrollReveal animation="fade-up" delay={0.7} width="100%">
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
              <Button
                variant="primary"
                size="xl"
                className="bg-accent hover:bg-accent-hover text-white shadow-cta hover:shadow-card-hover transform hover:-translate-y-1 transition-all duration-300 text-lg px-10 py-6"
                onClick={() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Zum Kurs - €497
              </Button>
              <Button
                variant="secondary"
                size="xl"
                className="bg-background-card border-border hover:bg-background-alt text-lg px-10 py-6"
                onClick={() => setShowLeadMagnet(true)}
              >
                Kostenloser Karriere Check
              </Button>
            </div>
          </ScrollReveal>

          {/* Trust Elements */}
          <ScrollReveal animation="fade-in" delay={0.9} width="100%">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-foreground-muted/80">
              <TrustBadge text="Sofortiger Zugang zu Kurs + DiTeLe" />
              <TrustBadge text="30-Tage Geld-zurück-Garantie" />
              <TrustBadge text="Kein Abo - Einmalzahlung" />
            </div>
          </ScrollReveal>
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
  const [showTooltip, setShowTooltip] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)
  const cardRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setIsMobile('ontouchstart' in window)
  }, [])

  // Close on outside click (mobile)
  React.useEffect(() => {
    if (!isMobile || !showTooltip) return

    const handleOutsideClick = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setShowTooltip(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [isMobile, showTooltip])

  return (
    <div
      ref={cardRef}
      className={`relative h-full p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-[1.02] flex flex-col items-center text-center group cursor-pointer ${highlight
        ? 'bg-accent/5 border-accent/30 shadow-card hover:shadow-card-hover'
        : 'bg-white/[0.03] border-white/5 hover:bg-white/[0.06] hover:border-white/10'
        }`}
      onMouseEnter={!isMobile ? () => setShowTooltip(true) : undefined}
      onMouseLeave={!isMobile ? () => setShowTooltip(false) : undefined}
      onClick={isMobile ? () => setShowTooltip(!showTooltip) : undefined}
    >
      <div className={`mb-5 p-4 rounded-xl ${highlight ? 'bg-accent/10 text-accent' : 'bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10'} transition-colors`}>
        {icon}
      </div>
      <h3 className="font-bold text-xl tracking-wide">{title}</h3>

      {/* Tooltip - appears above the card */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-[100] transition-all duration-200 ${showTooltip
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
      >
        <div className={`px-5 py-4 rounded-xl border backdrop-blur-md shadow-2xl min-w-[180px] ${highlight
          ? 'bg-background-red-dark/95 border-accent/30'
          : 'bg-background-card/95 border-border/50'
          }`}>
          <ul className="space-y-2.5 text-sm text-foreground-muted relative z-10">
            {stats.map((stat, idx) => (
              <li key={idx} className="flex items-center gap-2.5 whitespace-nowrap">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${highlight ? 'bg-accent' : 'bg-gray-500'}`} />
                <span className="text-white/90">{stat}</span>
              </li>
            ))}
          </ul>

          {/* Arrow pointing down */}
          <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-r border-b ${highlight
            ? 'bg-background-red-dark/95 border-accent/30'
            : 'bg-background-card/95 border-border/50'
            }`} />
        </div>
      </div>
    </div>
  )
}

function TrustBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05]">
      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/20">
        <span className="text-accent text-xs font-bold">✓</span>
      </div>
      <span>{text}</span>
    </div>
  )
}
