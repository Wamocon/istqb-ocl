'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { QuizQuestion } from '@/types'

const demoQuestion: QuizQuestion = {
  id: 1,
  text: "Was ist der Hauptzweck des Softwaretestens?",
  options: [
    { id: 'a', text: 'Fehler finden', correct: false },
    { id: 'b', text: 'Qualität bewerten', correct: false },
    { id: 'c', text: 'Anforderungen validieren', correct: false },
    { id: 'd', text: 'Alle oben genannten', correct: true },
  ]
}

export function DiTeleDemo() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleAnswer = (optionId: string) => {
    setSelectedAnswer(optionId)
    setShowFeedback(true)
  }

  const isCorrect = demoQuestion.options.find(o => o.id === selectedAnswer)?.correct

  return (
    <section id="ditele-demo" className="py-16 md:py-24 bg-background-alt">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up" width="100%">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Probiere DiTeLe kostenlos aus
              </h2>
              <p className="text-lg text-foreground-muted">
                💡 Erlebe, wie du mit DiTeLe echte Praxiserfahrung aufbaust
              </p>
            </div>

            <Card>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-foreground-muted">🎮 LIVE-DEMO: DiTeLe Praxisübung</span>
                  <span className="font-mono font-semibold text-foreground">Frage 1 von 316</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-6">{demoQuestion.text}</h3>

                <div className="space-y-3">
                  {demoQuestion.options.map((option) => {
                    const isSelected = selectedAnswer === option.id
                    const showCorrect = showFeedback && option.correct
                    const showWrong = showFeedback && isSelected && !option.correct

                    return (
                      <motion.button
                        key={option.id}
                        onClick={() => !showFeedback && handleAnswer(option.id)}
                        disabled={showFeedback}
                        className={`
                        w-full p-4 text-left border-2 rounded-lg transition-all duration-200 font-medium
                        ${showCorrect
                            ? 'border-green-500 bg-green-900/20 text-green-300'
                            : showWrong
                              ? 'border-red-500 bg-red-900/20 text-red-300'
                              : isSelected
                                ? 'border-accent bg-accent/5 text-foreground'
                                : showFeedback && option.correct
                                  ? 'border-green-500 bg-green-900/20 text-green-300'
                                  : 'border-border hover:border-accent/50 hover:bg-primary-light text-foreground'
                          }
                        ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}
                      `}
                        whileHover={!showFeedback ? { scale: 1.02 } : {}}
                        whileTap={!showFeedback ? { scale: 0.98 } : {}}
                      >
                        <span className={`font-mono mr-3 font-bold ${showCorrect || (showFeedback && option.correct) ? 'text-green-400' : showWrong ? 'text-red-400' : ''}`}>
                          {option.id.toUpperCase()})
                        </span>
                        {option.text}
                        {(showCorrect || (showFeedback && option.correct)) && <span className="ml-2 text-green-400 font-bold">✓</span>}
                        {showWrong && <span className="ml-2 text-red-400 font-bold">✗</span>}
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`
                  p-6 rounded-lg border-l-4
                  ${isCorrect
                      ? 'bg-accent/10 border-accent text-white'
                      : 'bg-red-900/20 border-red-500 text-red-300'
                    }
                `}
                >
                  <p className={`font-bold mb-2 text-lg ${isCorrect ? 'text-accent' : 'text-red-400'}`}>
                    {isCorrect ? '✅ Richtig!' : '❌ Nicht ganz.'}
                  </p>
                  <p className={`text-sm mb-4 ${isCorrect ? 'text-foreground-muted' : 'text-red-200'}`}>
                    {isCorrect
                      ? 'Genau! Software-Testing dient allen drei Zwecken: Fehler finden, Qualität bewerten UND Anforderungen validieren. Das lernst du in Lerneinheit 1 von 128.'
                      : 'Die richtige Antwort ist D - "Alle oben genannten". Software-Testing ist mehr als nur Fehler finden! In Modul 1 "Grundlagen des Testens" erklären wir das im Detail.'
                    }
                  </p>

                  <div className="bg-background-card p-4 rounded">
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span className="text-foreground-muted">Dein Fortschritt</span>
                      <span className="font-mono font-semibold text-foreground">1/316 (0.3%)</span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-accent"
                        initial={{ width: 0 }}
                        animate={{ width: '0.3%' }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="mt-8 text-center">
                <p className="text-foreground-muted mb-4 text-sm">
                  🎯 Das ist Übung 1 von 45+ in DiTeLe
                </p>
                <p className="text-foreground mb-6 font-medium">
                  💬 Mit DiTeLe lernst du nicht nur ÜBER Software-Testing - <br className="hidden md:block" />
                  <span className="text-accent font-bold">du MACHST Software-Testing.</span>
                </p>
                <Button variant="primary" size="lg" className="bg-accent hover:bg-accent/90">
                  Alle 45+ Übungen in DiTeLe freischalten
                </Button>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
