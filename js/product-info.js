var commentsArray = [];

function showInfo(informacion,commentsArray){

let info = "";
let imgs = "";
let comments = "";


info += `
           
            <h2>Descripción del producto</h2> 
             ${informacion.name} <br>
             ${informacion.description}<br>
             ${informacion.cost} ${informacion.currency}<br>
             Cantidad de articulos vendidos: ${informacion.soldCount}<br>
             Categoria: ${informacion.category}
             `
imgs +=  `
            <img  src="img/prod1_1.jpg" > 
            <img  src="img/prod1_2.jpg" >
            <img  src="img/prod1_3.jpg" >
            <img  src="img/prod1_4.jpg" >
            `;

    comentsArray.forEach(function(comment){

   
    comments += `<strong>` + comment.user + `</strong>` + `<br>`
    comments += `Calificación: ` + comment.score + `<br>`
    comments += comment.description + `<br>`
    comments += comment.dateTime + `<br>` + `<hr>`
   
}
    )
            
                        
          


 document.getElementById("info").innerHTML = info;
 document.getElementById("imgs").innerHTML = imgs;
 document.getElementById("comments").innerHTML = comments;
}




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if(resultObj.status=== "ok"){
            comentsArray = resultObj.data;
            }

    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){

        if(resultObj.status=== "ok"){
         informacion = resultObj.data;

            showInfo(informacion,commentsArray);
    }}
    
    )})
});
document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("stars").innerHTML = `<div class="star-rating">
                                                  <input id="star-5" type="radio" name="rating" value= "5" />
                                                  <label for="star-5" title="5" stars">
                                                  <i class="active fa fa-star"></i>
                                                  </label>
                                                  
                                                 
                                                  <input id="star-4" type="radio" name="rating" value= "4" />
                                                  <label for="star-4" title="4" stars">
                                                  <i class="active fa fa-star"></i>
                                                  </label>

                                                  
                                                  <input id="star-3" type="radio" name="rating" value= "3" />
                                                  <label for="star-3" title="3" stars">
                                                  <i class="active fa fa-star"></i>
                                                  </label>
                                                  
                                                  
                                                  <input id="star-2" type="radio" name="rating" value= "2" />
                                                  <label for="star-2" title="2" stars">
                                                  <i class="active fa fa-star"></i>
                                                  </label>

                                                  
                                                  <input id="star-1" type="radio" name="rating" value= "1" checked/>
                                                  <label for="star-1" title="1" stars">
                                                  <i class="active fa fa-star"></i>
                                                  </label>
                                                  
                                                  `
});