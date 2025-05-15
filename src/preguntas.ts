import { escalaC } from "./escalaC.js";
import { escalaCb } from "./escalaCb.js";
import { escalaD } from "./escalaD.js";
import { escalaDb } from "./escalaDb.js";
import { escalaGb } from "./escalaGb.js";
import {escalaG} from "./escalaG.js";



let grados: string[] = ["I", "ii", "iii", "IV", "V", "vi", "vii°",]
//let notas: string[] = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "Bb", "B"]
let notas: string[] = ["C", "Cb", "D", "Db","Gb","G"]//PRUEBA

//crea un mapeo de los árboles de lasescalas
const arboles: { [key: string]: any } = {
    "C": new escalaC(),
    "Cb": new escalaCb(),
    "D": new escalaD(),
    "Db": new escalaDb(),
    "Gb": new escalaGb(),
    "G": new escalaG()
    // Agrega más árboles aquí cuando estén implementados
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

    while (opciones.size < 5) {
        //const gradoAleatorio = grados[Math.floor(Math.random() * grados.length)];
        const notaAleatoria = notas[Math.floor(Math.random() * notas.length)];
        const opcion = notaAleatoria;
        opciones.add(opcion); // Asegura que no haya duplicados
    }

    return Array.from(opciones);
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
                } else {
                    mostrarMensaje("Incorrecto. Intenta de nuevo.", false); // Muestra mensaje de error
                }
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
        const nota = pregunta.match(/escala de (\w+)/)?.[1];

        if (nota && arboles[nota]) {
            const arbol = arboles[nota];
            const correcta = `${nota}`; // Respuesta correcta
            const opciones = generarOpciones(correcta); // Generar opciones
            mostrarOpciones(opciones, correcta); // Mostrar opciones en el banner inferior
        } /* else {
            console.log("No se encontró un árbol para la nota especificada.");
        } */
    }
}

// Agregar evento al botón de inicio
const btnInicio = document.getElementById("btnInicio");
if (btnInicio) {
    btnInicio.addEventListener("click", iniciarJuego);
}