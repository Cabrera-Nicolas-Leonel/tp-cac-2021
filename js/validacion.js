window.onload = iniciar;

function iniciar() {
  document.getElementById('send').addEventListener('click', validate, false);
}

function valida_nombre() {
  var elemento = document.getElementById('nickname');
  if (elemento.value ==''){
    alert('El campo nombre no puede estar vacío');
    return false
  }
  return true;
}

function valida_telefono() {
var elemento = document.getElementById('server');
  if (elemento.value ==''){
    alert('El campo teléfono debe ser un número');
    return false
  }
  return true;
}


function validate(e){
  if(valida_nombre() && valida_telefono() && confirm('Desea enviar?')){
    return true;
  } else {
    // evito que se envíe el formulario
    // traba el evento que por defecto se disparó con el botón enviar.
    e.preventDefault();
    return false;
  }
}