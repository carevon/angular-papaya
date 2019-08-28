import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Importando o Angular Forms
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// Importando o Angular HttpClient
import {HttpClientModule} from '@angular/common/http'

// Forma antiga de importar o componente
//import {FormComponent } from './form/form.component'
//Forma nova de importar o componente
import {FormComponent } from './components/index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // módulo do angular forms
    ReactiveFormsModule,  // módulo do angular forms
    BrowserAnimationsModule,
    HttpClientModule // Módulo do angular HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
