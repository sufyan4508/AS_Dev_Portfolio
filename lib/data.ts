import {
  Globe,
  Palette,
  Smartphone,
  BarChart3,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export const services: Service[] = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive and scalable websites using the MERN stack.',
    color: 'var(--accent-blue)',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative and professional designs that bring ideas to life.',
    color: 'var(--accent-purple)',
  },
  {
    icon: Smartphone,
    title: 'Flutter App Development',
    description: 'Cross-platform mobile apps with beautiful UI using Flutter.',
    color: 'var(--accent-blue)',
  },
  {
    icon: BarChart3,
    title: 'Data Entry & Virtual Assistance',
    description: 'Accurate data entry, web research and admin support.',
    color: 'var(--accent-purple)',
  },
]

export type Project = {
  title: string
  category: 'web' | 'graphics' | 'flutter'
  categoryLabel: string
  image: string
  description: string
  features?: string[]
  tech: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'EchoFrame+',
    category: 'web',
    categoryLabel: 'FYP',
    image: '/projects/echo-frame-plus.png',
    description:
      'AI-powered voice organizer and smart recall assistant that converts recordings into searchable, actionable insights.',
    features: [
      'Voice recording upload, storage and organization',
      'AI transcription, summaries and emotional analysis',
      'Smart recall, task tracking and admin management',
    ],
    tech: ['React', 'Firebase', 'Node API', 'Tailwind CSS', 'Vercel', 'Render'],
    github: 'https://github.com/sufyan4508/echoframe_frontend',
    demo: 'https://echoframe-frontend.vercel.app/',
  },
  {
    title: 'Admin Dashboard',
    category: 'web',
    categoryLabel: 'Web',
    image: '/projects/admin-dashboard.png',
    description: 'Analytics dashboard built with the MERN stack.',
    features: [
      'Secure JWT User Authentication and role-based authorization',
      'Interactive real-time data visualization and analytics charts',
      'Advanced dynamic database management with full CRUD operations',
    ],
    tech: ['React', 'Node', 'Express', 'MongoDB'],
    github: 'https://github.com/sufyan4508/echoframe_backend',
    demo: 'https://vercel.appdashboard',
  },
  {
    title: 'E-Commerce Store',
    category: 'web',
    categoryLabel: 'Web',
    image: '/projects/ecommerce.png',
    description: 'Full featured e-commerce website with cart & checkout.',
    tech: ['React', 'Node', 'Express', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Brand Identity',
    category: 'graphics',
    categoryLabel: 'Graphics',
    image: '/projects/brand-identity.png',
    description: 'Logo and brand identity design for a modern startup.',
    tech: ['Illustrator', 'Photoshop'],
    demo: '#',
  },
  {
    title: 'Poetry Website',
    category: 'web',
    categoryLabel: 'Web',
    image: '/projects/Ahl.e.Sukhan.png',
    description: 'AI Powered Urdu Poetry Platform - Personal poetry of Sufyan with 100+ different Poets.',
    features: [
      'Showcase the poetry of 100+ poets and their Biography.',
      'Displays complete and ongoing Features of site with details.',
      'Includes Author/developer poet information and his poetry also.',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'next-themes', 'Vercel'],
    github: 'https://github.com/sufyan4508/PoetrySite/',
    demo: 'https://poetrywithsufyan.vercel.app/',
  },

  {
    title: 'KidSprout-Gaming Website',
    category: 'web',
    categoryLabel: 'Web',
    image: '/KidSprout Layout.png',
    description: 'An ultra-premium, high-performance educational gaming platform inspired by Apple App Store sidebar UX.',
    features: [
      'Apple-Style UX Shell with Adaptive Light/Dark Mode Controller.',
      'Native Math Ninja Engine with Real-Time Typing Accuracy Tracking.',
      'Ads-Free Self-Hosting Architecture ensuring Lightning Fast 0ms Latency.'
    ],
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Lucide Icons', 'Vercel'],
    github: 'https://github.com/sufyan4508/KidSprout-Games/',
    demo: 'https://kid-sprout-games.vercel.app/',
  },

  {
    title: 'Social Media Post',
    category: 'graphics',
    categoryLabel: 'Graphics',
    image: '/projects/social-media.png',
    description: 'Creative social media post design for a client.',
    tech: ['Illustrator', 'Photoshop'],
    demo: '#',
  },
  {
    title: 'Task Manager App',
    category: 'flutter',
    categoryLabel: 'Flutter',
    image: '/projects/task-manager.png',
    description: 'Cross-platform task manager app using Flutter.',
    tech: ['Flutter', 'Dart'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Fitness Tracker',
    category: 'flutter',
    categoryLabel: 'Flutter',
    image: '/projects/fitness-tracker.png',
    description: 'Workout & activity tracker mobile app.',
    tech: ['Flutter', 'Firebase'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Logo Design',
    category: 'graphics',
    categoryLabel: 'Graphics',
    image: '/projects/logo-design.png',
    description: 'Minimal logo design for an outdoor brand.',
    tech: ['Illustrator', 'Photoshop'],
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    category: 'web',
    categoryLabel: 'Web',
    image: '/projects/portfolio-website.png',
    description: 'Personal portfolio website built with Next.js and modern technologies.',
    features: [
      'Showcases professional skills and expertise',
      'Displays completed and ongoing projects with details',
      'Includes developer information and contact options',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'next-themes', 'Vercel'],
    github: 'https://github.com/sufyan4508/AS_Dev_Portfolio',
    demo: 'https://as-dev-portfolioo.vercel.app/',
  },
]

export type SkillGroup = {
  category: string
  skills: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'REST API', level: 88 },
      { name: 'JWT', level: 80 },
      { name: 'Firebase', level: 78 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'MySQL', level: 80 },
      { name: 'Firebase', level: 78 },
      { name: 'PostgreSQL', level: 72 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'Docker', level: 65 },
    ],
  },
  {
    category: 'Design',
    skills: [
      { name: 'Adobe Photoshop', level: 88 },
      { name: 'Adobe Illustrator', level: 85 },
      { name: 'Canva', level: 92 },
      { name: 'UI/UX Design', level: 80 },
    ],
  },
]

