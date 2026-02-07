'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { curriculum } from '@/data/curriculum'
import { Check, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Curriculum() {
  const [openWeek, setOpenWeek] = useState<string | null>(null)

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-background-alt">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up" width="100%">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
              Dein 8-Wochen-Plan zum ISTQB-Tester
            </h2>

            <p className="text-center text-muted mb-10">
              ~8 Stunden pro Woche • Flexible Einteilung • 12 Monate Zugriff
            </p>

            {/* Accordion List */}
            <div className="space-y-3">
              {curriculum.map((module, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 0.05} width="100%">
                  <WeekAccordion
                    week={module.week}
                    title={module.title}
                    topics={module.topics}
                    isOpen={openWeek === String(module.week)}
                    onClick={() => setOpenWeek(openWeek === String(module.week) ? null : String(module.week))}
                  />
                </ScrollReveal>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="mt-10">
              <ScrollReveal animation="fade-up" delay={0.3} width="100%">
                <Card className="bg-background/50 backdrop-blur-sm">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <StatBox label="Lerneinheiten" value="128" />
                    <StatBox label="Übungsfragen" value="300+" />
                    <StatBox label="Praxisbeispiele" value="84" />
                    <StatBox label="Checkpoint-Tests" value="6" />
                  </div>
                </Card>
              </ScrollReveal>
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <ScrollReveal animation="fade-up" delay={0.4} width="100%">
                <Button
                  size="xl"
                  className="bg-accent hover:bg-accent-hover text-white shadow-cta hover:shadow-card-hover transition-all duration-300"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Jetzt mit dem 8-Wochen-Plan starten
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function WeekAccordion({
  week,
  title,
  topics,
  isOpen,
  onClick
}: {
  week: string | number
  title: string
  topics: string[]
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="bg-background-card rounded-lg border border-border overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-primary-light transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="bg-accent text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded min-w-[60px] md:min-w-[80px] text-center uppercase tracking-wide">
            WOCHE {week}
          </span>
          <span className="font-semibold">{title}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-5 py-4 border-t border-border bg-background/50">
              <ul className="space-y-2">
                {topics.map((topic, topicIdx) => (
                  <li key={topicIdx} className="flex items-start gap-2 text-sm text-muted">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-bold font-mono text-accent mb-1">{value}</div>
      <div className="text-xs md:text-sm text-muted">{label}</div>
    </div>
  )
}
