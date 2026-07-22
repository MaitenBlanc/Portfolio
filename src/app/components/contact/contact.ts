import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private http = inject(HttpClient);
  public languageService = inject(LanguageService);
  public isSubmitting = false;

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.isSubmitting) return;

    this.isSubmitting = true;

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const formspreeUrl = environment.formspreeUrl;
    const isEs = this.languageService.currentLang() === 'es';
    const isDark =
      document.documentElement.classList.contains('dark') ||
      document.body.classList.contains('dark');

    const swalConfig = {
      buttonsStyling: false,
      background: isDark ? '#27272a' : '#ffffff',
      color: isDark ? '#ffffff' : '#111827',
      customClass: {
        popup: 'rounded-sm shadow-2xl border border-gray-100 dark:border-zinc-700/50',
        title: 'text-2xl font-bold mt-2',
        htmlContainer: 'text-gray-600 dark:text-gray-400',
        confirmButton:
          'rounded-sm bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-widest uppercase text-sm py-3 px-8 transition-colors duration-300 mt-4 cursor-pointer',
        icon: 'border-0',
      },
    };

    this.http
      .post(formspreeUrl, formData, {
        headers: { Accept: 'application/json' },
      })
      .subscribe({
        next: () => {
          Swal.fire({
            ...swalConfig,
            title: isEs ? '¡Mensaje enviado!' : 'Message sent!',
            text: isEs
              ? 'Gracias por contactarte. Te responderé a la brevedad.'
              : 'Thanks for reaching out. I will get back to you shortly.',
            icon: 'success',
            confirmButtonText: isEs ? 'Aceptar' : 'OK',
          });
          form.reset();
        },
        error: (err) => {
          console.error('Error de HTTP:', err);
          Swal.fire({
            ...swalConfig,
            title: 'Error',
            text: isEs
              ? 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde.'
              : 'There was a problem sending your message. Please try again later.',
            icon: 'error',
            confirmButtonText: isEs ? 'Aceptar' : 'OK',
          });
        },
      });
  }
}
