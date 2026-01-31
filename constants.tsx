
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'DxSale Visual Identity',
    category: 'Video Editing',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800',
    description: 'Developed cinematic teasers and video animations for product launches and ecosystem updates.',
    client: 'DxSale Network',
    year: '2024',
    tags: ['Video Animation', 'SMM', 'Launch Teasers']
  },
  {
    id: '2',
    title: 'Cutoshi Brand Visuals',
    category: 'Motion Graphics',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    description: 'Curating stunning visuals and motion assets for social media announcements.',
    client: 'Cutoshi',
    year: '2024',
    tags: ['Graphics Design', 'Visual Curation']
  },
  {
    id: '3',
    title: 'Roburrna Animation Series',
    category: 'Motion Graphics',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    description: 'High-end video animations to promote partner projects and internal ecosystem growth.',
    client: 'Roburrna Labs',
    year: '2024',
    tags: ['3D Animation', 'Promo Video']
  },
  {
    id: '4',
    title: 'Chaindustry Web3 Hub',
    category: 'Creative Direction',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    description: 'Content development and instruction for onboarding the next generation of Web3 talent.',
    client: 'Chaindustry',
    year: '2021',
    tags: ['Education', 'Content Strategy']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Video Editing', level: 98, category: 'Software' },
  { name: 'Video Animations', level: 95, category: 'Software' },
  { name: 'Graphics Design', level: 92, category: 'Software' },
  { name: 'Motion Graphics', level: 90, category: 'Software' },
  { name: '2D & 3D Animations', level: 88, category: 'Software' },
  { name: 'Youtube Expert', level: 96, category: 'Skillset' },
  { name: 'Community Building', level: 94, category: 'Skillset' },
  { name: 'Meme Expert', level: 100, category: 'Skillset' },
  { name: 'SEO Expert', level: 85, category: 'Skillset' },
  { name: 'Social Media Management', level: 92, category: 'Skillset' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'DxSale Network',
    role: 'Video Editor & SMM',
    period: 'Jan 2024 - Dec 2024',
    description: [
      'Editing pre-recorded videos and making high-fidelity video animations.',
      'Creating cinematic teasers to announce launches and ecosystem updates.',
      'Managing community growth via video content and strategic SMM.'
    ]
  },
  {
    company: 'DxSale Network',
    role: 'Youtube Manager',
    period: 'July 2024 - Dec 2024',
    description: [
      'Using specific analytics to optimize and grow the YouTube presence.',
      'Posting videos and Shorts driving high traction and subscriber retention.',
      'Developing data-driven content calendars.'
    ]
  },
  {
    company: 'Cutoshi',
    role: 'Graphic Expert',
    period: 'Oct 2024',
    description: [
      'Curating stunning visuals for social media posts and major announcements.',
      'Establishing a cohesive visual language for brand communication.'
    ]
  },
  {
    company: 'Roburrna Labs',
    role: 'Video Animator',
    period: 'Jan 2024 - Present',
    description: [
      'Generating stunning video animations to promote core projects.',
      'Collaborating with partners to deliver high-impact marketing visuals.'
    ]
  },
  {
    company: 'Voltage Finance',
    role: 'Lead Ambassador',
    period: 'Jan 2022 - Dec 2023',
    description: [
      'Generating promotional content and managing ambassador teams.',
      'Hitting marketing targets and KPIs through strategic community outreach.'
    ]
  },
  {
    company: 'Chaindustry',
    role: 'Content Developer & Instructor',
    period: 'May 2021 - Present',
    description: [
      'Curating all visual content for partners and managed projects.',
      'Teaching at the Web3 marketing hub to onboard newbies to the tech space.'
    ]
  }
];

export const LANGUAGES = [
  { name: 'English', level: 'Native' },
  { name: 'Spanish', level: 'Writing' },
  { name: 'Chinese', level: 'Writing' },
  { name: 'Latin', level: 'Writing' }
];
