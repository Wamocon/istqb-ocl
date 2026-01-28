// Data for the IT Career Self-Test
// Based on the approved implementation plan

export interface SelbsttestQuestion {
    id: number
    question: string
    category: 'knowledge' | 'practice' | 'motivation' | 'readiness'
}

export interface SelbsttestResult {
    range: string
    minScore: number
    maxScore: number
    level: 'starter' | 'fortgeschritten' | 'ready'
    emoji: string
    title: string
    description: string
    recommendation: string
}

export interface SuccessStoryShort {
    name: string
    role: string
    quote: string
    result: string[]
    videoUrl?: string
}

export const selbsttestQuestions: SelbsttestQuestion[] = [
    {
        id: 1,
        question: 'Ich weiß, welche konkreten Skills Arbeitgeber von Software-Testern erwarten',
        category: 'knowledge'
    },
    {
        id: 2,
        question: 'Ich habe bereits praktische Erfahrung mit Testfällen, Fehlerberichten oder Testplanung gesammelt',
        category: 'practice'
    },
    {
        id: 3,
        question: 'Ich kann die wichtigsten ISTQB-Grundbegriffe (z.B. Black-Box-/White-Box-Test) erklären',
        category: 'knowledge'
    },
    {
        id: 4,
        question: 'Ich habe einen klaren Lernplan für meine ISTQB-Zertifizierung',
        category: 'readiness'
    },
    {
        id: 5,
        question: 'Ich lerne am besten durch praktische Übungen statt reines Lesen oder Videos',
        category: 'motivation'
    },
    {
        id: 6,
        question: 'Ich bin bereit, in meine IT-Karriere zu investieren, wenn sich die Investition lohnt',
        category: 'motivation'
    },
    {
        id: 7,
        question: 'Ich habe in den nächsten 4-8 Wochen regelmäßig Zeit zum Lernen (ca. 10-15h/Woche)',
        category: 'readiness'
    },
    {
        id: 8,
        question: 'Mir ist es wichtig, nicht nur die Prüfung zu bestehen, sondern auch im Job anwenden zu können',
        category: 'motivation'
    },
    {
        id: 9,
        question: 'Ich möchte jetzt handeln statt monatelang zu überlegen',
        category: 'readiness'
    }
]

export const selbsttestResults: SelbsttestResult[] = [
    {
        range: '9-18 Punkte',
        minScore: 9,
        maxScore: 18,
        level: 'starter',
        emoji: '🔴',
        title: 'STARTER',
        description: 'Du stehst noch am Anfang deiner IT-Reise. Das ist völlig okay!',
        recommendation: 'Aber ohne den richtigen Fahrplan wirst du wertvolle Zeit verlieren. Lies weiter – der Selbsttest hat dir gerade die Lücken gezeigt.'
    },
    {
        range: '19-32 Punkte',
        minScore: 19,
        maxScore: 32,
        level: 'fortgeschritten',
        emoji: '🟡',
        title: 'FORTGESCHRITTEN',
        description: 'Du hast schon ein gutes Fundament und weißt, wohin du willst.',
        recommendation: 'Was dir noch fehlt: Der strukturierte Plan + Praxiserfahrung. Erfahre, wie Artur und Natalie es geschafft haben.'
    },
    {
        range: '33-45 Punkte',
        minScore: 33,
        maxScore: 45,
        level: 'ready',
        emoji: '🟢',
        title: 'READY',
        description: 'Du bist bereit durchzustarten! Du weißt, was du willst, und bist motiviert.',
        recommendation: 'Schnapp dir den schnellsten Weg zum Ziel.'
    }
]

export const successStoriesShort: SuccessStoryShort[] = [
    {
        name: 'Natalie',
        role: 'Software Testerin',
        quote: 'Dank DiTeLe habe ich die Prüfung beim ersten Versuch bestanden',
        result: [
            'ISTQB-Zertifikat beim ersten Versuch bestanden',
            'Jetzt arbeitet sie als Software Testerin',
            'Die Praxisübungen haben den Unterschied gemacht'
        ],
        videoUrl: 'https://www.youtube.com/embed/Y530fsyTCe4'
    },
    {
        name: 'Artur',
        role: 'QA Engineer',
        quote: 'Die Praxisübungen haben den entscheidenden Unterschied gemacht',
        result: [
            'Qualifizierter QA Engineer',
            'Praxiswissen, das im Job direkt anwendbar ist',
            'Selbstbewusstes Auftreten in Projekten'
        ],
        videoUrl: 'https://www.youtube.com/embed/GIzxhk4tzmM'
    }
]

export const itMarketStats2026 = {
    openPositions: '100.000+',
    skillGap: '150.000-200.000',
    careerChangerRate: '15,3%',
    averageSalary: '€45.000-55.000/Jahr',
    maxSalary: 'bis €75.000/Jahr',
    marketGrowth: '+11%',
    failRate: '25-30%',
    failRateSource: 'trendig.com'
}

export const diteleFeatures = [
    { icon: '🎯', title: '45+ Praxisübungen', description: 'Realistische Testszenarien aus echten Projekten' },
    { icon: '📝', title: '300+ Übungsfragen', description: 'Im originalen ISTQB-Prüfungsformat' },
    { icon: '💡', title: 'Sofortiges Feedback', description: 'Nach jeder Übung erfährst du, was richtig/falsch war' },
    { icon: '🔄', title: 'Unbegrenzt wiederholbar', description: 'Übe, bis es sitzt' },
    { icon: '📊', title: 'Progress Tracking', description: 'Sieh deinen Fortschritt auf einen Blick' },
    { icon: '💼', title: 'Portfolio-tauglich', description: 'Zeig Arbeitgebern, was du kannst' }
]

export const successFactors = [
    {
        title: 'Sie investieren in sich selbst',
        description: 'Erfolgreiche Quereinsteiger behandeln ihre Karriere wie eine Investition.'
    },
    {
        title: 'Sie sammeln Praxisbeweise',
        description: 'Theorie kann jeder lesen. Der Unterschied? Projekt-Referenzen und nachweisbare Fähigkeiten.'
    },
    {
        title: 'Sie lernen strukturiert, nicht chaotisch',
        description: 'Kein Zusammensuchen von YouTube-Videos und Büchern. Sondern: Ein klarer Plan.'
    },
    {
        title: 'Sie holen sich Feedback',
        description: 'Sie lernen mit sofortigem Feedback zu ihren Lösungen.'
    },
    {
        title: 'Sie entscheiden schnell',
        description: 'Die erfolgreichsten Quereinsteiger verschwenden keine Zeit mit Grübeln.'
    }
]
