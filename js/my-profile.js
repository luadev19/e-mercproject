//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});

function guardarPerfil() {

    let datos_perfil = {
        nombres: document.getElementById("nombres").value,
        email: document.getElementById("email").value,
        edad: document.getElementById("edad").value,
        contacto: document.getElementById("contacto").value
  };
  
    let datos_perfil_json = JSON.stringify(datos_perfil);
    localStorage.setItem("datos_perfil",datos_perfil_json);
    
  }
  

  

    

    

    
   