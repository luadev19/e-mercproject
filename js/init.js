const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});

function guardarLogin() {

  let data_login = {
      email_log: document.getElementById("email_log").value
};

  let data_login_json = JSON.stringify(data_login);
  localStorage.setItem("data_login",data_login_json);
  window.localStorage.setItem("data_login", userinput.value);
}

document.addEventListener("DOMContentLoaded", function(e){

let data_login = localStorage.getItem("data_login");
let datos_perfil = localStorage.getItem("datos_perfil");
let usuario = document.getElementById("usuario");
let email_log = document.getElementById("email_log");

if (data_login) {

  data_login = JSON.parse(data_login);
  document.getElementById("usuario").innerHTML = "Usuario: " + data_login.email_log

}
if (datos_perfil) {

  let datos_perfil_json = localStorage.getItem("datos_perfil");
  let datos_perfil = JSON.parse(datos_perfil_json);
  document.getElementById("nombres").value = datos_perfil.nombres;
  document.getElementById("email").value = datos_perfil.email;
  document.getElementById("edad").value = datos_perfil.edad;
  document.getElementById("contacto").value = datos_perfil.contacto;




 
}
});