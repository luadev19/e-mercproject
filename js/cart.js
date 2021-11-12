var articlesArray = [];
var content = "";
var subtotal = 0;
var total = 0;
var costoEnvio = 0;
var tipoEnvio = '';
var costoTotal = "";

function showArticles(array){
   
   
    
    for (let i = 0; i < array['articles'].length; i++) {
        let articles = array['articles'][i];
    

    content += `
           
    
         ${articles.name} <br>
         ${articles.unitCost} ${articles.currency}<br>
         <input type="number" name="" id="qtyProduct" onchange="calcSubtotal(${articles.unitCost})" placeholder="cantidad" value="${articles.count}">`
         
         
            }
   picProduct =  `<img src="img/tree1.jpg"> </img>`

  
  
   
            

   
   
document.getElementById("cartArticles").innerHTML = content;
document.getElementById("picProduct").innerHTML = picProduct;


}


function calcSubtotal(unitCost) {
    let cantidad = parseInt(document.getElementById(`qtyProduct`).value);
    subtotal = (unitCost * cantidad);
    document.getElementById(`subtotal`).innerHTML = "Subtotal: UYU " + subtotal;
    document.getElementById(`resumen_subtotal`).innerHTML = "Subtotal: UYU " + subtotal;    
    calcEnvio(tipoEnvio);
    calcTotal();
}

//console.log(subtotal);

function calcEnvio(tipo) {
    if (tipo == 'Estandar') {
        tipoEnvio = 'Estandar';
        costoEnvio = Math.round(subtotal * 0.05);
        document.getElementById(`resumen_envio`).innerHTML = "Costo de envío: UYU " + costoEnvio;
    } else if (tipo == 'Premium') {
        tipoEnvio = 'Premium'
        costoEnvio = Math.round(subtotal * 0.12);
        document.getElementById(`resumen_envio`).innerHTML = "Costo de envío: UYU " + costoEnvio;
    } else if (tipo == 'Express'){
        tipoEnvio = 'Express'
        costoEnvio = Math.round(subtotal * 0.07);
        document.getElementById(`resumen_envio`).innerHTML = "Costo de envío: UYU " + costoEnvio;
    }
    calcTotal();
}

function calcTotal(){
   costoTotal = (costoEnvio + subtotal)
    document.getElementById(`resumen_total`).innerHTML = "Total: UYU " + costoTotal;
}

function selectTarjeta(){
    document.getElementById(`transfNombres`).disabled = true
    document.getElementById(`transfCuenta`).disabled = true
    document.getElementById(`tarjNombre`).disabled = false
    document.getElementById(`tarjNum`).disabled = false
    document.getElementById(`tarjCod`).disabled = false
}

function selectTransf(){
    document.getElementById(`transfNombres`).disabled = false
    document.getElementById(`transfCuenta`).disabled = false
    document.getElementById(`tarjNombre`).disabled = true
    document.getElementById(`tarjNum`).disabled = true
    document.getElementById(`tarjCod`).disabled = true
}


document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CART_INFO_URL).then(function(resultObj){

        if(resultObj.status=== "ok"){
            articlesArray = resultObj.data;
            showArticles(articlesArray);
            let unitCost = articlesArray['articles'][0].unitCost;
            calcSubtotal(unitCost);
        }
    }
    )
});




