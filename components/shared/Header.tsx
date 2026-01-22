'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

interface NavItem {
  id: string
  label: string
  href: string
  type: 'link' | 'button' | 'scroll'
}

const navigationItems: NavItem[] = [
  { id: 'startseite', label: 'Startseite', href: '#hero', type: 'scroll' },
  { id: 'online-kurs', label: 'Online-Kurs', href: '#course-walkthrough', type: 'scroll' },
  { id: 'praxis-tool', label: 'Praxis-Tool', href: '#ditele-walkthrough', type: 'scroll' },
  { id: 'lernplan', label: 'Dein Lernplan', href: '#curriculum', type: 'scroll' },
  { id: 'erfolgsgeschichten', label: 'Erfolgsgeschichten', href: '#success-stories', type: 'scroll' },
  { id: 'pricing', label: 'Preise', href: '#pricing', type: 'scroll' },
  { id: 'faq', label: 'FAQ', href: '#faq', type: 'scroll' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')

  // Handle scroll detection for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section for navigation highlighting
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    navigationItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  // Handle mobile menu state on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = useCallback(
    (item: NavItem) => {
      if (item.type === 'scroll') {
        const element = document.querySelector(item.href)
        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        }
      }
      setIsMobileMenuOpen(false)
    },
    []
  )

  const handleCTAClick = useCallback(() => {
    const pricingElement = document.getElementById('pricing')
    if (pricingElement) {
      const headerOffset = 80
      const elementPosition = pricingElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-xl border-b border-border/50'
          : 'bg-gradient-to-b from-background/60 to-transparent backdrop-blur-sm'
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Brand */}
            <a
              href="/"
              className="flex items-center gap-3 group"
              aria-label="WAMOCON Academy - Zur Startseite"
            >
              <div className="relative flex items-center h-14 w-[360px] transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/logo/WAMOCON_ACADEMY_LOGO.png"
                  alt="WAMOCON Academy Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>

            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive
                      ? 'text-accent'
                      : 'text-foreground-muted hover:text-foreground'
                      }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {/* Active indicator - glowing underline */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full transition-all duration-300 ${isActive ? 'w-3/4 shadow-sm shadow-accent/50' : 'w-0'
                        }`}
                    />
                    {/* Hover background */}
                    <span
                      className={`absolute inset-0 rounded-lg bg-foreground/5 transition-opacity duration-200 ${isActive ? 'opacity-0' : 'opacity-0 hover:opacity-100'
                        }`}
                    />
                  </button>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={handleCTAClick}
                className="bg-accent hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 hover:scale-105"
              >
                Jetzt starten
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2 text-foreground hover:text-accent transition-colors rounded-lg hover:bg-foreground/5"
              aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                    }`}
                  aria-hidden="true"
                />
                <X
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                    }`}
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-background/95 backdrop-blur-xl transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Content */}
        <nav
          className={`absolute top-20 left-0 right-0 bg-background-card/80 backdrop-blur-xl border-b border-border/50 transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
            }`}
          aria-label="Mobile Navigation"
        >
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col gap-2">
              {navigationItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`w-full text-left px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 ${isActive
                      ? 'text-accent bg-accent/10 border-l-2 border-accent'
                      : 'text-foreground-muted hover:text-foreground hover:bg-foreground/5 border-l-2 border-transparent'
                      }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </button>
                )
              })}

              <div className="pt-6 mt-4 border-t border-border/50">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleCTAClick}
                  className="w-full bg-accent hover:bg-accent/90 shadow-lg shadow-accent/25"
                >
                  🎯 Jetzt starten - €497
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20" aria-hidden="true" />
    </>
  )
}
