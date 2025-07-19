import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

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

  @Output() emailSubmitted = new EventEmitter<string>();

  email: string = '';

  onSubmit() {
    if (this.email) {
      this.emailSubmitted.emit(this.email);
      this.email = ''; // Reset après envoi
    }
  }
}
