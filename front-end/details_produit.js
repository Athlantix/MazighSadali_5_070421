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
const creaQuanititePlus=document.createElement('button');
const creaQuanititeMoins=document.createElement('button');
const creaQuanitite=document.createElement('p');
const creaSelect=document.createElement('select');
const creaCouleur=document.createElement('p');


const details=document.getElementById('details');
const image=document.getElementById('image');

image.appendChild(creaImg);


details.appendChild(creaTitre);
details.appendChild(creaDescription);
details.appendChild(creaId);
details.appendChild(creaQuanitite);
details.appendChild(creaQuanititePlus);
details.appendChild(creaQuanititeMoins);
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
 creaQuanititePlus.textContent="+";
 creaQuanititeMoins.textContent="-";
 creaQuanitite.textContent="Quantité: "+quantite;
 creaCouleur.textContent="Couleur";

 creaPrix.id="prix";
 creaQuanitite.id="quantite";

//Gestion quantité/prix des boutons "+"" et "-"
 creaQuanititePlus.addEventListener("click",function(){
     quantite++;
     let calcul=prix*quantite;
   creaPrix.textContent="Prix: "+calcul/100+","+data.price.toString().substr(2)+" $";
   creaQuanitite.textContent="Quantité: "+quantite;

 });
 
 creaQuanititeMoins.addEventListener("click",function (){
   if(quantite>0){
    quantite--;
    let calcul=prix*quantite;
   creaPrix.textContent="Prix: "+Math.max(calcul/100,0)+","+data.price.toString().substr(2)+" $";
   creaQuanitite.textContent="Quantité: "+Math.max(quantite,0);
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

 

let produitRecup=JSON.parse(localStorage.getItem("produit"));



//vérification de la présence du même produit, sinon envoi
if(produitRecup){
  let test=0;
  let test2=0;
  let modif=0;
  let test3=0;
 for (let k=0;k<produitRecup.length;k++){

  if(produitRecup[k].nom!=produitPanier.nom){
    console.log("pas egal");
    test3=1;
  }
 
  else if(produitRecup[k].nom==produitPanier.nom
    && produitRecup[k].quantite==produitPanier.quantite
    && produitRecup[k].option==produitPanier.option
    ){
    test=1;
    console.log("pareil"); 
  }

   else if(produitRecup[k].nom==produitPanier.nom &&
    produitRecup[k].quantite!=produitPanier.quantite ||
     produitRecup[k].option!=produitPanier.option){
      test2=1;
      modif=k;

      console.log("modif");
    }

 
 }
 console.log("test3"+test3)
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



})


})
.catch(function() {
  recup.textContent="error";
});


//fonction d'envoi vers local storage
function pushLocal(produitRecup,produitPanier){
  produitRecup.push(produitPanier);
  localStorage.setItem("produit",JSON.stringify(produitRecup));
  }