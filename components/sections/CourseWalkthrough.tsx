'use client'

import * as React from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  BookOpen,
  Video,
  FileText,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface CourseFeature {
  icon: React.ReactNode
  title: string
  description: string
  stat?: string
}

const courseFeatures: CourseFeature[] = [
  {
    icon: <Video className="w-6 h-6" />,
    title: 'Video-Lektionen',
    description: 'Über 7+ Stunden professionell produzierte Erklärvideos',
    stat: '7,6h',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Lerneinheiten',
    description: '128 strukturierte Lerneinheiten decken alle ISTQB® Themen ab',
    stat: '128',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Praxisbeispiele',
    description: '84 realitätsnahe Beispiele für besseres Verständnis',
    stat: '84',
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Checkpoint-Tests',
    description: 'Regelmäßige Wissensüberprüfung nach jedem Modul',
    stat: '6',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '12 Monate Zugriff',
    description: 'Voller Zugriff auf alle Inhalte und Updates für ein ganzes Jahr',
    stat: '∞',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Zertifikatsvorbereitung',
    description: 'Gezielte Vorbereitung auf die offizielle ISTQB® Prüfung',
    stat: '100%',
  },
]

export function CourseWalkthrough() {
  return (
    <section id="course-walkthrough" className="py-16 md:py-24 bg-background-red-dark">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up" width="100%">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block mb-4 px-6 py-2 bg-accent/10 rounded-full">
                <span className="text-accent font-semibold">Der Online-Kurs</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Dein strukturierter Weg zur ISTQB® Zertifizierung
              </h2>
              <p className="text-foreground-muted text-lg max-w-3xl mx-auto">
                128 Lerneinheiten, 7+ Stunden Videos und 84 Praxisbeispiele – alles was du brauchst, um beim ersten Versuch zu bestehen
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Video Player Section */}
              <ScrollReveal animation="slide-right" delay={0.2} width="100%" className="order-2 lg:order-1">
                <div>
                  <Card className="overflow-hidden p-0">
                    {/* Video Placeholder */}
                    <div className="relative aspect-video bg-gradient-to-br from-accent/10 to-accent/5">
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                          <Video className="w-10 h-10 text-accent" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                          Kurs-Walkthrough Video
                        </h3>
                        <p className="text-foreground-muted text-sm text-center max-w-md">
                          Sieh dir an, wie der Kurs aufgebaut ist und was dich in den 128 Lerneinheiten erwartet
                        </p>
                        <p className="text-foreground-muted text-xs mt-4">
                          3:45 Minuten • Video kommt bald
                        </p>
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-6 bg-background-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">Online-Kurs Überblick</h4>
                          <p className="text-sm text-foreground-muted">Strukturiert zum Erfolg</p>
                        </div>
                      </div>
                      <p className="text-sm text-foreground-muted">
                        In diesem Video führen wir dich durch den kompletten Kursaufbau: Von den ersten Grundlagen
                        bis zur Prüfungsvorbereitung. Du siehst die Lernplattform, das Übungssystem und wie du
                        deinen Lernfortschritt trackst.
                      </p>
                    </div>
                  </Card>
                </div>
              </ScrollReveal>

              {/* Features Section */}
              <div className="order-1 lg:order-2">
                <div className="space-y-6">
                  {/* Key Highlights */}
                  <ScrollReveal animation="slide-left" delay={0.2} width="100%">
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                      <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent" />
                        Was dich im Kurs erwartet
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>Alle 6 Kapitel des ISTQB® CTFL 4.0 Lehrplans vollständig abgedeckt</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>Jede Lektion mit Video-Erklärung, Beispielen und Übungen</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>Prüfungssimulation mit 300+ Originalfragen im ISTQB®-Format</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>Flexibel lernen – in deinem eigenen Tempo, wann und wo du willst</span>
                        </li>
                      </ul>
                    </div>
                  </ScrollReveal>

                  {/* Feature Grid */}
                  <div className="grid sm:grid-cols-3 gap-3">
                    {courseFeatures.map((feature, index) => (
                      <ScrollReveal key={index} animation="fade-up" delay={0.3 + index * 0.05} width="100%">
                        <FeatureCard feature={feature} />
                      </ScrollReveal>
                    ))}
                  </div>

                  {/* CTA */}
                  <ScrollReveal animation="fade-up" delay={0.6} width="100%">
                    <div className="pt-4">
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={() => {
                          document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="w-full bg-accent hover:bg-accent-hover"
                      >
                        Jetzt Zugang zum Kurs sichern - <span className="line-through opacity-70">€747</span> €497
                      </Button>
                      <p className="text-center text-xs text-foreground-muted mt-3">
                        Einmalzahlung oder 5x €100/Monat • 12 Monate Zugriff • 30-Tage Geld-zurück-Garantie*
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: CourseFeature }) {
  const [showTooltip, setShowTooltip] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)
  const cardRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setIsMobile('ontouchstart' in window)
  }, [])

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
      className="relative p-4 rounded-xl bg-background-card border border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer group h-full"
      onMouseEnter={!isMobile ? () => setShowTooltip(true) : undefined}
      onMouseLeave={!isMobile ? () => setShowTooltip(false) : undefined}
      onClick={isMobile ? () => setShowTooltip(!showTooltip) : undefined}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
          {feature.icon}
        </div>
        <h4 className="font-semibold text-sm text-foreground">
          {feature.title}
        </h4>
        {feature.stat && (
          <span className="text-accent font-bold text-xl leading-none">
            {feature.stat}
          </span>
        )}
      </div>

      {/* Tooltip */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-[100] transition-all duration-200 ${showTooltip
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
      >
        <div className="px-4 py-3 rounded-xl bg-background-card/95 border border-border/50 backdrop-blur-md shadow-2xl min-w-[200px] max-w-[280px]">
          <p className="text-sm text-foreground-muted leading-relaxed text-center">
            {feature.description}
          </p>

          {/* Arrow pointing down */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-background-card/95 border-r border-b border-border/50" />
        </div>
      </div>
    </div>
  )
}
