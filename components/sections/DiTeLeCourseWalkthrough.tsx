'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  Code,
  Target,
  Zap,
  CheckCircle,
  TrendingUp,
  Users,
  Brain,
  Repeat
} from 'lucide-react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface DiTeLeFeature {
  icon: React.ReactNode
  title: string
  description: string
  benefit: string
}

const diteleFeatures: DiTeLeFeature[] = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Praxisübungen',
    description: '45+ realistische Testszenarien',
    benefit: 'Echte Projekterfahrung sammeln',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Learning by Doing',
    description: 'Interaktives Lernen statt passives Zuschauen',
    benefit: '3x bessere Wissensretention',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Instant Feedback',
    description: 'Sofortige Rückmeldung zu deinen Lösungen',
    benefit: 'Fehler sofort verstehen & korrigieren',
  },
  {
    icon: <Repeat className="w-6 h-6" />,
    title: 'Wiederholbar',
    description: 'Unbegrenzt oft üben bis es sitzt',
    benefit: 'Perfektioniere deine Fähigkeiten',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Prüfungssimulation',
    description: '300+ Fragen im Originalformat',
    benefit: 'Optimal auf die Prüfung vorbereitet',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Fortschritts-Tracking',
    description: 'Detaillierte Analyse deiner Stärken',
    benefit: 'Gezielt Schwächen verbessern',
  },
]

const diTeleCapabilities = [
  'Testfälle erstellen und bewerten',
  'Fehlerberichte nach IEEE 829 schreiben',
  'Testplanung und -strategie entwickeln',
  'Risikobasiertes Testen anwenden',
  'Review-Prozesse durchführen',
  'Äquivalenzklassen identifizieren',
]

export function DiTeLeCourseWalkthrough() {
  return (
    <section id="ditele-walkthrough" className="py-16 md:py-24 bg-background-alt">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up" width="100%">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block mb-4 px-6 py-2 bg-accent/10 rounded-full">
                <span className="text-accent font-semibold">Das DiTeLe Praxis-Tool</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Theorie in die Praxis umsetzen – mit echten Testszenarien
              </h2>
              <p className="text-foreground-muted text-lg max-w-3xl mx-auto">
                Das fehlende Puzzleteil: 45+ interaktive Übungen, die dich auf reale Projekte vorbereiten
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Features Section - Left */}
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  {/* Problem Statement */}
                  <ScrollReveal animation="slide-right" delay={0.2} width="100%">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-red-500" />
                        Das Problem mit reiner Theorie
                      </h3>
                      <p className="text-sm text-foreground-muted mb-3">
                        66% der Kandidaten scheitern, weil sie Konzepte auswendig lernen, aber nicht <strong>anwenden</strong> können.
                        In der Prüfung werden realitätsnahe Szenarien abgefragt – keine Definitionen.
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        DiTeLe schließt genau diese Lücke zwischen Wissen und Können.
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* What You Can Do */}
                  <ScrollReveal animation="fade-in" delay={0.3} width="100%">
                    <div>
                      <h3 className="font-bold text-foreground mb-4">Was du in DiTeLe lernst:</h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {diTeleCapabilities.map((capability, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-foreground-muted">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    {diteleFeatures.map((feature, index) => (
                      <ScrollReveal key={index} animation="fade-up" delay={0.4 + index * 0.05} width="100%">
                        <Card className="p-4 hover:border-accent/50 transition-colors h-full">
                          <div className="flex flex-col gap-3">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                              {feature.icon}
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-semibold text-sm text-foreground mb-1">
                                {feature.title}
                              </h4>
                              <p className="text-xs text-foreground-muted mb-1 leading-snug">
                                {feature.description}
                              </p>
                              <p className="text-xs text-accent font-medium">
                                → {feature.benefit}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </ScrollReveal>
                    ))}
                  </div>

                  {/* CTA */}
                  <ScrollReveal animation="fade-up" delay={0.8} width="100%">
                    <div className="pt-4">
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={() => {
                          document.getElementById('ditele-demo')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="w-full bg-accent hover:bg-accent-hover"
                      >
                        🎯 DiTeLe kostenlos testen
                      </Button>
                      <p className="text-center text-xs text-foreground-muted mt-3">
                        Probiere eine Demo-Übung aus • Keine Anmeldung erforderlich
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* Video Player Section - Right */}
              <ScrollReveal animation="slide-left" delay={0.2} width="100%" className="order-1 lg:order-2">
                <div>
                  <Card className="overflow-hidden p-0">
                    {/* Video Placeholder */}
                    <div className="relative aspect-video bg-black">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/FQ8dXuBDzb0?rel=0"
                        title="DiTeLe - Die Lernplattform für Softwaretester"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>

                    {/* Video Info */}
                    <div className="p-6 bg-background-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Code className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">DiTeLe in Aktion</h4>
                          <p className="text-sm text-foreground-muted">Praxisorientiertes Lernen</p>
                        </div>
                      </div>
                      <p className="text-sm text-foreground-muted">
                        In diesem Video zeigen wir dir, wie du mit DiTeLe arbeitest: Von der ersten Übung
                        bis zur Prüfungssimulation. Du siehst, wie das Feedback-System funktioniert und
                        wie du deinen Fortschritt verfolgst.
                      </p>
                    </div>
                  </Card>

                  {/* Stats Below Video */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-1">45+</div>
                      <div className="text-xs text-foreground-muted">Übungen</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-1">300+</div>
                      <div className="text-xs text-foreground-muted">Fragen</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-1">∞</div>
                      <div className="text-xs text-foreground-muted">Wiederholungen</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
