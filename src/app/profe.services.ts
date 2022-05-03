import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { profe } from "./profe.model";


@Injectable()
export class ProfeServices {

    private profes: profe[] = [];

    constructor(private dataServices:DataServices) {

    }

    setProfes(p:profe[]) {
        this.profes = p;
    }
    getProfes() {
        return this.profes;
    }

    obtenerProfes() {
        return this.dataServices.getProfes();
    }
}