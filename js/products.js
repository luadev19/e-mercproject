//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productsArray= [];

function showProducts(array){
    let content = "";
    for (let i = 0; i < array.length; i++) {
        let product = array[i];

        

        content += product.name + "<br>";
        content += product.description +"<br>"; 
        content += product.cost +" "+ product.currency + "<br>";
        content +=  product.soldCount + " artículos vendidos" + "<br>";
        content += " <img src = " + product.imgSrc  + ">" + "<hr> "+" <br>" ;
        
    }
    document.getElementById("listado").innerHTML += content;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){

        if(resultObj.status=== "ok"){
            productsArray = resultObj.data;

            showProducts(productsArray);
        }
    }

    )


});