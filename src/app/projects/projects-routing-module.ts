import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Projects } from './projects';
import { Web } from './web/web';
import { Mobile } from './mobile/mobile';

const routes: Routes = [{ path: '', component: Projects, children: [{ path: 'web', component: Web }, { path: 'mobile', component: Mobile }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
