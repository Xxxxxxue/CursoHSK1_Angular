
export class palabra{

    idTema: number= 0;
    word: string= "";
    significado: string= "";

    
    constructor(idt:number, word:string, sig:string){

        this.idTema = idt;
        this.word = word;
        this.significado = sig;
    }

}