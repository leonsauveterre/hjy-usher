import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-404',
  imports: [],
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
