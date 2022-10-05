export class Experiencia {
    id? : number;
    nombreExp : string;
    descripcionExp : string;
    fechaExp : string;
    imagenExp : string;

    constructor(nombreExp: string, descripcionExp: string, fechaExp: string, imagenExp: string){
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;
        this.fechaExp = fechaExp;
        this.imagenExp = imagenExp;
    }
}