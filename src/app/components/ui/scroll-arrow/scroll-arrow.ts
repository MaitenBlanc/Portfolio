import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-arrow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-arrow.html',
  styleUrl: './scroll-arrow.css',
})
export class ScrollArrow {
  @Input({ required: true }) targetId: string = '';
  @Input() label: string = 'Continuar';

  scrollToTarget() {
    const element = document.getElementById(this.targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with id '${this.targetId}' not found.`);
    }
  }
}
