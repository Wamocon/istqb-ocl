import { Hero } from '@/components/sections/Hero'
import { Definition } from '@/components/sections/Definition' // New
import { Comparison } from '@/components/sections/Comparison'
import { CourseWalkthrough } from '@/components/sections/CourseWalkthrough'
import { DiTeLeCourseWalkthrough } from '@/components/sections/DiTeLeCourseWalkthrough'
import { DiTeleDemo } from '@/components/sections/DiTeleDemo'
import { Curriculum } from '@/components/sections/Curriculum'
import { SuccessStories } from '@/components/sections/SuccessStories'
import { VideoTestimonials } from '@/components/sections/VideoTestimonials'
import { AboutTrainer } from '@/components/sections/AboutTrainer' // New
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { PromoBanner, PromoFloatingBadge } from '@/components/ui/PromoBanner'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Promotional Elements */}
      <PromoBanner remainingSpots={47} />
      <PromoFloatingBadge />

      {/* Add padding-top to account for promo banner below header */}
      <div className="pt-12">
        {/* Section 1: Hero - Attention + Problem Statement */}
        <Hero />

        {/* Section 1b: Definition - GEO Optimization */}
        <Definition />

        {/* Section 2: Comparison - Problem Agitation (Why others fail) */}
        <Comparison />

        {/* Section 3: Course Walkthrough - Solution Introduction (What you get) */}
        <CourseWalkthrough />

        {/* Section 4: DiTeLe Walkthrough - Unique Value Proposition (Why it's better) */}
        <DiTeLeCourseWalkthrough />

        {/* Section 5: DiTeLe Demo - Proof by Experience (Try it yourself) */}
        <DiTeleDemo />

        {/* Section 6: Curriculum - Learning Roadmap (How you'll succeed) */}
        <Curriculum />

        {/* Section 7: Success Stories - Social Proof Detailed (Relatable stories) */}
        <SuccessStories />

        {/* Section 8: Video Testimonials - Social Proof Visual (Authentic emotion) */}
        <VideoTestimonials />

        {/* Section 8b: About Trainer - E-E-A-T Trust */}
        <AboutTrainer />

        {/* Section 9: Pricing - Investment Decision (After trust is built) */}
        <Pricing />

        {/* Section 10: FAQ - Objection Handling (Remove last doubts) */}
        <FAQ />

        {/* Section 11: Final CTA - Closing (Decision time) */}
        <FinalCTA />
      </div>
    </main>
  )
}
