
const urlId=window.location.search;
const recup= document.getElementById('contain');

const apiUrl=fetch('http://localhost:3000/api/teddies/'+urlId.slice(1))
.then(response=>response.json());

apiUrl.then(data=>{
const creaFigure=document.createElement('figure');
const creaTitre=document.createElement('h2');
const creaImg=document.createElement('img');
const creaPrix=document.createElement('p');
const creaDescription=document.createElement('p');
const creaId=document.createElement('a');
const creaBouton=document.createElement('button');

recup.appendChild(creaFigure);
creaFigure.appendChild(creaTitre);
creaFigure.appendChild(creaImg);
creaFigure.appendChild(creaPrix);
creaFigure.appendChild(creaDescription);
creaFigure.appendChild(creaBouton);
creaFigure.setAttribute("id","figure");
creaBouton.appendChild(creaId);


 creaDescription.textContent=data.description;
 creaTitre.textContent=data.name;
 creaImg.src=data.imageUrl;
 creaPrix.textContent="Prix: "+data.price.toString().substr(0,2)+","+data.price.toString().substr(2)+" $";
 creaId.href="produit.html?"+data._id;
 creaId.textContent="Acheter";});

