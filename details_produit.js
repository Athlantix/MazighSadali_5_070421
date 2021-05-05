//récup url
const urlId=window.location.search;
const recup= document.getElementById('details');
const apiUrl=fetch('http://localhost:3000/api/teddies/'+urlId.slice(1))
.then(response=>response.json())

//création/implémentation d'éléments 
apiUrl.then(data=>{

    let prix=data.price;
    let quantite=1;
    const creaTitre=document.createElement('h2');
    const creaImg=document.createElement('img');
    const creaPrix=document.createElement('p');
    const creaDescription=document.createElement('p');
    const creaId=document.createElement('a');
    const creaBouton=document.createElement('button');
    const creaQuantitePlus=document.createElement('button');
    const creaQuantiteMoins=document.createElement('button');
    const creaQuantite=document.createElement('p');
    const creaSelect=document.createElement('select');
    const creaCouleur=document.createElement('p');
    const details=document.getElementById('details');
    const image=document.getElementById('image');

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
    
      const recupPrix=document.getElementById("prix").textContent.slice(6);
      const conversionPrix=parseFloat(recupPrix)*100;
      const recupQuantite=document.getElementById("quantite").textContent.slice(10);
      const conversionQuantite=parseFloat(recupQuantite);
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

