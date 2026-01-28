import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Project, PROJECTS_DATA } from '../../data/projects.data';
import { ScrollArrow } from '../ui/scroll-arrow/scroll-arrow';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollArrow],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = PROJECTS_DATA;
  selectedProject: Project | null = null;

  constructor(
    public languageService: LanguageService,
  ) {}


  @ViewChild('modalContainer') modalContainer!: ElementRef;

  openProject(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if(this.modalContainer) {
      this.modalContainer.nativeElement.scrollTop = 0;
      }
    }, 0);
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}
