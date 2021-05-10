
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
       creation(creaFigure,creaTitre,data[i].name,"textContent");
       creation(creaFigure,creaImg,data[i].imageUrl,"src");
       creation(creaFigure,creaPrix,"Prix: "+data[i].price.toString().substr(0,2)+","+data[i].price.toString().substr(2)+" $"
       ,"textContent");
       creation(creaFigure,creaDescription,data[i].description,"textContent");
       creation(creaFigure,creaBouton,"" ,"");
       creation(creaBouton,creaId,"produit.html?"+data[i]._id,"href");
       creaFigure.setAttribute("id","figure"+[i]);
       creaId.textContent="Détails";
       
    }
    
}).catch(function() {
    recup.textContent="error";
});








