import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SupabaseService } from '../../services/supabase.service'; // Ajustez le chemin

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
  @Input() tableType: 'client' | 'clientVip' = 'client'; // Nouveau input pour choisir la table

  @Output() emailSubmitted = new EventEmitter<string>();

  email: string = '';
  isLoading: boolean = false;
  message: string = '';

  constructor(private supabaseService: SupabaseService) {}

  async onSubmit() {
    if (this.email && this.validateEmail(this.email)) {
      this.isLoading = true;
      this.message = '';

      try {
        const { data, error } = await this.supabaseService.client
          .from(this.tableType)
          .insert([
            {
              email: this.email,
              uuid: crypto.randomUUID() // Génère un UUID
            }
          ]);

        if (error) {
          console.error('Erreur lors de l\'insertion:', error);
          this.message = 'Une erreur est survenue. Veuillez réessayer.';
        } else {
          this.message = 'Merci ! Votre email a été enregistré.';
          this.emailSubmitted.emit(this.email);
          this.email = ''; // Reset après envoi
        }
      } catch (err) {
        console.error('Erreur:', err);
        this.message = 'Une erreur est survenue. Veuillez réessayer.';
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
