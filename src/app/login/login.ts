import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  clear() {
    this.username = '';
    this.password = '';
  }

  login() {
    this.http.get<any>('http://localhost:3000/admin').subscribe(res => {
      if (res.username === this.username && res.password === this.password) {
        localStorage.setItem('isAdmin', 'true');
        alert('Login successful!');
        this.router.navigate(['/admin']);
      } else if (this.username && this.password) {
        if (this.username.length <= 3) {
          alert('Username must be atleast 3 letters!');
          this.clear();
        } else if (this.password.length <= 8) {
          alert('Password must be atleast 8 letters!');
          this.clear();
        } else {
          localStorage.setItem('isUser', 'true');
          alert('Login successful!');
          this.router.navigate(['/user']);
        }
      } else if (!this.username || !this.password) {
        alert('Please enter credentials!');
        this.clear();
      } else {
        alert('Invalid credentials!');
        this.clear();
      }
    });
  }
}
