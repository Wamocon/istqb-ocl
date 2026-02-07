'use client'

import { useState } from 'react'
import { faqData } from '@/data/faq'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="faq" className="py-16 md:py-24 bg-background-alt">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up" width="100%">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-center text-muted text-lg mb-12">
              Hier findest du Antworten auf die wichtigsten Fragen
            </p>

            <div className="space-y-4">
              {faqData.map((item, index) => (
                <ScrollReveal key={item.id} animation="fade-up" delay={index * 0.05} width="100%">
                  <FAQItem
                    item={item}
                    isOpen={openId === item.id}
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  />
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted mb-4">Deine Frage ist nicht dabei?</p>
              <a
                href="mailto:info@test-it-academy.de"
                className="text-accent font-semibold hover:underline"
              >
                Schreib uns: info@test-it-academy.de
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function FAQItem({
  item,
  isOpen,
  onClick
}: {
  item: { id: string; question: string; answer: string }
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="bg-background-card rounded-lg border border-border overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary-light transition-colors"
      >
        <span className="font-semibold pr-4">{item.question}</span>
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
            <div className="px-6 py-4 border-t border-border text-muted">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
