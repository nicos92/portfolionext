import type { Project, SkillCategory } from '@/lib/types';
import { placeholderImages } from '@/lib/placeholder-images';

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Autos del Mundo',
    description:
      'Una aplicación web para amantes de los autos, donde pueden explorar diferentes modelos, ver detalles y comparar especificaciones. La aplicación utiliza HTML, CSS y JavaScript para el frontend y consume una API para obtener los datos de los vehículos.',
    image: placeholderImages.find(p => p.id === 'proj1-img'),
    repoUrl: 'https://github.com/nicos92/AutosDelMundo',
    demoUrl: 'https://nicos92.github.io/AutosDelMundo/',
  },
  {
    id: 'proj2',
    title: 'Viajes Chile',
    description:
      'Página web de viajes que muestra destinos turísticos en Chile. Desarrollada con HTML, CSS y jQuery, e incluye el uso de componentes de Bootstrap como carruseles y modales para una experiencia de usuario interactiva y atractiva.',
    image: placeholderImages.find(p => p.id === 'proj2-img'),
    repoUrl: 'https://github.com/nicos92/viajeschile',
    demoUrl: 'https://nicos92.github.io/viajeschile/',
  },
  {
    id: 'proj3',
    title: 'Suricata',
    description:
      'Landing page para una tienda ficticia. El diseño es responsivo y se adapta a diferentes tamaños de pantalla, implementado con HTML y CSS. El proyecto se enfoca en la maquetación y el diseño visual de una página de producto.',
    image: placeholderImages.find(p => p.id === 'proj3-img'),
    repoUrl: 'https://github.com/nicos92/suricata',
    demoUrl: 'https://nicos92.github.io/suricata/',
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
