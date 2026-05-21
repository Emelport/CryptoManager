import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive, RouterOutlet, MatSidenavModule, MatIconModule, MatButtonModule],
  templateUrl: './app.html'
})
export class App {
  protected readonly menuItems = [
    { path: '/news', label: 'News', icon: 'article' },
    { path: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/portfolio', label: 'Portfolio', icon: 'account_box' },
  ];

  protected readonly collapsed = signal(false);

  protected toggleSidenav() {
    this.collapsed.update((current) => !current);
  }
}
