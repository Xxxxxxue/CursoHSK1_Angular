import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { TemariosComponent } from './temarios/temarios.component';
import { UnitComponent } from './unit/unit.component';

const routes: Routes = [
  /**Rutas */
  {path:'', component:HomeComponent},
  {path:"temarios", component:TemariosComponent},
  {path:"temarios/unit/:id", component:UnitComponent},
  {path:"ejercicios", component:EjerciciosComponent},
  {path:"apuntes", component:NotesComponent},
  {path:"**", component:ErrorPersonalizadoComponent}  //cualquier ruta que no sea los que hemos citado
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
