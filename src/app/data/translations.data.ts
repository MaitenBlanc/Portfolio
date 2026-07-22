export interface Translations {
    nav: {
        projects: string;
        skills: string;
        about: string;
        contact: string;
    };
    hero: {
        greeting: string;
        student: string;
        btn: string;
    };
    aboutText: {
        title: string;
        education: string;
        location: string;
        cvSite: string;
        cv: string;
        btn: string;
    };
    projectsText: {
        title: string;
        details: string;
        viewTechs: string;
        techs: string;
        visit: string;
    };
    contact: {
        title: string;
        desc: string;
        name: string;
        email: string;
        message: string;
        send: string;
    };
}

export const UI_TRANSLATIONS: Record<'es' | 'en', Translations> = {
    es: {
        nav: {
            projects: 'Proyectos',
            skills: 'Skills',
            about: 'Sobre Mí',
            contact: 'Contacto',
        },
        hero: {
            greeting: 'Hola! Soy',
            student: 'Creando soluciones web eficientes y escalables.',
            btn: 'Sobre Mí',
        },
        aboutText: {
            title: 'Sobre Mí',
            education: 'Educación',
            location: 'Ubicación',
            cvSite: 'https://maitenblanc.github.io/CV-es/',
            cv: 'Ver CV',
            btn: 'Mis Proyectos',
        },
        projectsText: {
            title: 'Mis Proyectos',
            details: 'VER DETALLES',
            viewTechs: 'Ver Tecnologías',
            techs: 'Tecnologías',
            visit: 'Visitar Sitio',
        },
        contact: {
            title: 'Contacto',
            desc: 'No dudes en escribirme para nuevas oportunidades y/o colaboraciones.',
            name: 'Nombre',
            email: 'Correo Electrónico',
            message: 'Mensaje',
            send: 'Enviar Mensaje',
        },
    },
    en: {
        nav: {
            projects: 'Projects',
            skills: 'Skills',
            about: 'About Me',
            contact: 'Contact',
        },
        hero: {
            greeting: 'Hi! I am',
            student: 'Creating efficient and scalable web solutions.',
            btn: 'About Me',
        },
        aboutText: {
            title: 'About Me',
            education: 'Education',
            location: 'Location',
            cvSite: 'https://maitenblanc.github.io/CV-en/',
            cv: 'View CV',
            btn: 'My Projects',
        },
        projectsText: {
            title: 'My Projects',
            details: 'VIEW DETAILS',
            viewTechs: 'View Technologies',
            techs: 'Technologies',
            visit: 'Visit Site',
        },
        contact: {
            title: 'Contact',
            desc: 'Feel free to write to me for new opportunities and/or collaborations.',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Message',
        },
    },
};
