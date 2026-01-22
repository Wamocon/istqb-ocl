export interface SuccessStory {
  id: string
  name: string
  role?: string
  image: string
  videoUrl?: string
  videoThumbnail?: string
  challenge: {
    title: string
    description: string
  }
  goal: {
    title: string
    description: string
  }
  results: {
    title: string
    achievements: string[]
  }
  stats?: {
    label: string
    value: string
  }[]
}

export const successStories: SuccessStory[] = [
  {
    id: 'leon-christen',
    name: 'Leon Christen',
    role: 'ISTQB® Certified Tester',
    image: '/images/testimonials/leon-christen.jpg',
    videoUrl: 'https://www.youtube.com/embed/e924280d-68ce-44ac-a598-38d2570babba',
    videoThumbnail: 'https://i.ytimg.com/vi/1u100i0b9LM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYACvAWKAgwIABABGGUgWShPMA8=&rs=AOn4CLB-fsMHHMsgNU9nFyvHBJbU5mhQ1w',
    challenge: {
      title: 'Herausforderung',
      description:
        'Leon konnte trotz unzähliger Bewerbungen keinen Arbeitsplatz finden. Unternehmen lehnten ihn ab, obwohl er einen hoch angesehenen Studiengang absolviert hatte.',
    },
    goal: {
      title: 'Ziel',
      description: 'Das Ziel war ganz klar, Leon wollte in seiner IT-Karriere durchstarten.',
    },
    results: {
      title: 'Ergebnis',
      achievements: [
        'Qualifizierter ISTQB® Certified Tester',
        'Besseres Verständnis in seinem Projekt',
        'Mehr Verantwortung im Unternehmen erhalten',
      ],
    },
    stats: [
      { label: 'Bewerbungen', value: 'Unzählige' },
      { label: 'Erfolgsquote', value: '100%' },
      { label: 'Karrieresprung', value: 'Durchgestartet' },
    ],
  },
  {
    id: 'christian-oliver-friedrich',
    name: 'Christian-Oliver Friedrich',
    role: 'Testautomatisierer & ISTQB® Certified',
    image: '/images/testimonials/christian-oliver-friedrich.jpg',
    videoUrl: 'https://www.youtube.com/1e64d290-c3a2-48ab-89e4-0a76c3f7ee5d',
    videoThumbnail: 'https://i.ytimg.com/vi/-M1JD6mZVvY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYACvAWKAgwIABABGEUgSChyMA8=&rs=AOn4CLA30_Rs5yL9J_rRyYf6bdzMRL5i3w',
    challenge: {
      title: 'Herausforderung',
      description:
        'Christian-Oliver wollte Praxiserfahrung über echte IT-Projekte sammeln. Jedoch ohne Praxiserfahrung und ISTQB® Tester Zertifikat ist es ihm nicht möglich.',
    },
    goal: {
      title: 'Ziel',
      description:
        'Sein Ziel ist es, als Testautomatisierer IT-Projekte durchführen zu können. Dafür muss Christian-Oliver jedoch zuerst das ISTQB® Tester Zertifikat erfolgreich abschließen.',
    },
    results: {
      title: 'Ergebnis',
      achievements: [
        'Mit dem ersten Versuch das ISTQB® Zertifikat bestanden',
        'Sein Einstieg ins IT-Projekt als Tester sicher gefunden',
        'Sich weiterentwickelt mit ISTQB® Test Automation Engineer',
      ],
    },
    stats: [
      { label: 'Versuch', value: '1. Anlauf' },
      { label: 'Projekteinstieg', value: 'Gesichert' },
      { label: 'Weiterbildung', value: 'Automation Eng.' },
    ],
  },
]
