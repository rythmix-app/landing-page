import { Component, signal, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputBloc } from './components/input-bloc/input-bloc';
import { QualificationBloc } from './components/qualification-bloc/qualification-bloc';
import { AnimatedCounterComponent } from './components/animated-counter/animated-counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputBloc, QualificationBloc, AnimatedCounterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy, AfterViewInit {
  protected readonly title = signal('landingPage');

  @ViewChild('phoneImage') phoneImage!: ElementRef;

  private observer!: IntersectionObserver;
  private isPhoneModalOpen = false;
  private phoneContainer!: HTMLElement;

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.setupScrollAnimation();
      this.setupPhoneModal();
    }, 100);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    document.body.style.overflow = 'auto';
  }

  setupScrollAnimation() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const phoneElement = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          phoneElement.classList.remove('drop-in', 'floating', 'drop-and-float');

          setTimeout(() => {
            phoneElement.classList.add('drop-and-float');
          }, 50);

        } else {
          phoneElement.classList.remove('drop-in', 'floating', 'drop-and-float');

          if (!this.isMobile() || !this.isPhoneModalOpen) {
            phoneElement.style.transform = 'translateY(-100px)';
            phoneElement.style.opacity = '0';
          }
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    if (this.phoneImage?.nativeElement) {
      this.observer.observe(this.phoneImage.nativeElement);
    }
  }

  setupPhoneModal() {
    if (this.phoneImage?.nativeElement) {
      this.phoneContainer = this.phoneImage.nativeElement.parentElement as HTMLElement;

      this.phoneImage.nativeElement.addEventListener('click', (event: Event) => {
        event.stopPropagation();
        if (this.isMobile()) {
          this.togglePhoneModal();
        }
      });

      this.phoneContainer.addEventListener('click', (event: Event) => {
        if (this.isMobile() && this.isPhoneModalOpen) {
          const target = event.target as HTMLElement;

          if (target === this.phoneContainer || this.isCloseButtonArea(event as MouseEvent)) {
            this.togglePhoneModal();
          }
        }
      });
    }
  }

  private togglePhoneModal() {
    if (!this.isMobile()) return;

    this.isPhoneModalOpen = !this.isPhoneModalOpen;

    if (this.isPhoneModalOpen) {
      this.phoneContainer.classList.add('modal-open');
      document.body.style.overflow = 'hidden';

      if (this.phoneImage?.nativeElement) {
        this.phoneImage.nativeElement.style.transform = 'none';
        this.phoneImage.nativeElement.style.opacity = '1';
      }
    } else {
      this.phoneContainer.classList.remove('modal-open');
      document.body.style.overflow = 'auto';
    }
  }

  private isCloseButtonArea(event: MouseEvent): boolean {
    const rect = this.phoneContainer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const buttonSize = window.innerWidth <= 576 ? 45 : 55;
    return x > rect.width - buttonSize && y < buttonSize;
  }

  private isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isPhoneModalOpen) {
      this.togglePhoneModal();
    }
  }

  @HostListener('window:resize')
  handleResize() {
    if (!this.isMobile() && this.isPhoneModalOpen) {
      this.togglePhoneModal();
    }
  }

  onNewsletterSubmit(email: string) {
    console.log('Newsletter subscription:', email);
  }

  onVipSubmit(userData: any) {
    console.log('VIP subscription:', userData);
  }

  onEmailSubmit(email: string) {
    console.log('Email reçu:', email);
  }
}
