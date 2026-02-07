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

          <p className="text-foreground-muted mb-8">
            Stand: Februar 2026
          </p>

          {/* 1. Datenschutz auf einen Blick */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="text-foreground-muted mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="text-foreground-muted mb-4">
              <strong className="text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser
              Datenschutzerklärung entnehmen.
            </p>

            <p className="text-foreground-muted mb-4">
              <strong className="text-foreground">Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
              es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten
              werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
              IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
              Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
              automatisch, sobald Sie diese Website betreten.
            </p>

            <p className="text-foreground-muted mb-4">
              <strong className="text-foreground">Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p className="text-foreground-muted mb-4">
              <strong className="text-foreground">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
              Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung
              zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die
              Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </p>
          </section>

          {/* 2. Hosting */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">2. Hosting</h2>

            <p className="text-foreground-muted mb-4">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Externes Hosting</h3>
            <p className="text-foreground-muted mb-4">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
              Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann
              es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
              Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über
              eine Website generiert werden, handeln.
            </p>

            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">Aktueller Hoster:</strong> Strato AG<br />
                <strong className="text-foreground">Serverstandort:</strong> EU (Deutschland)
              </p>
            </div>

            <p className="text-foreground-muted mb-4">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
              potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
              einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots
              durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
              auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die
              Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
              Endgerät des Nutzers (z.B. Device-Fingerprinting) im Sinne des TDDDG umfasst.
            </p>

            <h4 className="text-lg font-semibold mb-2 mt-4">Auftragsverarbeitung</h4>
            <p className="text-foreground-muted">
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten
              Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich
              vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten
              unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO
              verarbeitet.
            </p>
          </section>

          {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Datenschutz</h3>
            <p className="text-foreground-muted mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-foreground-muted mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
              Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
              sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p className="text-foreground-muted mb-4">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation
              per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
              Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-foreground-muted mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
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
            <p className="text-foreground-muted mb-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
              Daten (z.B. Namen, E-Mail-Adressen o.Ä.) entscheidet.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Speicherdauer</h3>
            <p className="text-foreground-muted mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
              Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder
              eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
              wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen
              Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten
              Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung</h3>
            <p className="text-foreground-muted mb-4">
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
              personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2
              lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet
              werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener
              Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49
              Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf
              Informationen in Ihr Endgerät (z.B. via Device-Fingerprinting) eingewilligt haben,
              erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die
              Einwilligung ist jederzeit widerrufbar.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</h3>
            <p className="text-foreground-muted mb-4">
              Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen
              datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, können
              Ihre personenbezogenen Daten in diese Drittstaaten übertragen und dort verarbeitet
              werden. Wir weisen darauf hin, dass in diesen Ländern kein mit der EU vergleichbares
              Datenschutzniveau garantiert werden kann. Soweit die EU-Kommission für bestimmte
              Drittstaaten einen Angemessenheitsbeschluss gefasst hat, erfolgt die Übertragung auf
              dieser Grundlage.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="text-foreground-muted mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
              Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
              der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen (Art. 21 DSGVO)</h3>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
                  ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
                  SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
                  EINZULEGEN.</strong> Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
                Die jeweilige Rechtsgrundlage, auf der eine Verarbeitung beruht, entnehmen Sie dieser
                Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen
                personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende
                schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
                Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder
                Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="text-foreground-muted mb-4">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
              einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts,
              ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
              besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>
            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">Zuständige Aufsichtsbehörde (Hessen):</strong><br />
                Der Hessische Beauftragte für Datenschutz und Informationsfreiheit<br />
                Postfach 3163, 65021 Wiesbaden<br />
                <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  https://datenschutz.hessen.de
                </a>
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
            <p className="text-foreground-muted mb-4">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
              eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem
              gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte
              Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
              soweit es technisch machbar ist.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Auskunft, Berichtigung und Löschung</h3>
            <p className="text-foreground-muted mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
              unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
              und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
              oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
              Daten können Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Recht auf Einschränkung der Verarbeitung</h3>
            <p className="text-foreground-muted mb-4">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf
              Einschränkung der Verarbeitung besteht in folgenden Fällen:
            </p>
            <ul className="list-disc list-inside text-foreground-muted mb-4 space-y-2">
              <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten</li>
              <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht</li>
              <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie diese jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen</li>
              <li>Wenn Sie Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="text-foreground-muted mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
              senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an
              dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className="text-foreground-muted">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
              übermitteln, nicht von Dritten mitgelesen werden.
            </p>
          </section>

          {/* 4. Datenerfassung auf dieser Website */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Cookies</h3>
            <p className="text-foreground-muted mb-4">
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete
              und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für
              die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
              Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch
              gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese
              selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
            <p className="text-foreground-muted mb-4">
              Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen
              (sogenannte Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung
              bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z.B. Cookies
              zur Abwicklung von Zahlungsdienstleistungen).
            </p>
            <p className="text-foreground-muted mb-4">
              Technisch notwendige Cookies (Art. 6 Abs. 1 lit. f DSGVO) werden gesetzt, um die
              Funktionsfähigkeit unserer Website sicherzustellen. Alle anderen Cookies werden nur
              mit Ihrer ausdrücklichen Einwilligung gesetzt (Art. 6 Abs. 1 lit. a DSGVO; § 25 Abs. 1
              TDDDG).
            </p>

            <h4 className="text-lg font-semibold mb-2 mt-4">Cookie-Einwilligung</h4>
            <p className="text-foreground-muted mb-4">
              Beim ersten Besuch unserer Website werden Sie über einen Cookie-Banner über die
              Verwendung von Cookies informiert und um Ihre Einwilligung gebeten. Ohne Ihre
              ausdrückliche Einwilligung werden keine Cookies gesetzt, die über die technisch
              notwendigen hinausgehen.
            </p>
            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">Ihre Einwilligung verwalten:</strong><br />
                Sie können Ihre Cookie-Einstellungen jederzeit über das Cookie-Symbol unten links auf
                der Seite anpassen oder widerrufen.
              </p>
            </div>

            <h4 className="text-lg font-semibold mb-2 mt-4">Kategorien von Cookies</h4>
            <ul className="list-disc list-inside text-foreground-muted mb-4 space-y-2">
              <li><strong className="text-foreground">Notwendig:</strong> Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.</li>
              <li><strong className="text-foreground">Statistik:</strong> Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.</li>
              <li><strong className="text-foreground">Marketing:</strong> Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.</li>
            </ul>

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
            <p className="text-foreground-muted mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
            <p className="text-foreground-muted mb-4">
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
              Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
              Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Dateien
              erfasst werden.
            </p>
            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">Speicherdauer:</strong> Die Daten werden nach 7 Tagen automatisch gelöscht.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">Kontaktformular & E-Mail-Anfragen</h3>
            <p className="text-foreground-muted mb-4">
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-foreground-muted mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
              beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
              Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">Speicherdauer:</strong> Die von Ihnen im Kontaktformular eingegebenen Daten
                verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
                Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach
                abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
                insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </div>
          </section>

          {/* 5. Analyse-Tools und Werbung */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">5. Analyse-Tools und Werbung</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Google Analytics 4</h3>
            <p className="text-foreground-muted mb-4">
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics 4. Anbieter ist
              die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="text-foreground-muted mb-4">
              Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher
              zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie
              z.B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers.
              Diese Daten werden in einem nutzerbezogenen Profil zusammengefasst und der jeweiligen
              Nutzer-ID zugeordnet.
            </p>
            <p className="text-foreground-muted mb-4">
              Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch
              Sie ermöglichen. Die durch die Cookies erzeugten Informationen über Ihre Benutzung
              dieser Website werden in der Regel an einen Server von Google in den USA übertragen
              und dort gespeichert. Wir haben die IP-Anonymisierung aktiviert. Dadurch wird Ihre
              IP-Adresse von Google innerhalb von Mitgliedstaaten der EU gekürzt.
            </p>
            <p className="text-foreground-muted mb-4">
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1
              lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">Cookies:</strong> _ga, _gid, _gat<br />
                <strong className="text-foreground">Speicherdauer:</strong> bis zu 2 Jahre<br />
                <strong className="text-foreground">Rechtsgrundlage:</strong> Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              </p>
            </div>
            <p className="text-foreground-muted mb-4">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission
              gestützt. Details finden Sie hier:{' '}
              <a
                href="https://privacy.google.com/businesses/controllerterms/mccs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://privacy.google.com/businesses/controllerterms/mccs/
              </a>
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Meta Pixel (Facebook Pixel)</h3>
            <p className="text-foreground-muted mb-4">
              Diese Website nutzt zur Konversionsmessung das Meta Pixel von Meta Platforms Ireland
              Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland („Meta").
            </p>
            <p className="text-foreground-muted mb-4">
              So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick
              auf eine Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden.
              Dadurch können die Wirksamkeit der Facebook-Werbeanzeigen für statistische und
              Marktforschungszwecke ausgewertet werden und zukünftige Werbemaßnahmen optimiert werden.
            </p>
            <p className="text-foreground-muted mb-4">
              Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine
              Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden aber von Meta
              gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich
              ist und Meta die Daten für eigene Werbezwecke, entsprechend der
              Meta-Datenverwendungsrichtlinie verwenden kann.
            </p>
            <p className="text-foreground-muted mb-4">
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1
              lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">Cookies:</strong> _fbp, _fbc<br />
                <strong className="text-foreground">Speicherdauer:</strong> bis zu 3 Monate<br />
                <strong className="text-foreground">Rechtsgrundlage:</strong> Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              </p>
            </div>
            <p className="text-foreground-muted mb-4">
              Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website
              erfasst und an Meta weitergeleitet werden, sind wir und die Meta Platforms Ireland
              Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese
              Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit
              beschränkt sich dabei ausschließlich auf die Erfassung der Daten und deren Weitergabe
              an Meta.
            </p>
            <p className="text-foreground-muted mb-4">
              Weitere Informationen finden Sie in der Datenschutzerklärung von Meta:{' '}
              <a
                href="https://www.facebook.com/about/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.facebook.com/about/privacy/
              </a>
            </p>
          </section>

          {/* 6. Plugins und Tools */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">6. Plugins und Tools</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Google Fonts (lokales Hosting)</h3>
            <p className="text-foreground-muted mb-4">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google
              Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert.
              Eine Verbindung zu Servern von Google findet dabei nicht statt.
            </p>
            <p className="text-foreground-muted">
              Weitere Informationen zu Google Fonts finden Sie unter{' '}
              <a
                href="https://developers.google.com/fonts/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://developers.google.com/fonts/faq
              </a>
              {' '}und in der Datenschutzerklärung von Google:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>
          </section>

          {/* 7. E-Learning-Plattformen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">7. E-Learning-Plattformen</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Eloomi & DiTeLe</h3>
            <p className="text-foreground-muted mb-4">
              Nach dem Kauf erhalten Sie Zugang zu unseren Kurs-Plattformen. Dabei werden die für
              die Vertragserfüllung erforderlichen personenbezogenen Daten (Name, E-Mail-Adresse)
              an die jeweiligen Plattformanbieter übermittelt.
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
            <p className="text-foreground-muted mb-4">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
              Beide Plattformen haben eigene Datenschutzerklärungen, die Sie beim Zugriff auf die
              jeweilige Plattform einsehen können.
            </p>
          </section>

          {/* 8. Ihre Rechte im Überblick */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">8. Ihre Rechte im Überblick</h2>

            <p className="text-foreground-muted mb-4">
              Sie haben gemäß DSGVO folgende Rechte:
            </p>
            <ul className="list-disc list-inside text-foreground-muted mb-4 space-y-2">
              <li><strong className="text-foreground">Art. 15 DSGVO:</strong> Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
              <li><strong className="text-foreground">Art. 16 DSGVO:</strong> Recht auf Berichtigung unrichtiger oder unvollständiger Daten</li>
              <li><strong className="text-foreground">Art. 17 DSGVO:</strong> Recht auf Löschung Ihrer bei uns gespeicherten Daten</li>
              <li><strong className="text-foreground">Art. 18 DSGVO:</strong> Recht auf Einschränkung der Verarbeitung</li>
              <li><strong className="text-foreground">Art. 20 DSGVO:</strong> Recht auf Datenübertragbarkeit</li>
              <li><strong className="text-foreground">Art. 21 DSGVO:</strong> Recht auf Widerspruch gegen die Verarbeitung</li>
              <li><strong className="text-foreground">Art. 7 Abs. 3 DSGVO:</strong> Recht auf Widerruf einer erteilten Einwilligung</li>
              <li><strong className="text-foreground">Art. 77 DSGVO:</strong> Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
            </ul>

            <div className="bg-background-card p-4 rounded-lg mb-4">
              <p className="text-foreground-muted">
                <strong className="text-foreground">Kontakt für Datenschutz-Anfragen:</strong><br />
                E-Mail: <a href="mailto:info@test-it-academy.de" className="text-accent hover:underline">info@test-it-academy.de</a>
              </p>
            </div>
          </section>

          {/* Aktualitätshinweis */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p className="text-foreground-muted mb-4">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2026.
            </p>
            <p className="text-foreground-muted">
              Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund
              geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden,
              diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann
              jederzeit auf der Website von Ihnen abgerufen und ausgedruckt werden.
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
