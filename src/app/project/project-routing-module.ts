import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Projectses } from './project';

const routes: Routes = [{ path: '', component: Projectses }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
