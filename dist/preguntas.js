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
let grados = ["I", "ii", "iii", "IV", "V", "vi", "vii°",];
let notas = ["Cb", "C", "C#", "Db", "D", "Eb", "E", "F", "F#", "Gb", "G", "Ab", "A", "Bb", "B"];
const arboles = {
    "C": new escalaC(),
    "Cb": new escalaCb(),
    "D": new escalaD(),
    "Db": new escalaDb(),
    "Gb": new escalaGb(),
    "Cs": new escalaCs(),
    "F": new escalaF(),
    "Bb": new escalaBb(),
    "Eb": new escalaEb(),
    "Ab": new escalaAb(),
    "G": new escalaG(),
    "A": new escalaA(),
    "E": new escalaE(),
    "B": new escalaB(),
    "Fs": new escalaFs()
};
function generarPregunta() {
    const grado = grados[Math.floor(Math.random() * grados.length)];
    const nota = notas[Math.floor(Math.random() * notas.length)];
    return `¿Cuál es el ${grado} grado de la escala de ${nota}?`;
}
function generarOpciones(correcta) {
    const opciones = new Set();
    opciones.add(correcta);
    while (opciones.size < 5) {
        const notaAleatoria = notas[Math.floor(Math.random() * notas.length)];
        const opcion = notaAleatoria;
        opciones.add(opcion);
    }
    return Array.from(opciones);
}
function mostrarOpciones(opciones, correcta) {
    const contenedorOpciones = document.getElementById("opciones");
    if (contenedorOpciones) {
        contenedorOpciones.innerHTML = "";
        opciones.forEach(opcion => {
            const boton = document.createElement("button");
            boton.textContent = opcion;
            boton.className = "btn btn-secondary m-2";
            boton.addEventListener("click", () => {
                if (opcion === correcta) {
                    mostrarMensaje("¡Correcto!", true);
                }
                else {
                    mostrarMensaje("Incorrecto. Intenta de nuevo.", false);
                }
            });
            contenedorOpciones.appendChild(boton);
        });
    }
}
function mostrarMensaje(mensaje, esCorrecto) {
    const contenedorMensaje = document.getElementById("mensaje");
    if (contenedorMensaje) {
        contenedorMensaje.textContent = mensaje;
        contenedorMensaje.className = `alert ${esCorrecto ? "alert-success" : "alert-danger"} text-center`;
        contenedorMensaje.style.display = "block";
        setTimeout(() => {
            contenedorMensaje.style.display = "none";
            contenedorMensaje.textContent = "";
            if (esCorrecto) {
                iniciarJuego();
            }
        }, 2000);
    }
}
function iniciarJuego() {
    var _a;
    const pregunta = generarPregunta();
    const bannerSuperior = document.getElementById("pregunta");
    if (bannerSuperior) {
        bannerSuperior.textContent = pregunta;
        const nota = (_a = pregunta.match(/escala de (\w+)/)) === null || _a === void 0 ? void 0 : _a[1];
        if (nota && arboles[nota]) {
            const arbol = arboles[nota];
            const correcta = `${nota}`;
            const opciones = generarOpciones(correcta);
            mostrarOpciones(opciones, correcta);
        }
    }
}
const btnInicio = document.getElementById("btnInicio");
if (btnInicio) {
    btnInicio.addEventListener("click", iniciarJuego);
}
//# sourceMappingURL=preguntas.js.map