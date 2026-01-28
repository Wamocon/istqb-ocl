'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import {
    selbsttestQuestions,
    selbsttestResults,
    successStoriesShort,
    itMarketStats2026,
    diteleFeatures,
    successFactors
} from '@/data/selbsttestContent'
import { Printer, Download, Check, ArrowRight, Play } from 'lucide-react'
import { createLead, saveSelbsttestResult } from '@/lib/api'

export default function ErgebnissePage() {
    const router = useRouter()
    const [score, setScore] = React.useState<number | null>(null)
    const [answers, setAnswers] = React.useState<Record<number, number>>({})
    const [email, setEmail] = React.useState('')
    const [consent, setConsent] = React.useState(false)
    const [emailSubmitted, setEmailSubmitted] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState<string | null>(null)
    const [resultSaved, setResultSaved] = React.useState(false)

    React.useEffect(() => {
        // Get score and answers from sessionStorage
        const storedScore = sessionStorage.getItem('selbsttestScore')
        const storedAnswers = sessionStorage.getItem('selbsttestAnswers')

        if (storedScore && storedAnswers) {
            const parsedScore = parseInt(storedScore)
            const parsedAnswers = JSON.parse(storedAnswers)
            setScore(parsedScore)
            setAnswers(parsedAnswers)

            // Save result to Supabase if not already saved
            const leadId = sessionStorage.getItem('leadId')
            const leadEmail = sessionStorage.getItem('leadEmail')

            if (!resultSaved) {
                // Determine level based on score
                let level: 'starter' | 'fortgeschritten' | 'ready' = 'starter'
                if (parsedScore >= 33) level = 'ready'
                else if (parsedScore >= 19) level = 'fortgeschritten'

                // Save to Supabase
                saveSelbsttestResult({
                    email: leadEmail || undefined,
                    lead_id: leadId || undefined,
                    answers: parsedAnswers,
                    total_score: parsedScore,
                    level,
                }).then(() => {
                    setResultSaved(true)
                    console.log('Selbsttest result saved to Supabase')
                }).catch((err) => {
                    console.error('Error saving selbsttest result:', err)
                })
            }
        } else {
            // Redirect to test if no results
            router.push('/selbsttest')
        }
    }, [router, resultSaved])

    const handlePrint = () => {
        window.print()
    }

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            // Create lead in Supabase
            const lead = await createLead({
                email,
                source: 'selbsttest-results',
                consent_given: consent,
                consent_text: 'Ich stimme zu, dass meine E-Mail für die Zusendung der Materialien verwendet wird. Abmeldung jederzeit möglich.',
            })

            // Update selbsttest result with the new lead
            if (lead?.id && score !== null) {
                let level: 'starter' | 'fortgeschritten' | 'ready' = 'starter'
                if (score >= 33) level = 'ready'
                else if (score >= 19) level = 'fortgeschritten'

                await saveSelbsttestResult({
                    email,
                    lead_id: lead.id,
                    answers,
                    total_score: score,
                    level,
                })
            }

            setIsLoading(false)
            setEmailSubmitted(true)
        } catch (err) {
            console.error('Error submitting email:', err)
            setError('Es ist ein Fehler aufgetreten. Bitte versuche es erneut.')
            setIsLoading(false)
        }
    }

    // Determine result level
    const result = selbsttestResults.find(
        r => score !== null && score >= r.minScore && score <= r.maxScore
    ) || selbsttestResults[0]

    if (score === null) {
        return (
            <div className="min-h-screen bg-background-alt flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4" />
                    <p className="text-foreground-muted">Lade Ergebnisse...</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="min-h-screen bg-white text-gray-900 print:bg-white print:min-h-0">
                <div className="max-w-3xl mx-auto px-8 py-12 print:px-6 print:py-0 print:pt-0">

                    {/* Print Header - Only visible when printing */}
                    <header className="print-header items-center justify-between mb-8 pb-4 border-b-2 border-red-600">
                        <div>
                            <img
                                src="/logo/WAMOCON_ACADEMY_LOGO_SCHWARZ.png"
                                alt="WAMOCON Academy"
                                width={160}
                                height={50}
                                className="mb-1"
                            />
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-bold text-gray-800">IT Karriere Selbsttest</p>
                            <p className="text-sm text-red-600 font-medium">2026 Edition</p>
                        </div>
                    </header>

                    {/* Title & Score */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', duration: 0.5 }}
                            className="inline-block mb-6"
                        >
                            <div className={`
                w-32 h-32 rounded-full flex items-center justify-center text-5xl font-bold mx-auto
                ${result.level === 'starter' ? 'bg-red-100 text-red-600' : ''}
                ${result.level === 'fortgeschritten' ? 'bg-yellow-100 text-yellow-600' : ''}
                ${result.level === 'ready' ? 'bg-green-100 text-green-600' : ''}
              `}>
                                {score}
                            </div>
                        </motion.div>

                        <h1 className="text-3xl font-bold text-gray-900 mb-2 print:text-2xl">
                            {result.emoji} {result.title}
                        </h1>
                        <p className="text-lg text-gray-600 mb-4">
                            {result.description}
                        </p>
                        <p className="text-gray-700 max-w-xl mx-auto">
                            {result.recommendation}
                        </p>

                        {/* Print/Save Button */}
                        <div className="flex justify-center gap-4 mt-8 print:hidden">
                            <Button onClick={handlePrint} variant="secondary" size="md">
                                <Printer className="w-4 h-4" />
                                Als PDF speichern
                            </Button>
                        </div>
                    </div>

                    {/* Question Breakdown */}
                    <div className="mb-12 print:break-inside-avoid">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-red-600 pl-4">
                            Deine Antworten im Detail
                        </h2>
                        <div className="space-y-3">
                            {selbsttestQuestions.map((q) => (
                                <div key={q.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0
                    ${(answers[q.id] || 0) >= 4 ? 'bg-green-500' : ''}
                    ${(answers[q.id] || 0) === 3 ? 'bg-yellow-500' : ''}
                    ${(answers[q.id] || 0) <= 2 ? 'bg-red-500' : ''}
                  `}>
                                        {answers[q.id]}
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed pt-2">
                                        {q.question}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Fact */}
                    <div className="mb-12 bg-gray-900 text-white p-6 rounded-lg print:bg-gray-800 print:break-inside-avoid">
                        <p className="text-lg mb-2">
                            📈 <strong>Fakt:</strong> Jeder 4. Kandidat (ca. 25-30%) scheitert beim ersten ISTQB-Versuch.
                        </p>
                        <p className="text-gray-300">
                            Der häufigste Grund? Sie lernen Theorie, ohne sie praktisch anzuwenden.
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                            Quelle: {itMarketStats2026.failRateSource}
                        </p>
                    </div>

                    {/* IT Market Stats */}
                    <div className="mb-12 print:break-inside-avoid">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-red-600 pl-4">
                            IT-Arbeitsmarkt 2026: Deine Chance
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <StatCard value={itMarketStats2026.openPositions} label="Offene IT-Stellen" />
                            <StatCard value={itMarketStats2026.careerChangerRate} label="Quereinsteiger-Anteil" />
                            <StatCard value={itMarketStats2026.averageSalary} label="Durchschnittsgehalt" />
                            <StatCard value={itMarketStats2026.maxSalary} label="Erfahrene Tester" />
                            <StatCard value={itMarketStats2026.skillGap} label="Fachkräftelücke" />
                            <StatCard value={itMarketStats2026.marketGrowth} label="Marktwachstum" />
                        </div>
                    </div>

                    {/* 5 Success Factors */}
                    <div className="mb-12 print:break-inside-avoid">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-red-600 pl-4">
                            Die 5 Erfolgsfaktoren von IT-Quereinsteigern
                        </h2>
                        <div className="space-y-4">
                            {successFactors.map((factor, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <span className="text-green-500 font-bold flex-shrink-0">✅</span>
                                    <div>
                                        <p className="font-semibold text-gray-900">{factor.title}</p>
                                        <p className="text-gray-600 text-sm">{factor.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Success Stories */}
                    <div className="mb-12 print:break-inside-avoid">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-red-600 pl-4">
                            So haben es andere geschafft
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {successStoriesShort.map((story) => (
                                <Card key={story.name} className="p-6 bg-gray-50 border-gray-200">
                                    <div className="mb-4">
                                        <h3 className="font-bold text-gray-900">{story.name}</h3>
                                        <p className="text-sm text-red-600">{story.role}</p>
                                    </div>
                                    <blockquote className="text-gray-700 italic mb-4 border-l-2 border-red-600 pl-3">
                                        „{story.quote}"
                                    </blockquote>
                                    <ul className="space-y-2">
                                        {story.result.map((r, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                    {story.videoUrl && (
                                        <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                                            <Play className="w-3 h-3" /> Video auf unserer Website
                                        </p>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* DiTeLe Features */}
                    <div className="mb-12 print:break-inside-avoid">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-red-600 pl-4">
                            DiTeLe: Dein Unterschied zu anderen Kandidaten
                        </h2>
                        <p className="text-gray-600 mb-6 pl-4">
                            DiTeLe (Didaktische Test-Lernplattform) ist das, was anderen Kursen fehlt: <strong>Echte Praxiserfahrung.</strong>
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pl-4">
                            {diteleFeatures.map((feature, idx) => (
                                <div key={idx} className="bg-red-50 p-4 rounded-lg border border-red-100">
                                    <span className="text-2xl mb-2 block">{feature.icon}</span>
                                    <p className="font-semibold text-gray-900 text-sm">{feature.title}</p>
                                    <p className="text-xs text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Placeholder for Screenshot */}
                        <div className="mt-6 pl-4">
                            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                <p className="text-gray-500">📷 DiTeLe Screenshot Platzhalter</p>
                                <p className="text-xs text-gray-400 mt-1">Hier wird ein Screenshot der DiTeLe-Oberfläche eingefügt</p>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Comparison */}
                    <div className="mb-12 print:break-inside-avoid">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-red-600 pl-4">
                            Dein nächster Schritt
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b-2 border-gray-200">
                                        <th className="py-3 px-4 text-left">Option</th>
                                        <th className="py-3 px-4 text-left">Was du bekommst</th>
                                        <th className="py-3 px-4 text-right">Preis</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3 px-4">📚 Nur Buch</td>
                                        <td className="py-3 px-4 text-gray-600">ISTQB-Syllabus, allein lernen, keine Praxis</td>
                                        <td className="py-3 px-4 text-right">€0-50</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3 px-4">🎓 Präsenz-Seminar</td>
                                        <td className="py-3 px-4 text-gray-600">3-5 Tage Intensivkurs, kein Praxis-Tool</td>
                                        <td className="py-3 px-4 text-right">€800-1500</td>
                                    </tr>
                                    <tr className="bg-red-50">
                                        <td className="py-3 px-4 font-bold">⭐ Unser System</td>
                                        <td className="py-3 px-4 font-medium">Kurs + DiTeLe + Lifetime Access + 30-Tage-Garantie</td>
                                        <td className="py-3 px-4 text-right font-bold text-red-600">€497</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Value Stack */}
                        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 mb-2">Wert-Aufschlüsselung:</p>
                            <div className="space-y-1 text-sm">
                                <div className="flex justify-between"><span>Online-Kurs allein:</span><span>€350</span></div>
                                <div className="flex justify-between"><span>DiTeLe-Zugang:</span><span>€199</span></div>
                                <div className="flex justify-between"><span>Support & Updates:</span><span>€99</span></div>
                                <div className="border-t border-gray-300 my-2"></div>
                                <div className="flex justify-between font-bold"><span>Gesamt-Wert:</span><span>€648</span></div>
                                <div className="flex justify-between font-bold text-red-600"><span>Dein Preis heute:</span><span>€497</span></div>
                            </div>
                            <p className="text-center text-red-600 font-semibold mt-3">Du sparst: €151 (23%)</p>
                        </div>
                    </div>

                    {/* Email Capture or CTA */}
                    <div className="mb-12 print:hidden">
                        {!emailSubmitted ? (
                            <Card className="p-6 bg-gray-900 text-white border-0">
                                <h3 className="text-xl font-bold mb-2">PDF-Version herunterladen</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    Erhalte dieses Ergebnis als PDF + exklusive Tipps per E-Mail.
                                </p>
                                <form onSubmit={handleEmailSubmit} className="space-y-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="deine@email.de"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                                    />
                                    <label className="flex items-start gap-2 text-xs text-gray-400 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={consent}
                                            onChange={(e) => setConsent(e.target.checked)}
                                            required
                                            className="mt-0.5"
                                        />
                                        <span>
                                            Ich stimme zu, dass meine E-Mail für die Zusendung der Materialien verwendet wird.
                                            Abmeldung jederzeit möglich.
                                        </span>
                                    </label>
                                    <Button type="submit" variant="primary" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
                                        {isLoading ? 'Wird gesendet...' : 'PDF kostenlos anfordern'}
                                    </Button>
                                    {error && (
                                        <p className="text-red-400 text-sm text-center">{error}</p>
                                    )}
                                </form>
                            </Card>
                        ) : (
                            <Card className="p-6 bg-green-50 border-green-200">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Check className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-green-800 mb-2">PDF wird gesendet!</h3>
                                    <p className="text-green-700 mb-4">
                                        Überprüfe deinen Posteingang für das PDF und weitere Tipps.
                                    </p>
                                    <Link
                                        href="/#pricing"
                                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                                    >
                                        Jetzt durchstarten - €497
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </Card>
                        )}
                    </div>

                    {/* Main CTA */}
                    <div className="text-center mb-10 print:hidden">
                        <Link
                            href="/#pricing"
                            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                        >
                            Jetzt starten - €497
                        </Link>
                        <p className="text-gray-500 text-sm mt-3">
                            Lifetime Zugang. 30 Tage Garantie. Kein Abo.
                        </p>
                    </div>

                    {/* Contact - Enhanced for Print */}
                    <div className="text-center text-sm text-gray-500 print:break-inside-avoid print:mt-8 print:pt-6 print:border-t print:border-gray-200">
                        <p className="font-medium text-gray-700">Noch Fragen? Kontaktiere uns:</p>
                        <p className="text-red-600 font-semibold mt-1">info@test-it-academy.de</p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-xs text-gray-400">WAMOCON Academy | www.test-it-academy.de</p>
                            <p className="text-xs text-gray-400 mt-1 hidden print:block">
                                Dieses Dokument wurde am {new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })} erstellt.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Print Styles */}
            <style jsx global>{`
        /* Hide print header by default */
        .print-header {
          display: none !important;
        }

        @media print {
          /* Page settings */
          @page {
            margin: 1cm 1.5cm;
            size: A4;
          }

          /* Force color printing */
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* Show print header */
          .print-header {
            display: flex !important;
            margin-bottom: 1.5rem !important;
          }

          /* AGGRESSIVELY hide site header, nav, and any fixed/sticky elements */
          .print\\:hidden,
          button,
          nav,
          [class*="sticky"],
          [class*="fixed"],
          [class*="Header"],
          [class*="header"]:not(.print-header),
          [class*="navbar"],
          [class*="navigation"],
          footer,
          .no-print,
          /* Hide the entire site header component */
          body > div > header,
          body > header,
          #__next > header,
          #__next > div > header,
          main ~ footer,
          /* Hide hamburger menu */
          [class*="hamburger"],
          [class*="menu-icon"],
          svg[class*="menu"],
          /* Hide any dark header bars */
          [class*="bg-background"]:has(nav),
          [class*="bg-gray-900"]:has(nav),
          [class*="bg-black"]:has(nav) {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            overflow: hidden !important;
          }

          /* Main container styling */
          .min-h-screen {
            min-height: auto !important;
          }

          /* Typography */
          * {
            font-family: 'Segoe UI', 'Arial', sans-serif !important;
          }

          h1 {
            font-size: 24pt !important;
            margin-bottom: 8pt !important;
          }

          h2 {
            font-size: 14pt !important;
            margin-bottom: 8pt !important;
            page-break-after: avoid !important;
          }

          h3 {
            font-size: 12pt !important;
          }

          p, li, td, span {
            font-size: 10pt !important;
            line-height: 1.4 !important;
          }

          /* Score circle */
          .w-32.h-32 {
            width: 80px !important;
            height: 80px !important;
            font-size: 28pt !important;
          }

          /* Prevent page breaks inside elements */
          .print\\:break-inside-avoid,
          .space-y-3 > div,
          .grid > div,
          table,
          tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Force page breaks before major sections */
          .print\\:break-before {
            page-break-before: always !important;
            break-before: page !important;
          }

          /* Reduce spacing for print */
          .mb-12 {
            margin-bottom: 1.5rem !important;
          }

          .space-y-3 > * + * {
            margin-top: 0.5rem !important;
          }

          .space-y-4 > * + * {
            margin-top: 0.5rem !important;
          }

          /* Card styling for print */
          .bg-gray-50,
          .bg-red-50 {
            background-color: #fafafa !important;
            border: 1px solid #e5e5e5 !important;
          }

          .bg-gray-900 {
            background-color: #1f2937 !important;
            color: white !important;
          }

          /* Grid adjustments */
          .grid-cols-2,
          .md\\:grid-cols-2 {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .md\\:grid-cols-3 {
            grid-template-columns: repeat(3, 1fr) !important;
          }

          .grid {
            gap: 0.5rem !important;
          }

          /* Smaller padding in print */
          .p-4 {
            padding: 0.5rem !important;
          }

          .p-6 {
            padding: 0.75rem !important;
          }

          /* Table styling */
          table {
            width: 100% !important;
            border-collapse: collapse !important;
          }

          th, td {
            border: 1px solid #e5e5e5 !important;
            padding: 6px 8px !important;
          }

          th {
            background-color: #f3f4f6 !important;
          }

          /* Links */
          a {
            text-decoration: none !important;
            color: inherit !important;
          }

          /* Remove shadows */
          * {
            box-shadow: none !important;
          }

          /* Rounded corners - keep but subtle */
          .rounded-lg {
            border-radius: 4px !important;
          }

          .rounded-full {
            border-radius: 50% !important;
          }

          /* Footer info */
          .text-center.text-sm.text-gray-500 {
            margin-top: 2rem !important;
            padding-top: 1rem !important;
            border-top: 1px solid #e5e5e5 !important;
          }

          /* Hide motion components animation */
          [class*="motion"] {
            transform: none !important;
            opacity: 1 !important;
          }

          /* Stat card adjustments */
          .bg-red-50.p-4.rounded-lg {
            padding: 8px !important;
          }

          .text-xl.font-bold.text-red-600 {
            font-size: 14pt !important;
          }

          /* Success stories in print */
          .bg-gray-50.border-gray-200 {
            page-break-inside: avoid !important;
          }

          /* DiTeLe features grid */
          .bg-red-50.border-red-100 {
            padding: 6px !important;
          }

          /* Email form - hide in print */
          form {
            display: none !important;
          }

          /* Value stack section */
          .bg-gray-50.p-4.rounded-lg .space-y-1 > div {
            padding: 2px 0 !important;
          }

          /* Highlight row in table */
          .bg-red-50 td {
            background-color: #fef2f2 !important;
          }

          /* Code/placeholder boxes */
          .bg-gray-100.border-dashed {
            display: none !important;
          }

          /* Print date in footer */
          .print-header::after {
            content: "Erstellt am: ${new Date().toLocaleDateString('de-DE')}";
            position: absolute;
            right: 0;
            bottom: -20px;
            font-size: 8pt;
            color: #9ca3af;
          }
        }
      `}</style>
        </>
    )
}

function StatCard({ value, label }: { value: string; label: string }) {
    return (
        <div className="bg-red-50 p-4 rounded-lg text-center border border-red-100">
            <p className="text-xl font-bold text-red-600">{value}</p>
            <p className="text-xs text-gray-600">{label}</p>
        </div>
    )
}
