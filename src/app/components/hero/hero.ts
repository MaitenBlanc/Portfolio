import { Component, ElementRef, ViewChild, OnDestroy, HostListener, inject, afterNextRender } from '@angular/core';
import { ScrollArrow } from '../ui/scroll-arrow/scroll-arrow';
import { Theme } from '../../services/theme';
import { LanguageService } from '../../services/language.service';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollArrow],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnDestroy {
  @ViewChild('plasmaCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  public themeService = inject(Theme);
  public languageService = inject(LanguageService);

  private ctx!: CanvasRenderingContext2D | null;
  private animationFrameId: number = 0;
  private particles: Particle[] = [];
  private mouse = { x: -500, y: -500 };

  private config = {
    particleCount: 80,
    connectionDistance: 150,
    mouseDistance: 200,
    particleSpeed: 0.6,
  };

  constructor() {
    afterNextRender(() => {
      this.initCanvas();
      this.animate();
    });
  }

  ngOnDestroy(): void {
    if (typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.canvasRef) return;
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
  }

  @HostListener('window:resize')
  onResize() {
    if (!this.canvasRef || !this.ctx) return;

    const canvas = this.canvasRef.nativeElement;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Recalcular cantidad de partículas si el usuario rota el celular
    this.updateConfigForScreenSize();
  }

  private updateConfigForScreenSize() {
    const isMobile = window.innerWidth < 768;
    this.config.connectionDistance = isMobile ? 100 : 150;
  }

  private initCanvas() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    this.ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    this.updateConfigForScreenSize();
    const particleCount = window.innerWidth < 768 ? 40 : 80;

    // Generación de partículas
    this.particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * this.config.particleSpeed,
      vy: (Math.random() - 0.5) * this.config.particleSpeed,
      size: Math.random() * 2 + 1,
    }));
  }

  private animate = () => {
    this.draw();
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  private draw() {
    if (!this.ctx || !this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    const width = canvas.width;
    const height = canvas.height;

    this.ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.classList.contains('dark');
    const particleColor = isDark ? '255, 255, 255' : '30, 41, 59';

    // Iterar sobre las partículas
    this.particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      // Rebote en bordes
      if (p.x <= 0 || p.x >= width) p.vx *= -1;
      if (p.y <= 0 || p.y >= height) p.vy *= -1;

      // Dibujar partícula
      this.ctx!.beginPath();
      this.ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx!.fillStyle = `rgba(${particleColor}, 0.5)`;
      this.ctx!.fill();

      // Conexiones entre partículas
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.config.connectionDistance) {
          this.ctx!.beginPath();
          this.ctx!.strokeStyle = `rgba(${particleColor}, ${1 - distance / this.config.connectionDistance})`;
          this.ctx!.lineWidth = 0.5;
          this.ctx!.moveTo(p.x, p.y);
          this.ctx!.lineTo(p2.x, p2.y);
          this.ctx!.stroke();
        }
      }

      // Interacción con el mouse
      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const mouseDist = Math.sqrt(dx * dx + dy * dy);

      if (mouseDist < this.config.mouseDistance) {
        this.ctx!.beginPath();
        const opacity = 1 - mouseDist / this.config.mouseDistance;
        this.ctx!.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
        this.ctx!.lineWidth = 1;
        this.ctx!.moveTo(p.x, p.y);
        this.ctx!.lineTo(this.mouse.x, this.mouse.y);
        this.ctx!.stroke();
      }
    });
  }
}