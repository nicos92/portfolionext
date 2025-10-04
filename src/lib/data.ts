import type { Project, SkillCategory } from '@/lib/types';
import { placeholderImages } from '@/lib/placeholder-images';

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Iguana Page',
    description:
      'Una landing page sencilla sobre iguanas. El proyecto se enfoca en la maquetación y el diseño visual con HTML y CSS para presentar información de manera clara y atractiva.',
    image: placeholderImages.find(p => p.id === 'proj1-img'),
    repoUrl: 'https://github.com/nicos92/iguanapage',
    demoUrl: 'https://nicos92.github.io/iguanapage/',
  },
  {
    id: 'proj2',
    title: 'Cuppon',
    description:
      'Página web que presenta una serie de cupones de descuento. Desarrollada con HTML y CSS, y utiliza componentes de Bootstrap para crear un diseño adaptable y funcional para los usuarios.',
    image: placeholderImages.find(p => p.id === 'proj2-img'),
    repoUrl: 'https://github.com/nicos92/cuppon',
    demoUrl: 'https://nicos92.github.io/cuppon/',
  },
  {
    id: 'proj3',
    title: 'Ricomin',
    description:
      'Aplicación web para un restaurante ficticio. Este proyecto fue desarrollado utilizando Ruby on Rails y permite a los usuarios ver el menú, y realizar reservas. La aplicación se enfoca en la funcionalidad del backend y la gestión de datos.',
    image: placeholderImages.find(p => p.id === 'proj3-img'),
    repoUrl: 'https://github.com/nicos92/ricomin',
    demoUrl: 'https://ricomin.herokuapp.com/',
  },
];

export const SKILLS: SkillCategory = {
  expert: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'jQuery',
    'Bootstrap',
    'Git & GitHub',
  ],
  intermediate: [
    'TypeScript',
    'React',
    'Node.js',
    'SQL',
    'API Rest',
    'PostgreSQL',
  ],
  familiar: ['Python', 'Django', 'Ruby on Rails', 'Testing'],
};

export const SOFT_SKILLS: string[] = [
  'Trabajo en equipo',
  'Comunicación asertiva',
  'Resolución de problemas',
  'Adaptabilidad',
  'Metodologías Ágiles',
  'Aprendizaje continuo',
];
