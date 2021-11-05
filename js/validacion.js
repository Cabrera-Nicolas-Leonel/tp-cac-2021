window.onload = iniciar;

function iniciar() {
  document.getElementById('send').addEventListener('click', validate, false);
}

function valid_nickname() {
  var elemento = document.getElementById('nickname');
  if (elemento.value ==''){
    alert('El campo nombre no puede estar vacío');
    return false
  }
  return true;
}

function valid_server() {
var elemento = document.getElementById('server');
  if (elemento.value ==''){
    alert('El campo teléfono debe ser un número');
    return false
  }
  return true;
}


function validate(e){
  if(valid_nickname() && valid_server() && confirm('Desea enviar el formulario?')){
    return true;
  } else {
  
    return false;
  }
}