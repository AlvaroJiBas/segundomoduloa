var historia = document.getElementById("historia");
historia.addEventListener("blur",() => {
 validarHistoria();
});

 var fecha = document.getElementById("fecha");
 fecha.addEventListener("blur",() =>{
   validarFecha();
 })
function validarHistoria(){
    var texto =historia.value;
    texto = texto.toLowerCase();
   console.log(texto.includes("quiero"));
   console.log(texto.includes("para"));
   console.log(texto.includes("como"));
    if (!texto.includes("como") || !texto.includes("quiero") || !texto.includes("para")){
        alert("La historia tiene que cumplir el formato COMO...QUiERO...PARA...");
        return false;
    }else{
        return true;
    };
  
}
function validarFecha(){
    var hoy = new Date();
    var fech=fecha.value;
    console.log(typeof fech)
    console.log( fech)
    if (fecha.value === ""){
        alert("la fecha no puede estar vacia")
        return false;
    } else{
        return true;
    }
}
function validarResponsable(){
    var responsable = document.getElementById("responsable").value;
    if (responsable.length <= 1){
        alert("El responsable no puede estar vacio");
        return false;
    }else{
        return true;
    }
}

function validarTodo(){
    if (validarFecha() && validarHistoria() && validarResponsable()){
        return true;
    }else{
        return false;
    }
}