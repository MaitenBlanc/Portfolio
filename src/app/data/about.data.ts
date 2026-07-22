export interface About {
  name: string;
  role_es: string;
  role_en: string;
  description_es: string;
  description_en: string;
  image: string;
  location_es: string;
  location_en: string;
  education_es: string;
  education_en: string;
}

export const ABOUT_DATA: About = {
  name: 'Maitén Blanc',
  role_es: 'Desarrolladora Full Stack.',
  role_en: 'Full Stack Developer.',
  description_es: `Desarrolladora de software enfocada en arquitecturas modernas y estudiante de Sistemas de Información. Combino la lógica del backend con la creatividad del frontend para 
  construir aplicaciones eficientes y escalables. 
  <br><br>
  Me apasiona escribir código limpio, asegurar la calidad del software y actuar como un nexo colaborativo dentro de mi equipo, impulsada por mi experiencia 
  docente y mi rápida adaptación tecnológica.`,
  description_en: `Software developer focused on modern architectures and Information Systems student. I combine backend logic with frontend creativity to build efficient and scalable applications. 
  <br><br>
  I am passionate about writing clean code, ensuring software quality, and acting as a collaborative link within my team, driven by my teaching experience and quick technical adaptation.`,
  image: 'assets/img/foto.jpg',
  location_es: 'Concepción del Uruguay, Entre Ríos, Argentina.',
  location_en: 'Concepcion del Uruguay, Entre Rios, Argentina.',
  education_es: `Licenciatura en Sistemas de Información. <br> Analista de Sistemas. <br> Universidad Autónoma de Entre Ríos.`,
  education_en: `Bachelor of Information Systems. <br> Systems Analyst. <br> UADER.`
};