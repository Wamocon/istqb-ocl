'use client'

import { getFeaturedTestimonials } from '@/lib/api'
import { Testimonial } from '@/types/database'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Check, Target, TrendingUp, User } from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'

export function SuccessStories() {
  const [stories, setStories] = React.useState<Testimonial[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchStories() {
      try {
        const data = await getFeaturedTestimonials()
        setStories(data)
      } catch (error) {
        console.error('Failed to load success stories:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchStories()
  }, [])

  if (loading) {
    return <section className="py-16 md:py-24 bg-background-red-dark min-h-[600px] flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full" />
    </section>
  }

  return (
    <section id="success-stories" className="py-16 md:py-24 bg-background-red-dark">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up" width="100%">
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
              {stories.map((story, index) => (
                <ScrollReveal key={story.id} animation={index % 2 === 0 ? "slide-right" : "slide-left"} delay={0.2} width="100%">
                  <SuccessStoryCard
                    story={story}
                    index={index}
                  />
                </ScrollReveal>
              ))}
            </div>

            {/* CTA */}
            <ScrollReveal animation="fade-up" delay={0.4} width="100%">
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
                  Jetzt durchstarten - <span className="line-through opacity-70">€747</span> €497
                </a>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

interface SuccessStoryCardProps {
  story: Testimonial
  index: number
}

function SuccessStoryCard({ story, index }: SuccessStoryCardProps) {
  // Alternate layout direction for visual interest
  const isReversed = index % 2 === 1

  // Parse JSON fields safely
  const challenge = typeof story.challenge === 'object' ? story.challenge as any : { title: '', description: '' }
  const goal = typeof story.goal === 'object' ? story.goal as any : { title: '', description: '' }
  const results = typeof story.results === 'object' ? story.results as any : { title: '', achievements: [] }
  const stats = Array.isArray(story.stats) ? story.stats as any[] : []

  return (
    <Card className="overflow-hidden">
      <div
        className={`grid md:grid-cols-2 gap-0 ${isReversed ? 'md:grid-flow-dense' : ''
          }`}
      >
        {/* Image Section */}
        <div
          className={`relative h-64 md:h-auto bg-gradient-to-br from-accent/20 to-accent/5 ${isReversed ? 'md:col-start-2' : ''
            }`}
        >
          {/* Image Section Content */}
          {story.video_url ? (
            <div className="absolute inset-0 bg-black">
              <iframe
                src={`${story.video_url}?rel=0`}
                title={`Success Story: ${story.name}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : story.video_thumbnail || story.image_url ? (
            <div className="absolute inset-0 group-image cursor-pointer">
              <Image
                src={story.video_thumbnail || story.image_url!}
                alt={story.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

              {/* Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-xl font-bold">{story.name}</h3>
                {story.role && (
                  <p className="text-accent-light text-sm font-medium">{story.role}</p>
                )}
              </div>
            </div>
          ) : (
            /* Default Placeholder */
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
          )}

          {/* Stats Overlay - show only if no video (embedded or thumbnail) and stats exist */}
          {!story.video_url && !story.video_thumbnail && stats.length > 0 && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background-card/95 to-transparent p-4">
              <div className="grid grid-cols-3 gap-2">
                {stats.map((stat: any, i: number) => (
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
                  {challenge.title || 'Herausforderung'}
                </h4>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {challenge.description}
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
                <h4 className="font-bold text-foreground mb-1">{goal.title || 'Ziel'}</h4>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {goal.description}
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
                <h4 className="font-bold text-foreground mb-3">{results.title || 'Ergebnis'}</h4>
                <ul className="space-y-2">
                  {results.achievements && Array.isArray(results.achievements) && results.achievements.map((achievement: string, i: number) => (
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
