import type { Project, SkillCategory, Education } from '@/lib/types';
import { placeholderImages } from '@/lib/placeholder-images';

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Configurador de Impresoras Zebra',
    description: {
      problem: 'La configuración manual de impresoras térmicas Zebra era un proceso lento, propenso a errores y requería conocimientos técnicos específicos.',
      solution: 'Desarrollé una aplicación de escritorio con Windows Forms que proporciona una interfaz gráfica intuitiva para enviar parámetros de configuración directamente a las impresoras. Esto eliminó la necesidad de usar comandos manuales, reduciendo el tiempo de configuración y los errores.',
      stack: 'C#, Windows Forms, .NET'
    },
    image: placeholderImages.find(p => p.id === 'proj1-img'),
    repoUrl: 'https://github.com/nicos92/CambioHorVerZebra411',
    demoUrl: 'https://github.com/nicos92/CambioHorVerZebra411',
  },
  {
    id: 'proj2',
    title: 'Gestor de Registros de Datos',
    description: {
      problem: 'La empresa carecía de un sistema centralizado para la gestión de datos críticos, lo que resultaba en inconsistencias y dificultades para el mantenimiento de la información.',
      solution: 'Creé una aplicación de escritorio para centralizar la entrada, modificación y consulta de registros empresariales. La herramienta mejoró la integridad de los datos y optimizó los flujos de trabajo relacionados con la información.',
      stack: 'C#, Windows Forms, .NET, SQL Server'
    },
    image: placeholderImages.find(p => p.id === 'proj2-img'),
    repoUrl: 'https://github.com/nicos92/agraria',
    demoUrl: 'https://github.com/nicos92/agraria',
  },
  {
    id: 'proj3',
    title: 'Testeador de Conexión de Red',
    description: {
      problem: 'Diagnosticar problemas de conectividad de red a hosts remotos requería el uso de múltiples herramientas de línea de comandos y un análisis manual.',
      solution: 'Desarrollé una utilidad en JAVA que automatiza el monitoreo de la conectividad mediante el envío de pings (ICMP). La aplicación provee un feedback visual e inmediato, facilitando la detección rápida de fallos en la red.',
      stack: 'JAVA, ICMP'
    },
    image: placeholderImages.find(p => p.id === 'proj3-img'),
    repoUrl: 'https://github.com/nicos92/TEPing',
    demoUrl: 'https://github.com/nicos92/TEPing',
  },
];

export const EDUCATION: Education[] = [
    {
      title: 'Carrera Terciaria en Análisis, Desarrollo y Programación de Aplicaciones',
      institution: 'I.S.F.T. N° 93 Presidente Arturo Umberto Illia',
      date: 'Marzo 2024 - Actualmente cursando el segundo año',
      description: 'Actualmente profundizando en paradigmas de programación, diseño de bases de datos, y metodologías de desarrollo de software para construir aplicaciones robustas y escalables.',
    },
    {
      title: 'Curso Online Desarrollador JAVA intermedio',
      institution: 'U.T.N. Universidad Tecnológica Nacional',
      date: 'Marzo 2023 - Diciembre 2023',
      description: 'Curso centrado en el desarrollo de aplicaciones backend con Spring Framework, manejo de concurrencia, y patrones de diseño avanzados para la creación de servicios web eficientes.',
    },
    {
      title: 'Curso Online Desarrollador JAVA inicial',
      institution: 'U.T.N. Universidad Tecnológica Nacional',
      date: 'Marzo 2022 - Diciembre 2022',
      description: 'Formación inicial en el lenguaje JAVA, cubriendo fundamentos de la programación orientada a objetos, estructuras de datos, y desarrollo de algoritmos.',
    },
    {
      title: 'Curso Presencial de Programación WEB',
      institution: 'U.T.N. Universidad Tecnológica Nacional',
      date: 'Marzo 2022 - Diciembre 2022',
      description: 'Introducción al desarrollo web full-stack, abarcando desde la maquetación con HTML y CSS hasta la programación del lado del cliente con JavaScript y del servidor.',
    },
]

export const SKILLS: SkillCategory = {
  expert: [
    'C#',
    '.NET Framework',
    '.NET Core',
    'SQL Server',
    'T-SQL',
    'Windows Forms',
    'Git',
    'Visual Studio',
  ],
  intermediate: [
    'JAVA',
    'Spring',
    'Python',
    'Patrones de Diseño',
    'Principios SOLID',
    'Docker',
    'Jira',
    'VS Code',
  ],
  familiar: [
    'JavaScript',
    'HTML5 & CSS3',
    'APIs REST',
    'AngularJS',
    'PostgreSQL',
    'MySQL',
  ],
};

export const SOFT_SKILLS: string[] = [
  'Resolución de Problemas',
  'Comunicación Técnica',
  'Análisis de Requisitos',
  'Metodologías Ágiles (Scrum)',
  'Documentación Técnica',
  'Pensamiento Analítico',
  'Atención al Detalle',
  'Proactividad e Iniciativa',
  'Aprendizaje Continuo',
  'Adaptabilidad',
];
