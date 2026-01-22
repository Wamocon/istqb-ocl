import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Target, PenTool, FileText, Bug, Eye, BarChart } from 'lucide-react'

export function DiTeleDeepDive() {
  return (
    <section className="py-16 md:py-24 bg-background-alt">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up" width="100%">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
              Was macht DiTeLe so besonders?
            </h2>

            {/* Problem-Solution */}
            <ScrollReveal animation="fade-in" delay={0.2} width="100%">
              <div className="max-w-3xl mx-auto mb-16">
                <Card className="bg-background-alt border-red-500/20">
                  <p className="text-lg mb-2"><strong>Das Problem:</strong> Theorie allein reicht nicht</p>
                  <p className="text-muted">
                    Du kannst alle ISTQB-Begriffe auswendig aufsagen, aber im Job oder Bewerbungsgespräch fragst du dich:
                    "Wie wende ich das eigentlich an?"
                  </p>
                </Card>

                <div className="text-center my-6">
                  <div className="w-12 h-12 mx-auto bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    ↓
                  </div>
                </div>

                <Card className="bg-background-alt border-accent">
                  <p className="text-lg mb-2"><strong>Die Lösung:</strong> DiTeLe Praxis-Tool</p>
                  <p className="mb-4">
                    Mit DiTeLe baust du echte Praxiserfahrung auf - <strong>ohne Job-Erfahrung zu brauchen</strong>.
                  </p>
                  <p className="text-accent font-bold text-lg">
                    Du lernst nicht nur ÜBER Software-Testing. Du MACHST Software-Testing.
                  </p>
                </Card>
              </div>
            </ScrollReveal>

            {/* 45+ Übungen */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
                45+ Praxisübungen zu allen ISTQB-Themen
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ScrollReveal animation="fade-up" delay={0.3} width="100%">
                  <ExerciseCard
                    icon={<Target className="w-8 h-8" />}
                    title="Testplanung & -strategie"
                    items={["Testpläne erstellen", "Risikoanalyse durchführen", "Ressourcen einschätzen"]}
                  />
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={0.35} width="100%">
                  <ExerciseCard
                    icon={<PenTool className="w-8 h-8" />}
                    title="Testanalyse & -entwurf"
                    items={["Äquivalenzklassen bilden", "Grenzwertanalyse", "Entscheidungstabellen"]}
                  />
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={0.4} width="100%">
                  <ExerciseCard
                    icon={<FileText className="w-8 h-8" />}
                    title="Testfallerstellung"
                    items={["Testfälle schreiben", "Testdaten definieren", "Ergebnisse formulieren"]}
                  />
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={0.45} width="100%">
                  <ExerciseCard
                    icon={<Bug className="w-8 h-8" />}
                    title="Fehleranalyse"
                    items={["Fehlerberichte schreiben", "Fehlerschwere bewerten", "Fehler reproduzieren"]}
                  />
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={0.5} width="100%">
                  <ExerciseCard
                    icon={<Eye className="w-8 h-8" />}
                    title="Statisches Testen"
                    items={["Code-Reviews", "Spezifikationen prüfen"]}
                  />
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={0.55} width="100%">
                  <ExerciseCard
                    icon={<BarChart className="w-8 h-8" />}
                    title="Testmanagement"
                    items={["Testfortschritt überwachen", "Metriken interpretieren"]}
                  />
                </ScrollReveal>
              </div>
            </div>

            {/* How it works */}
            <ScrollReveal animation="fade-up" delay={0.6} width="100%">
              <div className="mt-16">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
                  So funktioniert DiTeLe
                </h3>

                <div className="grid md:grid-cols-4 gap-6">
                  <ScrollReveal animation="fade-up" delay={0.6} width="100%"><StepCard number="1" title="Wähle eine Übung" description="Du siehst ein reales Testing-Szenario" /></ScrollReveal>
                  <ScrollReveal animation="fade-up" delay={0.7} width="100%"><StepCard number="2" title="Löse die Aufgabe" description="Interaktive Tools: Drag & Drop, Formulare, Diagramme" /></ScrollReveal>
                  <ScrollReveal animation="fade-up" delay={0.8} width="100%"><StepCard number="3" title="Erhalte Feedback" description="Sofortige Auswertung + Erklärung 'Warum?'" /></ScrollReveal>
                  <ScrollReveal animation="fade-up" delay={0.9} width="100%"><StepCard number="4" title="Baue Praxis auf" description="Progress Tracking zeigt deine Entwicklung" /></ScrollReveal>
                </div>

              </div>
            </ScrollReveal>

            {/* Testimonial */}
            <ScrollReveal animation="scale-up" delay={0.8} width="100%">
              <div className="mt-16 max-w-3xl mx-auto">
                <Card className="bg-primary text-white">
                  <p className="text-lg mb-4">"Das sagen Teilnehmer über DiTeLe:"</p>
                  <blockquote className="text-xl italic mb-4">
                    "DiTeLe war der Game-Changer! Endlich konnte ich selbst Testfälle schreiben und nicht nur darüber lesen.
                    Im Bewerbungsgespräch konnte ich konkrete Beispiele nennen - obwohl ich noch nie beruflich getestet hatte."
                  </blockquote>
                  <p className="font-semibold">- Sarah W., jetzt Software-Testerin bei Digital Solutions AG</p>
                </Card>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Button variant="primary" size="xl" className="bg-accent hover:bg-accent/90">
                DiTeLe jetzt freischalten
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function ExerciseCard({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) {
  return (
    <Card hover>
      <div className="text-accent mb-3">{icon}</div>
      <h4 className="font-bold mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-muted">
        {items.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>
    </Card>
  )
}

function StepCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 mx-auto mb-4 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-sm text-muted">{description}</p>
    </div>
  )
}
