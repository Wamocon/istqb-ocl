import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum | WAMOCON Academy',
  description: 'Impressum und rechtliche Informationen der WAMOCON Academy GmbH',
}

export default function Impressum() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Impressum</h1>

          {/* Angaben gemäß § 5 TMG */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-2 text-foreground-muted">
              <p className="font-semibold text-foreground">WAMOCON Academy GmbH</p>
              <p>Mergenthaleralee 79 - 81</p>
              <p>65760 Eschborn</p>
              <p>Deutschland</p>
            </div>
          </section>

          {/* Vertreten durch */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">Vertreten durch</h2>
            <p className="text-foreground-muted">
              Geschäftsführer: Dipl.-Ing. Waleri Moretz
            </p>
          </section>

          {/* Registereintrag */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">Registereintrag</h2>
            <div className="space-y-2 text-foreground-muted">
              <p>Eingetragen im Handelsregister</p>
              <p>Registergericht: Amtsgericht Königstein</p>
              <p>Registernummer: HRB 123666</p>
              <p>Sitz der Gesellschaft: Eschborn</p>
            </div>
          </section>

          {/* Umsatzsteuer-ID */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">Umsatzsteuer-ID</h2>
            <p className="text-foreground-muted">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              <span className="font-semibold">DE344930486</span>
            </p>
          </section>

          {/* Kontakt */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">Kontakt</h2>
            <div className="space-y-2 text-foreground-muted">
              <p>
                <span className="font-semibold text-foreground">Telefon:</span>{' '}
                <a href="tel:+4961965838312" className="hover:text-accent transition-colors">
                  +49 (0) 6196 5838312
                </a>
              </p>
              <p>
                <span className="font-semibold text-foreground">E-Mail:</span>{' '}
                <a href="mailto:info@test-it-academy.de" className="hover:text-accent transition-colors">
                  info@test-it-academy.de
                </a>
              </p>
            </div>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="space-y-2 text-foreground-muted">
              <p className="font-semibold text-foreground">Dipl.-Ing. Waleri Moretz</p>
              <p>Mergenthaleralee 79 - 81</p>
              <p>65760 Eschborn</p>
            </div>
          </section>

          {/* EU-Streitschlichtung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">EU-Streitschlichtung</h2>
            <p className="text-foreground-muted mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            </p>
            <p className="text-foreground-muted">
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="text-foreground-muted mt-4">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="text-foreground-muted">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">Haftung für Inhalte</h2>
            <p className="text-foreground-muted mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
            <p className="text-foreground-muted">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">Haftung für Links</h2>
            <p className="text-foreground-muted mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich.
            </p>
            <p className="text-foreground-muted">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">Urheberrecht</h2>
            <p className="text-foreground-muted mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p className="text-foreground-muted">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
              gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
              die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
              wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          {/* Markenhinweis */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">Markenhinweis</h2>
            <p className="text-foreground-muted">
              ISTQB® und Certified Tester® sind eingetragene Marken des International Software Testing
              Qualifications Board. WAMOCON Academy GmbH ist ein unabhängiger Schulungsanbieter und
              kein offizielles Mitglied des ISTQB®.
            </p>
          </section>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-border">
            <a
              href="/"
              className="inline-flex items-center text-accent hover:underline"
            >
              ← Zurück zur Startseite
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
