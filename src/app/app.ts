import { Component, signal, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputBloc } from './components/input-bloc/input-bloc';
import { QualificationBloc } from './components/qualification-bloc/qualification-bloc';
import { AnimatedCounterComponent } from './components/animated-counter/animated-counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputBloc, QualificationBloc, AnimatedCounterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy, AfterViewInit {
  protected readonly title = signal('landingPage');

  @ViewChild('phoneImage') phoneImage!: ElementRef;

  private observer!: IntersectionObserver;

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.setupScrollAnimation();
    }, 100);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
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

          phoneElement.style.transform = 'translateY(-100px)';
          phoneElement.style.opacity = '0';
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
