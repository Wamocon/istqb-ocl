import { Card } from '@/components/ui/Card'
import { curriculum } from '@/data/curriculum'
import { Check } from 'lucide-react'

export function Curriculum() {
  return (
    <section id="curriculum" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            Dein 8-Wochen-Plan zum ISTQB-Tester
          </h2>

          <div className="text-center mb-12 space-y-2">
            <p className="text-muted">⏱️ Zeitaufwand: ~2 Stunden pro Woche</p>
            <p className="text-muted">📅 Flexible Einteilung - du bestimmst das Tempo</p>
            <p className="text-muted">♾️ Lifetime Access - lerne, so lange du willst</p>
          </div>

          <div className="space-y-6">
            {curriculum.map((module, idx) => (
              <Card key={idx} hover className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
                <div className="pl-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <div className="text-sm text-muted font-semibold mb-1">
                        WOCHE {module.week}
                      </div>
                      <h3 className="text-xl font-bold">{module.title}</h3>
                    </div>
                    <div className="mt-2 md:mt-0 flex gap-4 text-sm font-mono">
                      <span>{module.learningUnits} LE</span>
                      <span>•</span>
                      <span>{module.questions} Fragen</span>
                      <span>•</span>
                      <span>{module.examples} Beispiele</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} className="flex items-start gap-2 text-sm text-muted">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-background-alt">
              <h3 className="font-bold mb-4">📊 Gesamt:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatBox label="Lerneinheiten" value="128" />
                <StatBox label="Übungsfragen" value="316" />
                <StatBox label="Praxisbeispiele" value="84" />
                <StatBox label="Vertiefungsübungen" value="18" />
              </div>
              <p className="mt-6 text-sm text-muted">
                💡 Nach jeder Woche: Checkpoint-Test in DiTeLe
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatBox({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <div className="text-3xl font-bold font-mono text-accent mb-1">{value}</div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  )
}
