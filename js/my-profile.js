//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});

function guardarPerfil() {

    let datos_perfil = {
        datos_perfil: document.getElementById("nombres").value
        
  };
  
    let datos_perfil_json = JSON.stringify(datos_perfil);
    sessionStorage.setItem("datos_perfil",datos_perfil_json);
    window.sessionStorage.setItem("datos_perfil", input.value);
  }
  