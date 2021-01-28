/* cards */
function display(camera) {
    container.innerHTML +=
       
`<article id="cardsProduct" class="produit">
<img src=${camera.imageUrl} alt="" />
<span>
<h2> ${camera.name}</h2>
<p>${camera.price / 100}€</p>
</span>
<p>${camera.description}</p>

<a href="pages/produit.html?id=${camera.id}"> En savoir plus</a>
</article>`
}


let container = document.getElementById("container");

fetch("http://localhost:3000/api/cameras") /* renvoie une promesse*/
    .then(function (response) {
        return response.json()
    })
    .then(function (listeProduct) {

        for (let product of listeProduct) {
            let camera = new Camera(product)

            display(camera);
        }
    });
