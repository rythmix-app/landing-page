import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InputBloc} from './components/input-bloc/input-bloc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputBloc],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('landingPage');
}
