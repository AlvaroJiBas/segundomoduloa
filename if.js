let passwordGuardado = "secreto123";
let passwordIngresado = "secreto123"; 
passwordGuardado==passwordIngresado ? console.log("acceso permitido") : console.log("contraseña incorrecta");

let numero = 7;
numero%2 == 0 ? console.log("es par"): console.log("es impar");
let horaActual = 15; 
if (horaActual >= 9 && horaActual <= 15){
    console.log(" Esta abierto")
}else{
    console.log("esta cerrado");
};
let temperatura = 30;
temperatura > 25 ? console.log("hace calor") : ("hace frio");
let nota = 75;
if (nota>=90 && nota<=100){
    console.log("sobresaliente")
} else if(nota >= 70){
    console.log("notable")
}else if (nota >= 50){
    console.log("sufi")
}else {
    console.log("penco")
}
