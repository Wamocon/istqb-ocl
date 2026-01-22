'use client'

import { useCallback } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import Image from 'next/image'

interface FooterLink {
  id: string
  label: string
  href: string
  type: 'scroll' | 'link' | 'external'
  ariaLabel?: string
}

interface SocialLink {
  platform: string
  url: string
  ariaLabel: string
}

const navigationLinks: FooterLink[] = [
  { id: 'startseite', label: 'Startseite', href: '#hero', type: 'scroll', ariaLabel: 'Zur Startseite scrollen' },
  { id: 'online-kurs', label: 'Online-Kurs', href: '#course-walkthrough', type: 'scroll', ariaLabel: 'Zum Online-Kurs scrollen' },
  { id: 'praxis-tool', label: 'Praxis-Tool', href: '#ditele-walkthrough', type: 'scroll', ariaLabel: 'Zum Praxis-Tool scrollen' },
  { id: 'lernplan', label: 'Dein Lernplan', href: '#curriculum', type: 'scroll', ariaLabel: 'Zum Lernplan scrollen' },
  { id: 'erfolgsgeschichten', label: 'Erfolgsgeschichten', href: '#success-stories', type: 'scroll', ariaLabel: 'Zu den Erfolgsgeschichten scrollen' },
  { id: 'pricing', label: 'Preise', href: '#pricing', type: 'scroll', ariaLabel: 'Zur Preisübersicht scrollen' },
  { id: 'faq', label: 'FAQ', href: '#faq', type: 'scroll', ariaLabel: 'Zu den häufigen Fragen scrollen' },
]

const legalLinks: FooterLink[] = [
  { id: 'impressum', label: 'Impressum', href: '/impressum', type: 'link' },
  { id: 'datenschutz', label: 'Datenschutz', href: '/datenschutz', type: 'link' },
  { id: 'agb', label: 'AGB', href: '/agb', type: 'link' },
]

const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/bildungszentrum_wma/',
    ariaLabel: 'Besuchen Sie uns auf Instagram (öffnet in neuem Tab)',
  },
  {
    platform: 'YouTube',
    url: 'https://www.youtube.com/@WAMOCONACADEMY',
    ariaLabel: 'Besuchen Sie unseren YouTube-Kanal (öffnet in neuem Tab)',
  },
  {
    platform: 'Facebook',
    url: 'https://tr-tr.facebook.com/WAMOCONACADEMY/',
    ariaLabel: 'Besuchen Sie uns auf Facebook (öffnet in neuem Tab)',
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollClick = useCallback((href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }, [])

  const handleLinkClick = useCallback(
    (link: FooterLink, event: React.MouseEvent<HTMLAnchorElement>) => {
      if (link.type === 'scroll') {
        event.preventDefault()
        handleScrollClick(link.href)
      }
    },
    [handleScrollClick]
  )

  return (
    <footer className="relative bg-gradient-to-b from-background to-primary text-white overflow-hidden" role="contentinfo">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(254,4,4,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(254,4,4,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <ScrollReveal animation="fade-up" width="100%">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6 relative h-16 w-[400px]">
                <Image
                  src="/logo/WAMOCON_ACADEMY_LOGO.png"
                  alt="WAMOCON Academy Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                Die umfassendste ISTQB CTFL 4.0 Vorbereitung mit DiTeLe Praxis-Tool. Werde zertifizierter Software-Tester.
              </p>
              {/* Social Media */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 rounded-lg bg-foreground/5 hover:bg-accent/20 border border-border/50 hover:border-accent/50 transition-all duration-300"
                    aria-label={social.ariaLabel}
                  >
                    <span className="text-foreground-muted group-hover:text-accent transition-colors font-semibold text-sm">
                      {social.platform.charAt(0)}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-foreground-muted">Navigation</h4>
              <nav aria-label="Footer Navigation">
                <ul className="space-y-3">
                  {navigationLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(link, e)}
                        className="group inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-accent transition-all duration-300"
                        aria-label={link.ariaLabel || link.label}
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-accent rounded-full transition-all duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-foreground-muted">Rechtliches</h4>
              <nav aria-label="Rechtliche Hinweise">
                <ul className="space-y-3">
                  {legalLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-accent transition-all duration-300"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-accent rounded-full transition-all duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-foreground-muted">Kontakt</h4>
              <address className="not-italic space-y-3 text-sm">
                <div>
                  <span className="sr-only">E-Mail: </span>
                  <a
                    href="mailto:info@test-it-academy.de"
                    className="text-foreground-muted hover:text-accent transition-colors duration-300 flex items-center gap-2"
                    aria-label="Senden Sie uns eine E-Mail"
                  >
                    <span className="text-accent">→</span>
                    info@test-it-academy.de
                  </a>
                </div>
                <div>
                  <span className="sr-only">Telefon: </span>
                  <a
                    href="tel:+4961965838312"
                    className="text-foreground-muted hover:text-accent transition-colors duration-300 flex items-center gap-2"
                    aria-label="Rufen Sie uns an"
                  >
                    <span className="text-accent">→</span>
                    +49 (0) 6196 5838312
                  </a>
                </div>
                <div className="flex items-center gap-2 text-foreground-muted">
                  <span className="text-accent">→</span>
                  <time>Mo-Fr: 9-18 Uhr</time>
                </div>
              </address>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-foreground-muted">
                © {currentYear}{' '}
                <a
                  href="/impressum"
                  className="hover:text-accent transition-colors duration-300 font-medium"
                  aria-label="Zum Impressum"
                >
                  WAMOCON Academy GmbH
                </a>
                <span className="hidden sm:inline"> • Alle Rechte vorbehalten</span>
              </p>
            </div>
            <div className="text-center text-xs text-foreground-muted/70">
              <p className="font-mono tracking-wide">
                ISTQB® und Certified Tester® sind eingetragene Marken des{' '}
                <abbr title="International Software Testing Qualifications Board" className="no-underline">
                  ISTQB
                </abbr>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
