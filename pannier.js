//récup DOM
const panier=document.getElementById("contain_panier");


//recup éléments localstorage
let recupDetailProduit=JSON.parse(localStorage.getItem("produit"));

let total=0;

for (let i=0;i<recupDetailProduit.length;i++){
    //creation éléments
    let figure=document.createElement("figure");
    let Image=document.createElement("img");
    let titre=document.createElement("p");
    let quantite=document.createElement("p");
    let prix=document.createElement("p");
    let couleur=document.createElement("p");

    let divData=document.createElement("div");
    let divIMG=document.createElement("div");

    //attribution éléments
    figure.appendChild(divData);
    figure.appendChild(divIMG);
    divIMG.appendChild(Image)
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
    prix.textContent="Prix: "+recupDetailProduit[i].prix/100+","+recupDetailProduit[i].prix.toString().substr(3)+" $";
    total+=recupDetailProduit[i].prix;


}   //total prix
    let creaTotal=document.createElement("p");
    panier.appendChild(creaTotal);
    creaTotal.id="total";
    creaTotal.textContent="Total: "+total/100+","+total.toString().substr(3)+" $";
    //creation bouton
    const bouton=document.createElement("button");
    panier.appendChild(bouton);
    bouton.textContent="Supprimer";

    //bouton event suppression 
    bouton.addEventListener("click",function(){
    let body=document.getElementById("delete");
      supprLocalStorage(body,panier);

})



//----------Formulaire--------------------
//fonction validation formulaire

let validation = document.getElementById('valider');

validation.addEventListener("click",function(e){
 e.preventDefault();
 formValid();

})

