import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsPage } from '../projects-page';

@Injectable({
  providedIn: 'root'
})
export class Project {
  apiUrl = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any[]> {
    return this.http.get<ProjectsPage[]>(this.apiUrl);
  }
}
