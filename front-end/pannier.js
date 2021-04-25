//récup DOM
const panier=document.getElementById("contain_panier");


//recup éléments localstorage
let recupDetailProduit=JSON.parse(localStorage.getItem("produit"));

for (let i=0;i<recupDetailProduit.length;i++){
    //creation éléments
    const figure=document.createElement("figure");
    const Image=document.createElement("img");
    const titre=document.createElement("p");
    const quantite=document.createElement("p");
    const prix=document.createElement("p");
    const couleur=document.createElement("p");
 
    const divData=document.createElement("div");

    //attribution éléments
    figure.appendChild(Image);
    figure.appendChild(divData);
    divData.appendChild(titre);
    divData.appendChild(quantite);
    divData.appendChild(prix);
    divData.appendChild(couleur);
    panier.appendChild(figure);
    figure.appendChild(divData);


    //attribution des données éléments
    
    Image.src=recupDetailProduit[i].image;
    titre.textContent=recupDetailProduit[i].nom;
    quantite.textContent="Quantité: "+recupDetailProduit[i].quantite;
    couleur.textContent="Couleur: "+recupDetailProduit[i].option;
    prix.textContent="Prix: "+recupDetailProduit[i].prix/100+","+recupDetailProduit[i].prix.toString().substr(2)+" $";
  

   
   

}
    //creation bouton
const bouton=document.createElement("button");
panier.appendChild(bouton);
bouton.textContent="supprimer";

 
    //bouton event suppression
   
   
    bouton.addEventListener("click",function(){
     const body=document.getElementById("delete");
    body.removeChild(panier);

    localStorage.removeItem("produit");



})


