import { Component, DOCUMENT, HostListener, inject, signal } from '@angular/core';
import { Theme } from '../../services/theme';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  public themeService = inject(Theme);
  public languageService = inject(LanguageService);
  private document = inject(DOCUMENT);

  public mobileMenuOpen = signal(false);
  public isScrolled = signal(false);

  // Extraer el número mágico
  private readonly SCROLL_THRESHOLD = 140;

  // Escucha el evento scroll de la ventana
  @HostListener('window:scroll')
  onWindowScroll() {
    const window = this.document.defaultView;
    if (window) {
      this.isScrolled.set(window.scrollY > this.SCROLL_THRESHOLD);
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(open => !open);
    this.updateBodyOverflow(this.mobileMenuOpen());
  }

  closeMobileMenu() {
    if (!this.mobileMenuOpen()) return;
    this.mobileMenuOpen.set(false);
    this.updateBodyOverflow(false);
  }

  private updateBodyOverflow(disableScroll: boolean) {
    if (this.document) {
      this.document.body.style.overflow = disableScroll ? 'hidden' : 'auto';
    }
  }
}
