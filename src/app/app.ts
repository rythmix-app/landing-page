import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InputBloc} from './components/input-bloc/input-bloc';
import {QualificationBloc} from './components/qualification-bloc/qualification-bloc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputBloc, QualificationBloc],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('landingPage');
}
