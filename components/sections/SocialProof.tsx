'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { testimonials } from '@/data/testimonials'
import { Star, Linkedin } from 'lucide-react'

export function SocialProof() {
  const [filter, setFilter] = useState<'alle' | 'quereinsteiger' | 'absolvent'>('alle')

  const filtered = filter === 'alle'
    ? testimonials
    : testimonials.filter(t => t.category === filter)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up" width="100%">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
              Das sagen unsere Absolventen
            </h2>
            <p className="text-center text-muted text-lg mb-12">
              Echte Menschen, echte Erfolge
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          {/* Filter Tabs */}
          <ScrollReveal animation="fade-in" delay={0.2} width="100%">
            <div className="flex justify-center gap-4 mb-12">
              <FilterButton
                active={filter === 'quereinsteiger'}
                onClick={() => setFilter('quereinsteiger')}
              >
                Quereinsteiger
              </FilterButton>
              <FilterButton
                active={filter === 'absolvent'}
                onClick={() => setFilter('absolvent')}
              >
                Absolventen
              </FilterButton>
              <FilterButton
                active={filter === 'alle'}
                onClick={() => setFilter('alle')}
              >
                Alle
              </FilterButton>
            </div>
          </ScrollReveal>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filtered.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} animation="scale-up" delay={index * 0.1} width="100%">
                <Card hover className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted">{testimonial.role}</div>
                      {testimonial.company && (
                        <div className="text-xs text-muted">{testimonial.company}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-sm italic mb-4 flex-grow">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="pt-4 border-t border-border mt-auto">
                    <div className="text-sm font-semibold text-accent mb-2">
                      {testimonial.result}
                    </div>
                    {testimonial.linkedIn && (
                      <a
                        href={testimonial.linkedIn}
                        className="text-xs text-muted hover:text-primary flex items-center gap-1"
                      >
                        <Linkedin className="w-3 h-3" />
                        LinkedIn-Profil ansehen
                      </a>
                    )}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Success Rate */}
          <ScrollReveal animation="fade-up" delay={0.4} width="100%">
            <Card className="bg-accent/10 border-accent max-w-2xl mx-auto">
              <h3 className="font-bold text-xl mb-4 text-center">
                Unsere Erfolgsquote
              </h3>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Teilnehmer mit Kurs + DiTeLe:</span>
                  <span className="font-mono font-bold text-accent">87%</span>
                </div>
                <div className="h-4 bg-background-card rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: '87%' }} />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted">Durchschnitt (Selbststudium):</span>
                  <span className="font-mono text-sm text-muted">34%</span>
                </div>
                <div className="h-2 bg-background-card rounded-full overflow-hidden">
                  <div className="h-full bg-foreground-muted" style={{ width: '34%' }} />
                </div>
              </div>
              <p className="text-center font-semibold text-accent mt-4">
                Das ist mehr als doppelt so hoch!
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function FilterButton({
  active,
  onClick,
  children
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all ${active
        ? 'bg-accent text-white shadow-md'
        : 'bg-background-alt text-muted hover:bg-primary-light'
        }`}
    >
      {children}
    </button>
  )
}
