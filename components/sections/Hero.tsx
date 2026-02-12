'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { BookOpen, Code, TrendingUp } from 'lucide-react'
import { PurchaseDialog } from '@/components/ui/PurchaseDialog'

export function Hero() {
  const [animationComplete, setAnimationComplete] = React.useState(false)

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-background-red-dark text-white overflow-hidden">


      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.2) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT COLUMN: Copy & CTA */}
          <div className="flex-1 text-center lg:text-left">
            <ScrollReveal animation="fade-in" delay={0.1} width="100%">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm text-accent-light shadow-[0_0_20px_rgba(254,4,4,0.1)] mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-xs md:text-sm font-bold tracking-wide uppercase">Neu: Mit Prüfungssimulator & Praxis-Labor</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2} width="100%">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                Lerne Softwaretesten. <br />
                <span className="text-accent">Nicht nur Folien.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.3} width="100%">
              <p className="text-lg md:text-xl mb-10 text-foreground-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Theorie besteht die Prüfung. <span className="text-white font-semibold">Praxis bringt den Job.</span><br className="hidden md:block" />
                Hol dir beides mit dem <span className="text-accent/80 border-b border-accent/30">ISTQB® CTFL 4.0 + DiTeLe Kurs</span>.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.4} width="100%">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button
                  variant="primary"
                  size="xl"
                  className="bg-accent hover:bg-accent-hover text-white shadow-cta hover:shadow-card-hover transition-all duration-300 text-base md:text-lg px-8 py-5"
                  onClick={() => {
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Zum Kurs - <span className="line-through opacity-70">€747</span> €497
                </Button>
                <Button
                  variant="secondary"
                  size="xl"
                  className="bg-background-card border-border hover:bg-background-alt text-base md:text-lg px-8 py-5"
                  onClick={() => window.location.href = '/selbsttest'}
                >
                  Kostenloser Karriere Check
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in" delay={0.6} width="100%">
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-xs md:text-sm font-medium text-foreground-muted/80">
                <TrustBadge text="Sofortiger Zugang" />
                <TrustBadge text="30-Tage Garantie" />
                <TrustBadge text="Kein Abo" />
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: Visual Split Screen (Theory vs Practice) */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative">
            <VisualSplitScreen />
          </div>

        </div>
      </div>
    </section>
  )
}

function VisualSplitScreen() {
  return (
    <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
      {/* 1. Theory Element (Background) */}
      <motion.div
        className="absolute top-10 left-4 md:left-0 w-[65%] h-[80%] bg-white rounded-xl shadow-xl border border-gray-200 p-6 transform -rotate-6 opacity-90 origin-bottom-left z-0 overflow-hidden"
        initial={{ opacity: 0, x: -50, rotate: -10 }}
        animate={{ opacity: 0.9, x: 0, rotate: -6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full text-center mb-6">
          <div className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold rounded uppercase">Theorie</div>
        </div>
        {/* Skeleton Text */}
        <div className="space-y-3 opacity-30">
          <div className="h-4 bg-gray-800 rounded w-3/4 mx-auto mb-6"></div>
          <div className="h-2 bg-gray-400 rounded w-full"></div>
          <div className="h-2 bg-gray-400 rounded w-5/6"></div>
          <div className="h-2 bg-gray-400 rounded w-full"></div>
          <div className="h-2 bg-gray-400 rounded w-4/6"></div>
          <div className="h-2 bg-gray-400 rounded w-full"></div>
        </div>
        {/* Stamp */}
        <div className="absolute bottom-6 right-6 opacity-20 transform -rotate-12 border-2 border-red-500 text-red-500 font-black p-2 rounded">
          DRY
        </div>
      </motion.div>

      {/* 2. Practice Element (Foreground - DiTeLe) */}
      <motion.div
        className="absolute top-0 right-4 md:right-0 w-[70%] h-[85%] bg-[#1E1E2E] rounded-xl shadow-2xl border border-accent/30 p-1 transform rotate-3 origin-center z-10 overflow-hidden flex flex-col"
        initial={{ opacity: 0, x: 50, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Header Bar */}
        <div className="bg-[#2A2A3C] p-3 flex items-center justify-between border-b border-white/5 rounded-t-lg">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          </div>
          <div className="text-[10px] text-gray-400 font-mono">ditele-learn.ai</div>
        </div>

        {/* Main Content (Dashboard Sim) */}
        <div className="flex-1 p-4 flex flex-col relative">
          <div className="absolute top-4 right-4 z-20">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-white text-xs font-bold rounded shadow-lg shadow-accent/20 animate-pulse">
              <span>Praxis</span>
              <span className="text-white">🚀</span>
            </div>
          </div>

          <div className="flex gap-4 h-full">
            {/* Sidebar */}
            <div className="w-12 bg-white/5 rounded hidden sm:block">
              <div className="w-6 h-6 bg-accent/50 rounded-full mx-auto mt-4 mb-4"></div>
              <div className="space-y-2 px-2">
                <div className="h-1.5 bg-white/10 rounded w-full"></div>
                <div className="h-1.5 bg-white/10 rounded w-full"></div>
                <div className="h-1.5 bg-white/10 rounded w-full"></div>
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 space-y-4">
              <div className="h-20 bg-gradient-to-br from-accent/20 to-transparent rounded border border-accent/20 p-3">
                <div className="text-white/80 text-xs font-mono mb-2">LoginTest.test_validation()</div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500 border border-green-400 flex items-center justify-center">
                    <svg className="w-2 h-2 text-black font-bold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-green-400 text-xs font-bold">PASSED</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="h-12 bg-white/5 rounded border border-white/10"></div>
                <div className="h-12 bg-white/5 rounded border border-white/10"></div>
              </div>

              <div className="h-16 bg-white/5 rounded border border-white/10 mt-auto flex items-center justify-center">
                <div className="w-3/4 h-2 bg-white/10 rounded overflow-hidden">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>



    </div>
  )
}

function TrustBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05]">
      <div className="flex items-center justify-center w-4 h-4 rounded-full bg-accent/20">
        <span className="text-accent text-[10px] font-bold">✓</span>
      </div>
      <span className="whitespace-nowrap">{text}</span>
    </div>
  )
}
