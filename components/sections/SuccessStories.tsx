'use client'

import { successStories, SuccessStory } from '@/data/successStories'
import { Card } from '@/components/ui/Card'
import { Check, Target, TrendingUp, User } from 'lucide-react'
import Image from 'next/image'

export function SuccessStories() {
  return (
    <section id="success-stories" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-accent/10 rounded-full">
              <span className="text-accent font-semibold">Echte Erfolgsgeschichten</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Von der Herausforderung zum Erfolg
            </h2>
            <p className="text-foreground-muted text-lg max-w-3xl mx-auto">
              Wie unsere Teilnehmer ihre Karriereziele erreicht haben – trotz anfänglicher Hindernisse
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="space-y-12 md:space-y-16">
            {successStories.map((story, index) => (
              <SuccessStoryCard key={story.id} story={story} index={index} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-foreground-muted mb-6">
              Bereit, deine eigene Erfolgsgeschichte zu schreiben?
            </p>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-hover transition-all shadow-cta hover:shadow-lg"
            >
              🎯 Jetzt durchstarten - €497
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SuccessStoryCardProps {
  story: SuccessStory
  index: number
}

function SuccessStoryCard({ story, index }: SuccessStoryCardProps) {
  // Alternate layout direction for visual interest
  const isReversed = index % 2 === 1

  return (
    <Card className="overflow-hidden">
      <div
        className={`grid md:grid-cols-2 gap-0 ${
          isReversed ? 'md:grid-flow-dense' : ''
        }`}
      >
        {/* Image Section */}
        <div
          className={`relative h-64 md:h-auto bg-gradient-to-br from-accent/20 to-accent/5 ${
            isReversed ? 'md:col-start-2' : ''
          }`}
        >
          {/* Placeholder for image - replace with actual Image component when images available */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <User className="w-12 h-12 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{story.name}</h3>
              {story.role && (
                <p className="text-accent font-semibold mt-2">{story.role}</p>
              )}
            </div>
          </div>

          {/* Stats Overlay */}
          {story.stats && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background-card/95 to-transparent p-4">
              <div className="grid grid-cols-3 gap-2">
                {story.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-accent font-bold text-sm md:text-base">
                      {stat.value}
                    </div>
                    <div className="text-foreground-muted text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          {/* Challenge */}
          <div className="mb-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-red-500" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">
                  {story.challenge.title}
                </h4>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {story.challenge.description}
                </p>
              </div>
            </div>
          </div>

          {/* Goal */}
          <div className="mb-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-blue-500" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">{story.goal.title}</h4>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {story.goal.description}
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-accent" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-foreground mb-3">{story.results.title}</h4>
                <ul className="space-y-2">
                  {story.results.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check
                        className="w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
