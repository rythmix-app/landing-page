import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NeonService } from '../../services/neon.service';

@Component({
  selector: 'app-input-bloc',
  imports: [
    FormsModule
  ],
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

  constructor(private neonService: NeonService) {}

  async onSubmit() {
    if (this.email && this.validateEmail(this.email)) {
      this.isLoading = true;
      this.message = '';

      try {
        const result = await this.neonService.insertEmail(this.tableType, this.email);

        if (result && result.length > 0) {
          this.message = 'Merci ! Votre email a été enregistré.';
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
