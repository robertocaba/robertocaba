const express = require("express");
const app = express();

app.use(express.json())

const items= [
      { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
      { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
      { id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
      { id: 4, nombre: 'Zelda Breath of the Wild' , precio: 200},
      { id: 5, nombre: 'Skin Valorant' , precio: 120},
      { id: 6, nombre: 'Taza de Star Wars' , precio: 220}
    ]

  app.get('/',(req,res)=>{
    res.json(items);
    }) 
  app.post('/',(req,res)=>{
    const itemObj = 
        { id: items.length+1, nombre: 'Harry Potter' , precio: 600}
      
    items.push(itemObj);
    res.json(items);
    console.log(items)
    }) 

  app.put('/:id',(req,res)=>{
      console.log(req.body)
      const found = items.some(items=> items.id === +req.params.id)
      if (found){
          items.forEach(itemObj =>{
              if (itemObj.id === +req.params.id){
                  console.log(req.body)
                  itemObj.nombre = req.body.nombre ? req.body.nombre : itemObj.nombre;
                  res.json(itemObj);
              }

          })
      }
      else {
          res.status(404).json({msg:`itemObjcon el id ${req.params.id} no encontrado`})
      }
        
    console.log(items);
    }) 
    app.delete('/:id',(req,res)=>{
        console.log(req.body)
        const found = items.some(items=> items.id === +req.params.id)
        if (found){
            items.forEach(itemObj =>{
                if (itemObj.id === +req.params.id){
                    console.log(req.body)
                    itemObj.nombre = req.body.nombre ? req.body.nombre : itemObj.nombre;
                    res.json(itemObj);
                }
                
            })
        }
        else {
            res.status(404).json({msg:`itemObjcon el id ${req.params.id} no encontrado`})
        }
          
      console.log(items);
      }) 

app.listen("3000", (req,res) => {
    console.log("bienvenidos a Node.js Server Side on port 3000");
   
  });