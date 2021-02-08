
let params = (new URL(document.location)).searchParams;//je recupere l'url 

const id = params.get("id");// je stocke l id du parametre

let container = document.getElementById("container");//je récupère l'emplacement ou je vais écrire mon html 

fetch("http://localhost:3000/api/cameras/" + id)// Appelle API avec fetch 

  .then(function (response) {
    return response.json()
  })
  .then(function (product) {
    let camera = new Camera(product)
    display(camera);
  })
;

function display(camera) {// inclus dans le html
  container.innerHTML +=
    `<div class="appareil" id="cardsProduct">
      <img src=${camera.imageUrl} alt="">
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
        <a href ="../pages/panier.html"><button type ="submit" id="panier" value="submit"> Ajouter au panier</button></a>
      </div>
    </div>`
  ;

  for (let lenses of camera.lenses) { // les option lentilles s'affcihe en fonction du produit
    document.getElementById('option').innerHTML += `<option value="${lenses}">${lenses}</option>`;
  }

  document.getElementById('panier').addEventListener('click', function() { ajouterProduitAuPanier(camera) });// je récupere l'élement de mon html  et écoute l'évenement au click

  function ajouterProduitAuPanier(camera) //fonction ajouter panier
  {
    camera.quantity = parseInt(document.getElementById('quantity').value);
    let panier = localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier')) : []; //je récupère mon panier//memo : let variable=(condition)? "valeursi vrai": "valeur si faux"
    
    //boucle :je parcour les lignes du panier
    let cameraExistIndex = false;
    for (let i = 0; i < panier.length; i++) {
      let product = panier[i];
      //condition : si  le prduit est deja présent 
      if (product.id === camera.id) {
        cameraExistIndex = i;
      }
    }

    if (false !== cameraExistIndex) { // Caméra existe dans le panier
      panier[cameraExistIndex].quantity = parseInt(panier[cameraExistIndex].quantity) + camera.quantity;
    } else {
      panier.push(camera);
    }
    localStorage.setItem('panier', JSON.stringify(panier))// je traduit et enregistre sur le localstorage "panier"
  }

};


