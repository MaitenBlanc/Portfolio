import { effect, inject, Injectable, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private document = inject(DOCUMENT);

  public darkMode = signal<boolean>(true);

  constructor() {
    effect(() => {
      const isDark = this.darkMode();
      const htmlElement = this.document.documentElement;

      if (isDark) {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    });
  }

  toggleDarkMode() {
    this.darkMode.update((mode) => !mode);
  }
}
