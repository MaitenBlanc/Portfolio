import { Component, inject } from '@angular/core';
import { ScrollArrow } from '../ui/scroll-arrow/scroll-arrow';
import { ABOUT_DATA, About } from '../../data/about.data';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  imports: [ScrollArrow],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutMe {
  public languageService = inject(LanguageService);

  readonly about: About = ABOUT_DATA;
}