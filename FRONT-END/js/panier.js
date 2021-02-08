//PANIER

let container = document.getElementById("container");

let cameras = JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : []; //je récupère les donner de mon panier que j'appele et je le traduit avec parse

let prixPanier = 0 // je déclare en prix panier total a 0 €
for (let i = 0; i < cameras.length; i++) {//boucle :je parcour les lignes du panier
 
  if (cameras != null) {
    container.innerHTML += //bloque produit
    ` 
    <tr> 
    <td><img src=${cameras[i].imageUrl} alt="" /></td>
    <td>${cameras[i].name}</td>
    <td>${cameras[i].price / 100} €</td>
    <td>${cameras[i].quantity}</td>
    <td><a> <i class="fas fa-trash-alt" id="deleteCamera"></i></a></td>
    <td >${cameras[i].quantity * cameras[i].price / 100} €</td>
    </tr>
    `
  }

  prixPanier += cameras[i].quantity * cameras[i].price / 100; //Calcule prix total panier
  document.getElementById('prixTotal').textContent =  prixPanier + " € "; //j'affiche mon prix total panier

}

let supprimer = document.getElementById('deleteCamera') //fonction supprimer 1 quantité
supprimer.addEventListener('click', function()
{
  if (cameras.quantity > 1) {
    cameras.quantity--;
  } else {
   cameras.splice();
  }

});


let viderPanier = document.getElementById('viderPanier') //fonction supprimer tous le panier
viderPanier.addEventListener('click', function()
{
  if (panier != null) {
    localStorage.clear();
  } else {
   alert('Votre panier est déja vide')
  }
  
});





//FORMULAIRE




