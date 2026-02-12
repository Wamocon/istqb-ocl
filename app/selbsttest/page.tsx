'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { selbsttestQuestions } from '@/data/selbsttestContent'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { createLead } from '@/lib/api'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { isValidPhoneNumber } from 'react-phone-number-input'

export default function SelbsttestPage() {
    const router = useRouter()
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [answers, setAnswers] = React.useState<Record<number, number>>({})
    const [isCompleted, setIsCompleted] = React.useState(false)

    // Lead capture state
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [consent, setConsent] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState<string | null>(null)

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
            // Show lead capture form instead of redirecting
            setIsCompleted(true)
        }
    }

    const goToPrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1)
        }
    }

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            // Save lead to Supabase
            const lead = await createLead({
                email,
                source: 'selbsttest_completed',
                consent_given: consent,
                consent_text: 'Ich stimme zu, dass meine Email & Nummer für die Zusendung der Ergebnisse und weiterer Informationen (auch per Whatsapp/Anruf) verwendet wird. Abmeldung jederzeit möglich.',
                phone: phone, // Pass the phone number separately if API supports it, or it might be stored in metadata
            })

            const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0)

            // Store lead ID and results in sessionStorage
            if (lead?.id) {
                sessionStorage.setItem('leadId', lead.id)
                sessionStorage.setItem('leadEmail', email)
            }
            sessionStorage.setItem('selbsttestAnswers', JSON.stringify(answers))
            sessionStorage.setItem('selbsttestScore', totalScore.toString())

            setIsLoading(false)
            router.push('/selbsttest/ergebnisse')
        } catch (err: unknown) {
            console.error('Error creating lead:', err)

            // Check for duplicate email error
            if (err && typeof err === 'object' && 'code' in err) {
                const apiError = err as { code: string; message: string }
                if (apiError.code === 'DUPLICATE_EMAIL') {
                    // Even if duplicate, we let them proceed to results, just update context if needed
                    // For now, simpler to just treat as success for the user flow or show specific msg
                    // Let's decide to show error or just proceed. 
                    // Usually for duplicates we might just want to update the existing lead or proceed.
                    // Let's proceed to results to not block returning users.
                    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0)
                    sessionStorage.setItem('leadEmail', email)
                    sessionStorage.setItem('selbsttestAnswers', JSON.stringify(answers))
                    sessionStorage.setItem('selbsttestScore', totalScore.toString())
                    router.push('/selbsttest/ergebnisse')
                    return
                }
            }

            setError('Es ist ein Fehler aufgetreten. Bitte versuche es erneut.')
            setIsLoading(false)
        }
    }

    const question = selbsttestQuestions[currentQuestion]

    if (isCompleted) {
        return (
            <div className="min-h-screen bg-background-alt py-12 md:py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-md mx-auto">
                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4 text-center">Fast geschafft! 🚀</h2>
                            <p className="text-center text-foreground-muted mb-8">
                                Deine Ergebnisse sind berechnet. Wohin sollen wir deine detaillierte Auswertung senden?
                            </p>

                            <form onSubmit={handleLeadSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="lead-email" className="block text-sm font-medium mb-2">
                                        E-Mail Adresse
                                    </label>
                                    <input
                                        type="email"
                                        id="lead-email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        placeholder="deine@email.de"
                                        required
                                    />
                                    {error && (
                                        <p className="text-red-500 text-sm mt-2">{error}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="lead-phone" className="block text-sm font-medium mb-2">
                                        WhatsApp Nummer (für sicheren Versand)
                                    </label>
                                    <div className="phone-input-container">
                                        <PhoneInput
                                            international
                                            defaultCountry="DE"
                                            value={phone}
                                            onChange={(val) => setPhone(val || '')}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus-within:ring-2 focus-within:ring-accent focus-within:border-transparent transition-all"
                                            placeholder="Mobilnummer eingeben"
                                        />
                                    </div>
                                    <p className="text-xs text-foreground-muted mt-1">
                                        Damit deine Auswertung auch sicher ankommt (und nicht im Spam landet).
                                    </p>
                                </div>

                                <div className="bg-accent/5 p-4 rounded-lg border border-accent/10">
                                    <h4 className="font-semibold text-sm mb-2 text-foreground">
                                        Du erhältst:
                                    </h4>
                                    <ul className="text-sm space-y-1.5 text-foreground-muted">
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent flex-shrink-0">✓</span>
                                            <span>Deine persönliche IT-Karriere-Chancen Auswertung</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent flex-shrink-0">✓</span>
                                            <span>Konkrete Handlungsempfehlungen für deinen Einstieg</span>
                                        </li>
                                    </ul>
                                </div>

                                <label className="flex items-start gap-2 text-xs text-foreground-muted cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={consent}
                                        onChange={(e) => setConsent(e.target.checked)}
                                        className="mt-0.5 text-accent focus:ring-accent rounded"
                                        required
                                    />
                                    <span>
                                        Ich stimme zu, dass meine Email & Nummer für die Zusendung der Ergebnisse und weiterer Informationen (auch per Whatsapp/Anruf) verwendet wird.
                                        Abmeldung jederzeit möglich. <a href="/datenschutz" className="text-accent underline" target="_blank">Datenschutz</a>.
                                    </span>
                                </label>

                                <Button
                                    type="submit"
                                    className="w-full bg-accent hover:bg-accent-hover text-white py-4 text-lg"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Wird ausgewertet...' : 'Jetzt Ergebnisse anzeigen'}
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }

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
