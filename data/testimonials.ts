import { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Lisa M.',
    role: 'Marketing → Software-Testerin',
    company: 'TechCorp GmbH',
    image: '/images/testimonials/lisa.jpg',
    rating: 5,
    text: 'Ich hatte NULL IT-Vorkenntnisse. Nach 8 Wochen habe ich die ISTQB-Prüfung mit 92% bestanden! Die Kombination aus Kurs und DiTeLe ist perfekt. Besonders die Fehlerberichte-Übungen in DiTeLe haben mir geholfen - im Bewerbungsgespräch konnte ich zeigen, dass ich weiß, wie man professionell testet.',
    result: '92% bestanden',
    category: 'quereinsteiger',
    linkedIn: '#'
  },
  {
    id: '2',
    name: 'Thomas K.',
    role: 'Bürokaufmann → Junior Tester',
    company: '',
    image: '/images/testimonials/thomas.jpg',
    rating: 5,
    text: 'Die App ist genial! Ich konnte überall üben - in der Bahn, in der Mittagspause. Die 316 Fragen haben mich perfekt vorbereitet. Besonders gut fand ich, dass DiTeLe zu jeder Antwort erklärt, WARUM sie richtig oder falsch ist. So habe ich aus Fehlern gelernt.',
    result: 'Bestanden beim ersten Versuch',
    category: 'quereinsteiger'
  },
  {
    id: '3',
    name: 'Sarah W.',
    role: 'Quereinsteigerin → Software-Testerin',
    company: 'Digital Solutions AG',
    image: '/images/testimonials/sarah.jpg',
    rating: 5,
    text: 'DiTeLe war der Game-Changer! Endlich konnte ich selbst Testfälle schreiben und nicht nur darüber lesen. Im Bewerbungsgespräch konnte ich konkrete Beispiele nennen - obwohl ich noch nie beruflich getestet hatte. Das hat überzeugt!',
    result: 'Jetzt bei Digital Solutions',
    category: 'alle',
    linkedIn: '#'
  }
]
