import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { profe } from "./profe.model";
import { tema } from "./tema.model";

@Injectable()
export class DataServices {

    courses: tema[] = [];
    profesores : profe[] =[];
    url: string = "https://cursohsk-default-rtdb.europe-west1.firebasedatabase.app/"

    constructor(private httpClient:HttpClient) {}

    //Metodo para almacenar datos en firebase
    guardaUnits(tema:tema[]) {

        this.httpClient.post(this.url+"temas.json",tema).subscribe(

            response => console.log("Se ha guardado los temarios...."+response),

            error => console.log("Error: "+ error),

        );

    }

    //Metodo mostrar los datos del firebase en el proyecto
    CargarUnits() {

        return this.httpClient.get(this.url+"temas/-N0jc9_ZDvrLvhlssyig.json")

    }
    //para sacar datos como object, facilitar el uso... 
    //llama esta función desde componentes y no funciona return. Hay que poner suscribe() en componente.
    /*Cargar():tema[] {

        this.CargarUnits().subscribe(unit=>{
        
            this.courses = Object.values(unit);
            console.log(unit);
            
        });
        return this.courses;
    }*/

    //Metodo modificar

    //Metodo eliminar


    //GET profesores, todos datos 
    getProfes(): Observable<profe[]> {
        return this.httpClient.get<profe[]>(this.url+"profesores/-N0ogkYR276kT-PnBr5H.json");

    }
    //GET con id
    getProfe(id: number): Observable<profe> {
        const urlid = `${this.url+"profesores/-N0ogkYR276kT-PnBr5H.json"}/${id}`;
        return this.httpClient.get<profe>(urlid);

    }
    //POST profesores
    guardaProfes(profe:profe[]) {

        this.httpClient.post(this.url+"profesores.json",profe).subscribe(

            response => console.log("Se ha guardado los profesores...."+response),

            error => console.log("Error: "+ error),

        );

    }
    //PUT profesores
    updateHero(profe:profe): Observable<any> {
        return this.httpClient.put(this.url+"profesores/-N0ogkYR276kT-PnBr5H.json", profe, this.httpOptions);

    }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };





    /*coursesadd: tema[]= [
    
        new tema("Hola","*********************************************","nihao",["nihao","zaijian","xiexie"]),
        new tema("Gracias","*********************************************","nihao",["nihao","zaijian","xiexie"]),
        new tema("¿Cómo te llamas?","*********************************************","nihao",["nihao","zaijian","xiexie"]),
        new tema("Ella es mi profesora chino.","*********************************************","nihao",["nihao","zaijian","xiexie"]),
        new tema("Su hija tiene 20 años.","*********************************************","nihao",["nihao","zaijian","xiexie"]),
        new tema("¿Qué día es hoy?","*********************************************","nihao",["nihao","zaijian","xiexie"]),
        new tema("Colores","*********************************************","nihao",["nihao","zaijian","xiexie"]),
        new tema("Animales","*********************************************","nihao",["nihao","zaijian","xiexie"]),
        new tema("¿Cuánto vale?","*********************************************","nihao",["nihao","zaijian","xiexie"]),
        new tema("¿Qué sabes?","*********************************************","nihao",["nihao","zaijian","xiexie"]),
        new tema("¿Dónde trabajas?","*********************************************","nihao",["nihao","zaijian","xiexie"]),
        new tema("¿Puedo sentarme aquí?","*********************************************","nihao",["nihao","zaijian","xiexie"]),
        new tema("¿Cómo está el tiempo?","*********************************************","nihao",["nihao","zaijian","xiexie"]),
        new tema("¿Qué está haciendo en casa?","*********************************************","nihao",["nihao","zaijian","xiexie"]),
        new tema("Estoy en bus.","*********************************************","nihao",["nihao","zaijian","xiexie"]),
   
       
     ];*/
}
