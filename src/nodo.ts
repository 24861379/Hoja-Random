export class nodo {
    nombreChord: string;
    grado: string;
    izquierda: nodo | null;
    derecha: nodo | null;

    constructor(nombreChord: string, grado: string) {
        this.nombreChord = nombreChord;
        this.grado = grado;
        this.izquierda = null;
        this.derecha = null;
    }
}
