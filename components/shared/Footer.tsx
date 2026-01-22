'use client'

import { useCallback } from 'react'

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

const productLinks: FooterLink[] = [
  { id: 'pricing', label: 'Preise', href: '#pricing', type: 'scroll', ariaLabel: 'Zur Preisübersicht scrollen' },
  { id: 'features', label: 'Features', href: '#features', type: 'scroll', ariaLabel: 'Zu den Features scrollen' },
  { id: 'ditele', label: 'DiTeLe Demo', href: '#ditele-demo', type: 'scroll', ariaLabel: 'Zur DiTeLe Demo scrollen' },
  { id: 'curriculum', label: 'Curriculum', href: '#curriculum', type: 'scroll', ariaLabel: 'Zum Curriculum scrollen' },
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
      // For 'link' and 'external' types, let the default behavior happen
    },
    [handleScrollClick]
  )

  return (
    <footer className="bg-primary text-white py-12" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg">
                <span className="text-white font-bold text-xl" aria-hidden="true">W</span>
              </div>
              <h3 className="font-bold text-lg">WAMOCON Academy</h3>
            </div>
            <p className="text-sm text-foreground-muted">
              Die umfassendste ISTQB CTFL 4.0 Vorbereitung mit DiTeLe Praxis-Tool
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold mb-4">Produkt</h4>
            <nav aria-label="Produkt-Navigation">
              <ul className="space-y-2 text-sm text-foreground-muted">
                {productLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(link, e)}
                      className="hover:text-accent transition-colors inline-block"
                      aria-label={link.ariaLabel || link.label}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-4">Rechtliches</h4>
            <nav aria-label="Rechtliche Hinweise">
              <ul className="space-y-2 text-sm text-foreground-muted">
                {legalLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="hover:text-accent transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <address className="not-italic">
              <ul className="space-y-2 text-sm text-foreground-muted">
                <li>
                  <span className="sr-only">E-Mail: </span>
                  <a
                    href="mailto:info@test-it-academy.de"
                    className="hover:text-accent transition-colors"
                    aria-label="Senden Sie uns eine E-Mail"
                  >
                    info@test-it-academy.de
                  </a>
                </li>
                <li>
                  <span className="sr-only">Telefon: </span>
                  <a
                    href="tel:+4961965838312"
                    className="hover:text-accent transition-colors"
                    aria-label="Rufen Sie uns an"
                  >
                    +49 (0) 6196 5838312
                  </a>
                </li>
                <li>
                  <time>Mo-Fr: 9-18 Uhr</time>
                </li>
              </ul>
            </address>

            {/* Social Media Links */}
            <div className="pt-4">
              <h5 className="sr-only">Folgen Sie uns auf Social Media</h5>
              <div className="flex flex-wrap gap-4 text-sm">
                {socialLinks.map((social, index) => (
                  <span key={social.platform}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                      aria-label={social.ariaLabel}
                    >
                      {social.platform}
                    </a>
                    {index < socialLinks.length - 1 && (
                      <span className="ml-4 text-foreground-muted" aria-hidden="true">
                        •
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="text-center text-sm text-foreground-muted space-y-2">
            <p>
              © {currentYear}{' '}
              <a
                href="/impressum"
                className="hover:text-accent transition-colors"
                aria-label="Zum Impressum"
              >
                WAMOCON Academy GmbH
              </a>
              . Alle Rechte vorbehalten.
            </p>
            <p>
              ISTQB® und Certified Tester® sind eingetragene Marken des{' '}
              <abbr title="International Software Testing Qualifications Board">
                ISTQB
              </abbr>
              . WAMOCON Academy GmbH ist ein unabhängiger Schulungsanbieter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-foreground-muted">
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault()
                handleScrollClick('#pricing')
              }}
              className="hover:text-accent transition-colors"
            >
              Zum Kurs
            </a>
            <span aria-hidden="true">•</span>
            <a href="/datenschutz" className="hover:text-accent transition-colors">
              Datenschutz
            </a>
            <span aria-hidden="true">•</span>
            <a href="/impressum" className="hover:text-accent transition-colors">
              Impressum
            </a>
            <span aria-hidden="true">•</span>
            <a href="/agb" className="hover:text-accent transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
