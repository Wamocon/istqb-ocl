'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { checklistContent } from '@/data/checklistContent'

const navigationLinks = [
  { label: 'Startseite', href: '/#hero' },
  { label: 'Online-Kurs', href: '/#course-walkthrough' },
  { label: 'Praxis-Tool', href: '/#ditele-walkthrough' },
  { label: 'Dein Lernplan', href: '/#curriculum' },
  { label: 'Erfolgsgeschichten', href: '/#success-stories' },
  { label: 'Preise', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
]

const legalLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
]

export default function ChecklistePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      {/* Header Navigation - Hidden when printing */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 print:hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/WAMOCON_ACADEMY_LOGO_SCHWARZ.png"
                alt="WAMOCON Academy"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              href="/#pricing"
              className="hidden sm:inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Jetzt starten
            </Link>
          </div>
        </div>
      </header>

      {/* Print Button - Hidden when printing */}
      <div className="fixed top-20 right-4 z-50 print:hidden">
        <Button onClick={handlePrint} variant="primary" size="sm">
          Als PDF speichern
        </Button>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-white text-gray-900 print:bg-white">
        <div className="max-w-3xl mx-auto px-8 py-12 print:px-4 print:py-8">

          {/* Print Header with Logo */}
          <header className="hidden print:flex items-center justify-between mb-12 pb-6 border-b-2 border-gray-200">
            <Image
              src="/logo/WAMOCON_ACADEMY_LOGO_SCHWARZ.png"
              alt="WAMOCON Academy"
              width={180}
              height={60}
              className="print:w-36"
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
            <p className="text-lg text-gray-600">
              {checklistContent.subtitle}
            </p>
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
              Jetzt starten - 497 Euro
            </Link>
            <p className="text-gray-500 text-sm mt-3">
              Lifetime Zugang. 30 Tage Garantie.
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

          {/* Print Footer */}
          <footer className="hidden print:block mt-8 pt-6 border-t border-gray-200 text-center">
            <Image
              src="/logo/WAMOCON_ACADEMY_LOGO_SCHWARZ.png"
              alt="WAMOCON Academy"
              width={120}
              height={40}
              className="mx-auto mb-3"
            />
            <p className="text-xs text-gray-400">
              WAMOCON Academy | ISTQB CTFL 4.0 Vorbereitung
            </p>
            <p className="text-xs text-gray-400">
              wamocon.de
            </p>
          </footer>
        </div>
      </div>

      {/* Website Footer - Hidden when printing */}
      <footer className="bg-gray-900 text-white py-12 print:hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <Image
                src="/logo/WAMOCON_ACADEMY_LOGO.png"
                alt="WAMOCON Academy"
                width={150}
                height={50}
                className="mb-4"
              />
              <p className="text-sm text-gray-400">
                Die umfassendste ISTQB CTFL 4.0 Vorbereitung mit DiTeLe Praxis-Tool.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="mailto:info@test-it-academy.de" className="hover:text-red-500 transition-colors">
                    info@test-it-academy.de
                  </a>
                </li>
                <li>
                  <a href="tel:+4961965838312" className="hover:text-red-500 transition-colors">
                    +49 (0) 6196 5838312
                  </a>
                </li>
                <li>Mo-Fr: 9-18 Uhr</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} WAMOCON Academy GmbH. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-gray-600">
              ISTQB® und Certified Tester® sind eingetragene Marken des ISTQB
            </p>
          </div>
        </div>
      </footer>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 1.5cm;
            size: A4;
          }

          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .print\\:hidden {
            display: none !important;
          }

          .hidden.print\\:flex {
            display: flex !important;
          }

          .hidden.print\\:block {
            display: block !important;
          }
        }
      `}</style>
    </>
  )
}
