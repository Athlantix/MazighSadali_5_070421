
const urlId=window.location.search;
const recup= document.getElementById('details');



const apiUrl=fetch('http://localhost:3000/api/teddies/'+urlId.slice(1))
.then(response=>response.json());

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

 creaQuanititePlus.addEventListener("click",function(){
     quantite++;
     let calcul=prix*quantite;
   creaPrix.textContent="Prix: "+calcul/100+","+data.price.toString().substr(2)+" $";
   creaQuanitite.textContent="Quantité: "+quantite;

 });
 
 creaQuanititeMoins.addEventListener("click",function(){
    quantite--;
    let calcul=prix*quantite;
   creaPrix.textContent="Prix: "+calcul/100+","+data.price.toString().substr(2)+" $";
   creaQuanitite.textContent="Quantité: "+quantite;

  });

 for (let i=0;i<data.colors.length;i++){
  const creaOption=document.createElement('option');
  creaSelect.appendChild(creaOption);
  creaOption.textContent=data.colors[i];

 }

});

