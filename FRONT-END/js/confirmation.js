//récuperation des données de l'URL
let paramsUrl = new URL(window.location).searchParams;

let orderId = paramsUrl.get("orderId")

//récuperation des données contact
let contact = JSON.parse(localStorage.getItem("contact"));

//récuperation du prix Total 
let prixTotal = JSON.parse(localStorage.getItem("prixTotal"));

// insertion dns le HTML
comfirmation.innerHTML += `
<p>
 Merci  ${contact.firstName } ${contact.lastName} 
</p>
<hr>
<p>Nous avons bien reçu votre commande N° ${orderId} </br>
 D'un montant de :${prixTotal}  </br>
</p>
Un email vous sera envoyer à l'adresse : </br> ${contact.email} a l'envoi de votre commande  
`