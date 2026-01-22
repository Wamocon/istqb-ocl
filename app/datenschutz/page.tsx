import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | WAMOCON Academy',
  description: 'Datenschutzerklärung der WAMOCON Academy GmbH - DSGVO-konform',
}

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Datenschutzerklärung</h1>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-12">
            <p className="text-sm text-foreground-muted">
              <strong className="text-foreground">Hinweis:</strong> Diese Datenschutzerklärung ist ein Grundgerüst
              und muss von einem Fachanwalt oder mit einem professionellen Generator (z.B. eRecht24)
              vervollständigt werden, um DSGVO-konform zu sein.
            </p>
          </div>

          {/* 1. Datenschutz auf einen Blick */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="text-foreground-muted mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="text-foreground-muted mb-4">
              <strong className="text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <p className="text-foreground-muted mb-4">
              <strong className="text-foreground">Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
              es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten
              werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
              IT-Systeme erfasst.
            </p>
          </section>

          {/* 2. Hosting */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">2. Hosting</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Externes Hosting</h3>
            <p className="text-foreground-muted mb-4">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
              personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern
              des Hosters gespeichert.
            </p>

            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">Aktueller Hoster:</strong> Strato AG<br />
                <strong className="text-foreground">Serverstandort:</strong> EU (Deutschland)
              </p>
            </div>

            <p className="text-foreground-muted">
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
              potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer
              sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen
              professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Datenschutz</h3>
            <p className="text-foreground-muted mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Verantwortliche Stelle</h3>
            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">WAMOCON Academy GmbH</strong><br />
                Mergenthaleralee 79 - 81<br />
                65760 Eschborn<br />
                Deutschland<br /><br />
                Telefon: <a href="tel:+4961965838312" className="text-accent hover:underline">+49 (0) 6196 5838312</a><br />
                E-Mail: <a href="mailto:info@test-it-academy.de" className="text-accent hover:underline">info@test-it-academy.de</a>
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">Datenschutzbeauftragter</h3>
            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">Kontakt:</strong><br />
                E-Mail: <a href="mailto:info@test-it-academy.de" className="text-accent hover:underline">info@test-it-academy.de</a>
              </p>
            </div>
          </section>

          {/* 4. Datenerfassung auf dieser Website */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Server-Log-Dateien</h3>
            <p className="text-foreground-muted mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-foreground-muted mb-4 space-y-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Kontaktformular & E-Mail-Anfragen</h3>
            <p className="text-foreground-muted mb-4">
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
          </section>

          {/* 5. Analyse-Tools und Werbung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">5. Analyse-Tools und Werbung</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Google Analytics</h3>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-4">
              <p className="text-foreground-muted text-sm">
                <strong className="text-foreground">Status:</strong> Geplant, noch nicht implementiert
              </p>
            </div>
            <p className="text-foreground-muted mb-4">
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die
              Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="text-foreground-muted mb-4">
              Google Analytics verwendet so genannte „Cookies". Das sind Textdateien, die auf Ihrem
              Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie
              ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser
              Website werden in der Regel an einen Server von Google in den USA übertragen und dort
              gespeichert.
            </p>
          </section>

          {/* 6. Newsletter */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">6. Newsletter</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Newsletter-Daten</h3>
            <p className="text-foreground-muted mb-4">
              Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von
              Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten,
              dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des
              Newsletters einverstanden sind.
            </p>

            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">Newsletter-Provider:</strong> Mailchimp (geplant)<br />
                <strong className="text-foreground">Anbieter:</strong> The Rocket Science Group LLC, USA
              </p>
            </div>
          </section>

          {/* 7. Plugins und Tools */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">7. Plugins und Tools</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Google Maps</h3>
            <p className="text-foreground-muted mb-4">
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited
              („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Google reCAPTCHA</h3>
            <p className="text-foreground-muted mb-4">
              Wir nutzen „Google reCAPTCHA" (im Folgenden „reCAPTCHA") auf dieser Website. Anbieter
              ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
          </section>

          {/* 8. Zahlungsanbieter */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">8. Zahlungsanbieter</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Stripe</h3>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-4">
              <p className="text-foreground-muted text-sm">
                <strong className="text-foreground">Status:</strong> Geplant, noch nicht implementiert
              </p>
            </div>
            <p className="text-foreground-muted mb-4">
              Anbieter für Zahlungsdienste auf dieser Website ist Stripe Payments Europe, Ltd.,
              1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland (im Folgenden „Stripe").
            </p>
            <p className="text-foreground-muted mb-4">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission
              gestützt. Details finden Sie hier:{' '}
              <a
                href="https://stripe.com/de/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://stripe.com/de/privacy
              </a>
            </p>
          </section>

          {/* 9. E-Learning-Plattform */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">9. E-Learning-Plattform</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Eloomi & DiTeLe</h3>
            <p className="text-foreground-muted mb-4">
              Nach dem Kauf erhalten Sie Zugang zu unseren Kurs-Plattformen:
            </p>
            <ul className="list-disc list-inside text-foreground-muted mb-4 space-y-2">
              <li>
                <strong className="text-foreground">Eloomi:</strong> Online-Kurs-Plattform ({' '}
                <a
                  href="https://360-tm.eloomi.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://360-tm.eloomi.io
                </a>
                )
              </li>
              <li>
                <strong className="text-foreground">DiTeLe:</strong> Praxis-Tool ({' '}
                <a
                  href="https://ditele-learn.ai/de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://ditele-learn.ai/de
                </a>
                )
              </li>
            </ul>
            <p className="text-foreground-muted">
              Beide Plattformen haben eigene Datenschutzerklärungen, die Sie beim Zugriff auf die
              jeweilige Plattform einsehen können.
            </p>
          </section>

          {/* 10. Ihre Rechte */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">10. Ihre Rechte</h2>

            <p className="text-foreground-muted mb-4">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="list-disc list-inside text-foreground-muted mb-4 space-y-2">
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten</li>
              <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen</li>
              <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren</li>
            </ul>

            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">Kontakt für Datenschutz-Anfragen:</strong><br />
                E-Mail: <a href="mailto:info@test-it-academy.de" className="text-accent hover:underline">info@test-it-academy.de</a>
              </p>
            </div>
          </section>

          {/* Hinweis */}
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-12">
            <p className="text-sm text-foreground-muted">
              <strong className="text-foreground">Wichtiger Hinweis:</strong> Diese Datenschutzerklärung
              muss vor dem produktiven Einsatz durch einen Fachanwalt oder mit einem professionellen
              DSGVO-Generator (z.B. eRecht24, Datenschutz-Generator.de) vervollständigt und geprüft
              werden. Insbesondere müssen alle tatsächlich eingesetzten Tools und Dienste (Google
              Analytics, Mailchimp, Stripe, etc.) detailliert aufgeführt werden.
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-border">
            <a
              href="/"
              className="inline-flex items-center text-accent hover:underline"
            >
              ← Zurück zur Startseite
            </a>
          </div>

          <div className="mt-6 text-xs text-foreground-muted">
            <p>Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
