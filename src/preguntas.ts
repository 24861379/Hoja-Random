let grados: string[] = ["I", "ii", "iii", "IV", "V", "vi", "vii°",]
let notas: string[] = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "Bb", "B"]

// Función para generar una pregunta aleatoria
function generarPregunta(): string {
    const grado = grados[Math.floor(Math.random() * grados.length)];
    const nota = notas[Math.floor(Math.random() * notas.length)];
    return `¿Cuál es el ${grado} grado de la escala de ${nota}?`;
}

// Función para manejar el clic en el botón de inicio
function iniciarJuego(): void {
    const pregunta = generarPregunta();
    const bannerSuperior = document.getElementById("pregunta");
    if (bannerSuperior) {
        bannerSuperior.textContent = pregunta;
    }
}

// Agregar evento al botón de inicio
const btnInicio = document.getElementById("btnInicio");
if (btnInicio) {
    btnInicio.addEventListener("click", iniciarJuego);
}