export type Certificate = {
  title: string
  type: string
  issuer: string
  short: string
}

export const certificates: Certificate[] = [
  {
    title: 'Meta Front-End Developer',
    type: 'Professional Certificate',
    issuer: 'Coursera',
    short: 'Meta',
  },
  {
    title: 'Google UX Design',
    type: 'Professional Certificate',
    issuer: 'Coursera',
    short: 'Google',
  },
  {
    title: 'SQL for Data Science',
    type: 'Certificate',
    issuer: 'IBM',
    short: 'IBM',
  },
  {
    title: 'Flutter Development',
    type: 'Bootcamp',
    issuer: 'Udemy',
    short: 'Udemy',
  },
  {
    title: 'JavaScript Algorithms',
    type: 'Certificate',
    issuer: 'freeCodeCamp',
    short: 'FCC',
  },
]

export type TimelineItem = {
  year: string
  title: string
  subtitle: string
  side: 'left' | 'right'
  type: 'work' | 'education'
}

export const timeline: TimelineItem[] = [
  {
    year: '2024 – Present',
    title: 'Freelance Full Stack Developer',
    subtitle: 'Building web applications for clients using the MERN stack.',
    side: 'left',
    type: 'work',
  },
  {
    year: '2022 – 2024',
    title: 'Graphic Designer',
    subtitle: 'Designed branding, social media posts & marketing materials.',
    side: 'right',
    type: 'work',
  },
  {
    year: '2022 – 2026',
    title: 'BS in Information Technology (BSIT)',
    subtitle: 'National Uni',
    side: 'left',
    type: 'education',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
