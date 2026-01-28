import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, NgZone, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollArrow } from '../ui/scroll-arrow/scroll-arrow';
import { Theme } from '../../services/theme';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollArrow],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('plasmaCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private ctx!: CanvasRenderingContext2D | null;
  private animationFrameId: number = 0;
  private particles: any[] = [];
  private mouse = { x: -500, y: -500 };
  private isBrowser: boolean;

  private config = {
    particleCount: 80,
    connectionDistance: 150,
    mouseDistance: 200,
    particleSpeed: 0.6,
  };

  constructor(
    private ngZone: NgZone, 
    public themeService: Theme,
    public languageService: LanguageService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      setTimeout(() => {
        this.initCanvas();
        this.animate();
      }, 0);
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
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
  }

  private initCanvas() {
    if (!this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 40 : 80;
    this.config.connectionDistance = isMobile ? 100 : 150;

    this.particles = [];
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * this.config.particleSpeed,
        vy: (Math.random() - 0.5) * this.config.particleSpeed,
        size: Math.random() * 2 + 1, 
      });
    }
  }

  private animate() {
    this.ngZone.runOutsideAngular(() => {
      const loop = () => {
        this.draw();
        this.animationFrameId = requestAnimationFrame(loop);
      };
      loop();
    });
  }

  private draw() {
    if (!this.ctx || !this.canvasRef) return;
    
    const canvas = this.canvasRef.nativeElement;
    const width = canvas.width;
    const height = canvas.height;

    this.ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.classList.contains('dark');
    const color = isDark ? '255, 255, 255' : '30, 41, 59'; 

    this.particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x <= 0 || p.x >= width) p.vx *= -1;
      if (p.y <= 0 || p.y >= height) p.vy *= -1;

      this.ctx!.beginPath();
      this.ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx!.fillStyle = `rgba(${color}, 0.5)`;
      this.ctx!.fill();

      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.config.connectionDistance) {
          this.ctx!.beginPath();
          this.ctx!.strokeStyle = `rgba(${color}, ${1 - distance / this.config.connectionDistance})`;
          this.ctx!.lineWidth = 0.5;
          this.ctx!.moveTo(p.x, p.y);
          this.ctx!.lineTo(p2.x, p2.y);
          this.ctx!.stroke();
        }
      }

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