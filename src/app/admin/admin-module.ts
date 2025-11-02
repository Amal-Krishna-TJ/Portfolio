import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Admin } from './admin';
import { Dashboard } from './dashboard/dashboard';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Admin,
    Dashboard
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
