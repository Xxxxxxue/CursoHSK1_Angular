import { Component, OnInit } from '@angular/core';
import { DataServices } from '../data.services';
import { tema } from '../tema.model';
import { TemaServices } from '../tema.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  course: tema[] = [];
  
  sty = {display : "none"};
  pinchado = false;
  
  minimenu() {
    this.sty.display = "block";
  }
  minimenuout() {
    this.sty.display = "none";
    this.pinchado = false;
  }

  pinchaMore() {
    this.pinchado = true;
    console.log(this.pinchado);
  }
  pinchaHidden() {
    this.pinchado = false;
    console.log(this.pinchado);
  }
  
  constructor(private temaServices:TemaServices, private dataServices:DataServices) { 


  }

  ngOnInit(): void {

    this.temaServices.obtenerTemarios().subscribe(unit=>{
      
      this.course = Object.values(unit);
      console.log(this.course);
      console.log (this.course[0]);
      this.temaServices.setTemarios(this.course);

    });
    this.course = this.temaServices.getTemarios();
    console.log(this.course.length);  //no se porque sale 0 pero los datos si ha almacenado correctamente.

  }


}
