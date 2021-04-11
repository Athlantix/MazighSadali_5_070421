
let recup= document.getElementById('contain');

 let count=0;
const api=fetch('http://localhost:3000/api/teddies')
.then(response=> response.json());


const h=api.then(data=>{for (let i=0;i<data.length;i++)
    {
       const creaFigure=document.createElement('figure');
       const creaTitre=document.createElement('h3');
       const creaImg=document.createElement('img');
       const creaPrix=document.createElement('p');
       const creaDescription=document.createElement('p');

       recup.appendChild(creaFigure);
       creaFigure.appendChild(creaTitre);
       creaFigure.appendChild(creaImg);
       creaFigure.appendChild(creaPrix);
       creaFigure.appendChild(creaDescription);
       creaFigure.setAttribute("class","figure"+[i]);
        
        creaDescription.textContent=data[i].description;
        creaTitre.textContent=data[i].name;
        creaImg.src=data[i].imageUrl;
        creaPrix.textContent="Prix: "+data[i].price.toString().substr(0,2)+","+data[i].price.toString().substr(2)+" $";

       
    }
    
});





