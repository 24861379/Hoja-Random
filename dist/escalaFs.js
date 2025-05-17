import { nodo } from "./nodo.js";
export class escalaFs {
    constructor() {
        this.raiz = this.crearArbol();
    }
    crearArbol() {
        const nodo1 = new nodo("F#", "I");
        const nodo2 = new nodo("G#m", "ii");
        const nodo3 = new nodo("A#m", "iii");
        const nodo4 = new nodo("B", "IV");
        const nodo5 = new nodo("C#", "V");
        const nodo6 = new nodo("D#m", "vi");
        const nodo7 = new nodo("E#°", "vii°");
        nodo2.izquierda = nodo1;
        nodo2.derecha = nodo3;
        nodo6.izquierda = nodo5;
        nodo6.derecha = nodo7;
        nodo4.izquierda = nodo2;
        nodo4.derecha = nodo6;
        return nodo4;
    }
    inOrden(nodo) {
        if (nodo !== null) {
            this.inOrden(nodo.izquierda);
            console.log(`Grado: [${nodo.grado}] -> Acorde: ${nodo.nombreChord}`);
            this.inOrden(nodo.derecha);
        }
    }
    buscar(grado) {
        return this.buscarRec(this.raiz, grado);
    }
    buscarRec(nodo, grado) {
        if (nodo === null) {
            return "El grado no corresponde a ningún acorde";
        }
        if (grado === nodo.grado) {
            return `El acorde: ${nodo.nombreChord} es correcto`;
        }
        const izquierda = this.buscarRec(nodo.izquierda, grado);
        if (!izquierda.includes("no corresponde"))
            return izquierda;
        return this.buscarRec(nodo.derecha, grado);
    }
}
//# sourceMappingURL=escalaFs.js.map