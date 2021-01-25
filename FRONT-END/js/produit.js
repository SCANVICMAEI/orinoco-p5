 let params = (new URL(document.location)).searchParams; /*variable cherche l url de la page ou on ce trouve*/
 const id = params.get("id"); /* stocke l id du parametre*/


 let container = document.getElementById("container");

 fetch("http://localhost:3000/api/cameras/" + id) /* appel api */
   .then(function (response) {
     return response.json()
   })
   .then(function (product) {
     console.log(product);
     let camera = new Camera(product)
     display(camera);
   })

 function display(camera) {
   container.innerHTML +=
     `<div class="appareil" id="cardsProduct">
          <img src=${camera.imageUrl} alt="" />
         <div class="description">
           <p class="nom">${camera.name}</p>
           <span class="appareil-description">
           ${camera.description}
           </span>
           <select class="options" id ="option">
             <option>Choix options</option>
           </select>
           <p class="prix"> Prix Unitaire: ${camera.price/ 100}€</p>
           <select class="quantite" id="quantite">           
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
           </select>         
      <button type ="submit" id="panier" value="submit"> Ajouter au panier</button>
       </div>
       </div>`
 /////////////////////////////////////////////////
     
 /*boucle option lenses*/
       for (let lenses of camera.lenses) {
         document.getElementById('option').innerHTML +=
           `<option value="1">${lenses}</option>`
       };
 
 };


 ////////////////////////////////////////////////

// //  /*evenement bouton ajouter panier*/

  // document.getElementById('panier').addEventListener('click',()); 

// // //  ////////////////////////////////////////////////


//  function initCamera(){
//    var camera = localStorage.getItem("camera");
//    if (camera != null){
//      return JSON.parse(camera);
//    }else{
//      return[];
//    }
//  }

// // //  //////////////////////////////////////////////

//  /*ajouter produit dans tableau*/

//  function addToCamera(product){
//    var camera = initCamera();
//    camera.push(product);
//    saveCamera(camera);
//  }

// // //  //////////////////////////////////////////////

//  /*supprimer produit dans tableau*/

//  function removeFromCamera(product){

//  }

// // //  //////////////////////////////////////////////

//  /*sauvegarder produit dans tableau*/

//  function saveCamera(camera){
//    localStorage.setItem("camera", JSON.stringify(camera));
//  }


//  const tableauPanier = [];