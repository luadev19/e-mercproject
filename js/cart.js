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
   
    
    
}
//console.log(subtotal);



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




