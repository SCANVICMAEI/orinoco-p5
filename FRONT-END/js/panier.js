let container = document.getElementById("container");

//je récupère les donner de mon panier que j'appele et je le traduit avec parse
let cameras = JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : [];

// je déclare en prix panier total a 0 €
let prixPanier = 0

//boucle :je parcour les lignes du panier
for (let i = 0; i < cameras.length; i++) {
  //bloque produit
  if (cameras != null) {
    container.innerHTML +=
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
  //Calcule prix total panier
  prixPanier += cameras[i].quantity * cameras[i].price / 100;
};

//j'affiche mon prix total panier
document.getElementById('prixTotal').textContent = prixPanier 




//je supprime une ligne 

//  document.getElementById('deleteCamera') .addEventListener('click', deleteCamera)
//  function deleteCamera(){
// if(cameras.quantity>1){
//   remove
// }
// if (cameras.quantity==1){
// deleat
// }

