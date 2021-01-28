 let params = (new URL(document.location)).searchParams; /*variable cherche l url de la page ou on ce trouve*/
 const id = params.get("id"); /* stocke l id du parametre*/


 let container = document.getElementById("container");

 fetch("http://localhost:3000/api/cameras/" + id) /* appel api */
   .then(function (response) {
     return response.json()
   })
   .then(function (product) {
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
      <a href ="../pages/panier.html"><button type ="submit" id="panier" value="submit" > Ajouter au panier</button></a>
       </div>
       </div>`


   // les option lentilles s'affcihe en fonction du produit

   for (let lenses of camera.lenses) {
     document.getElementById('option').innerHTML +=
       `<option value="1">${lenses}</option>`

// gerer quantité 



     //  je cree un tableau vide panier pour stoker info 

     let panier = [];

     // je récupere l'élement de mon html  et écoute l'évenement au click

     document.getElementById('panier').addEventListener('click', ajouterProduitAuPanier)


     function ajouterProduitAuPanier() {
       //je récupère mon panier
       let panier = localStorage.getItem("panier")
       // si mon panier est vide crée array camera 
       if (panier === null) {
         panier = [camera]
         //sinon il existe deja 
       } else {
         panier = JSON.parse(panier)
         //j'ajoute mes produits a camera 
         panier.push(camera)
       }
       localStorage.setItem("panier", JSON.stringify(panier))
     };

     //accolade fermeture scoop
   }};

