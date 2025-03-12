function areaRectangulo(x,y){
    return x*y;
}
console.log(areaRectangulo(5,2));
function repetirMensaje(mensaje,veces){
    for (let index = 0; index < veces; index++) {
        console.log(mensaje);
        
    }
}
repetirMensaje("Hola buenas",5);
function sumarRecursivo(num){

    
    if (num <= 0){
      
        return 0;

    } else{
        
        
     
        return num + sumarRecursivo(num-2);
    }

}
console.log(sumarRecursivo(1));
let val= {width:5};
function modificarVal(x) {
   let val2= {width:10};
   x= val2;
  console.log(x);
    
}
modificarVal(val);
console.log(val);
const saludo = (nombre, edad) => {
    if (edad >= 18) {
      return `Hola, ${nombre}. Eres mayor de edad.`;
    } else {
      return `Hola, ${nombre}. Eres menor de edad.`;
    }
  }
  console.log(saludo("Al",18));

  let notas = [2, 5, 3, 2, 9, 8]
  const mediaNotas = (arrayNot) =>{
    let total=0
    arrayNot.forEach(nota => {
        total+=nota;
    });
    var media = total/arrayNot.length;
    console.log(media)
  }
  mediaNotas(notas);