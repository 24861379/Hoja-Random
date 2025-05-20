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
let grados = ["ii", "iii", "IV", "V", "vi", "vii°",];
let notas = ["Cb", "C", "C#", "Db", "D", "Eb", "E", "F", "F#", "Gb", "G", "Ab", "A", "Bb", "B"];
let acordesDisponibles = [
    "C", "C#", "Cb", "D", "D#", "Db", "E", "Eb", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#",
    "Cm", "C#m", "Cbm", "Dm", "D#m", "Dbm", "Em", "Ebm", "Fm", "F#m", "Gm", "G#m", "Abm", "Am", "A#m", "Bbm", "Bm", "B#m",
    "C°", "C#°", "D°", "D#°", "E°", "F°", "F#°", "G°", "G#°", "A°", "A#°", "B°", "B#°"
];
const arboles = {
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
function generarPregunta() {
    const grado = grados[Math.floor(Math.random() * grados.length)];
    const nota = notas[Math.floor(Math.random() * notas.length)];
    return `¿Cuál es el ${grado} grado de la escala de ${nota}?`;
}
function generarOpciones(correcta) {
    const opciones = new Set();
    opciones.add(correcta);
    while (opciones.size < 3) {
        const opcionAleatoria = acordesDisponibles[Math.floor(Math.random() * acordesDisponibles.length)];
        opciones.add(opcionAleatoria);
    }
    const opcionesArray = Array.from(opciones);
    for (let i = opcionesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcionesArray[i], opcionesArray[j]] = [opcionesArray[j], opcionesArray[i]];
    }
    return opcionesArray;
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
    var _a, _b;
    const pregunta = generarPregunta();
    const bannerSuperior = document.getElementById("pregunta");
    if (bannerSuperior) {
        bannerSuperior.textContent = pregunta;
        const nota = (_a = pregunta.match(/escala de (([A-G])[#b♯♭]?)/)) === null || _a === void 0 ? void 0 : _a[1];
        if (nota && arboles[nota]) {
            const arbol = arboles[nota];
            const grado = (_b = pregunta.match(/el (.+?) grado/)) === null || _b === void 0 ? void 0 : _b[1];
            console.log("Nota extraída:", nota);
            if (grado) {
                const resultado = arbol.buscar(grado);
                console.log("Resultado de búsqueda:", resultado);
                const match = resultado.match(/El acorde: (.+?) es correcto/);
                const correcta = match ? match[1] : "Error";
                const opciones = generarOpciones(correcta);
                mostrarOpciones(opciones, correcta);
            }
        }
    }
}
const btnInicio = document.getElementById("btnInicio");
if (btnInicio) {
    btnInicio.addEventListener("click", iniciarJuego);
}
//# sourceMappingURL=preguntas.js.map