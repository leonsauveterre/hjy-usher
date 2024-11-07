import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgClass, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import Darkmode from 'darkmode-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    NgIf,
    NgForOf,
    NgClass,
    SidebarMenuComponent,
    NgOptimizedImage
  ],
  standalone: true
})
export class AppComponent implements OnInit {
  darkmode?: Darkmode;
  darkModeActive = false;

  constructor(private router: Router) {
  }

  navigateToHomepage() {
    this.router.navigate(['/bienvenue']);
  }

  openEmailDraft() {
    const email = 'zhaoliang03@huice.com';
    const subject = encodeURIComponent('[HJY Usher][Issue Report]');
    const body = encodeURIComponent('Please describe the issue you are experiencing or any idea that you hold: ');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  ngOnInit() {
    this.darkmode = new Darkmode({
      bottom: '2px',
      right: '2px',
      time: '0.5s',
      mixColor: '#f8f8f8'
    });
    this.darkModeActive = this.darkmode.isActivated();
  }

  toggleDarkMode() {
    this.darkmode?.toggle();
    this.darkModeActive = !this.darkModeActive;
  }
}
