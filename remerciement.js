let commande=localStorage.getItem("numCommande");
console.log(commande);

let commandeClient=document.getElementById("numCommande").textContent="Votre numéro de commande: "+commande;