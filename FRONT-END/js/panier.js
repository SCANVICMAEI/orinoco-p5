// SECESSION PANIER

let container = document.getElementById("container");

//Recuperation du panier en localstorage
let cameras = JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : []; 

// inistialise le total a
let prixPanier = 0 

//vider bloc 

//Fonction Boucle elements du panier 

for (let i = 0; i < cameras.length; i++) 
{
  if (cameras != null) {
    container.innerHTML += 
    ` 
    <tr> 
    <td><img src=${cameras[i].imageUrl} alt="" /></td>
    <td>${cameras[i].name}</td>
    <td>${cameras[i].price / 100} €</td>
    <td>${cameras[i].quantity}</td>
    <td><a> <i class="fas fa-trash-alt" id="deleteCamera-${i}"></i></a></td>
    <td >${cameras[i].quantity * cameras[i].price / 100} €</td>
    </tr>
    `
    
  }


  //Calcule prix total panier
  function afficherPrixPanier(){ 
    prixPanier += cameras[i].quantity * cameras[i].price / 100; 
  }

  //j'affiche mon prix total panier
  document.getElementById('prixTotal').textContent =  prixPanier + " € "; 
  
}



// //fonction supprimer 1 quantité
// let supprimer = document.getElementById('deleteCamera-'+ i) 
// supprimer.addEventListener('click', function(){
//   if (cameras[i].quantity > 1) {
//     cameras[i].quantity--;
//   } else {
//     cameras.splice(i);
//   }
//   localStorage.setItem('panier', JSON.stringify(cameras))
// });






//fonction supprimer le panier
let viderPanier = document.getElementById('viderPanier') 
viderPanier.addEventListener('click', function(){
  if (cameras == null) {   
  } else {
    container.remove()
    localStorage.clear();
    window.location.reload(); 
  }
});







//FORMULAIRE




