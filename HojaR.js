function GenerarMatriz() {
    /*document representa el objeto HTML y el método getElementById() pertenece 
    a document, este obtiene y devuelve el elemento con el id especificado,
    .value es una propiedad de <select> que contiene el valor actual del elemento y con
    parseInt() con vierte un número que esta en String a un int*/
    var filas = parseInt(document.getElementById('Filas').value);
    var columnas = parseInt(document.getElementById('Columnas').value);

    //obtener el resultdo de los checkbox
    var acordemenor = document.getElementById('AMenores').checked;
    var sostenidos = document.getElementById('ASostenidos').checked;
    var bemoles = document.getElementById('ABemoles').checked;
    
    var funcionAcordes = [];
    if (acordemenor) {
        funcionAcordes.push(MenoresA);
    }
    if (sostenidos) {
        funcionAcordes.push(SostenidosA);
    }
    if (bemoles) {
        funcionAcordes.push(BemolesA);
    }
    funcionAcordes.push(HRandom)


    //genero la matriz
    var hoja = [];//-->Inicializo la mi vector bidimencional.
    //lleno la matriz con filas y columnas
    for (let f = 0; f < filas; f++) {//recorro las filas
        //inicializo un subarreglo para cada fila de la matriz hoja
        var filaM = [];
        //con el segundo for iteramos las columnas y llenar cada fila
        for (let c = 0; c < columnas; c++) {
            var AcordesElegidos = funcionAcordes[Math.floor(Math.random() * funcionAcordes.length)];
            var acorde = AcordesElegidos();
            filaM.push(acorde);        
        }
        //una vez llenada una fila 'fila[]' la enviamos con el método push
        hoja.push(filaM);
    }

    //Mostrar matriz en la caja
    var matriz = document.getElementById('HojaRandom');
    //innerHTML obtiene el contenido  de HojaRandom 
    matriz.innerHTML = '';//limpia el contenido anterior

    //recorre cada fila de la matriz hoja
    for (let j = 0; j < hoja.length; j++) {
        //Con el método createElement() crea un div que representa una fila de la matriz
        var filaDiv = document.createElement('div');
        //hoja[j] accede a la fila
        //inicio un bucle forEach que recorre cada fila de hoja[j]
        hoja[j].forEach(nota => {
            //Con el método createElement() crea un elemento span y se lo asigna a la varibales span
            var span = document.createElement('span');
            //textContent devuelve el texto contenido dentro span y nota le asigna el valor
            //al contenido de texto span
            span.textContent = nota;
            //añade el elemento span que contiene la letra generada como hijo del div
            //colocandolo dentro del div que repesenta la fila
            filaDiv.appendChild(span);
        });
        //filaDiv tiene varios span con la letra generada, añadiendolos como hijos de matriz
        matriz.appendChild(filaDiv);
    }
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

function MenoresA() {
    var acordeMenor = ['Cm', 'Dm', 'Em', 'Fm', 'Gm', 'Am', 'Bm'];
    var AMenor = Math.floor(Math.random() * acordeMenor.length);
    return acordeMenor[AMenor];
}

function SostenidosA() {
    var acordeMenor = ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'];
    var AMenor = Math.floor(Math.random() * acordeMenor.length);
    return acordeMenor[AMenor];
}

function BemolesA() {
    var acordeMenor = ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb'];
    var AMenor = Math.floor(Math.random() * acordeMenor.length);
    return acordeMenor[AMenor];
}