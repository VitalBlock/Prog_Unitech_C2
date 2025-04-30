var myArray = [];

// Cargar datos desde localStorage al iniciar
window.onload = function () {
    const datosGuardados = localStorage.getItem('personas');
    if (datosGuardados) {
        myArray = JSON.parse(datosGuardados);
        mostrarDatos();
    }
};

function guardarDatos() {
    const objPersona = {
        ced: document.getElementById('ced').value,
        nom: document.getElementById('nom').value,
        ape: document.getElementById('ape').value,
        dir: document.getElementById('dir').value,
        tel: document.getElementById('tel').value,
        email: document.getElementById('cor').value
    };
    myArray.push(objPersona);
    guardarEnLocalStorage();
    limpiarCajas();
    mostrarDatos();
}

function mostrarDatos() {
    let salida = '';
    myArray.forEach((persona, index) => {
        salida += `<tr>
            <td>${persona.ced}</td>
            <td>${persona.nom}</td>
            <td>${persona.ape}</td>
            <td>${persona.dir}</td>
            <td>${persona.tel}</td>
            <td>${persona.email}</td>
            <td>
                <button class="ancho" onclick="editarDatos(${index})">Editar</button>
                <button class="ancho" onclick="eliminarDatos(${index})">Eliminar</button>
            </td>
        </tr>`;
    });
    document.getElementById('cuerpoTabla').innerHTML = salida;
}

function limpiarCajas() {
    document.getElementById('ced').value = '';
    document.getElementById('nom').value = '';
    document.getElementById('ape').value = '';
    document.getElementById('dir').value = '';
    document.getElementById('tel').value = '';
    document.getElementById('cor').value = '';
    document.getElementById('ced').focus();
}

function editarDatos(index) {
    let persona = myArray[index];
    document.getElementById('ced').value = persona.ced;
    document.getElementById('nom').value = persona.nom;
    document.getElementById('ape').value = persona.ape;
    document.getElementById('dir').value = persona.dir;
    document.getElementById('tel').value = persona.tel;
    document.getElementById('cor').value = persona.email;

    document.getElementById('grd').style.display = 'none';
    document.getElementById('act').style.display = 'inline-block';
    document.getElementById('act').dataset.index = index;
}

function actualizarDatos() {
    let index = document.getElementById('act').dataset.index;
    myArray[index] = {
        ced: document.getElementById('ced').value,
        nom: document.getElementById('nom').value,
        ape: document.getElementById('ape').value,
        dir: document.getElementById('dir').value,
        tel: document.getElementById('tel').value,
        email: document.getElementById('cor').value
    };
    guardarEnLocalStorage();
    limpiarCajas();
    mostrarDatos();
    document.getElementById('grd').style.display = 'inline-block';
    document.getElementById('act').style.display = 'none';
}

function eliminarSeleccionado() {
    const index = document.getElementById('eliminarSeleccionado').getAttribute('data-index');
    if (confirm("¿Deseas eliminar esta persona?")) {
        myArray.splice(index, 1);
        guardarEnLocalStorage();
        limpiarCajas();
        mostrarDatos();
        document.getElementById('acciones').style.display = 'none';
        document.getElementById('guardar').style.display = 'inline';
    }
}

function eliminarDatos(index) {
    if (confirm("¿Deseas eliminar esta persona?")) {
        myArray.splice(index, 1);
        guardarEnLocalStorage();
        mostrarDatos();
    }
}

function guardarEnLocalStorage() {
    localStorage.setItem('personas', JSON.stringify(myArray));
}
