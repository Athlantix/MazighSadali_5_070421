
let recup= document.getElementById('contain');

// connection a l'api
const api=fetch('http://localhost:3000/api/teddies')
.then(response=> response.json());

// créations des produits 
api.then(data=>{for (let i=0;i<data.length;i++)
    {
       let creaFigure=document.createElement('figure');
       let creaTitre=document.createElement('h2');
       let creaImg=document.createElement('img');
       let creaPrix=document.createElement('p');
       let creaDescription=document.createElement('p');
       let creaId=document.createElement('a');
       let creaBouton=document.createElement('button');

       recup.appendChild(creaFigure);
       creaFigure.appendChild(creaTitre);
       creaFigure.appendChild(creaImg);
       creaFigure.appendChild(creaPrix);
       creaFigure.appendChild(creaDescription);
       creaFigure.appendChild(creaBouton);
       creaFigure.setAttribute("id","figure"+[i]);
       creaBouton.appendChild(creaId);
      

        creaDescription.textContent=data[i].description;
        creaTitre.textContent=data[i].name;
        creaImg.src=data[i].imageUrl;
        creaPrix.textContent="Prix: "+data[i].price.toString().substr(0,2)+","+data[i].price.toString().substr(2)+" $";
        creaId.href="produit.html?"+data[i]._id;
        creaId.textContent="Détails";
       
    }
    
}).catch(function() {
    recup.textContent="error";
});








