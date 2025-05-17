import { escalaC } from "./escalaC.js";
import { escalaCb } from "./escalaCb.js";
import { escalaD } from "./escalaD.js";
import { escalaDb } from "./escalaDb.js";
import { escalaGb } from "./escalaGb.js";
import { escalaCs } from "./escalaCs.js";
import { escalaF } from "./escalaF.js";
import { escalaBb } from "./escalaBb.js";
import { escalaEb } from "./escalaEb.js";
import { escalaAb } from "./escalaAb.js";
import { escalaG } from "./escalaG.js";
import { escalaA } from "./escalaA.js";
import { escalaE } from "./escalaE.js";
import { escalaB } from "./escalaB.js";
import { escalaFs } from "./escalaFs.js";



let grados: string[] = ["ii", "iii", "IV", "V", "vi", "vii°",]
let notas: string[] = ["Cb", "C", "C#", "Db", "D", "Eb", "E", "F", "F#", "Gb", "G", "Ab", "A", "Bb", "B"]
let acordesDisponibles: string[] = [
    "C", "C#", "Cb", "D", "D#", "Db", "E", "Eb", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#",
    "Cm", "C#m", "Cbm", "Dm", "D#m", "Dbm", "Em", "Ebm", "Fm", "F#m", "Gm", "G#m", "Abm", "Am", "A#m", "Bbm", "Bm", "B#m",
    "C°", "C#°", "D°", "D#°", "E°", "F°", "F#°", "G°", "G#°", "A°", "A#°", "B°", "B#°"
];
  
//let notas: string[] = ["C", "Cb", "D", "Db","Gb","C#","F","Bb","Eb","Ab", "G"]//PRUEBA

//crea un mapeo de los árboles de lasescalas
const arboles: { [key: string]: any } = {
    "C": new escalaC(),
    "Cb": new escalaCb(),
    "D": new escalaD(),
    "Db": new escalaDb(),
    "Gb": new escalaGb(),
    "C#": new escalaCs(),
    "F": new escalaF(),
    "Bb": new escalaBb(),
    "Eb": new escalaEb(),
    "Ab": new escalaAb(),
    "G": new escalaG(),
    "A": new escalaA(),
    "E": new escalaE(),
    "B": new escalaB(),     
    "F#": new escalaFs()
};

// Función para generar una pregunta aleatoria
function generarPregunta(): string {
    const grado = grados[Math.floor(Math.random() * grados.length)];
    const nota = notas[Math.floor(Math.random() * notas.length)];
    return `¿Cuál es el ${grado} grado de la escala de ${nota}?`;
}

function generarOpciones(correcta: string): string[] {
    const opciones = new Set<string>();
    opciones.add(correcta); // Agrega la respuesta correcta

    while (opciones.size < 6) {
        const opcionAleatoria = acordesDisponibles[Math.floor(Math.random() * acordesDisponibles.length)];
        /* const opcion = notaAleatoria; */
        opciones.add(opcionAleatoria); // Asegura que no haya duplicados
    }

    // Barajar las opciones con Fisher-Yates
    //para el futuro librería lodash.shuffle
    const opcionesArray = Array.from(opciones);
    for (let i = opcionesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcionesArray[i], opcionesArray[j]] = [opcionesArray[j], opcionesArray[i]];
     }

    return opcionesArray;

}

function mostrarOpciones(opciones: string[], correcta: string): void {
    const contenedorOpciones = document.getElementById("opciones");
    if (contenedorOpciones) {
        contenedorOpciones.innerHTML = ""; // Limpia las opciones anteriores

        opciones.forEach(opcion => {
            const boton = document.createElement("button");
            boton.textContent = opcion;
            boton.className = "btn btn-secondary m-2";

            // Agrega un evento para verificar si la opción es correcta
            boton.addEventListener("click", () => {
                if (opcion === correcta) {
                    mostrarMensaje("¡Correcto!", true);
                } /* else {
                    mostrarMensaje("Incorrecto. Intenta de nuevo.", false); // Muestra mensaje de error
                } */
            });

            contenedorOpciones.appendChild(boton);
        });
    }
}

function mostrarMensaje(mensaje: string, esCorrecto: boolean): void {
    const contenedorMensaje = document.getElementById("mensaje");
    if (contenedorMensaje) {
        contenedorMensaje.textContent = mensaje;
        contenedorMensaje.className = `alert ${esCorrecto ? "alert-success" : "alert-danger"} text-center`;
        contenedorMensaje.style.display = "block";

        setTimeout(() => {
            contenedorMensaje.style.display = "none";
            contenedorMensaje.textContent = "";
            if (esCorrecto) {
                iniciarJuego(); // Cambiar pregunta si fue correcta
            }
        }, 2000);
    }
}


// Función para manejar el clic en el botón de inicio
function iniciarJuego(): void {
    const pregunta = generarPregunta();
    const bannerSuperior = document.getElementById("pregunta");
    if (bannerSuperior) {
        bannerSuperior.textContent = pregunta;

        // Extraer la nota y el grado de la pregunta
        const nota = pregunta.match(/escala de (([A-G])[#b♯♭]?)/)?.[1];

        if (nota && arboles[nota]) {
            const arbol = arboles[nota];
            const grado = pregunta.match(/el (.+?) grado/)?.[1];// Extraer el grado de la pregunta
            console.log("Nota extraída:", nota);

            if (grado) { 
                const resultado = arbol.buscar(grado); // Buscar el acorde en el árbol
                console.log("Resultado de búsqueda:", resultado); 
                const match = resultado.match(/El acorde: (.+?) es correcto/);//extrae el acorde correcto
                const correcta = match ? match[1] : "Error";

                const opciones = generarOpciones(correcta); // Generar opciones
                mostrarOpciones(opciones, correcta); // Mostrar opciones en el banner inferior
            }
        } 
    }
}

// Agregar evento al botón de inicio
const btnInicio = document.getElementById("btnInicio");
if (btnInicio) {
    btnInicio.addEventListener("click", iniciarJuego);
}