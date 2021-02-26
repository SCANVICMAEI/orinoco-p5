
console.log(window.location)

console.log(new URL(window.location))

console.log(new URL(window.location).searchParams)

console.log(new URL(window.location).searchParams.get("orderId"))

let paramsUrl= new URL(window.location).searchParams;



let orderId = paramsUrl.get("orderId")



let contact =JSON.parse(localStorage.getItem("contact"));



let prixTotal =JSON.parse(localStorage.getItem("prixTotal"));



comfirmation.innerHTML += `
<p>
    Merci  ${contact.firstName } ${contact.lastName} </br>
Nous avons bien reçu votre commande N° ${orderId} </br>
D'un montant de :${prixTotal}  </br>
Un email vous sera envoyer à l'adresse : ${contact.email} a l'envoi de votre commande  
</p>
`


