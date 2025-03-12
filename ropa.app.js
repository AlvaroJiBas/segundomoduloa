import {Ropa, Camiseta, Pantalon} from './Ropa.js';  

// Create a Dog instance


// Get buttons from the DOM
const camiseta1 = new Camiseta("L","Rojo","Largo")
const camiseta2 = new Camiseta("M","Verde","Corto")
const camiseta3 = new Camiseta("S","Azul","Corto")
const pantalon1 = new Pantalon("L","Rojo","Moderno")
const pantalon2 = new Pantalon("M","Verde","Clasico")
const pantalon3 = new Pantalon("S","Azul","Chachi")
const ropa =[camiseta1,pantalon1,camiseta2,pantalon2,camiseta3,pantalon3]
// Add event listeners for button clicks
cam.addEventListener("click", () =>{
    document.getElementById("label").innerText="Longitud:";

});
pan.addEventListener("click", () =>{
    document.getElementById("label").innerText="Estilo:";

});

anadir.addEventListener('click', () => {
    var  talla=document.getElementById("talla").value;
    var  color=document.getElementById("color").value;
    var  longitud=document.getElementById("longitud").value;
    var cam = document.getElementById("cam").checked;
    var pan =document.getElementById("pan").checked;
    if (cam){
        var  camiseta = new Camiseta(talla,color,longitud);
    }
    if (pan){
        var  camiseta = new Pantalon(talla,color,longitud);
    }
  
    var lio;
    ropa.push(camiseta);
    document.getElementById("lista").innerHTML="";
    ropa.forEach(element => {
        

        if (element instanceof Camiseta){
             lio=document.createElement("li");
            lio.innerHTML= `Camiseta de talla ` + element.getTamano() + ` color ` + element.getColor() + ` longitud de manga ` + element.getLongitud();
            lio.setAttribute("style","color:blue");
            document.getElementById("lista").appendChild(lio);
        }else{
             lio=document.createElement("li");
            lio.innerHTML= `Pantalon de talla ` + element.getTamano() + ` color ` + element.getColor() + ` estilo ` + element.getEstilo();
            lio.setAttribute("style","color:green");
            document.getElementById("lista").appendChild(lio);
        }  });
});
