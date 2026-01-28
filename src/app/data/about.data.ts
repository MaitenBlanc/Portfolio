export interface About {
  name: string;
  role: string;
  description: string;
  image: string;
  location: string;
  education: string;
}

export const ABOUT_DATA: About = {
  name: 'Maitén Blanc',
  role: 'Full Stack Developer',
  description: `
      Soy estudiante avanzada de la Licenciatura en Sistemas de Información. 
      Me apasiona transformar ideas complejas en interfaces simples e intuitivas.
      <br><br>
      Mi enfoque combina la lógica del backend con la creatividad del frontend, 
      buscando siempre código limpio (Clean Code) y experiencias de usuario memorables.
      Actualmente me encuentro perfeccionando mis habilidades en arquitecturas escalables.
    `,
  image: 'assets/img/foto.jpg',
  location: 'Concepción del Uruguay, Entre Ríos, Argentina.',
  education: `Lic. en Sistemas de Información. <br> Analista de Sistemas. <br> Universidad Autónoma de Entre Ríos.`,
};
