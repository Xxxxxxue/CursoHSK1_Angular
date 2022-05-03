
export class profe {

    nombre: string = "";
    apellidos: string = "";
    correo: string = "";

    constructor (n:string, a: string, c:string) {
        this.apellidos = a;
        this.nombre = n;
        this.correo = c;
    }

    mostrarProfe() {
        return "Nombre: "+ this.nombre + "\tApellidos: "+ this.apellidos +"\tCorreo: "+ this.correo; 
    }
}