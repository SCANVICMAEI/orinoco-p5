//je recupere l'url 
let params = (new URL(document.location)).searchParams;

// je stocke l id du parametre
const id = params.get("id");

//je récupère l'emplacement ou je vais écrire mon html 
let container = document.getElementById("container");

// Appelle API avec fetch 
fetch("http://localhost:3000/api/cameras/" + id)
  .then(function (response) {
    return response.json()
  })
  .then(function (product) {
    let camera = new Camera(product)
    display(camera);
})

// inclus dans le html
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
      <select class="quantite" id="quantity">           
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
  }

  // je récupere l'élement de mon html  et écoute l'évenement au click
  document.getElementById('panier').addEventListener('click', ajouterProduitAuPanier)

  //fonction ajouter panier
  function ajouterProduitAuPanier() {
    camera.quantity = document.getElementById("quantity").value;
    //je récupère mon panier//memo : let variable=(condition)? "valeursi vrai": "valeur si faux"
    let panier = localStorage.getItem("panier") ? JSON.parse(localStorage.getItem("panier")) : [];
    //boucle :je parcour les lignes du panier
    for (let i = 0; i < panier.length; i++) { 
      let product = panier[i]
      //condition : si  le prduit est deja présent 
       if (product.id === camera.id) {
       camera.quantity = ++ camera.quantity
      }
      //condition : si produit n'ai pas présent 
      else{
       panier.push(camera);
      }
    }
   // je traduit et enregistre sur le localstorage "panier"
   localStorage.setItem("panier", JSON.stringify(panier))  

    //accolade fermeture scoop
  }
  console.log(ajouterProduitAuPanier)
};


