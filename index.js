import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import  fs  from "node:fs";
import { stringify } from "node:querystring";
import { readFile } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app =express(); //abrir express
const dirDatos= __dirname +`/datos/json.json`;
function logger(req,res,next) {
    console.log( `LOGGER: ${req.url}`);
    next();
};



app.set('view engine', 'ejs'); //Para hacer los templates, instalar
app.set('views', path.join(__dirname, 'views'));
app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.get("/", (req,res)=> {
    var historia; 
   
    fs.readFile(dirDatos, (err, data) => {
       if (err){
        var historias = [{historia:"",fecha:"",prioridad:"",responsable:""}]
        res.render("proyecto",{historias});
          
       }else{
       
       historia=data.toString(); 
      
      var historias =JSON.parse(historia);
    
       res.render("proyecto",{historias});
       }
    })
});
app.get("/proyecto", (req,res)=> {
    var historia; 
   
    fs.readFile(dirDatos, (err, data) => {
       if (err){
        var historias = [{historia:"",fecha:"",prioridad:"",responsable:""}]
        res.render("proyecto",{historias});
          
       }else{
       
       historia=data.toString(); 
      
      var historias =JSON.parse(historia);
       console.log(historias);
       res.render("proyecto",{historias});
       }
    })
});




app.post("/proyecto", (req,res)=> {
    const cuerpo = req.body;
    var nuevo = {id : "2",historia : cuerpo.historia, responsable : cuerpo.responsable, prioridad: cuerpo.prioridad, fecha : cuerpo.fecha, estado: "Pendiente"};
    var historia;

    fs.readFile(dirDatos, (err, data) => {
        if (err){
            fs.writeFile(dirDatos, "["+JSON.stringify(nuevo)+"]", (err) => {
                if (err) {
                   return err;
                }
                else {
                  
                    var historias="["+JSON.stringify(nuevo)+"]";
                    console.log(historias);
                    res.render("proyecto",{historias});
                
                }
            }); 
         }else{
            historia=JSON.parse(data.toString());
            console.log(historia);
            historia.push(nuevo);
            var historias = historia;
            fs.writeFile(dirDatos, JSON.stringify(historias), (err) => {
                if (err) {
                   return err;
                }
                else {
                    
                    res.render("proyecto",{historias});
                    console.log("\nFile Contents of file after append:",
                        fs.readFileSync(dirDatos, "utf8"));
                }
            }); 
           
       
        }
     })
    
  
   
   
   
   
});
app.get("/proyectonuevo", (req,res)=> {
    
    res.sendFile(path.join(__dirname, 'views', 'proyectonuevahistoria.html'));
});

app.use((req,res) =>{
res.status(400).send("Error: Pagina no existe");
});

app.listen(3000,() => {
    console.log("server running on http://localhost:3000");

});