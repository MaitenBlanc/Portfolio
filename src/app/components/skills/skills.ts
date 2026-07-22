import { Component, inject } from '@angular/core';
import { SKILLS_DATA, Skill } from '../../data/skills.data';
import { ScrollArrow } from '../ui/scroll-arrow/scroll-arrow';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  imports: [ScrollArrow],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  public languageService = inject(LanguageService);

  readonly skills: Skill[] = SKILLS_DATA;
}
