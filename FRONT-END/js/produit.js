let params = (new URL(document.location)).searchParams; /*variable cherche l url de la page ou on ce trouve*/
const id = params.get("id"); /* stocke l id du parametre*/
console.log(id);

let container = document.getElementById("container");

function display(id) {
  container.innerHTML +=
    `<div class="appareil" id="cardsProduct">
         <img src=${product.imageUrl} alt="" />
        <div class="description">
          <p class="nom">${product.name}</p>
          <span class="appareil-description">
          ${product.description}
          </span>
          <select class="options">
            <option>Choix options</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <p class="prix">${product.price}€</p>
          <select class="quantite">
            <option>Choix quantitées</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <p class="prix-total">Total: 100 €</p>
          <a class="boutton" href="panier.html"> Ajouter au panier</a>
        </div>
      </div>`
};