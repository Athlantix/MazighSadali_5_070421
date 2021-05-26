let commande=localStorage.getItem("numCommande");
let prixTotal=localStorage.getItem("prixTotal");
console.log(commande);

document.getElementById("numCommande").textContent="Votre numéro de commande: "+commande;
document.getElementById("prixTotal").textContent="Prix total: "+prixTotal;