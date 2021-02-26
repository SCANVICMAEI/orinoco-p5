

let orderId = (new URL(document.location)).searchParams;




let contact =JSON.parse(localStorage.getItem("contact"));
// let prixPanier =JSON.parse(localStorage.getItem("prixPanier"));

comfirmation.innerHTML += `
<p>
    Merci  ${contact.firstName } ${contact.lastName} </br>
Nous avons bien reçu votre commande N° ${orderId} </br>
D'un montant de : </br>
Un email vous sera envoyer à l'adresse : ${contact.email} a l'envoi de votre commande  
</p>
`

