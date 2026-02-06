'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { selbsttestQuestions } from '@/data/selbsttestContent'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function SelbsttestPage() {
    const router = useRouter()
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [answers, setAnswers] = React.useState<Record<number, number>>({})
    const [isCompleted, setIsCompleted] = React.useState(false)

    const totalQuestions = selbsttestQuestions.length
    const progress = ((currentQuestion + 1) / totalQuestions) * 100

    const handleAnswer = (value: number) => {
        setAnswers(prev => ({
            ...prev,
            [selbsttestQuestions[currentQuestion].id]: value
        }))
    }

    const currentAnswer = answers[selbsttestQuestions[currentQuestion]?.id]

    const goToNext = () => {
        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion(prev => prev + 1)
        } else {
            // Complete the test and redirect to results
            const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0)
            // Store answers in sessionStorage for the results page
            sessionStorage.setItem('selbsttestAnswers', JSON.stringify(answers))
            sessionStorage.setItem('selbsttestScore', totalScore.toString())
            router.push('/selbsttest/ergebnisse')
        }
    }

    const goToPrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1)
        }
    }

    const question = selbsttestQuestions[currentQuestion]

    return (
        <div className="min-h-screen bg-background-alt py-12 md:py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold mb-3">
                            IT-Karriere-Selbsttest 2026
                        </h1>
                        <p className="text-foreground-muted">
                            9 Fragen, die entscheiden, ob du bereit bist für deinen Durchbruch in der IT
                        </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex justify-between text-sm text-foreground-muted mb-2">
                            <span>Frage {currentQuestion + 1} von {totalQuestions}</span>
                            <span>{Math.round(progress)}%</span>
                        </div>
                        <div className="h-2 bg-border rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-accent"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </div>

                    {/* Question Card */}
                    <Card className="p-8 mb-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQuestion}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-lg md:text-xl font-medium mb-8 text-center">
                                    „{question.question}"
                                </p>

                                {/* Rating Scale */}
                                <div className="mb-6">
                                    <div className="flex justify-between text-sm text-foreground-muted mb-4">
                                        <span>Trifft gar nicht zu</span>
                                        <span>Trifft voll zu</span>
                                    </div>

                                    <div className="flex justify-between gap-2">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <button
                                                key={value}
                                                onClick={() => handleAnswer(value)}
                                                className={`
                          flex-1 py-4 rounded-lg font-bold text-lg transition-all duration-200
                          ${currentAnswer === value
                                                        ? 'bg-accent text-white scale-105 shadow-lg'
                                                        : 'bg-background-card border border-border hover:border-accent/50 hover:bg-accent/5'
                                                    }
                        `}
                                            >
                                                {value}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Help Text */}
                                <p className="text-center text-sm text-foreground-muted">
                                    Bewerte dich ehrlich auf einer Skala von 1-5
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </Card>

                    {/* Navigation */}
                    <div className="flex justify-between gap-4">
                        <Button
                            variant="secondary"
                            onClick={goToPrevious}
                            disabled={currentQuestion === 0}
                            className="flex items-center gap-2"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Zurück
                        </Button>

                        <Button
                            variant="primary"
                            onClick={goToNext}
                            disabled={!currentAnswer}
                            className="flex items-center gap-2 bg-accent hover:bg-accent-hover"
                        >
                            {currentQuestion === totalQuestions - 1 ? 'Auswertung anzeigen' : 'Weiter'}
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Question Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {selbsttestQuestions.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentQuestion(idx)}
                                className={`
                  w-3 h-3 rounded-full transition-all duration-200
                  ${idx === currentQuestion
                                        ? 'bg-accent scale-125'
                                        : answers[selbsttestQuestions[idx].id]
                                            ? 'bg-accent/50'
                                            : 'bg-border'
                                    }
                `}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
