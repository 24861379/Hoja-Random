var grados = ["I", "ii", "iii", "IV", "V", "vi", "vii°",];
var notas = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "Bb", "B"];
// Función para generar una pregunta aleatoria
function generarPregunta() {
    var grado = grados[Math.floor(Math.random() * grados.length)];
    var nota = notas[Math.floor(Math.random() * notas.length)];
    return "\u00BFCu\u00E1l es el grado ".concat(grado, " de la escala de ").concat(nota, "?");
}
// Función para manejar el clic en el botón de inicio
function iniciarJuego() {
    var pregunta = generarPregunta();
    var bannerSuperior = document.getElementById("pregunta");
    if (bannerSuperior) {
        bannerSuperior.textContent = pregunta;
    }
}
// Agregar evento al botón de inicio
var btnInicio = document.getElementById("btnInicio");
if (btnInicio) {
    btnInicio.addEventListener("click", iniciarJuego);
}
