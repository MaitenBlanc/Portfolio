import { Component, HostListener, signal } from '@angular/core';
import { Theme } from '../../services/theme';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  mobileMenuOpen = signal(false);
  isScrolled = signal(false);

  constructor(
    public themeService: Theme,
    public languageService: LanguageService
  ) {}

  // Escucha el evento scroll de la ventana
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollThreshold = 140; 
    
    this.isScrolled.set(window.scrollY > scrollThreshold);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
    if (this.mobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
    document.body.style.overflow = 'auto';
  }
}
