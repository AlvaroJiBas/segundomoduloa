import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import  fs, { writeFile }  from "node:fs";
import { stringify } from "node:querystring";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app =express(); //abrir express

function logger(req,res,next) {
    console.log( `LOGGER: ${req.url}`);
    next();
};
//Para generar HTML sin los templates
function generateHTML(message) { 
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Resultado del pedido</h1>
        <p>${message}</p>
        <a href='/formu'>Volver</a>
    </body>
    </html>
    `}
app.set('view engine', 'ejs'); //Para hacer los templates, instalar
app.set('views', path.join(__dirname, 'views'));
app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.get("/", (req,res)=> {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get("/aboutus", (req,res)=> {
    const url=req.query;
    const nombre= url.nombre;
    const apellido= url.apellido
    const pais= url.pais
    if (nombre && apellido && pais){
    res.json({nombre:nombre, apellido:apellido, pais:pais});
    }else{
        res.send("error")
    }
});
app.post("/iniciarsesion", (req,res)=> {
    const body =req.body;
    const json={nombre:body.name, contrasena:body.password, contrasenarep:body.password2,nacimiento:body.fecha,email:body.email}
    console.log(body.name);
    writeFile(__dirname +`/public/txt/json.txt`,JSON.stringify(json),(err) => {
        if (err) console.log(err);
        else {
            console.log("File written successfully\n");
            console.log("The written file has the following contents:");
        }
    });
    res.json(json);

});
app.get("/formu", (req,res)=> {
    res.sendFile(path.join(__dirname, 'views', 'formu.html'));
});
app.post("/formu", (req,res)=> {
    const cuerpo = req.body;
    var mensaje;
    if (cuerpo.valor <= 100){
        mensaje= {valor:"El valor del pedido debe ser mayor o igualque 100"}
    }else if (cuerpo.valor > 500){
        mensaje= {valor:"El valor del pedido debe ser menor que 500"}
    } else {
        mensaje= {valor:"Pedido tramitado correctamente"}
    }
    //res.status(400).send(generateHTML(mensaje));
    res.render("formu",{mensaje})
});
app.get("/acertijo", (req,res)=> {
    res.sendFile(path.join(__dirname, 'views', 'acertijo.html'));
});
app.get("/win", (req,res)=> {
    res.sendFile(path.join(__dirname, 'views', 'win.html'));
});
app.get("/lose", (req,res)=> {
    res.sendFile(path.join(__dirname, 'views', 'lose.html'));
});
app.get("/ejemplo1", (req,res)=> {
    var objeto = {titulo:"mi primerasdasd titulo",cosa:"mi segundo titulo"};
    var isLoggedIn=true;
   
});
app.get("/usuario", (req,res)=> {
    var user = {nombre:"Paco", apellido :"Porras", direccion:"calle bonita 23", pais:"Inglaterra", pedNum:154, saldo:20000, suscrito : true}
    res.render("usuario",{user});
});
app.get("/if",(req,res)=> {
    var user = {isAdmin : true}
    res.render("if",{user});
});
app.use((req,res) =>{
res.status(400).send("Error: Pagina no existe");
});

app.listen(3000,() => {
    console.log("server running on http://localhost:3000");

});