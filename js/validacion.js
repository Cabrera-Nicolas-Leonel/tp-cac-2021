window.onload = inicio;

function inicio() {
    document.getElementById('enviar_form').addEventListener('click', validacion, false);
}

function validacion(e){
    if(confirm('Desea enviar?'))
    {
      return true;
    } else {
      e.preventDefault();
      return false;
    }
}
