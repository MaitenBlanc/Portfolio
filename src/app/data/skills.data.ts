export interface Skill {
  name_es: string;
  name_en?: string;
  items_es: string[];
  items_en?: string[];
}

export const SKILLS_DATA: Skill[] = [
  {
    name_es: 'Frontend',
    items_es: [
      'Angular', 
      'React.Js', 
      'TypeScript', 
      'JavaScript',
      'RxJS', 
      'Tailwind CSS', 
      'Svelte', 
      'Bootstrap',
      'Figma'
    ],
  },
  {
    name_es: 'Backend',
    items_es: [
      'Java', 
      'Spring Boot', 
      'Node.Js / Nest.Js', 
      'PHP',
      'PostgreSQL', 
      'MySQL',
      'MongoDB',
      'Oracle',
      'Supabase',
      'Microservicios'
    ],
    items_en: [
      'Java', 
      'Spring Boot', 
      'Node.Js / Nest.Js', 
      'PHP',
      'PostgreSQL', 
      'MySQL', 
      'MongoDB',
      'Oracle',
      'Supabase',
      'Microservices'
    ],
  },
  {
    name_es: 'Análisis de Datos',
    name_en: 'Data Analysis',
    items_es: [
      'Python',
      'SQL',
      'Power BI', 
      'Looker Studio', 
      'DAX',
      'Power Pivot'
    ],
  },
  {
    name_es: 'Herramientas & Testing',
    name_en: 'Tools & Testing',
    items_es: [
      'Git / GitHub / Bitbucket',
      'Docker',
      'Postman',
      'Cypress',
      'Moodle / Drupal'
    ],
  },
  {
    name_es: 'Ingeniería de Software y Fundamentos',
    name_en: 'Software Engineering & Fundamentals',
    items_es: [
      'Análisis de Requerimientos Funcionales',
      'Arquitectura de Software',
      'Teoría de Programación'
    ],
    items_en: [
      'Functional Requirements Analysis',
      'Software Architecture',
      'Programming Theory'
    ],
  },
  {
    name_es: 'Metodologías y Buenas Prácticas',
    name_en: 'Methodologies & Best Practices',
    items_es: [
      'Metodologías Ágiles', 
      'Scrum', 
      'Kanban', 
      'Spotify',
      'Principios SOLID',
      'Clean Code'
    ],
    items_en: [
      'Agile methodologies', 
      'Scrum', 
      'Kanban', 
      'Spotify',
      'SOLID Principles',
      'Clean Code'
    ],
  },
];
