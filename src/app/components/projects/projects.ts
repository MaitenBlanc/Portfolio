import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { Project, PROJECTS_DATA } from '../../data/projects.data';
import { ScrollArrow } from '../ui/scroll-arrow/scroll-arrow';
import { LanguageService } from '../../services/language.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ScrollArrow],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  public languageService = inject(LanguageService);
  private document = inject(DOCUMENT);

  readonly projects: Project[] = PROJECTS_DATA;
  
  public selectedProject = signal<Project | null>(null);

  @ViewChild('modalContainer') modalContainer?: ElementRef<HTMLElement>;

  openProject(project: Project) {
    this.selectedProject.set(project);
    
    if (this.document) {
      this.document.body.style.overflow = 'hidden';
    }

    requestAnimationFrame(() => {
      if (this.modalContainer?.nativeElement) {
        this.modalContainer.nativeElement.scrollTop = 0;
      }
    });
  }

  closeProject() {
    this.selectedProject.set(null);
    
    if (this.document) {
      this.document.body.style.overflow = 'auto';
    }
  }
}
