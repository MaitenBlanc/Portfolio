import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  // Por seguridad
  private document = inject(DOCUMENT);
  readonly currentYear = new Date().getFullYear();

  scrollToTop() {
    // Prevenir errores en SSR
    const window = this.document.defaultView;
    if (window) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
