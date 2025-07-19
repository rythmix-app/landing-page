import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-qualification-bloc',
  imports: [
    NgClass
  ],
  templateUrl: './qualification-bloc.html',
  styleUrl: './qualification-bloc.scss'
})
export class QualificationBloc {
  @Input() icon: string = '';
  @Input() iconType: 'fas' | 'far' | 'fab' = 'fas';
  @Input() iconColor: string = '#14FFEC';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() customClass: string = '';

}
