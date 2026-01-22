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
    thumbnailUrl: 'https://img.youtube.com/vi/Y530fsyTCe4/sddefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Y530fsyTCe4',
    duration: '0:45',
    quote: 'Dank DiTeLe habe ich die Prüfung beim ersten Versuch bestanden',
  },
  {
    id: 'artur',
    name: 'Artur',
    role: 'QA Engineer',
    thumbnailUrl: 'https://img.youtube.com/vi/GIzxhk4tzmM/sddefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/GIzxhk4tzmM',
    duration: '1:12',
    quote: 'Die Praxisübungen haben den entscheidenden Unterschied gemacht',
  },
  {
    id: 'alexander',
    name: 'Alexander',
    role: 'Test Analyst',
    thumbnailUrl: 'https://img.youtube.com/vi/Nun-eNkeeY0/sddefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Nun-eNkeeY0',
    duration: '0:58',
    quote: 'Von null IT-Kenntnissen zum zertifizierten Tester in 4 Wochen',
  },
  {
    id: 'olga',
    name: 'Olga',
    role: 'Quereinsteigerin',
    thumbnailUrl: 'https://img.youtube.com/vi/YI6Jf9-T3_c/sddefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/YI6Jf9-T3_c',
    duration: '1:05',
    quote: 'Als Quereinsteigerin war ich skeptisch – jetzt habe ich meinen Traumjob',
  },
  {
    id: 'jonathan',
    name: 'Jonathan',
    role: 'Junior Tester',
    thumbnailUrl: 'https://img.youtube.com/vi/C6jFQwt6E0o/sddefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/C6jFQwt6E0o',
    duration: '0:52',
    quote: 'Die beste Investition in meine IT-Karriere',
  },
]
