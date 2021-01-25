/*creation cards */
function display(product) {
    container.innerHTML +=
       
`<article id="cardsProduct" class="produit">
<img src=${product.imageUrl} alt="" />
<span>
<h2> ${product.name}</h2>
<p>${product.price / 100}€</p>
</span>
<p>${product.description}</p>

<a href="pages/produit.html?id=${product.id}"> En savoir plus</a>
</article>`
}


let container = document.getElementById("container");

fetch("http://localhost:3000/api/cameras") /* renvoie une promesse*/
    .then(function (response) {
        return response.json()
    })


    .then(function (listeProduct) {

        for (let product of listeProduct) {
            let camera = new Cameras(product)

            display(camera);
        }
    });
