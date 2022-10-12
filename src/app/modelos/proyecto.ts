export class Proyecto {
    id?: number;
    nombrePro: string;
    descripcionPro: string;
    urlPro: string;
    imgPro: string;

    constructor(nombrePro: string, descripcionPro: string, urlPro: string, imgPro: string) {
        this.nombrePro = nombrePro;
        this.descripcionPro = descripcionPro;
        this.urlPro = urlPro;
        this.imgPro = imgPro;
    }
}