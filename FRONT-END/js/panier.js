//PANIER

//Recupération du panier dans le  localstorage
let cameras = JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : [];

// Emplacement du html 
let container = document.getElementById("container");

// inistialise le total a
let prixPanier = 0

//récupere les id produits
let id = [];

//boucle sur le panier
cameras.forEach((camera, i) => {
  container.innerHTML += `
      <tr>
          <td class="srcimage"><img src=${camera.imageUrl} alt="" /></td>
          <td>${camera.name}</td>
          <td>${camera.price / 100} €</td>
          <td>${camera.quantity}</td>
          <td><a href="#" class="deleteCamera" data-id="${i}"> <i class="fas fa-trash-alt"></i></a></td>
          <td >${camera.quantity * camera.price / 100} €</td>
      </tr>
  `;

 //calcul prix Total
  prixPanier += camera.quantity * camera.price / 100;

 // incremente 
  for (let i = 0; i < camera.quantity; i++) {
    id.push(camera.id);
  }
});

// fonction supprimer produit du paner
document.querySelectorAll(".deleteCamera").forEach(delBtn => {
  delBtn.addEventListener('click', function () {
    let camera = cameras[delBtn.dataset.id];
    if (camera.quantity > 1) {
      camera.quantity--;
    } else {
      cameras.splice(delBtn.dataset.id, 1);
    }
    localStorage.setItem('panier', JSON.stringify(cameras));
    window.location.reload();
  })
});

//j'affiche mon prix total panier et je l'evoie dans le localstorage
let prixTotal = document.getElementById('prixTotal').textContent = prixPanier + " € ";
localStorage.setItem('prixTotal', JSON.stringify(prixTotal))


//fonction  supprimer tout les produits du panier
let viderPanier = document.getElementById('viderPanier')
viderPanier.addEventListener('click', function () {
  if (cameras == null) {} else {
    container.remove();
    localStorage.clear();
    window.location.reload();
  }
});


// FORMULAIRE
envoiFormulaire.addEventListener('click', function (event) {
  let form = document.getElementById("form");
  event.preventDefault();

  if (form.reportValidity() == true) {
    let contact = {
      'firstName': document.getElementById("nom").value,
      'lastName': document.getElementById("prenom").value,
      'address': document.getElementById("adresse").value,
      'city': document.getElementById("ville").value,
      'email': document.getElementById("email").value
    };

    let products = id;

    let formulaireClient = JSON.stringify({
      contact,
      products,
    });

    // envoie des donnees 
    fetch('http://localhost:3000/api/cameras/order', {
      method: 'POST',
      headers: {
        'content-type': "application/json"
      },
      mode: "cors",
      body: formulaireClient
    })
    .then(function (response) {
      return response.json()
    })
    .then(function (r) {
      localStorage.setItem("contact", JSON.stringify(r.contact));
      window.location.assign("confirmation.html?orderId=" + r.orderId)
    })
    .catch(function (err) {
      console.log('problème API');
    })
  }
});