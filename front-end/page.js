
const recup= document.getElementById('contain');

// connection a l'api
const api=fetch('http://localhost:3000/api/teddies')
.then(response=> response.json());

// créations des produits 
api.then(data=>{for (let i=0;i<data.length;i++)
    {
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
       creaFigure.setAttribute("id","figure"+[i]);
       creaBouton.appendChild(creaId);
      

        creaDescription.textContent=data[i].description;
        creaTitre.textContent=data[i].name;
        creaImg.src=data[i].imageUrl;
        creaPrix.textContent="Prix: "+data[i].price.toString().substr(0,2)+","+data[i].price.toString().substr(2)+" $";
        creaId.href="produit.html?"+data[i]._id;
        creaId.textContent="Acheter";
       
    }
    
});








