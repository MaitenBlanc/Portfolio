import { computed, Injectable, signal } from '@angular/core';
import { single } from 'rxjs';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLang = signal<Language>('es');

  toggleLanguage() {
    this.currentLang.set(this.currentLang() === 'es' ? 'en' : 'es');
  }

  t = computed(() => {
    const isEs = this.currentLang() === 'es';

    return {
      nav: {
        projects: isEs ? 'Proyectos' : 'Projects',
        skills: isEs ? 'Skills' : 'Skills',
        about: isEs ? 'Sobre Mí' : 'About Me',
        contact: isEs ? 'Contacto' : 'Contact',
      },
      hero: {
        greeting: isEs ? 'Hola! Soy' : 'Hi! I am',
        role: isEs ? 'Desarrolladora Full Stack' : 'Full Stack Developer',
        student: isEs
          ? 'Estudiante de Licenciatura en Sistemas de Información y Análisis de Sistemas.'
          : 'Information Systems and Systems Analysis Student.',
        btn: isEs ? 'Sobre Mí' : 'About Me',
      },
      about: {
        title: isEs ? 'Sobre Mí' : 'About Me',
        description: isEs
          ? `Soy estudiante avanzada de la Licenciatura en Sistemas de Información. 
            Me apasiona transformar ideas complejas en interfaces simples e intuitivas.
            <br><br>
            Mi enfoque combina la lógica del backend con la creatividad del frontend, 
            buscando siempre código limpio (Clean Code) y experiencias de usuario memorables.
            Actualmente me encuentro perfeccionando mis habilidades en arquitecturas escalables.`
            : `I am an advanced student in the Bachelor of Science in Information Systems program.
            I am passionate about transforming complex ideas into simple and intuitive interfaces.
            <br><br>
            My approach combines backend logic with frontend creativity, always striving for clean 
            code and memorable user experiences.
            I am currently refining my skills in scalable architectures.`,
        education: isEs ? 'Educación' : 'Education',
        career1: isEs ? `Licenciatura en Sistemas de Información.` : 'Bachelor of Information Systems',
        career2: isEs ? `Analista de Sistemas.` : 'Systems Analyst',
        university: isEs ? 'Universidad Autónoma de Entre Ríos' : 'University of Entre Ríos',
        location: isEs ? 'Ubicación' : 'Location',
        cvSite: isEs ? 'https://maitenblanc.github.io/CV-es/' : 'https://maitenblanc.github.io/CV-en/',
        cv: isEs ? 'Ver CV' : 'View CV',
        btn: isEs ? 'Mis Proyectos' : 'My Projects',
      },
      projects: {
        title: isEs ? 'Mis Proyectos' : 'My Projects',
        details: isEs ? 'VER DETALLES' : 'VIEW DETAILS',
        viewTechs: isEs ? 'Ver Tecnologías' : 'View Technologies',
        techs: isEs ? 'Tecnologías' : 'Technologies',
        visit: isEs ? 'Visitar Sitio' : 'Visit Site',
      },
      contact: {
        title: isEs ? 'Contacto' : 'Contact',
        desc: isEs ? 'No dudes en escribirme para nuevas oportunidades y/o colaboraciones.' : 'Feel free to write to me for new opportunities and/or collaborations.',
        name: isEs ? 'Nombre' : 'Name',
        email: isEs ? 'Correo Electrónico' : 'Email',
        message: isEs ? 'Mensaje' : 'Message',
        send: isEs ? 'Enviar Mensaje' : 'Send Message',
      },
    };
  });
}
