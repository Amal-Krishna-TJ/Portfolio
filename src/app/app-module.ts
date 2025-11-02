import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { Login } from './login/login';
import { provideHttpClient } from '@angular/common/http';
import { Highlight } from './directives/highlight';
import { provideHttpClientTesting } from '@angular/common/http/testing';

@NgModule({
  declarations: [
    App,
    Login,
    Highlight
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideHttpClientTesting()
  ],
  bootstrap: [App]
})
export class AppModule { }
