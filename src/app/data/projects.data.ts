export interface Project {
  title_es: string;
  title_en: string;
  description_es: string;
  description_en: string;
  technologies: string[];
  github: string;
  github_backend?: string;
  image: string[];
  link?: string;
  currentIdx?: number;
}

export const PROJECTS_DATA: Project[] = [
  {
    title_es: 'Gloss Glam - E-commerce UI & Maquetado',
    title_en: 'Gloss Glam - E-commerce UI & Layout',
    description_es: `
        <p>
          Este proyecto nació como un desafío de integración entre el Diseño UX/UI y el Desarrollo Frontend, como parte de la cátedra "Diseño UX/UI" de mi carrera. 
          El objetivo fue maquetar un sitio web de comercio electrónico que fuera visualmente atractivo y funcional en cualquier dispositivo. <br>
          Aquí el foco estuvo puesto en la estructura y el estilo. Se implementó una arquitectura de información clara utilizando HTML5 semántico para 
          garantizar accesibilidad y SEO básico. El diseño visual fue trasladado a código respetando la fidelidad del prototipo ("Pixel Perfect"), asegurando 
          que la estética "Glam" se mantuviera consistente.
        <p>
        <strong class="text-black dark:text-white block">Características Técnicas Destacadas:</strong>
          <ul class="list-disc pl-5 space-y-2">
            <li>
              <strong class="text-gray-800 dark:text-gray-200">Diseño Responsivo (RWD):</strong>
              Uso avanzado de Media Queries para adaptar el layout desde móviles hasta escritorio (Mobile First).
            </li>
            <li>
              <strong class="text-gray-800 dark:text-gray-200">Maquetado Moderno:</strong>
              Implementación de CSS Flexbox y CSS Grid para crear grillas de productos y estructuras de página complejas sin depender de frameworks externos.            </li>
            <li>
              <strong class="text-gray-800 dark:text-gray-200">Semántica HTML:</strong>
              Uso correcto de etiquetas (nav, section, article, footer) para una estructura de documento limpia y profesional.            </li>
            <li>
              <strong class="text-gray-800 dark:text-gray-200">Estilizado:</strong> 
              Diseño cuidado de tipografías, paleta de colores y espaciados para maximizar la legibilidad y el atractivo visual.
            </li>
            <li>
              <strong class="text-gray-800 dark:text-gray-200">Animaciones CSS:</strong> 
              Transiciones suaves (hover effects, botones) para mejorar la experiencia de usuario sin impactar el rendimiento.
            </li>
          <ul>
      `,
    description_en: `<p>
          This project was born as an integration challenge between UX/UI Design and Frontend Development, as part of the "UX/UI Design" course in my degree. 
          The goal was to layout an e-commerce website that was both visually appealing and functional on any device. <br>
          The focus here was on structure and style. A clear information architecture was implemented using semantic HTML5 to ensure accessibility and basic SEO. 
          The visual design was translated into code respecting the prototype fidelity ("Pixel Perfect"), ensuring the "Glam" aesthetic remained consistent.
        <p>
        <strong class="text-black dark:text-white block mt-4 mb-2">Key Technical Features:</strong>
        <ul class="list-disc pl-5 space-y-2">
          <li>
            <strong class="text-gray-800 dark:text-gray-200">Responsive Web Design (RWD):</strong>
            Advanced use of Media Queries to adapt the layout from mobile to desktop (Mobile First approach).
          </li>
          <li>
            <strong class="text-gray-800 dark:text-gray-200">Modern Layout:</strong>
            Implementation of CSS Flexbox and CSS Grid to create product grids and complex page structures without relying on external frameworks.
          </li>
          <li>
            <strong class="text-gray-800 dark:text-gray-200">HTML Semantics:</strong>
            Correct use of tags (nav, section, article, footer) for a clean and professional document structure.
          </li>
          <li>
            <strong class="text-gray-800 dark:text-gray-200">Styling:</strong> 
            Careful design of typography, color palette, and spacing to maximize readability and visual appeal.
          </li>
          <li>
            <strong class="text-gray-800 dark:text-gray-200">CSS Animations:</strong> 
            Smooth transitions (hover effects, buttons) to enhance the user experience without impacting performance.
          </li>
        <ul>`,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Metodología BEM'],
    github: 'https://github.com/MaitenBlanc/Design-UX-UI/tree/master/tp-final',
    image: [
      'assets/img/app_gloss/gloss-home.png',
      'assets/img/app_gloss/gloss-aboutUs.png',
      'assets/img/app_gloss/gloss-signUp.png',
      'assets/img/app_gloss/gloss-cart.png',
    ],
    link: 'https://gloss-glam.netlify.app/html/',
  },
  {
    title_es: 'Menu Online - Responsive',
    title_en: 'Menu Online - Responsive',
    description_es: `
        <p>
          Este proyecto es una SPA (Single Page Application) construida con Angular que resuelve la necesidad de digitalizar el menú y la toma de pedidos de
          un local de comidas. El objetivo principal fue construir una aplicación escalable y performante utilizando las prácticas más modernas del ecosistema
          Angular. Implementé un flujo completo de usuario que incluye exploración de menú, gestión de carrito de compras en tiempo real y proceso de checkout.
          A diferencia de una SPA tradicional, esta aplicación aprovecha el Server-Side Rendering (SSR) para mejorar los tiempos de "First Contentful Paint",
          garantizando una experiencia de usuario fluida incluso en conexiones lentas.
        <p>
        <strong class="text-black dark:text-white block">Características Técnicas Destacadas:</strong>
          <ul class="list-disc pl-5 space-y-2">
            <li>
              <strong class="text-gray-800 dark:text-gray-200">Server-Side Rendering (SSR):</strong>
              Implementación de @angular/ssr con un servidor Express para renderizar la vista inicial desde el servidor, mejorando el SEO y la velocidad de carga percibida.
            </li>
            <li>
              <strong class="text-gray-800 dark:text-gray-200">Gestión de Formularios:</strong>
              Uso de Template-driven forms para la validación robusta de datos de envío y pedidos.
            </li>
            <li>
              <strong class="text-gray-800 dark:text-gray-200">Routing Avanzado:</strong>
              Navegación fluida entre categorías y detalles del pedido sin recargas de página.
            </li>
            <li>
              <strong class="text-gray-800 dark:text-gray-200">Animaciones:</strong> 
              Integración de @angular/animations para micro-interacciones.
            </li>
          <ul>
      `,
    description_en: `
        <p>
          This project is an SPA (Single Page Application) built with Angular that addresses the need to digitize the menu and order-taking process for a food venue. 
          The main objective was to build a scalable and performant application using the most modern practices of the Angular ecosystem. 
          I implemented a complete user flow that includes menu exploration, real-time shopping cart management, and a checkout process.
          Unlike a traditional SPA, this application leverages Server-Side Rendering (SSR) to improve "First Contentful Paint" times, guaranteeing a smooth user experience even on slow connections.
        <p>
        <strong class="text-black dark:text-white block mt-4 mb-2">Key Technical Features:</strong>
        <ul class="list-disc pl-5 space-y-2">
        <li>
        <strong class="text-gray-800 dark:text-gray-200">Server-Side Rendering (SSR):</strong>
            Implementation of @angular/ssr with an Express server to render the initial view from the server, improving SEO and perceived load speed.
            </li>
          <li>
          <strong class="text-gray-800 dark:text-gray-200">Form Management:</strong>
          Use of Template-driven forms for robust validation of shipping and order data.
          </li>
          <li>
            <strong class="text-gray-800 dark:text-gray-200">Advanced Routing:</strong>
            Smooth navigation between categories and order details without page reloads.
          </li>
          <li>
          <strong class="text-gray-800 dark:text-gray-200">Animations:</strong> 
          Integration of @angular/animations for micro-interactions.
          </li>
          <ul>
          `,
    technologies: ['Angular 17+', 'TypeScript', 'SCSS'],
    github: 'https://github.com/MaitenBlanc/App-pedidos',
    image: [
      'assets/img/app_menu/pedidos-home.png',
      'assets/img/app_menu/pedidos-articulo.png',
      'assets/img/app_menu/pedidos-carrito.png',
      'assets/img/app_menu/pedidos-perfil.png',
    ],
    link: 'https://app-pedidos-comida.netlify.app/',
  },
  {
    title_es: 'Trello Clone - Gestión de Tareas Full Stack',
    title_en: 'Trello Clone - Full Stack Task Management',
    description_es: `
    <p>
      Gestor de tareas tipo Kanban Full Stack. Combina un backend robusto en Java Spring Boot con un frontend de última generación construido en React 19 y TailwindCSS.
      Este proyecto recrea la funcionalidad compleja de Trello enfocándose en el rendimiento y la experiencia de usuario moderna. El frontend fue desarrollado con React 19 y Vite, aprovechando las últimas optimizaciones del framework.
      La característica central, el sistema de "arrastrar y soltar" (Drag & Drop), se implementó utilizando @hello-pangea/dnd, garantizando interacciones fluidas y accesibles tanto para listas como para tarjetas. La comunicación con el backend (API REST en Java/Spring) se gestiona mediante Axios, con un manejo de errores y feedback al usuario en tiempo real a través de notificaciones "toast".
    <p>
    <strong class="text-black dark:text-white block">Arquitectura del Sistema:</strong>
    <ul class="list-disc pl-5 space-y-2">
      <li>
        <strong class="text-gray-800 dark:text-gray-200">Frontend (React):</strong>
        Interfaz de usuario interactiva que implementa Drag & Drop para mover tareas entre estados. Uso de Hooks (useState, useEffect) para la gestión 
        del ciclo de vida y consumo de APIs REST.
      </li>
      <li>
        <strong class="text-gray-800 dark:text-gray-200">Backend (Spring Boot):</strong>
        API RESTful escalable construida con Java. Implementa el patrón MVC (Modelo-Vista-Controlador) y Servicios para separar la lógica de negocio de los controladores.
      </li>
      <li>
        <strong class="text-gray-800 dark:text-gray-200">Base de Datos (MongoDB):</strong>
        Modelo de datos NoSQL diseñado para almacenar documentos anidados (Tableros -> Listas -> Tarjetas) de manera eficiente, optimizando la lectura 
        de grandes volúmenes de datos jerárquicos.
      </li>
    </ul>
    <strong class="text-black dark:text-white block">Características Técnicas Destacadas:</strong>
      <ul class="list-disc pl-5 space-y-2">
        <li>
          <strong class="text-gray-800 dark:text-gray-200">CRUD Completo:</strong>
          Creación, lectura, actualización y eliminación de Tableros, Listas y Tareas.
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Gestión de Rutas:</strong>
          Implementación de React Router v7, la versión más reciente y potente para el manejo de navegación.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Interactividad:</strong>
          Funcionalidad de arrastrar y soltar (Drag and Drop) fluida.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Feedbak de Usuario:</strong>
          Sistema de notificaciones no intrusivas (Toastify/Sonner) para confirmar acciones (creación de tareas, errores de red, etc.).
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">API REST:</strong>
          Endpoints seguros y documentados para la comunicación cliente-servidor.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Gestión de Datos:</strong> 
          Modelado de esquemas flexibles con MongoDB para adaptarse a la estructura variable de las tareas.
        </li>
      <ul>`,
    description_en: `
      <p>
        A full-stack Kanban-style task manager. It combines a robust Java Spring Boot backend with a cutting-edge frontend built on React 19 and Tailwind CSS.
        This project recreates Trello's complex functionality, focusing on performance and a modern user experience. The frontend was developed with React 19 and Vite, leveraging the framework's latest optimizations.
        The core feature, the drag-and-drop system, was implemented using @hello-pangea/dnd, ensuring smooth and accessible interactions for both lists and cards. Communication with the backend (REST API in Java/Spring) is managed through Axios, with real-time error handling and user feedback via toast notifications.
      <p>
      <strong class="text-black dark:text-white block mt-4 mb-2">System Architecture:</strong>
      <ul class="list-disc pl-5 space-y-2">
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Frontend (React):</strong>
          Interactive user interface that implements drag and drop to move tasks between states. Use of hooks (useState, useEffect) for lifecycle management 
          and consumption of REST APIs.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Backend (Spring Boot):</strong>
          Scalable RESTful API built with Java. Implements the MVC (Model-View-Controller) pattern and Services to separate business logic from controllers.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Advanced Routing:</strong>
          Smooth navigation between categories and order details without page reloads.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Database (MongoDB):</strong> 
          NoSQL data model designed to efficiently store nested documents (Dashboards -> Lists -> Cards), optimizing the reading of large volumes of 
          hierarchical data.
        </li>
      </ul>
      <strong class="text-black dark:text-white block mt-4 mb-2">Key Technical Features:</strong>
      <ul class="list-disc pl-5 space-y-2">
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Full CRUD:</strong>
          Creating, reading, updating, and deleting Boards, Lists, and Tasks.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Route Management:</strong>
          Implementation of React Router v7, the latest and most powerful version for navigation management.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Interactivity:</strong>
          Smooth drag-and-drop functionality.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">User Feedback:</strong>
          Non-intrusive notification system (Toastify/Sonner) to confirm actions (task creation, network errors, etc.).
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">REST API:</strong>
          Secure and documented endpoints for client-server communication.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Data Management:</strong> 
          Modeling flexible schemas with MongoDB to adapt to the variable structure of tasks.
        </li>
      <ul>`,
    technologies: ['React 19', 'Tailwind CSS', 'Vite 7', 'Java 17', 'Spring Boot 3', 'MongoDB'],
    github: 'https://github.com/MaitenBlanc/trello-clone',
    image: [
      'assets/img/app_trello/trello-dashboard-clean.PNG',
      'assets/img/app_trello/trello-dashboard.PNG',
      'assets/img/app_trello/trello-cards.PNG',
      'assets/img/app_trello/trello-muestra.mp4',
    ],
  },
  {
    title_es: 'Sistema de Gestión y Ventas',
    title_en: 'Management and Sales System',
    description_es: `
    <p>
      Plataforma integral diseñada para optimizar el flujo operativo de comercios minoristas. Este proyecto Full Stack resuelve la necesidad de centralizar 
      el control de inventario y la facturación en una única herramienta segura.
      <br>
      El núcleo del sistema es su arquitectura de seguridad basada en roles (RBAC). A diferencia de un panel administrativo común, la aplicación muta 
      completamente su interfaz según quién inicie sesión (Admin u Operador): ofrece un Dashboard analítico complejo para Administradores y una interfaz de 
      Punto de Venta (POS) minimalista y ágil, reduciendo la curva de aprendizaje y los errores humanos en caja.
    <p>
    <strong class="text-black dark:text-white block">Características Técnicas Destacadas:</strong>
      <ul class="list-disc pl-5 space-y-2">
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Backend Escalable (NestJS):</strong>
          Arquitectura modular y organizada con Controladores, Servicios y DTOs validados (class-validator). Documentación automática de API con Swagger.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Persistencia Relacional (PostgreSQL + TypeORM):</strong>
          Manejo robusto de datos con relaciones SQL, migraciones automáticas y transacciones seguras para el stock y las ventas.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Frontend de Última Generación:</strong>
          Construido con React 19, React Router v7 para el manejo avanzado de rutas y Tailwind CSS v4 para un estilizado de alto rendimiento.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Seguridad & Autenticación:</strong> 
          Implementación de Passport.js con estrategias JWT y Local para sesiones seguras y protección de endpoints privados.
        </li>
      <ul>`,
    description_en: `
      <p>
        Comprehensive Full Stack platform designed to optimize the operational flow of retail businesses.
        The system centralizes inventory control and billing in a single tool, using a modern, end-to-end typed technology stack (TypeScript).
        <br>
        Security is built on an RBAC (Role-Based Access Control) architecture implemented in the backend with NestJS and Guards.
        Depending on the role (Admin or Operator), the frontend (React 19) renders completely different interfaces: an analytical Dashboard for management and an agile Point of Sale (POS) terminal for cashiers.
      <p>
      <strong class="text-black dark:text-white block mt-4 mb-2">Key Technical Features:</strong>
      <ul class="list-disc pl-5 space-y-2">
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Scalable Backend (NestJS):</strong>
          Modular architecture with Controllers, Services, and validated DTOs (class-validator). Automatic API documentation with Swagger.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Relational Persistence (PostgreSQL + TypeORM):</strong>
          Robust data handling with SQL relationships, automatic migrations, and secure transactions for stock and sales.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Next-Gen Frontend:</strong>
          Built with React 19, React Router v7 for advanced routing, and Tailwind CSS v4 for high-performance styling.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Security & Auth:</strong> 
          Implementation of Passport.js with JWT and Local strategies for secure sessions and private endpoint protection.
        </li>
      <ul>`,
    technologies: [
      'React 19',
      'NestJS',
      'Typescript',
      'PostgreSQL',
      'TypeORM',
      'Tailwind CSS 4',
      'Swagger',
    ],
    github: 'https://github.com/MaitenBlanc/calilegua',
    image: [
      'assets/img/app_calilegua/calilegua-login.PNG',
      'assets/img/app_calilegua/calilegua-venta.PNG',
      'assets/img/app_calilegua/calilegua-admin.mp4',
      'assets/img/app_calilegua/calilegua-operario.mp4',
    ],
  },
  {title_es: 'Rick & Morty API - Full-Stack',
    title_en: 'Rick & Morty API - Full-Stack',
    description_es: `
    <p>
      Aplicación web Full-Stack desarrollada como parte de una evaluación técnica en Angular. El proyecto consiste en un catálogo interactivo basado en la API de Rick & Morty, que incluye un sistema completo de autenticación y gestión de usuarios.
      <br>
      La aplicación destaca por su sólida arquitectura frontend, dividida en módulos con lazy-loading y protección de rutas. Se implementó un sistema de comentarios interactivo donde los usuarios pueden interactuar con los episodios, manejando roles (Administrador/Usuario común) para la moderación de contenido y bloqueo de hilos.
    <p>
    <strong class="text-black dark:text-white block">Características Técnicas Destacadas:</strong>
      <ul class="list-disc pl-5 space-y-2">
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Reactividad y SSR:</strong>
          Uso intensivo de Angular Signals para el control del estado local, RxJS para el manejo asíncrono, e implementación de Server-Side Rendering (SSR) para optimizar el performance.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Gestión de Perfiles y Favoritos:</strong>
          Los usuarios logueados pueden editar su información personal, cargar avatares y mantener una lista persistente de episodios favoritos.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Backend API REST (NestJS):</strong>
          Servicio escalable desarrollado en NestJS 11, conectado a PostgreSQL mediante TypeORM. Implementa autenticación segura con Passport, JWT y encriptación de contraseñas (Bcrypt).
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">UI/UX Consistente:</strong> 
          Interfaz estilizada y responsiva con componentes de Angular Material y Bootstrap, asegurando una experiencia de usuario fluida y accesible.
        </li>
      </ul>`,
    description_en: `
      <p>
        Full-Stack web application developed as part of an Angular technical evaluation. The project consists of an interactive catalog based on the Rick & Morty API, featuring a complete user authentication and management system.
        <br>
        The application stands out for its solid frontend architecture, divided into modules with lazy-loading and route protection. An interactive comment system was implemented where users can interact with episodes, handling roles (Admin/Regular User) for content moderation and thread locking.
      <p>
      <strong class="text-black dark:text-white block mt-4 mb-2">Key Technical Features:</strong>
      <ul class="list-disc pl-5 space-y-2">
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Reactivity and SSR:</strong>
          Intensive use of Angular Signals for local state control, RxJS for asynchronous handling, and implementation of Server-Side Rendering (SSR) to optimize performance.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Profile and Favorites Management:</strong>
          Logged-in users can edit their personal information, upload avatars, and maintain a persistent list of favorite episodes.
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Backend REST API (NestJS):</strong>
          Scalable service developed in NestJS 11, connected to PostgreSQL via TypeORM. Implements secure authentication with Passport, JWT, and password encryption (Bcrypt).
        </li>
        <li>
          <strong class="text-gray-800 dark:text-gray-200">Consistent UI/UX:</strong> 
          Styled and responsive interface using Angular Material and Bootstrap components, ensuring a smooth and accessible user experience.
        </li>
      </ul>`,
    technologies: ['Angular 21', 'SSR', 'Angular Material', 'NestJS 11', 'PostgreSQL', 'TypeORM', 'Cypress'],
    github: 'https://github.com/MaitenBlanc/rick-and-morty-api',
    github_backend: 'https://github.com/MaitenBlanc/nest-rick-morty',
    image: [
      'assets/img/app_rick_morty/home.png',
      'assets/img/app_rick_morty/register.png',
      'assets/img/app_rick_morty/profile.png',
      'assets/img/app_rick_morty/episodes.png',
      'assets/img/app_rick_morty/characters.png'
    ],
    link: 'https://rick-and-morty-api-gamma-brown.vercel.app/',
  },
];
