const { Router } = require("express");
const express = require("express");
const app = express();
const mysql = require('mysql2');



app.use(express.json());

const db = mysql.createConnection({ 
	  host     : 'localhost',
	  user     : 'root',
	  password : '1234567890',
      database :'expressDB' 
});
db.connect();

app.get('/createdb',(req,res)=>{
	let sql ='CREATE DATABASE expressDB';
	db.query(sql,(err,result)=>{
		if(err)throw err;
		console.log(result);
		res.send('Database created...')
		})
	})  
app.get('/productoTabla',(req,res)=>{ 
		let sql = 'CREATE TABLE expressDB.producto(idProducto INT AUTO_INCREMENT, tituloProducto VARCHAR(255), precio VARCHAR(255), PRIMARY KEY(idProducto))'
		db.query(sql,(err,result)=>{
			if(err) throw err;
				console.log(result);
		res.send("producto table created...");
					})
		})
		
app.get('/categoriaTabla',(req,res)=>{ 
		let sql = 'CREATE TABLE expressDB.categoria(id INT AUTO_INCREMENT, nombre VARCHAR(255), PRIMARY KEY(id))'
		db.query(sql,(err,result)=>{
			if(err) throw err;
				console.log(result);
		res.send("categoria table created...");
			})
		})
app.get('/relacionTabla',(req,res)=>{ 
			let sql = 'CREATE TABLE expressDB.reProdCat(id INT AUTO_INCREMENT, id_producto INT, id_categoria INT,PRIMARY KEY(id),FOREIGN KEY(id_producto) REFERENCES producto(idProducto),FOREIGN KEY(id_categoria) REFERENCES categoria(id))'
			db.query(sql,(err,result)=>{
				if(err) throw err;
					console.log(result);
			res.send("relacion categoria producto table created...");
				})
			})

app.post('/PostProducto',(req,res)=>{
				let post = { tituloProducto: req.body.tituloProducto, precio:   req.body.precio}
				let sql = 'INSERT INTO expressdb.producto SET ?'
				db.query(sql,post,(err,result)=>{
					if(err) throw err;
				console.log(result);
				res.send("Producto insertado en la BD...");
				})
				})

app.put('/updateProducto/:id',(req,res)=>{
					let newTitleProducto = req.body.tituloProducto;
					
					let sql =`UPDATE expressDB.producto SET tituloProducto = '${newTitleProducto}' WHERE idProducto = ${req.params.id}`;
					db.query(sql,(err, result)=>{
					   if(err) throw err;
					   console.log(result);
					   res.send('Producto actualizado..')
					})
				  })
				  
				


app.post('/reProductoCategoria', (req,res)=>{
			let post = {id_producto: req.body.id_producto, id_categoria: req.body.id_categoria}
			db.query(sql,post,(err,result)=>{
			  if(err) throw err
			  console.log(result)
			  res.send("relación categoría y producto...");
								})
			})
app.get('/getAllProductos', (req,res)=>{ 
				let sql = "SELECT * FROM expressDB.producto";
				db.query(sql,(err, result)=>{
				  if(err) throw err
				  console.log(result)
				  res.send(result);
				})
			  })
app.get('/getAllCategorias', (req,res)=>{ 
				let sql = "SELECT * FROM expressDB.categoria";
				db.query(sql,(err, result)=>{
				  if(err) throw err
				  console.log(result)
				  res.send(result);
				})
			  })	
app.get('/SeleccionaProducto/:id',(req,res)=>{
				let sql =`SELECT * FROM expressDB.producto WHERE idProducto = ${req.params.id}`;
				db.query(sql,(err,result)=>{
				   if(err) throw err
				   console.log(result)
				   res.send(result);
				   })
				})
app.get('/SeleccionaCategoria/:id',(req,res)=>{
					let sql =`SELECT * FROM expressDB.categoria WHERE id = ${req.params.id}`;
					db.query(sql,(err,result)=>{
					   if(err) throw err
					   console.log(result)
					   res.send(result);
					   })
					})	
app.get('/SeleccionaProductoName/:name',(req,res)=>{
					let sql =`SELECT * FROM expressDB.producto WHERE tituloProducto = '${req.params.name}'`;
					db.query(sql,(err,result)=>{
						if(err) throw err
						console.log(result)
						res.send(result);
						})
					})										  
app.delete('/deleteProducto/:id',(req,res)=>{
					let sql = `DELETE FROM expressDB.producto WHERE idProducto = ${req.params.id}`;
					db.query(sql, (err,result)=>{
						if (err) throw err
						console.log(result)
						res.send("Producto borrado...");
						})
					})
					  
					
app.listen('4000', ()=>{
    console.log("Servidor encendido");
})
      
