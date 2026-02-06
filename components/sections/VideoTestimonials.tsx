'use client'

import Image from 'next/image'

import { useState, useRef, useEffect } from 'react'
import { getVideoTestimonials } from '@/lib/api'
import { Testimonial } from '@/types/database'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Play, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'


export function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null)
  const [videos, setVideos] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchVideos() {
      try {
        const data = await getVideoTestimonials()
        setVideos(data)
      } catch (error) {
        console.error('Failed to load video testimonials:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchVideos()
  }, [])

  if (loading) {
    return <section className="py-16 md:py-24 bg-background-alt min-h-[400px] flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full" />
    </section>
  }

  return (
    <section id="video-testimonials" className="py-16 md:py-24 bg-background-alt">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up" width="100%">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block mb-4 px-6 py-2 bg-accent/10 rounded-full">
                <span className="text-accent font-semibold">Video-Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Höre direkt von unseren Absolventen
              </h2>
              <p className="text-foreground-muted text-lg max-w-3xl mx-auto">
                Echte Menschen, echte Geschichten – sieh selbst, wie sie mit unserem Kurs ihre Ziele erreicht haben
              </p>
            </div>

            {/* Video Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {videos.map((testimonial, index) => (
                <ScrollReveal key={testimonial.id} animation="scale-up" delay={index * 0.1} width="100%">
                  <VideoCard
                    testimonial={testimonial}
                    onClick={() => setSelectedVideo(testimonial)}
                  />
                </ScrollReveal>
              ))}
            </div>

            {/* Trust Indicator */}
            <ScrollReveal animation="fade-in" delay={0.4} width="100%">
              <div className="text-center">
                <p className="text-foreground-muted text-sm">
                  <span className="font-semibold text-accent">Über 2,500+ zufriedene Teilnehmer</span> haben
                  bereits ihre ISTQB-Zertifizierung mit uns gemeistert
                </p>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  )
}

interface VideoCardProps {
  testimonial: Testimonial
  onClick: () => void
}

function VideoCard({ testimonial, onClick }: VideoCardProps) {
  const thumbnailUrl = testimonial.video_thumbnail || testimonial.image_url

  return (
    <Card
      className="group cursor-pointer overflow-hidden hover:shadow-card-hover transition-all duration-300"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-accent/10 to-accent/5 overflow-hidden group-video-card">
        {thumbnailUrl && (thumbnailUrl.startsWith('http') || thumbnailUrl.startsWith('/')) ? (
          <Image
            src={thumbnailUrl}
            alt={`Video thumbnail von ${testimonial.name}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          /* Placeholder - Replace with actual image when available */
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl font-bold text-accent">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/40 group-hover:bg-background/60 transition-all">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <Play className="w-8 h-8 text-white ml-1" aria-hidden="true" />
          </div>
        </div>


      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-foreground mb-1">{testimonial.name}</h3>
        {testimonial.role && (
          <p className="text-sm text-accent font-medium mb-2">{testimonial.role}</p>
        )}
        {testimonial.quote && (
          <p className="text-sm text-foreground-muted line-clamp-2 italic">
            "{testimonial.quote}"
          </p>
        )}
      </div>
    </Card>
  )
}

interface VideoModalProps {
  video: Testimonial | null
  onClose: () => void
}

function VideoModal({ video, onClose }: VideoModalProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle escape key and body scroll lock
  useEffect(() => {
    if (!video) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [video, onClose])

  if (!video) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          ref={containerRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.3 }}
          className="relative w-full max-w-4xl bg-background-card rounded-lg overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Video schließen"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>

          {/* Video Player */}
          <div className="relative aspect-video bg-black">
            {video.video_url ? (
              <iframe
                src={`${video.video_url}?autoplay=1&rel=0`}
                title={`Testimonial von ${video.name}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-accent/5">
                <p className="text-foreground-muted">Video nicht verfügbar</p>
              </div>
            )}
          </div>

          {/* Video Info */}
          <div className="p-6 border-t border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">{video.name}</h3>
            {video.role && (
              <p className="text-accent font-semibold mb-3">{video.role}</p>
            )}
            {video.quote && (
              <p className="text-foreground-muted italic">"{video.quote}"</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
