export interface LearningModule {
  week: number | string
  title: string
  learningUnits: number
  questions: number
  examples: number
  topics: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  image: string
  rating: number
  text: string
  result: string
  category: 'quereinsteiger' | 'absolvent' | 'alle'
  linkedIn?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface QuizQuestion {
  id: number
  text: string
  options: {
    id: string
    text: string
    correct: boolean
  }[]
}
