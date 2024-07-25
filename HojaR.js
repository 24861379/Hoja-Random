function GenerarMatriz() {
    var filas = parseInt(document.getElementById('Filas').value);
    var columnas = parseInt(document.getElementById('Columnas').value);

    // Verifica si las filas y columnas son válidas
    if (isNaN(filas) || filas == 0 || isNaN(columnas) || columnas == 0) {
        alert('Debes seleccionar números mayores a cero.');
        return;
    }


    //genero la matriz
    var hoja = [];
    for (let f = 0; f < filas; f++) {
        var fila = []
        for (let c = 0; c < columnas; c++) {
            fila.push(HRandom());
        }
        hoja.push(fila);
    }

    //Mostrar matriz en la caja
    var matriz = document.getElementById('HojaRandom');
    matriz.innerHTML = '';//limpia el contenido anterior

    for (let j = 0; j < hoja.length; j++) {
        var filaDiv = document.createElement('div');
        hoja[j].forEach(nota => {
            var span = document.createElement('span');
            span.textContent = nota;
            filaDiv.appendChild(span);
        });
        matriz.appendChild(filaDiv);
    }
}

function HRandom() {
    var generar = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    var acorde = Math.floor(Math.random() * generar.length);
    return generar[acorde];
}