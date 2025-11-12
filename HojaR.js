let tamanioSeleccionado = null;

function GenerarMatriz() {
    // Validar que el usuario haya elegido un tamaño
    if (!tamanioSeleccionado) {
        alert("Por favor, selecciona un tamaño antes de continuar.");
        return;
    }

    // Extraer filas y columnas (por ejemplo, "4:4")
    const [filas, columnas] = tamanioSeleccionado.split(':').map(Number);
    /* var filas = filasSeleccionadas || 4;
    var columnas = columnasSeleccionadas || 4; */

    // Obtener estado de los checkboxes
    var acordemenor = document.getElementById('AMenores').checked;
    var sostenidos = document.getElementById('ASostenidos').checked;
    var bemoles = document.getElementById('ABemoles').checked;

    // Recolectar acordes disponibles según selección del usuario
    var conjunto = [];

    // Siempre se incluyen notas naturales
    conjunto = conjunto.concat(['C', 'D', 'E', 'F', 'G', 'A', 'B']);

    if (acordemenor) {
        conjunto = conjunto.concat(['Cm', 'Dm', 'Em', 'Fm', 'Gm', 'Am', 'Bm']);
    }

    if (sostenidos) {
        conjunto = conjunto.concat(['C♯', 'D♯', 'E♯', 'F♯', 'G♯', 'A♯', 'B♯']);
    }

    if (bemoles) {
        conjunto = conjunto.concat(['C♭', 'D♭', 'E♭', 'F♭', 'G♭', 'A♭', 'B♭']);
    }

    // Generar la matriz
    var hoja = [];
    for (let f = 0; f < filas; f++) {
        var filaM = [];
        for (let c = 0; c < columnas; c++) {
            var acorde = conjunto[Math.floor(Math.random() * conjunto.length)];
            filaM.push(acorde);
        }
        hoja.push(filaM);
    }

    // Mostrar matriz en forma de tabla HTML
    var matriz = document.getElementById('HojaRandom');
    matriz.innerHTML = ''; // Limpiar contenido anterior

    var tabla = document.createElement('table');
    tabla.style.margin = 'auto'; // Centrar tabla si deseas

    hoja.forEach(fila => {
        var tr = document.createElement('tr');
        fila.forEach(nota => {
            var td = document.createElement('td');
            td.textContent = nota;
            td.style.padding = '10px 20px'; // Espaciado interno
            td.style.textAlign = 'center';
            td.style.fontSize = '18px';
            tr.appendChild(td);
        });
        tabla.appendChild(tr);
    });

    matriz.appendChild(tabla);
    
}

function HRandom() {
    //declaro un vector llamado 'generar' con el nombre de las notas músicales
    var generar = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    //con Math.random() genera un numero decimal en un rango 0 y 1.
    //Math.random() * generar.length: Multiplica el valor generado con la logitud de generar.
    //con Math.floor redondemos al número mas cercano.
    var acorde = Math.floor(Math.random() * generar.length);
    //Ahora acode tiene el indice de generar y con return puede retornar la letra segun el indice. 
    return generar[acorde];
}

function HRandom() {
    var generar = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    return generar[Math.floor(Math.random() * generar.length)];
}

function MenoresA() {
    var acordeMenor = ['Cm', 'Dm', 'Em', 'Fm', 'Gm', 'Am', 'Bm'];
    return acordeMenor[Math.floor(Math.random() * acordeMenor.length)];
}

function SostenidosA() {
    var acordeMenor = ['C♯', 'D♯', 'E♯', 'F♯', 'G♯', 'A♯', 'B♯'];
    return acordeMenor[Math.floor(Math.random() * acordeMenor.length)];
}

function BemolesA() {
    var acordeMenor = ['C♭', 'D♭', 'E♭', 'F♭', 'G♭', 'A♭', 'B♭'];
    return acordeMenor[Math.floor(Math.random() * acordeMenor.length)];
}


function setupTamanosButtons() {
    const container = document.querySelector('.opciones');
    if (!container) return;

    container.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        // Quitar activo a todos
        container.querySelectorAll('button').forEach(b => b.classList.remove('activo'));

        // Activar el actual
        btn.classList.add('activo');

        // Guardar tamaño seleccionado
        tamanioSeleccionado = btn.textContent.trim();
    });
}




// Variables globales para guardar las filas y columnas seleccionadas
let filasSeleccionadas = 0;
let columnasSeleccionadas = 0;

// Configurar los botones de tamaño
function setupSizeButtons() {
    const container = document.querySelector('.opciones');
    if (!container) return;

    container.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        // Quita la clase activo de todos
        container.querySelectorAll('button').forEach(b => b.classList.remove('activo'));

        // Activa el botón clicado
        btn.classList.add('activo');

        // Guarda el tamaño seleccionado (ej: "4:4" → filas = 4, columnas = 4)
        tamanioSeleccionado = btn.textContent.trim();
    });
}

// Muestra el modal al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    var configModal = new bootstrap.Modal(document.getElementById('configModal'));
    configModal.show();

    setupTamanosButtons();


    document.getElementById('aplicarBtn').addEventListener('click', function () {
        /* if (!tamanioSeleccionado) {
            alert("Debes seleccionar un tamaño antes de aplicar.");
            return;
        } */

        GenerarMatriz();
        configModal.hide();
    });
});


// Cuando el usuario da clic en "Aplicar"
document.getElementById('aplicarBtn').addEventListener('click', function () {
    var modal = bootstrap.Modal.getInstance(document.getElementById('configModal'));
    modal.hide();
    // Aqui puedes ejecutar el código que muestra la siguiente interfaz
});