const urlParams = new URLSearchParams(window.location.search);
const respuesta = urlParams.get("answer");
if(respuesta === "correct"){
    alert("Campeon");
}
else{
    alert("patan");
}