import { Component, signal, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InputBloc } from './input-bloc/input-bloc';
import { QualificationBloc } from './qualification-bloc/qualification-bloc';
import { AnimatedCounterComponent } from './animated-counter/animated-counter';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, InputBloc, QualificationBloc, AnimatedCounterComponent],
  template: `
<div class="main-1 d-flex flex-column align-items-center gap-4 gap-md-5 p-3 p-md-5">
  <div class="wave-particles"></div>

  <div class="logo">
    <img src="../assets/images/logo_rythmix.png" alt="Logo" class="img-fluid" />
  </div>
  <div class="text d-flex flex-column align-items-center gap-3 gap-md-4 mb-3 mb-md-4">
    <div class="text-top text-center px-2">L'application qui transforme votre façon de découvrir et partager la musique</div>
    <div class="text-min text-center px-3">Testez vos connaissances musicales, défiez vos amis et découvrez de nouveaux sons dans l'expérience blindtest la plus immersive jamais créée.</div>
  </div>
  <app-input-bloc
    title="🚀 Soyez les premiers informés !"
    buttonText="Je m'inscris"
    bottomText="Accès exclusif • Pas de spam • Désinscription en 1 clic"
    placeholder="ton.email@exemple.com"
    [tableType]="'client'"
    (emailSubmitted)="onEmailSubmit($event)">
  </app-input-bloc>
</div>

<div class="main-2 d-flex flex-column align-items-center gap-4 gap-md-5 p-3 p-md-5">
  <div class="title text-center px-2">
    Pourquoi Rythmix ?
  </div>
  <div class="description text-center px-3">
    Une expérience musicale unique qui combine technologie de pointe et passion pour la musique
  </div>

  <div class="features-section w-100">
    <div class="container-fluid">
      <div class="row g-3 g-md-4">
        <div class="col-4">
          <app-qualification-bloc
            icon="lightbulb"
            iconColor="#FFB800"
            title="Mini-jeux innovants"
            description="Blindtest, qui l'a mise, Trackliste... Découvrez des formats de jeu inédits qui challengent votre culture musicale sous tous les angles.">
          </app-qualification-bloc>
        </div>

        <div class="col-4">
          <app-qualification-bloc
            icon="robot"
            iconColor="#CECECE"
            title="IA personnalisée"
            description="Notre intelligence artificielle apprend vos goûts pour créer des défis sur mesure et vous faire découvrir de nouveaux artistes.">
          </app-qualification-bloc>
        </div>

        <div class="col-4">
          <app-qualification-bloc
            icon="trophy"
            iconColor="#FFD700"
            title="Compétition sociale"
            description="Défiez vos amis, montez dans les classements et débloquez des badges exclusifs. La musique n'a jamais été aussi compétitive !">
          </app-qualification-bloc>
        </div>

        <div class="col-4">
          <app-qualification-bloc
            icon="palette"
            iconColor="#814D00"
            title="Design immersif"
            description="Interface moderne, animations fluides et expérience utilisateur soignée pour une immersion totale dans l'univers musical.">
          </app-qualification-bloc>
        </div>

        <div class="col-4">
          <app-qualification-bloc
            icon="globe"
            iconColor="#0E9E12"
            title="Catalogue mondial"
            description="Des hits internationaux aux perles underground, explorez un catalogue musical riche et diversifié mis à jour quotidiennement.">
          </app-qualification-bloc>
        </div>

        <div class="col-4">
          <app-qualification-bloc
            icon="users"
            iconColor="var(--blue-light)"
            title="Communauté active"
            description="Rejoignez une communauté de passionnés, partagez vos playlists et participez à des événements musicaux exclusifs.">
          </app-qualification-bloc>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="main-3 d-flex flex-column align-items-center gap-4 gap-md-5 p-3 p-md-5">
  <div class="title text-center px-2">Un aperçu de l'expérience</div>
  <div class="description text-center px-3">Design moderne, interactions fluides et défis captivants vous attendent</div>

  <div class="phone-container">
    <img src="assets/images/iphone_view.png" alt="Iphone" class="phone-image img-fluid" #phoneImage>
  </div>
  <div class="footer text-center px-3">Interface intuitive • Réactivité optimale • Expérience premium</div>
</div>

<div class="main-4 d-flex flex-column align-items-center gap-4 gap-md-5 p-3 p-md-5">
  <div class="title text-center px-2">Rejoignez le mouvement</div>
  <div class="stats-section w-100">
    <div class="container-fluid">
      <div class="row g-3 g-md-6">
        <div class="col-6">
          <app-animated-counter
            [targetValue]="1000"
            label="Utilisateurs pré-inscrits"
            color="#14FFEC">
          </app-animated-counter>
        </div>

        <div class="col-6">
          <app-animated-counter
            [targetValue]="50000"
            label="Morceaux à jouer"
            color="#14FFEC">
          </app-animated-counter>
        </div>

        <div class="col-6">
          <app-animated-counter
            [targetValue]="15"
            label="Modes de jeux"
            color="#14FFEC">
          </app-animated-counter>
        </div>

        <div class="col-6">
          <app-animated-counter
            [targetValue]="30"
            label="Badges à collectionner"
            color="#14FFEC">
          </app-animated-counter>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="main-5 d-flex flex-column align-items-center gap-4 gap-md-5 p-3 p-md-5">
  <div class="title text-center px-2">Prêt(e) pour la révolution musicale ?</div>
  <div class="description text-center px-3">Soyez parmi les premiers à vivre l'expérience Rythmix. L'inscription est gratuite et vous donne accès à des avantages exclusifs au lancement.</div>
  <app-input-bloc
    title="🔓 Débloque ton accès privilégié !"
    buttonText="Accès prioritaire"
    bottomText="✨ Accès VIP • 🎁 Bonus de lancement • 🔒 Données protégées"
    placeholder="ton.email@exemple.com"
    [tableType]="'clientVip'"
    (emailSubmitted)="onEmailSubmit($event)">
  </app-input-bloc>
</div>

<footer class="footer-section">
  <div class="container">
    <div class="footer-main d-flex flex-column align-items-center gap-3 gap-md-4 mb-4 mb-md-5">
      <div class="footer-logo text-center">
        <h2 class="logo-text">RYTHMIX</h2>
      </div>

      <nav class="footer-nav w-100">
        <ul class="nav-links d-flex flex-wrap justify-content-center gap-2 gap-md-4">
          <li><a href="#" class="nav-link">À propos</a></li>
          <li><a href="#" class="nav-link">Contact</a></li>
          <li><a href="#" class="nav-link">Confidentialité</a></li>
          <li><a href="#" class="nav-link">Conditions</a></li>
          <li><a href="#" class="nav-link">Réseaux</a></li>
          <li><a routerLink="/email-editor" class="nav-link admin-link">📧 Admin Email</a></li>
        </ul>
      </nav>
    </div>

    <div class="social-section d-flex justify-content-center gap-3 mb-4">
      <a href="#" class="social-link" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" class="social-link" aria-label="Twitter">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#" class="social-link" aria-label="TikTok">
        <i class="fab fa-tiktok"></i>
      </a>
      <a href="#" class="social-link" aria-label="Discord">
        <i class="fab fa-discord"></i>
      </a>
    </div>

    <hr class="footer-divider">

    <div class="footer-bottom text-center">
      <p class="copyright-text px-3">
        © 2024, Rythmix. Tous droits réservés. Made with 🎵 in France.
      </p>
    </div>
  </div>
</footer>
  `,
  styleUrls: ['../app.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
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
