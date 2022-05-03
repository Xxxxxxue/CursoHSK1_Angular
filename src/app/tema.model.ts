import { palabra } from "./word.model";

export class tema {

    titulo: string= "";
    descripcion: string= "";
    contenido: string= "";
    palabras: palabra[] = [];
    
    constructor(t:string, des:string, con:string, p:palabra[]) {

        this.titulo = t;
        this.contenido = con;
        this.descripcion = des;
        this.palabras = p;
    }


}

