import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Projectses implements OnInit{
  projects: any[] = [];
  
    constructor(private router: Router, private http: HttpClient) {}
  
    ngOnInit(): void {
      console.log("ngoninit called");
      
      this.http.get<any[]>('http://localhost:3000/projects').subscribe((data) => {
        this.projects = data;
        console.log('Users:', this.projects);
    });
  }
}
