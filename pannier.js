//récup DOM
const panier=document.getElementById("contain_panier");
//recup éléments localstorage
let recupDetailProduit=JSON.parse(localStorage.getItem("produit"));
let total=0;
//parcours des photographes
for (let i=0;i<recupDetailProduit.length;i++){
    //creation éléments
    let figure=document.createElement("figure");
    let Image=document.createElement("img");
    let titre=document.createElement("p");
    let quantite=document.createElement("p");
    let prix=document.createElement("p");
    let couleur=document.createElement("p");

    let divData=document.createElement("div");
    let divImg=document.createElement("div");

    //attribution éléments
    creation(figure,divData,"","");
    creation(figure,divImg,"","");
    creation(divImg,Image,recupDetailProduit[i].image,"src");
    creation(divData,titre,recupDetailProduit[i].nom,"textContent");
    creation(divData,quantite,"Quantité: "+recupDetailProduit[i].quantite,"textContent");
    creation(divData,prix,"Prix: "+recupDetailProduit[i].prix/100+","+recupDetailProduit[i].prix.toString().substr(-2)+" $","textContent");
    creation(divData,couleur,"Couleur: "+recupDetailProduit[i].option,"textContent");
    panier.appendChild(figure);
    figure.appendChild(divData);
    //calcule total
    total+=recupDetailProduit[i].prix;
}   
    //total prix DOM
    let creaTotal=document.createElement("p");
    creation(panier,creaTotal,"Total: "+total/100+","+total.toString().substr(-2)+" $","textContent");
    creaTotal.id="total";

    //creation bouton
    const bouton=document.createElement("button");
    creation(panier,bouton,"Supprimer","textContent");

    //bouton event suppression 
    bouton.addEventListener("click",function(){
    let body=document.getElementById("delete");
      supprLocalStorage(body,panier);

})

//fonction validation formulaire
let validation = document.getElementById('valider');

validation.addEventListener("click",function(e){
 e.preventDefault();
 formValid();


})

