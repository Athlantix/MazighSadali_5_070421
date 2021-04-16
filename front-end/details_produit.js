
const urlId=window.location.search;
const recup= document.getElementById('details');


const apiUrl=fetch('http://localhost:3000/api/teddies/'+urlId.slice(1))
.then(response=>response.json());

apiUrl.then(data=>{

const creaTitre=document.createElement('h2');
const creaImg=document.createElement('img');
const creaPrix=document.createElement('p');
const creaDescription=document.createElement('p');
const creaId=document.createElement('a');
const creaBouton=document.createElement('button');

const details=document.getElementById('details');
const image=document.getElementById('image');

image.appendChild(creaImg);




details.appendChild(creaTitre);
details.appendChild(creaPrix);
details.appendChild(creaDescription);
details.appendChild(creaBouton);
details.appendChild(creaId);
creaBouton.appendChild(creaId);

 creaDescription.textContent=data.description;
 creaTitre.textContent=data.name;
 creaImg.src=data.imageUrl;
 creaPrix.textContent="Prix: "+data.price.toString().substr(0,2)+","+data.price.toString().substr(2)+" $";
 creaId.href="produit.html?"+data._id;
 creaId.textContent="Acheter";});

