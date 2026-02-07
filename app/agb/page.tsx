import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB | WAMOCON Academy',
  description: 'Allgemeine Geschäftsbedingungen der WAMOCON Academy GmbH',
}

export default function AGB() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-12">
            <p className="text-sm text-foreground-muted">
              <strong className="text-foreground">Hinweis:</strong> Diese AGB sind ein Grundgerüst
              und müssen von einem Fachanwalt geprüft und vervollständigt werden, um rechtssicher zu sein.
            </p>
          </div>

          {/* 1. Geltungsbereich */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">§ 1 Geltungsbereich</h2>
            <p className="text-foreground-muted mb-4">
              (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") der WAMOCON Academy GmbH,
              Mergenthaleralee 79-81, 65760 Eschborn (nachfolgend „Anbieter"), gelten für alle
              Verträge über die Nutzung digitaler Inhalte (Online-Kurse, Lernmaterialien, Zugang zu
              E-Learning-Plattformen), die ein Verbraucher oder Unternehmer (nachfolgend „Kunde") mit
              dem Anbieter hinsichtlich der vom Anbieter in seinem Online-Shop dargestellten Waren
              und/oder Leistungen abschließt.
            </p>
            <p className="text-foreground-muted">
              (2) Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft
              zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer
              selbstständigen beruflichen Tätigkeit zugerechnet werden können.
            </p>
          </section>

          {/* 2. Vertragsgegenstand */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">§ 2 Vertragsgegenstand</h2>
            <p className="text-foreground-muted mb-4">
              (1) Gegenstand des Vertrages ist der Zugang zu folgenden digitalen Inhalten:
            </p>
            <ul className="list-disc list-inside text-foreground-muted mb-4 space-y-2">
              <li>ISTQB CTFL 4.0 Online-Kurs mit 128 Lerneinheiten</li>
              <li>Zugang zur DiTeLe Praxis-Tool Web-App (https://ditele-learn.ai/de)</li>
              <li>Zugang zur Eloomi-Kursplattform (https://360-tm.eloomi.io)</li>
              <li>300+ Übungsfragen</li>
              <li>Prüfungssimulation und Progress-Tracking</li>
            </ul>
            <p className="text-foreground-muted">
              (2) Die Bereitstellung erfolgt als „12 Monate Zugriff" - der Kunde erhält zeitlich
              begrenzten Zugang zu den digitalen Inhalten für die Dauer von 12 Monaten ab Kaufdatum.
            </p>
          </section>

          {/* 3. Vertragsschluss */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">§ 3 Vertragsschluss</h2>
            <p className="text-foreground-muted mb-4">
              (1) Die im Online-Shop des Anbieters enthaltenen Produktbeschreibungen stellen keine
              verbindlichen Angebote seitens des Anbieters dar, sondern dienen zur Abgabe eines
              verbindlichen Angebots durch den Kunden.
            </p>
            <p className="text-foreground-muted mb-4">
              (2) Der Kunde kann das Angebot über das in den Online-Shop des Anbieters integrierte
              Online-Bestellformular abgeben. Dabei gibt der Kunde, nachdem er die ausgewählten
              digitalen Inhalte in den virtuellen Warenkorb gelegt und den elektronischen
              Bestellprozess durchlaufen hat, durch Klicken des den Bestellvorgang abschließenden
              Buttons ein rechtlich verbindliches Vertragsangebot ab.
            </p>
            <p className="text-foreground-muted">
              (3) Der Anbieter kann das Angebot des Kunden innerhalb von fünf Tagen annehmen, indem
              er dem Kunden eine schriftliche Auftragsbestätigung oder eine Auftragsbestätigung in
              Textform (E-Mail) übermittelt oder indem er dem Kunden die Zugangsdaten zur Plattform
              übermittelt.
            </p>
          </section>

          {/* 4. Preise und Zahlungsbedingungen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">§ 4 Preise und Zahlungsbedingungen</h2>
            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">Aktueller Preis:</strong><br />
                • Einmalzahlung: €497 (inkl. 19% MwSt.)<br />
                • Ratenzahlung: 5x €100/Monat (inkl. 19% MwSt.)
              </p>
            </div>
            <p className="text-foreground-muted mb-4">
              (1) Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
            </p>
            <p className="text-foreground-muted mb-4">
              (2) Die Zahlung erfolgt wahlweise per:
            </p>
            <ul className="list-disc list-inside text-foreground-muted mb-4 space-y-2">
              <li>Kreditkarte</li>
              <li>Lastschrift</li>
              <li>Ratenzahlung (5x monatlich €100)</li>
            </ul>
            <p className="text-foreground-muted">
              (3) Bei Ratenzahlung erfolgen die Abbuchungen automatisch zum jeweiligen Fälligkeitsdatum.
              Bei Zahlungsverzug behält sich der Anbieter vor, den Zugang zu den digitalen Inhalten
              zu sperren, bis die ausstehenden Beträge beglichen sind.
            </p>
          </section>

          {/* 5. Bereitstellung der digitalen Inhalte */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">§ 5 Bereitstellung der digitalen Inhalte</h2>
            <p className="text-foreground-muted mb-4">
              (1) Die Bereitstellung der digitalen Inhalte erfolgt ausschließlich online über die
              Plattformen Eloomi und DiTeLe.
            </p>
            <p className="text-foreground-muted mb-4">
              (2) Nach erfolgreicher Zahlung erhält der Kunde eine E-Mail mit den Zugangsdaten zu
              beiden Plattformen. Der Zugang wird innerhalb von 24 Stunden nach Zahlungseingang
              freigeschaltet.
            </p>
            <p className="text-foreground-muted">
              (3) Voraussetzung für die Nutzung der digitalen Inhalte ist:
            </p>
            <ul className="list-disc list-inside text-foreground-muted mb-4 space-y-2">
              <li>Ein internetfähiges Endgerät (PC, Laptop, Tablet, Smartphone)</li>
              <li>Aktueller Webbrowser (Chrome, Firefox, Safari, Edge)</li>
              <li>Stabile Internetverbindung</li>
            </ul>
          </section>

          {/* 6. Widerrufsrecht */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">§ 6 Widerrufsrecht für Verbraucher</h2>
            <p className="text-foreground-muted mb-4">
              (1) Verbrauchern steht grundsätzlich ein Widerrufsrecht zu. Näheres ergibt sich aus der
              Widerrufsbelehrung des Anbieters.
            </p>
            <p className="text-foreground-muted mb-4">
              (2) <strong className="text-foreground">Wichtiger Hinweis zum Erlöschen des Widerrufsrechts:</strong>
            </p>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-4">
              <p className="text-foreground-muted">
                Das Widerrufsrecht erlischt vorzeitig, wenn der Kunde ausdrücklich zugestimmt hat,
                dass der Anbieter mit der Ausführung des Vertrages vor Ablauf der Widerrufsfrist
                beginnt, und der Kunde seine Kenntnis davon bestätigt hat, dass er durch seine
                Zustimmung mit Beginn der Ausführung des Vertrags sein Widerrufsrecht verliert.
              </p>
            </div>
            <p className="text-foreground-muted">
              Dies bedeutet: Sobald der Kunde nach Kaufabschluss auf die Kursplattformen zugreift und
              Inhalte abruft, erlischt das Widerrufsrecht. Der Kunde stimmt dem bei Kaufabschluss
              ausdrücklich zu.
            </p>
          </section>

          {/* 7. Geld-zurück-Garantie */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">§ 7 Geld-zurück-Garantie</h2>
            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">30-Tage Geld-zurück-Garantie</strong>
              </p>
            </div>
            <p className="text-foreground-muted mb-4">
              (1) Der Anbieter gewährt eine 30-tägige Geld-zurück-Garantie unter folgenden
              Bedingungen:
            </p>
            <ul className="list-disc list-inside text-foreground-muted mb-4 space-y-2">
              <li>Der Kunde hat die ISTQB CTFL 4.0 Prüfung nicht bestanden</li>
              <li>Der Kunde weist nach, dass er den kompletten Kurs durchgearbeitet hat (Eloomi-Zertifizierung)</li>
              <li>Der Kunde weist nach, dass er alle DiTeLe-Übungen absolviert hat (DiTeLe-Zertifizierung)</li>
              <li>Der Kunde legt einen Nachweis über die nicht-bestandene Prüfung vor</li>
              <li>Die Geltendmachung erfolgt innerhalb von 30 Tagen nach Prüfungstermin</li>
            </ul>
            <p className="text-foreground-muted mb-4">
              (2) Die Erstattung erfolgt auf demselben Weg, auf dem die Zahlung erfolgt ist, innerhalb
              von 14 Tagen nach Prüfung der Voraussetzungen.
            </p>
            <p className="text-foreground-muted">
              (3) Nach Erstattung wird der Zugang zu den digitalen Inhalten gesperrt.
            </p>
          </section>

          {/* 8. Gewährleistung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">§ 8 Gewährleistung</h2>
            <p className="text-foreground-muted mb-4">
              (1) Es gelten die gesetzlichen Gewährleistungsrechte.
            </p>
            <p className="text-foreground-muted mb-4">
              (2) Der Anbieter gewährleistet, dass die digitalen Inhalte dem aktuellen ISTQB CTFL 4.0
              Syllabus entsprechen.
            </p>
            <p className="text-foreground-muted">
              (3) Der Anbieter übernimmt jedoch keine Garantie für das Bestehen der ISTQB-Prüfung.
              Der Prüfungserfolg hängt von individuellen Faktoren ab (Lernaufwand, Vorkenntnisse,
              Prüfungsvorbereitung).
            </p>
          </section>

          {/* 9. Haftung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">§ 9 Haftungsbeschränkung</h2>
            <p className="text-foreground-muted mb-4">
              (1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach
              dem Produkthaftungsgesetz.
            </p>
            <p className="text-foreground-muted mb-4">
              (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten haftet der
              Anbieter der Höhe nach begrenzt auf den bei Vertragsschluss vorhersehbaren Schaden.
            </p>
            <p className="text-foreground-muted">
              (3) Im Übrigen ist eine Haftung des Anbieters ausgeschlossen.
            </p>
          </section>

          {/* 10. Nutzungsrechte */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">§ 10 Nutzungsrechte und Urheberrecht</h2>
            <p className="text-foreground-muted mb-4">
              (1) Alle Inhalte (Texte, Videos, Übungen, Materialien) sind urheberrechtlich geschützt.
            </p>
            <p className="text-foreground-muted mb-4">
              (2) Der Kunde erhält ein nicht-exklusives, nicht-übertragbares Nutzungsrecht für den
              eigenen Gebrauch. Die Weitergabe, Vervielfältigung oder öffentliche Zugänglichmachung
              der Inhalte ist nicht gestattet.
            </p>
            <p className="text-foreground-muted">
              (3) Bei Verstoß gegen diese Nutzungsbedingungen behält sich der Anbieter vor, den
              Zugang zu sperren und Schadensersatz geltend zu machen.
            </p>
          </section>

          {/* 11. Laufzeit und Kündigung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">§ 11 Laufzeit und Kündigung</h2>
            <p className="text-foreground-muted mb-4">
              (1) Der Vertrag wird auf bestimmte Zeit geschlossen („12 Monate Zugriff").
            </p>
            <p className="text-foreground-muted mb-4">
              (2) Eine ordentliche Kündigung ist nicht vorgesehen, da es sich um eine Einmalzahlung
              ohne Abo-Modell handelt.
            </p>
            <p className="text-foreground-muted">
              (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
            </p>
          </section>

          {/* 12. Streitbeilegung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">§ 12 Streitbeilegung</h2>
            <p className="text-foreground-muted mb-4">
              (1) Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit, die Sie unter{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>{' '}
              finden.
            </p>
            <p className="text-foreground-muted">
              (2) Wir sind nicht bereit und nicht verpflichtet, an einem Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* 13. Schlussbestimmungen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">§ 13 Schlussbestimmungen</h2>
            <p className="text-foreground-muted mb-4">
              (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
              UN-Kaufrechts.
            </p>
            <p className="text-foreground-muted mb-4">
              (2) Sofern es sich beim Kunden um einen Kaufmann, eine juristische Person des
              öffentlichen Rechts oder um ein öffentlich-rechtliches Sondervermögen handelt, ist
              Gerichtsstand für alle Streitigkeiten aus Vertragsverhältnissen zwischen dem Kunden
              und dem Anbieter der Sitz des Anbieters.
            </p>
            <p className="text-foreground-muted">
              (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies
              die Wirksamkeit der übrigen Bestimmungen nicht.
            </p>
          </section>

          {/* Hinweis */}
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-12">
            <p className="text-sm text-foreground-muted">
              <strong className="text-foreground">Wichtiger Hinweis:</strong> Diese AGB sind ein
              Grundgerüst und müssen vor dem produktiven Einsatz durch einen Fachanwalt für
              IT-Recht geprüft und an die spezifischen Anforderungen Ihres Geschäftsmodells
              angepasst werden. Insbesondere die Regelungen zu Widerrufsrecht, Geld-zurück-Garantie
              und Haftung bedürfen juristischer Prüfung.
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
