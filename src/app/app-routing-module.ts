import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './admin/dashboard/dashboard';
import { authGuard } from './auth-guard';
import { Login } from './login/login';

const routes: Routes = [
  { path: 'projects', loadChildren: () => import('./projects/projects-module').then(m => m.ProjectsModule) },
  { path: 'about', loadChildren: () => import('./about/about-module').then(m => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact-module').then(m => m.ContactModule) },
  { path: 'admin', component: Dashboard, canActivate: [authGuard] },
  { path: 'login', component: Login },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user-module').then(m => m.UserModule) },
  { path: 'project', loadChildren: () => import('./project/project-module').then(m => m.ProjectModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
