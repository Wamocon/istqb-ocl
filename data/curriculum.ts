import { LearningModule } from '@/types'

export const curriculum: LearningModule[] = [
  {
    week: '1-2',
    title: "Grundlagen des Testens",
    learningUnits: 18,
    questions: 45,
    examples: 12,
    topics: [
      "Was ist Softwaretesten?",
      "Warum ist Testen notwendig?",
      "Die 7 Testprinzipien",
      "Der Testprozess",
      "Psychologie des Testens"
    ]
  },
  {
    week: 3,
    title: "Testen im Softwarelebenszyklus",
    learningUnits: 22,
    questions: 50,
    examples: 14,
    topics: [
      "Softwareentwicklungsmodelle",
      "Teststufen (Unit, Integration, System, Abnahme)",
      "Testarten (funktional, nicht-funktional)",
      "Wartungstests"
    ]
  },
  {
    week: 4,
    title: "Statisches Testen",
    learningUnits: 15,
    questions: 38,
    examples: 10,
    topics: [
      "Grundlagen des statischen Testens",
      "Review-Prozess",
      "Code-Reviews durchführen",
      "Spezifikationen prüfen"
    ]
  },
  {
    week: 5,
    title: "Testanalyse & -entwurf",
    learningUnits: 28,
    questions: 65,
    examples: 18,
    topics: [
      "Äquivalenzklassen bilden",
      "Grenzwertanalyse anwenden",
      "Entscheidungstabellen erstellen",
      "Zustandsübergangsdiagramme"
    ]
  },
  {
    week: 6,
    title: "Testdurchführung",
    learningUnits: 20,
    questions: 48,
    examples: 15,
    topics: [
      "Testfälle schreiben",
      "Testdaten definieren",
      "Erwartete Ergebnisse formulieren",
      "Testergebnisse dokumentieren"
    ]
  },
  {
    week: 7,
    title: "Testmanagement",
    learningUnits: 16,
    questions: 42,
    examples: 10,
    topics: [
      "Testplanung",
      "Risikoanalyse",
      "Testfortschritt überwachen",
      "Metriken interpretieren"
    ]
  },
  {
    week: 8,
    title: "Testwerkzeuge & Prüfungsvorbereitung",
    learningUnits: 9,
    questions: 28,
    examples: 5,
    topics: [
      "Testwerkzeuge im Überblick",
      "Testautomatisierung",
      "Prüfungssimulation",

    ]
  }
]
