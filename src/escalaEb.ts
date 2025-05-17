import { nodo } from "./nodo.js";

export class escalaEb {
    raiz: nodo;

    constructor() {
        this.raiz = this.crearArbol(); // Asignación del árbol fijo
    }

    private crearArbol(): nodo {
        const nodo1 = new nodo("Eb", "I");
        const nodo2 = new nodo("Fm", "ii");
        const nodo3 = new nodo("Gm", "iii");
        const nodo4 = new nodo("Ab", "IV");
        const nodo5 = new nodo("Bb", "V");
        const nodo6 = new nodo("Cm", "vi");
        const nodo7 = new nodo("D°", "vii°");

        nodo2.izquierda = nodo1;
        nodo2.derecha = nodo3;

        nodo6.izquierda = nodo5;
        nodo6.derecha = nodo7;

        nodo4.izquierda = nodo2;
        nodo4.derecha = nodo6;

        return nodo4;
    }

    inOrden(nodo: nodo | null): void {
        if (nodo !== null) {
            this.inOrden(nodo.izquierda);
            console.log(`Grado: [${nodo.grado}] -> Acorde: ${nodo.nombreChord}`);
            this.inOrden(nodo.derecha);
        }
    }

    buscar(grado: string): string {
        return this.buscarRec(this.raiz, grado);
    }

    private buscarRec(nodo: nodo | null, grado: string): string {
        if (nodo === null) {
            return "El grado no corresponde a ningún acorde";
        }

        if (grado === nodo.grado) {
            return `El acorde: ${nodo.nombreChord} es correcto`;
        }

        // Buscar en ambos lados
        const izquierda = this.buscarRec(nodo.izquierda, grado);
        if (!izquierda.includes("no corresponde")) return izquierda;

        return this.buscarRec(nodo.derecha, grado);
    }
}

// Prueba
/* function main(): void {
    const arbol = new escalaC();
    arbol.inOrden(arbol.raiz);
    console.log(" ");
    console.log(arbol.buscar("I"));
    console.log(arbol.buscar("8"));
}

main(); */
