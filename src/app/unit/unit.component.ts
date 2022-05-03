import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServices } from '../data.services';
import { tema } from '../tema.model';
import { TemaServices } from '../tema.services';
import { palabra } from '../word.model';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  id:number = 0 ;
  titulo: string = "";
  descripcion: string ="";
  contenido: string ="";
  words: palabra[] = [];
  cursos: tema[] = [];

  constructor(private route:ActivatedRoute,private router:Router,private temaServices:TemaServices,private dataServices:DataServices) {
    
   
  }

  ngOnInit(): void {

    /*this.temaServices.obtenerTemarios().subscribe(unit=>{     
      this.cursos = Object.values(unit);
      this.temaServices.setTemarios(this.cursos);
    });*/

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    let curso: tema = this.temaServices.encontrarTema(this.id);
    console.log(curso);
    this.titulo = curso.titulo;
    this.descripcion = curso.descripcion;
    this.contenido = curso.contenido;
    this.words = curso.palabras;

  }

  volverTemario() {
    this.router.navigate(['temarios']);
  }


}
