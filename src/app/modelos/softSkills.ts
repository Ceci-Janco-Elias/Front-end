export class SoftSkills {
    id? : number;
    nombreSS : string;
    porcentajeSS : number;

    constructor(nombreSS: string, porcentajeSS: number){
        this.nombreSS = nombreSS;
        this.porcentajeSS = porcentajeSS;
    }
}