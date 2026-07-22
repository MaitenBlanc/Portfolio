import { Component, inject, input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-arrow',
  imports: [],
  templateUrl: './scroll-arrow.html',
  styleUrl: './scroll-arrow.css',
})
export class ScrollArrow {
  private document = inject(DOCUMENT);

  public targetId = input.required<string>();
  public label = input<string>('Continuar');

  scrollToTarget() {
    const element = this.document.getElementById(this.targetId());
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with id '${this.targetId()}' not found.`);
    }
  }
}
