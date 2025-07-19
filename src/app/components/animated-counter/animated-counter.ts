import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-counter',
  imports: [CommonModule],
  template: `
    <div class="counter-container">
      <div class="counter-display" [style.color]="color">
        {{ targetValue }}
      </div>
      <div class="counter-label">{{ label }}</div>
    </div>
  `,
  styleUrl: './animated-counter.scss'
})
export class AnimatedCounterComponent {
  @Input() targetValue: number = 0;
  @Input() label: string = '';
  @Input() color: string = '#00bcd4';
}
