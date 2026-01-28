import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SKILLS_DATA, Skill } from '../../data/skills.data';
import { ScrollArrow } from '../ui/scroll-arrow/scroll-arrow';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollArrow],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills: Skill[] = SKILLS_DATA;

  constructor(
    public languageService: LanguageService,
  ) {}
}
