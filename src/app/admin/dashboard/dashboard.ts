import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  about = { name: '', role: '', description: '' };
  projects: any[] = [];
  project = { id: 0, title: '', description: '', tech: '' };
  editMode = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadProjects();
  }

  getAbout() {
    this.http.get<any>('http://localhost:3000/about').subscribe((res) => {
      this.about = res;
    });
  }

  saveAbout() {
    this.http
      .put('http://localhost:3000/about', this.about)
      .subscribe(() => alert('About info updated successfully!'));
  }

  addProject(project: any) {
    this.http.post('http://localhost:3000/projects', project).subscribe();
  }

  loadProjects() {
    this.http.get<any[]>('http://localhost:3000/projects').subscribe((data) => {
      this.projects = data;
    });
  }

  // 🔹 CREATE / UPDATE
  saveProject() {
    if (this.editMode) {
      this.http
        .put(`http://localhost:3000/projects/${this.project.id}`, this.project)
        .subscribe(() => {
          alert('Project updated!');
          this.cancelEdit();
          this.loadProjects();
        });
    } else {
      this.http.post('http://localhost:3000/projects', this.project).subscribe(() => {
        alert('Project added!');
        this.project = { id: 0, title: '', description: '', tech: '' };
        this.loadProjects();
      });
    }
  }

  // 🔹 EDIT
  editProject(p: any) {
    this.project = { ...p };
    this.editMode = true;
  }

  // 🔹 DELETE
  deleteProject(id: number) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.http.delete(`http://localhost:3000/projects/${id}`).subscribe(() => {
        alert('Project deleted!');
        this.loadProjects();
      });
    }
  }

  // 🔹 CANCEL EDIT
  cancelEdit() {
    this.editMode = false;
    this.project = { id: 0, title: '', description: '', tech: '' };
  }

  logout() {
    localStorage.removeItem('isAdmin');
    alert('Logged out successfully!');
    this.router.navigate(['/login']);
  }

}
