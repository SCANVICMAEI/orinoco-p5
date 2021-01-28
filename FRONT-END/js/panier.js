
//je récupère l'emplacement ou je vais écrire mon html 

let container = document.getElementById("container");

//j'appelle mon api

fetch("http://localhost:3000/api/cameras/") 
.then(function (response) {
  return response.json()
})

//je récupère les donner de mon panier que j'appele et je le traduit avec parse

let monPanier = JSON.parse(localStorage.getItem("panier"));


console.log(monPanier);

//condition : si mon panier et different de nul il me retourne mon panier 

if (monPanier != null){
   container.innerHTML +=
  ` <table>
   <tr>
     <td><img src=${monPanier.imageUrl} alt="" /></td>

     <td>${monPanier.name}</td>

     <td>${monPanier.price/ 100}</td>

     <td>prix ttc</td>

     <td>
       <a> <i class="fas fa-trash-alt"></i></a>
     </td>
   </tr>
 </table>
`
};

