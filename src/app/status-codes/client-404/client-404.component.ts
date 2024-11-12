import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client-404',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './client-404.component.html',
  styleUrl: './client-404.component.css'
})
export class Client404Component {
  constructor(private router: Router) {
  }

  navigateToHomepage() {
    this.router.navigate(['/bienvenue']);
  }
}
