import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing-module';
import { Projectses } from './project';


@NgModule({
  declarations: [
    Projectses
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
