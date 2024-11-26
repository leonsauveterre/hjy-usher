import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caveat',
  standalone: true,
  imports: [],
  templateUrl: './caveat.component.html',
  styleUrl: './caveat.component.css'
})
export class CaveatComponent {
  isOnDisplay = false;
  @Input() message = 'This is a customizable alert message.';

  constructor() {
  }

  trigger(message: string, type: 'success' | 'warning' | 'error' = 'success'): void {
    if (message === '') {
      return;
    }

    const hostElement = document.querySelector('app-caveat') as HTMLElement;
    hostElement.classList.add('show');

    if (type === 'success') {
      this.message = '😺 ' + message;
      hostElement.classList.add('alert-success');
    } else if (type === 'warning') {
      hostElement.classList.add('alert-warning');
      this.message = '🌧️ ' + message;
    } else if (type === 'error') {
      hostElement.classList.add('alert-error');
      this.message = '📢 ' + message;
    }

    this.isOnDisplay = true;
    this.closeAlert(hostElement);
  }

  closeAlert(hostElement: HTMLElement): void {
    setTimeout(() => {
      hostElement.classList.remove('show', 'alert-success');
      hostElement.classList.remove('show', 'alert-warning');
      hostElement.classList.remove('show', 'alert-error');
      this.message = '';
      this.isOnDisplay = false;
    }, 3500);
  }
}
