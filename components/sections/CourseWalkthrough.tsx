'use client'

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
    description: 'Über 7,6 Stunden professionell produzierte Erklärvideos',
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
    stat: '8',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Lifetime Access',
    description: 'Lebenslanger Zugriff auf alle Inhalte und Updates',
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
    <section id="course-walkthrough" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
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
              128 Lerneinheiten, 7,6 Stunden Videos und 84 Praxisbeispiele – alles was du brauchst, um beim ersten Versuch zu bestehen
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Video Player Section */}
            <div className="order-2 lg:order-1">
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

            {/* Features Section */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                {/* Key Highlights */}
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

                {/* Feature Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {courseFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-4 hover:border-accent/50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                            {feature.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <h4 className="font-semibold text-sm text-foreground">
                                {feature.title}
                              </h4>
                              {feature.stat && (
                                <span className="text-accent font-bold text-lg">
                                  {feature.stat}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-foreground-muted leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="w-full bg-accent hover:bg-accent-hover"
                  >
                    🎓 Jetzt Zugang zum Kurs sichern - €497
                  </Button>
                  <p className="text-center text-xs text-foreground-muted mt-3">
                    Einmalzahlung oder 5x €100/Monat • Lifetime Access • 30-Tage Geld-zurück-Garantie*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
