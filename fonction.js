


  //fonction pour calcul des prix et implémentation dans le DOM
function calculer(prix,quantite,creaPrix,creaQuantite,option1,quantite){
          creaPrix.textContent="Prix: "+option1+","+prix.toString().substr(-2)+" $";
          creaQuantite.textContent="Quantité: "+quantite;
    }

//fonction d'envoi vers local storage
function pushLocal(produitRecup,produitPanier){
  produitRecup.push(produitPanier);
  localStorage.setItem("produit",JSON.stringify(produitRecup));
}

  //fonction verification localStorage
function verifLocalStorage(produitPanier){
  
        //récupération produit localStorage
        let produitRecup=JSON.parse(localStorage.getItem("produit"));
        //vérification de la présence du même produit, sinon envoi
        if(produitRecup){
            let test=0;
            let test2=0;
            let modif=0;
            let test3=0;
            for (let k=0;k<produitRecup.length;k++){
    
                if(produitRecup[k].nom!=produitPanier.nom){
                  test3=1;
                }
              
                else if(produitRecup[k].nom==produitPanier.nom
                  && produitRecup[k].quantite==produitPanier.quantite
                  && produitRecup[k].option==produitPanier.option){
                  test=1;
                }
    
                else if(produitRecup[k].nom==produitPanier.nom &&
                  produitRecup[k].quantite!=produitPanier.quantite ||
                  produitRecup[k].option!=produitPanier.option){
                    test2=1;
                    modif=k;
                }       
            }
    
            if (test==0 && test2==1 ){
              produitRecup.splice(modif,1);
              pushLocal(produitRecup,produitPanier);
            }
            else if( test3==1 && test==0){
              pushLocal(produitRecup,produitPanier);
            } 
         }
    
          else {
            produitRecup=[];
            pushLocal(produitRecup,produitPanier);
          
          }
  
  }

//fonction analyse des données du formulaire puis envoi

function formValid(){
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let adress = document.getElementById('adress').value;
    let zipcode = document.getElementById('zipcode').value;
    let email = document.getElementById('email').value;
    let city = document.getElementById('city').value;
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
    //envoi des données
    envoi( formSend,product_id)

  }

  //fonction suppression pannier Dom,localStorage
  function supprLocalStorage(body,panier){
    body.removeChild(panier);
    localStorage.removeItem("produit");
  }
  
  //fonction d'envoi POST
  function envoi( formSend,product_id){
    //method POST
    fetch("http://localhost:3000/api/teddies", {
   
    method: "POST",
    body: JSON.stringify({
        formSend,product_id
    }),

    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
  
// Convertion JSON
.then(response => response.json())
  
.then(json => console.log(json));


    //______________
  }

  function creation(parent,enfant,data,choix){
      parent.appendChild(enfant);
      enfant.textContent=data;
      if(choix=="textContent"){
        enfant.textContent=data;
      }
      else if(choix=="src"){
        enfant.src=data;
      }
      else if(choix=="href"){
        enfant.href=data;
      }
  }


