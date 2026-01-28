import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollArrow } from '../ui/scroll-arrow/scroll-arrow';
import { ABOUT_DATA, About } from '../../data/about.data';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollArrow],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutMe {
  about: About = ABOUT_DATA;

  constructor(
    public languageService: LanguageService,
  ) {}
}
