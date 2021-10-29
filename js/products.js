
var productsArray = [];
var minPrice;
var maxPrice;

function verProducto() {
    window.location = "product-info.html";

}

function sortProducts(criterio, array) {
    let result = [];

    if (criterio === 1) {
        result = array.sort(
            function (a, b) {
                let aPrice = parseInt(a.cost);
                let bPrice = parseInt(b.cost);

                if (aPrice < bPrice) { return -1; }
                if (aPrice > bPrice) { return 1; }

                return 0;

            });

    } else if (criterio === 2) {
        result = array.sort(
            function (a, b) {
                let aPrice = parseInt(a.cost);
                let bPrice = parseInt(b.cost);

                if (aPrice > bPrice) { return -1; }
                if (aPrice < bPrice) { return 1; }

                return 0;
            });

    } else if (criterio === 3) {
        result = array.sort(
            function (a, b) {
                let aPrice = parseInt(a.soldCount);
                let bPrice = parseInt(b.soldCount);

                if (aPrice > bPrice) { return -1; }
                if (aPrice < bPrice) { return 1; }

                return 0;



            });
    }
    return result;
}







function showProducts(array) {
    let content = "";
    for (let i = 0; i < array.length; i++) {
        let product = array[i];

        if (((minPrice == undefined) || (parseInt(product.cost) >= minPrice)) &&
            ((maxPrice == undefined) || (parseInt(product.cost) <= maxPrice))) {

            content +=
                `<div class="col-md-6">
                ${product.name} <br>
                ${product.description} <br>
                ${product.cost}" " ${product.currency}  <br>
                ${product.soldCount} " artículos vendidos" + <br>
         < button  onclick = "verProducto();" > Más info</button > 
         <img width='50' src = "  ${product.imgSrc }  >
</div > `
        
    }}
    document.getElementById("listado").innerHTML = content;

    
}


{
document.getElementById("priceFilter").addEventListener("click", function(){
 
    minPrice = document.getElementById("rangeMinPrice").value;
    maxPrice = document.getElementById("rangeMaxPrice").value;

    if ((minPrice != undefined) && (minPrice !="") && (parseInt(minPrice))>=0){
        minPrice = parseInt(minPrice);
    }
    else {minPrice = undefined
    }
    if ((maxPrice != undefined) && (maxPrice !="") && (parseInt(maxPrice))>=0){
        maxPrice = parseInt(maxPrice);
    }
    else {maxPrice = undefined
    }
    
    showProducts(productsArray);

})}

    document.getElementById("clearRange").addEventListener("click", function(){
        document.getElementById("rangeMinPrice").value = "";
        document.getElementById("rangeMaxPrice").value = "";

        minPrice= undefined;
        maxPrice = undefined;
        
        showProducts(productsArray);
})
    document.getElementById("sortPriceAsc").addEventListener("click", function(){
        productsArray = sortProducts(1, productsArray)

        showProducts(productsArray);
});
    document.getElementById("sortPriceDes").addEventListener("click", function(){
    productsArray = sortProducts(2, productsArray)

    showProducts(productsArray);
});
    document.getElementById("sortRelDes").addEventListener("click", function(){
    productsArray = sortProducts(3, productsArray)

    showProducts(productsArray);
});



document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){

        if(resultObj.status=== "ok"){
            productsArray = resultObj.data;

            showProducts(productsArray);
        }
    }

    )
    
   

});