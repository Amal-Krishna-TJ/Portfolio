import { Component, OnInit } from '@angular/core';
import { Project } from '../services/project';
import { ProjectsPage } from '../projects-page';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {
  projects: ProjectsPage[] = [];

  constructor(private projectService: Project) {}

  ngOnInit(): void {
    console.log("ngoninit called");
    
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
      console.log("hello");
    });
  }
}
