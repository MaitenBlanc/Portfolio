import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ABOUT_DATA } from '../data/about.data';
import { PROJECTS_DATA } from '../data/projects.data';
import { SKILLS_DATA } from '../data/skills.data';
import { UI_TRANSLATIONS } from '../data/translations.data';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  // Para saber si se ejecuta en el navegador o en el servidor (SSR)
  private platformId = inject(PLATFORM_ID);
  currentLang = signal<Language>(this.getInitialLanguage());

  constructor() {
    // Reacciona automáticamente cada vez que el idioma cambia
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('preferredLang', this.currentLang());
      }
    });
  }

  private getInitialLanguage(): Language {
    // Intentar leer el localStorage solo en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('preferredLang') as Language;
      if (savedLang === 'es' || savedLang === 'en') {
        return savedLang;
      }
    }
    return 'es';
  }

  toggleLanguage() {
    this.currentLang.set(this.currentLang() === 'es' ? 'en' : 'es');
  }

  t = computed(() => {
    const lang = this.currentLang();
    const isEs = this.currentLang() === 'es';
    const uiTexts = UI_TRANSLATIONS[lang];

    // Mapeo About
    const profileData = {
      name: ABOUT_DATA.name,
      role: isEs ? ABOUT_DATA.role_es : ABOUT_DATA.role_en,
      image: ABOUT_DATA.image,
      description: isEs ? ABOUT_DATA.description_es : ABOUT_DATA.description_en,
      location: isEs ? ABOUT_DATA.location_es : ABOUT_DATA.location_en,
      education: isEs ? ABOUT_DATA.education_es : ABOUT_DATA.education_en,
    };

    // Mapeo Proyectos
    const projectsList = PROJECTS_DATA.map((project) => ({
      ...project,
      shortTitle: isEs ? project.short_title_es : project.short_title_en,
      title: isEs ? project.title_es : project.title_en,
      description: isEs ? project.description_es : project.description_en,
    }));

    // Mapeo Skills
    const skillsList = SKILLS_DATA.map((skill) => ({
      name: isEs ? skill.name_es : (skill.name_en || skill.name_es),
      items: isEs ? skill.items_es : (skill.items_en || skill.items_es),
    }));

    return {
      ...uiTexts,
      nav: {
        ...uiTexts.nav
      },
      hero: {
        ...uiTexts.hero,
        role: profileData.role,
      },
      about: {
        ...uiTexts.aboutText,
        profileData,
      },

      // Listados listos para iterar con @for en los componentes HTML
      projectsList,
      skillsList,
    };
  });
}