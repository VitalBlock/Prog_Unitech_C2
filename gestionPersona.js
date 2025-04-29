document.getElementById('act').style.display = 'none';
var objPersona = {ced:'', nom: '', ape: '', dir: '', tel: '', email: null };
var myArray = [];

function guardarDatos(){
    objPersona.ced = document.getElementById('ced').value;
    objPersona.nom = document.getElementById('nom').value;
    objPersona.ape = document.getElementById('ape').value;
    objPersona.dir = document.getElementById('dir').value;
    objPersona.tel = document.getElementById('tel').value;
    objPersona.email = document.getElementById('cor').value;
    myArray.push(objPersona);
    console.log(myArray);
    limpiarCajas();
    mostrarDatos();
}
function limpiarCajas(){
    alert('Los datos se guardaron correctamente');
    document.getElementById('ced').value = '';
    document.getElementById('nom').value = '';
    document.getElementById('ape').value = '';
    document.getElementById('dir').value = '';
    document.getElementById('tel').value = '';
    document.getElementById('cor').value = '';
    document.getElementById('ced').focus();
}   