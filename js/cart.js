var articlesArray = [];
var content = ""
var subtotal = 0
var total = 0



function showArticles(array){
   
   
   
    for (let i = 0; i < array['articles'].length; i++) {
        let articles = array['articles'][i];
    

    content += `
           
    
         ${articles.name} <br>
         ${articles.unitCost} ${articles.currency}<br>
         <input type="number" name="" id="qtyProduct" onChange"calcSubtotal(${articles.unitCost},${articles.count})" placeholder="cantidad" value="${articles.count}">`
         
         
            }
   picProduct =  `<img src="img/tree1.jpg"> </img>`

  
  
   
            

   
   
document.getElementById("cartArticles").innerHTML = content;
document.getElementById("picProduct").innerHTML = picProduct;


}

//esta función me esta complicando bastante, en la consola me dice que subtotal = 0. 
//NO entiendo porque ya que solo estoy usando el JSON que tiene un producto.
//No sé si deberia usar un for para que recorra el array, tambien supongo que
// los parametros que le estoy dando a la función no sirven 
function calcSubtotal(unitCost,count ) {

    let cantidad = parseInt(document.getElementById(`qtyProduct`).value);
    subtotal = (articles.unitCost * articles.count);
    document.getElementById(`subtotal`).innerHTML = subtotal

    calcSubtotal();
    
    
}
//console.log(subtotal);



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){

        if(resultObj.status=== "ok"){
            articlesArray = resultObj.data;

            showArticles(articlesArray);
        }
    }

    )

    
});




