import type { Project, SkillCategory } from '@/lib/types';
import { placeholderImages } from '@/lib/placeholder-images';

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Retail Insights Dashboard',
    description:
      'An interactive dashboard for analyzing retail sales data. Built with React and D3.js, it provides insights into product performance, customer demographics, and regional sales trends. Features advanced filtering and data visualization capabilities.',
    image: placeholderImages.find(p => p.id === 'proj1-img'),
    repoUrl: 'https://github.com',
    demoUrl: '#',
  },
  {
    id: 'proj2',
    title: 'AI-Powered Document Summarizer',
    description:
      'A web application that uses natural language processing to summarize long documents and articles. The backend is built with Python and Flask, leveraging a transformer model for text summarization. The frontend is a clean, minimalist interface using Next.js.',
    image: placeholderImages.find(p => p.id === 'proj2-img'),
    repoUrl: 'https://github.com',
    demoUrl: '#',
  },
  {
    id: 'proj3',
    title: 'E-commerce Recommendation Engine',
    description:
      'Developed a collaborative filtering recommendation engine for an e-commerce platform. Implemented in Python using Scikit-learn and Pandas, this system increased user engagement by providing personalized product suggestions based on purchase history.',
    image: placeholderImages.find(p => p.id === 'proj3-img'),
    repoUrl: 'https://github.com',
    demoUrl: '#',
  },
];

export const SKILLS: SkillCategory = {
  expert: [
    'JavaScript (ES6+)',
    'React & Next.js',
    'Python',
    'Data Analysis',
    'SQL',
    'HTML5 & CSS3',
  ],
  intermediate: [
    'TypeScript',
    'Node.js & Express',
    'Data Visualization (D3.js)',
    'REST APIs',
    'Docker',
    'Git & GitHub',
  ],
  familiar: ['Java', 'C#', 'AWS Services', 'GraphQL', 'Machine Learning Concepts'],
};

export const SOFT_SKILLS: string[] = [
  'Problem-Solving',
  'Agile & Sprint Management',
  'Effective Communication',
  'Team Collaboration',
  'Requirement Analysis',
  'Stakeholder Presentations',
];
