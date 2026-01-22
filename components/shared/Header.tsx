'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface NavItem {
  id: string
  label: string
  href: string
  type: 'link' | 'button' | 'scroll'
}

const navigationItems: NavItem[] = [
  { id: 'features', label: 'Features', href: '#features', type: 'scroll' },
  { id: 'ditele', label: 'DiTeLe Demo', href: '#ditele-demo', type: 'scroll' },
  { id: 'curriculum', label: 'Curriculum', href: '#curriculum', type: 'scroll' },
  { id: 'pricing', label: 'Preise', href: '#pricing', type: 'scroll' },
  { id: 'faq', label: 'FAQ', href: '#faq', type: 'scroll' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

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
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
            : 'bg-transparent'
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
              <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg transition-transform group-hover:scale-110">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-foreground font-bold text-lg leading-tight">
                  WAMOCON Academy
                </div>
                <div className="text-foreground-muted text-xs">ISTQB CTFL 4.0</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground-muted hover:text-foreground hover:bg-background-card'
                  }`}
                  aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={handleCTAClick}
                className="bg-accent hover:bg-accent/90"
              >
                Jetzt starten
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
              aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Content */}
        <nav
          className={`absolute top-20 left-0 right-0 bg-background-card border-b border-border transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          aria-label="Mobile Navigation"
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground-muted hover:text-foreground hover:bg-background'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 mt-4 border-t border-border">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleCTAClick}
                  className="w-full bg-accent hover:bg-accent/90"
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
