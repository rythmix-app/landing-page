import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NeonService } from '../../services/neon.service';
import { ResendService } from '../../services/resend.service';

@Component({
  selector: 'app-input-bloc',
  imports: [FormsModule],
  templateUrl: './input-bloc.html',
  styleUrl: './input-bloc.scss'
})
export class InputBloc {
  @Input() title: string = '🚀 Soyez les premiers informés !';
  @Input() buttonText: string = 'Je m\'inscris';
  @Input() bottomText: string = 'Accès exclusif • Pas de spam • Désinscription en 1 clic';
  @Input() placeholder: string = 'votre@email.com';
  @Input() tableType: 'client' | 'clientVip' = 'client';

  @Output() emailSubmitted = new EventEmitter<string>();

  email: string = '';
  isLoading: boolean = false;
  message: string = '';

  constructor(
    private neonService: NeonService,
    private resendService: ResendService
  ) {}

  async onSubmit() {
    if (this.email && this.validateEmail(this.email)) {
      this.isLoading = true;
      this.message = '';

      try {
        // 1. Insérer en base
        const result = await this.neonService.insertEmail(this.tableType, this.email);

        if (result && result.length > 0) {
          // 2. Envoyer l'email de bienvenue
          try {
            const isVip = this.tableType === 'clientVip';
            await this.resendService.envoyerEmailBienvenue(this.email, isVip);

            this.message = isVip
              ? '🌟 Bienvenue VIP ! Vérifiez votre email pour vos privilèges exclusifs.'
              : '✅ Merci ! Email de bienvenue envoyé, vérifiez votre boîte.';

          } catch (emailError) {
            console.error('Erreur envoi email:', emailError);
            this.message = '✅ Inscription réussie ! (Email en cours d\'envoi...)';
          }

          this.emailSubmitted.emit(this.email);
          this.email = '';
        } else {
          this.message = 'Une erreur est survenue. Veuillez réessayer.';
        }
      } catch (err: any) {
        console.error('Erreur Neon:', err);

        if (err.message?.includes('unique constraint') || err.message?.includes('duplicate key')) {
          this.message = 'Cet email est déjà enregistré.';
        } else {
          this.message = 'Une erreur est survenue. Veuillez réessayer.';
        }
      } finally {
        this.isLoading = false;
      }
    } else {
      this.message = 'Veuillez entrer un email valide.';
    }
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
