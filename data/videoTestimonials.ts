export interface VideoTestimonial {
  id: string
  name: string
  role?: string
  company?: string
  videoUrl?: string // YouTube/Vimeo URL or local video path
  thumbnailUrl: string
  duration?: string // e.g., "1:23"
  quote?: string // Short quote to display before video plays
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 'natalie',
    name: 'Natalie',
    role: 'Software Testerin',
    thumbnailUrl: '/images/testimonials/natalie-thumbnail.jpg',
    videoUrl: '/videos/testimonials/natalie.mp4',
    duration: '0:45',
    quote: 'Dank DiTeLe habe ich die Prüfung beim ersten Versuch bestanden',
  },
  {
    id: 'artur',
    name: 'Artur',
    role: 'QA Engineer',
    thumbnailUrl: '/images/testimonials/artur-thumbnail.jpg',
    videoUrl: '/videos/testimonials/artur.mp4',
    duration: '1:12',
    quote: 'Die Praxisübungen haben den entscheidenden Unterschied gemacht',
  },
  {
    id: 'alexander',
    name: 'Alexander',
    role: 'Test Analyst',
    thumbnailUrl: '/images/testimonials/alexander-thumbnail.jpg',
    videoUrl: '/videos/testimonials/alexander.mp4',
    duration: '0:58',
    quote: 'Von null IT-Kenntnissen zum zertifizierten Tester in 4 Wochen',
  },
  {
    id: 'olga',
    name: 'Olga',
    role: 'Quereinsteigerin',
    thumbnailUrl: '/images/testimonials/olga-thumbnail.jpg',
    videoUrl: '/videos/testimonials/olga.mp4',
    duration: '1:05',
    quote: 'Als Quereinsteigerin war ich skeptisch – jetzt habe ich meinen Traumjob',
  },
  {
    id: 'jonathan',
    name: 'Jonathan',
    role: 'Junior Tester',
    thumbnailUrl: '/images/testimonials/jonathan-thumbnail.jpg',
    videoUrl: '/videos/testimonials/jonathan.mp4',
    duration: '0:52',
    quote: 'Die beste Investition in meine IT-Karriere',
  },
]
