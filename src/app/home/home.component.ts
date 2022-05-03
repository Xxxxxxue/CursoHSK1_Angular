import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { DataServices } from '../data.services';
import { profe } from '../profe.model';
import { ProfeServices } from '../profe.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  tipo: string[] = ["hsk_alumnos.png","hsk_empresas.png","hsk_profes.jpeg"];
  foto = "assets/imagen/" + this.tipo[0];

  profes: profe[] = [];
  
  cambiarNom = false;
  cambiarAp = false;
  cambiarCo = false;

  /*pr: profe[] = [
    new profe("Ana","Lodriguez","Ana@gg.com"),
    new profe("Laura","Muñoz","Laura@gg.com"),
    new profe("Pepe","Mena","Ana@gg.com"),
    new profe("Aurora","Chen","Aurora@gg.com")
  ]*/

  paraEdit() {
  }
  editar() {

  }



  constructor(private profeServices:ProfeServices, private dataServices:DataServices) { 
    //this.dataServices.guardaProfes(this.pr);
  }

  ngOnInit(): void {

    setInterval(()=>{
       
        let num: number = Math.round(Math.random() * 2);
        //console.log(num);
        this.foto = "assets/imagen/" + this.tipo[num];
        
    }, 1000);

    this.profeServices.obtenerProfes().subscribe(profesores =>{

      this.profes = Object.values(profesores);
      this.profeServices.setProfes(this.profes);

    });
  }

}
