import { Routes } from '@angular/router';
import { EmailEditorComponent } from './components/email-editor/email-editor.component';
import {HomeComponent} from './components/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'email-editor', component: EmailEditorComponent }
];
