import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { tema } from "./tema.model";

@Injectable()
export class TemaServices {

    course: tema[] = [];

    constructor(private dataServices:DataServices) {

    }

    setTemarios(t:tema[]) {
        this.course = t;
    }
    getTemarios() {
        return this.course;
    }

    obtenerTemarios() {
        return this.dataServices.CargarUnits();
    }

    encontrarTema(id:number) {
        return this.course[id-1];
    }
}