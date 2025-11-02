import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('isUser');
    alert('Logged out successfully!');
    this.router.navigate(['/login']);
  }
}
