import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TemariosComponent } from './temarios/temarios.component';
import { FooterComponent } from './footer/footer.component';
import { UnitComponent } from './unit/unit.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { NotesComponent } from './notes/notes.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { TemaServices } from './tema.services';
import { ProfeServices } from './profe.services';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TemariosComponent,
    FooterComponent,
    UnitComponent,
    EjerciciosComponent,
    NotesComponent,
    ErrorPersonalizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DataServices,TemaServices,ProfeServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
