'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { checklistContent } from '@/data/checklistContent'
import { Printer } from 'lucide-react'

export default function ChecklistePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      {/* Header Navigation - Removed as requested */}



      {/* Main Content */}
      <div className="min-h-screen bg-white text-gray-900 print:bg-white">
        <div className="max-w-3xl mx-auto px-8 py-12 print:px-4 print:py-8">

          {/* Print Header with Logo - Only visible when printing */}
          <header className="print-header items-center justify-between mb-12 pb-6 border-b-2 border-gray-200">
            <img
              src="/logo/WAMOCON_ACADEMY_LOGO_SCHWARZ.png"
              alt="WAMOCON Academy"
              width={180}
              height={60}
            />
            <div className="text-right text-sm text-gray-500">
              <p>IT Karriere Selbsttest</p>
              <p>2026 Edition</p>
            </div>
          </header>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-3 print:text-2xl">
              {checklistContent.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {checklistContent.subtitle}
            </p>

            {/* Print Button - Integrated */}
            <div className="flex justify-center print:hidden">
              <Button onClick={handlePrint} variant="secondary" size="md">
                <Printer className="w-4 h-4" />
                Als PDF speichern
              </Button>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12 bg-gray-50 p-6 rounded-lg print:bg-gray-100 print:p-4">
            {checklistContent.intro.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4 last:mb-0 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Checklist Sections */}
          {checklistContent.sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-10 print:break-inside-avoid">
              <h2 className="text-xl font-bold text-gray-900 mb-2 border-l-4 border-red-600 pl-4">
                {section.title}
              </h2>
              {section.description && (
                <p className="text-gray-600 mb-6 pl-4">{section.description}</p>
              )}

              <div className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="border border-gray-200 rounded-lg p-5 print:p-4 print:break-inside-avoid"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 mb-3">
                          {item.statement}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.insight}
                        </p>
                        {item.source && (
                          <p className="text-xs text-gray-400 mt-2 italic">
                            Quelle: {item.source}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Evaluation */}
          <div className="mb-10 bg-red-50 p-6 rounded-lg print:bg-gray-100 print:break-inside-avoid">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {checklistContent.evaluation.title}
            </h2>
            <p className="text-gray-600 mb-4">{checklistContent.evaluation.description}</p>

            <div className="space-y-3">
              {checklistContent.evaluation.levels.map((level, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white p-3 rounded border border-red-100"
                >
                  <span className="font-bold text-red-600 whitespace-nowrap">
                    {level.range}:
                  </span>
                  <span className="text-gray-700">{level.message}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leon's Story */}
          <div className="mb-10 print:break-inside-avoid">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-red-600 pl-4">
              {checklistContent.leonStory.title}
            </h2>
            <div className="pl-4">
              {checklistContent.leonStory.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 last:mb-0 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Course Info */}
          <div className="mb-10 print:break-inside-avoid">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-red-600 pl-4">
              {checklistContent.courseInfo.title}
            </h2>
            <div className="pl-4 space-y-4">
              {checklistContent.courseInfo.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">+</span>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-10 bg-gray-900 text-white p-6 rounded-lg print:bg-gray-800 print:break-inside-avoid">
            <h2 className="text-xl font-bold mb-4">Der Preis</h2>
            <p className="text-gray-300 mb-4">{checklistContent.pricing.comparison}</p>
            <p className="text-3xl font-bold text-red-500 mb-4">
              Unser Kurs mit DiTeLe: {checklistContent.pricing.ourPrice} Euro
            </p>
            <p className="text-gray-300 mb-4">{checklistContent.pricing.savings}</p>
            <p className="text-sm text-gray-400">{checklistContent.pricing.guarantee}</p>
          </div>

          {/* Calculation */}
          <div className="mb-10 print:break-inside-avoid">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-red-600 pl-4">
              {checklistContent.calculation.title}
            </h2>
            <div className="pl-4">
              {checklistContent.calculation.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 last:mb-0 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Why Now */}
          <div className="mb-10 print:break-inside-avoid">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-red-600 pl-4">
              {checklistContent.whyNow.title}
            </h2>
            <div className="pl-4 space-y-3">
              {checklistContent.whyNow.points.map((point, idx) => (
                <p key={idx} className="text-gray-700">{point}</p>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mb-10 bg-red-600 text-white p-6 rounded-lg print:bg-gray-700 print:break-inside-avoid">
            <h2 className="text-xl font-bold mb-4">{checklistContent.cta.title}</h2>
            <p className="mb-4">Du hast zwei Möglichkeiten.</p>

            <div className="space-y-4 mb-6">
              {checklistContent.cta.options.map((option, idx) => (
                <div key={idx} className="bg-white/10 p-4 rounded">
                  <p className="font-bold mb-1">{option.label}:</p>
                  <p className="text-red-100">{option.description}</p>
                </div>
              ))}
            </div>

            <p className="text-lg font-semibold">{checklistContent.cta.closing}</p>
          </div>

          {/* CTA Button - Hidden when printing */}
          <div className="text-center mb-10 print:hidden">
            <Link
              href="/#pricing"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              🔥 Jetzt starten - <span className="line-through opacity-70">747€</span> 497 Euro
            </Link>
            <p className="text-gray-500 text-sm mt-3">
              12 Monate Zugang. 30 Tage Garantie.
            </p>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-6 print:break-inside-avoid">
            <h3 className="text-sm font-bold text-gray-500 mb-3">Quellen</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              {checklistContent.sources.map((source, idx) => (
                <li key={idx}>{source}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>


      {/* Print Styles */}
      <style jsx global>{`
        /* Hide print-only elements on screen */
        .print-header {
          display: none !important;
        }

        @media print {
          @page {
            margin: 1.5cm;
            size: A4;
          }

          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Show print-only elements when printing */
          .print-header {
            display: flex !important;
          }

          /* Hide screen-only elements when printing */
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
