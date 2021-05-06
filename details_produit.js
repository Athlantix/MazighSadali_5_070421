//récup url
const urlId=window.location.search;
let recup= document.getElementById('details');
let apiUrl=fetch('http://localhost:3000/api/teddies/'+urlId.slice(1))
.then(response=>response.json())

//création/implémentation d'éléments 
apiUrl.then(data=>{

    let prix=data.price;
    let quantite=1;
    let creaTitre=document.createElement('h2');
    let creaImg=document.createElement('img');
    let creaPrix=document.createElement('p');
    let creaDescription=document.createElement('p');
    let creaId=document.createElement('a');
    let creaBouton=document.createElement('button');
    let creaQuantitePlus=document.createElement('button');
    let creaQuantiteMoins=document.createElement('button');
    let creaQuantite=document.createElement('p');
    let creaSelect=document.createElement('select');
    let creaCouleur=document.createElement('p');
    let details=document.getElementById('details');
    let image=document.getElementById('image');

    image.appendChild(creaImg);
    details.appendChild(creaTitre);
    details.appendChild(creaDescription);
    details.appendChild(creaId);
    details.appendChild(creaQuantite);
    details.appendChild(creaQuantitePlus);
    details.appendChild(creaQuantiteMoins);
    details.appendChild(creaCouleur);
    details.appendChild(creaSelect);
    details.appendChild(creaPrix);
    details.appendChild(creaBouton);
    creaBouton.appendChild(creaId);


    //intégration des données API dans le DOM
    creaDescription.textContent=data.description;
    creaTitre.textContent=data.name;
    creaImg.src=data.imageUrl;
    creaPrix.textContent="Prix: "+data.price.toString().substr(0,2)+","+data.price.toString().substr(2)+" $";
    creaId.href="produit.html?"+data._id;
    creaId.textContent="Acheter";
    creaQuantitePlus.textContent="+";
    creaQuantiteMoins.textContent="-";
    creaQuantite.textContent="Quantité: "+quantite;
    creaCouleur.textContent="Couleur";
    creaPrix.id="prix";
    creaQuantite.id="quantite";

    //Gestion quantité/prix des boutons "+"" et "-"
    creaQuantitePlus.addEventListener("click",function(){
        quantite++;
        let calcul=prix*quantite;
        calculer(prix,quantite,creaPrix,creaQuantite,calcul/100,quantite);

    });
    
    creaQuantiteMoins.addEventListener("click",function (){
      if(quantite>0){
          quantite--;
          let calcul=prix*quantite;
          calculer(prix,quantite,creaPrix,creaQuantite,Math.max(calcul/100,0),Math.max(quantite,0));
        }
        else{quantite=0;};
    });

      //génération des options dynamiquement
      for (let i=0;i<data.colors.length;i++){
        const creaOption=document.createElement('option');
        creaSelect.appendChild(creaOption);
        creaOption.textContent=data.colors[i];
      }





    //bouton acheter event
    creaBouton.addEventListener("click",function(e){
      e.preventDefault();
      
      
    //récuperation prix et quantité
      alert("Ajouté au panier");
    
      let recupPrix=document.getElementById("prix").textContent.slice(6);
      let conversionPrix=parseFloat(recupPrix)*100;
      let recupQuantite=document.getElementById("quantite").textContent.slice(10);
      let conversionQuantite=parseFloat(recupQuantite);
      //recuperation selection
      let selectionOption=creaSelect.options[creaSelect.selectedIndex].value;
    
      //on défini le contenu du panier
      let produitPanier={
        id:data._id,
        image:data.imageUrl,
        nom:data.name,
        quantite:conversionQuantite,
        prix:conversionPrix,
        option:selectionOption,
      };

      verifLocalStorage(produitPanier);
    })
})
.catch(function() {
  recup.textContent="error";
});

