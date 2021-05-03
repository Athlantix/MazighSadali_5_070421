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
    const divIMG=document.createElement("div");

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
    prix.textContent="Prix: "+recupDetailProduit[i].prix/100+","+recupDetailProduit[i].prix.toString().substr(2)+" $";
  
}
    //creation bouton
    const bouton=document.createElement("button");
    panier.appendChild(bouton);
    bouton.textContent="Supprimer";

    //bouton event suppression 
    bouton.addEventListener("click",function(){
    const body=document.getElementById("delete");
    body.removeChild(panier);
    localStorage.removeItem("produit");

})



//----------Formulaire--------------------
//fonction validation formulaire

const validation = document.getElementById('valider');

validation.addEventListener("click",function(e){
 e.preventDefault();
 formValid();

})

function formValid(){
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const adress = document.getElementById('adress').value;
  const zipcode = document.getElementById('zipcode').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;
  const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  const zipcodeRegex = /[0-9]{5}(-[0-9]{4})?/;



  if (!(
    firstname.length > 1
    && lastname.length > 1
    && emailRegex.test(email)
    && adress.length > 6
    && zipcodeRegex.test(zipcode))) {
    alert("Veuillez remplir correctement les champs")
  
  }
  else{
    alert("Votre commande va être traitée");
    localStorage.removeItem("produit");
    window.location.href = 'remerciement.html';
  }

  const formSend = {
    contact: {
      firstName: firstname,
      lastName: lastname,
      city: city,
      address: adress + " " + zipcode,
      email: email,
    }
    
  }
  let product_id=[];
  for (let i=0;i<recupDetailProduit.length;i++){
    product_id.push(recupDetailProduit[i].id);
  }

 console.log(product_id);
}