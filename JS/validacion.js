var errorNombre = document.getElementById('error-nombre');
var errorEmail = document.getElementById('error-email');
var errorNumero = document.getElementById('error-numero');
var errorMensaje = document.getElementById('error-mensaje');
var errorSubmit = document.getElementById('error-submit');

function validacionName(){
    var nombre = document.getElementById('contacto-name').value;

    if (nombre.length == 0){
        errorNombre.innerHTML= 'Completar nombre';
        return false;
    }
    if (!nombre.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        errorNombre.innerHTML= 'Escribe el nombre completo';
        return false;
    }
    errorNombre.innerHTML= "<i class='bx bxs-check-circle' style='color:#12e02e'></i>";
    return true;
}
function validacionEmail(){
    var email = document.getElementById('contacto-email').value;

    if (email.length == 0){
        errorEmail.innerHTML= 'Completar email';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorEmail.innerHTML= 'Email invalido';
        return false;
    }
    errorEmail.innerHTML= "<i class='bx bxs-check-circle' style='color:#12e02e'></i>";
    return true;
}
function validacionNumero(){
    var numero = document.getElementById('numero').value;

    if (numero.length == 0){
        errorNumero.innerHTML= 'Completar telefono';
        return false;
    }
    if (numero.length > 10){
        errorNumero.innerHTML= 'Debe tener 10 digitos';
        return false;
    }
    if (!numero.match(/^[0-9]{10}$/)){
        errorNumero.innerHTML= 'Solo digitos';
        return false;
    }
    errorNumero.innerHTML= "<i class='bx bxs-check-circle' style='color:#12e02e'></i>";
    return true;
}

function validacionMensaje(){
    var mensaje = document.getElementById('contacto-mensaje').value;
    var cantidad = 10;
    var c = cantidad - mensaje.length;

    if ( c > 0){
    errorMensaje.innerHTML= '(' + c + ')' + ' ' + 'Se necesitan al menos 10 caracteres';
    return false;
    }
    errorMensaje.innerHTML= "<i class='bx bxs-check-circle' style='color:#12e02e'></i>";
    return true;
    }

