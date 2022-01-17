const express = require("express");
const app = express();
const path = require('path');


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
}) // nuestra ruta para mostrar una pagina html
app.post('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
}) 
app.listen("3000", (req,res) => {
  console.log("bienvenidos a Node.js Server Side on port 3000");
 
});
