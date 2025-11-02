import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing-module';
import { Contact } from './contact';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Contact
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule
  ]
})
export class ContactModule { }
