import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing-module';
import { Projects } from './projects';
import { Web } from './web/web';
import { Mobile } from './mobile/mobile';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Projects,
    Web,
    Mobile
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }
