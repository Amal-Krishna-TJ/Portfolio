import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('M3-Project-T1');

  isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true';
  }

}
