// SECESSION PANIER

let container = document.getElementById("container");

//Recuperation du panier en localstorage
let cameras = JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : [];



// Fonction Boucle elements du panier 

for (let i = 0; i < cameras.length; i++) {
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

  // supprimer 1 quantité
  let supprimer = document.getElementById('deleteCamera-'+ i) 
  supprimer.addEventListener('click', function(){
    if (cameras[i].quantity > 1) {
      cameras[i].quantity--;
    } else {
      cameras.splice(i);
    }
    localStorage.setItem('panier', JSON.stringify(cameras))
    window.location.reload(); 
  });

}


//fonction  supprimer le panier
let viderPanier = document.getElementById('viderPanier') 
viderPanier.addEventListener('click', function(){
  if (cameras == null) {   
  } else {
    container.remove();
    localStorage.clear();
    window.location.reload(); 
  }
});

// inistialise le total a
let prixPanier = 0

 //j'affiche mon prix total panier
 document.getElementById('prixTotal').textContent =  prixPanier + " € "; 

 //Calcule prix total panier
 function afficherPrixPanier(){ 
  prixPanier += cameras[i].quantity * cameras[i].price / 100; 
}



//FORMULAIRE


// let envoiFormulaire = document.getElementById("envoiFormulaire");
// envoiFormulaire.addEventListener('click',function(){


// })


// fetch('http://localhost:3000/api/cameras/order',{
//   method: 'POST',
//   headers : {
//     'content-type': 'application/json'
//   },
//   body : JSON.stringify(valide)
// })  

// // .then(response => response.json())   
// //     .then(response => {
// //       localStorage.clear();

// let contact = {
//   nom = document.getElementById("nom").value,
//   prenom = document.getElementById('prenom').value,
//   adresse = document.getElementById('adresse').value,
//   ville = document.getElementById("ville").value,
//   email = document.getElementById("email").value,
// };

// let products = cameras.id;
// formulaireClient = JSON.stringify({
//   contact,
//   products,
// });
