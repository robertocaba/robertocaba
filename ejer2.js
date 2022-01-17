const express = require("express");
const app = express();
const path = require('path');


app.get('/productos',(req,res)=>{
    res.send('listado de productos')
}) // nuestra ruta para mostrar una pagina html
app.post('/productos',(req,res)=>{
    res.send(path.join('crear un producto'))
}) 
app.put('/productos',(req,res)=>{
    res.send(path.join('Actualizar un producto'))
}) 
app.delete('/productos',(req,res)=>{
    res.send(path.join('Borrar un producto'))
}) 
app.get('/usuarios',(req,res)=>{
    res.send('listado de productos')
}) // nuestra ruta para mostrar una pagina html
app.post('/usuarios',(req,res)=>{
    res.send(path.join('crear un producto'))
}) 
app.put('/usuarios',(req,res)=>{
    res.send(path.join('Actualizar un producto'))
}) 
app.delete('/usuarios',(req,res)=>{
    res.send(path.join('Borrar un producto'))
}) 
app.listen("3000", (req,res) => {
  console.log("bienvenidos a Node.js Server Side on port 3000");
 
});