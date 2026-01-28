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
      'Svelte', 
      'TypeScript', 
      'JavaScript', 
      'Tailwind CSS', 
      'Figma'
    ],
  },
  {
    name_es: 'Backend',
    items_es: [
      'Java', 
      'Spring Boot', 
      'Node.Js / Nest.Js', 
      'PostgreSQL', 
      'MySQL', 
      'Microservicios',
      'Docker',
      'Postman'
    ],
    items_en: [
      'Java', 
      'Spring Boot', 
      'Node.Js / Nest.Js', 
      'PostgreSQL', 
      'MySQL', 
      'Microservices',
      'Docker',
      'Postman'
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
    name_es: 'Metodologías',
    name_en: 'Methodologies',
    items_es: ['Metodologías Ágiles', 'Scrum', 'Kanban', 'Spotify'],
    items_en: ['Agile methodologies', 'Scrum', 'Kanban', 'Spotify'],
  },
];
