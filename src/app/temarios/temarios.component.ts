import { Component, OnInit } from '@angular/core';
import { DataServices } from '../data.services';
import { tema } from '../tema.model';
import { TemaServices } from '../tema.services';

@Component({
  selector: 'app-temarios',
  templateUrl: './temarios.component.html',
  styleUrls: ['./temarios.component.css']
})
export class TemariosComponent implements OnInit {

  courses: tema[] = [];

  constructor(private dataServices:DataServices, private temaServices:TemaServices) { 

    /** lo utilice para almacenar datos de los temarios en firebase.
     * una vez tengo datos..  en principio no me hace falta usar, es una prueba 
     * this.dataServices.guardaUnits(this.courses); 
     */

  }

  ngOnInit(): void {

    this.temaServices.obtenerTemarios().subscribe(unit=>{
      
      this.courses = Object.values(unit);
      console.log(this.courses);
      console.log (this.courses[0]);
      this.temaServices.setTemarios(this.courses);

    });

  }

}
