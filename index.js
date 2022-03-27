require('dotenv/config')
let express = require('express');
let app = express()
let path =require('path')
const PORT = process.env.PORT || 8008;

let productoController = require('./src/controller/fs/productoFs')
let carritoController = require('./src/controller/fs/carritoFs')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(productoController);
app.use(carritoController);

app.listen(PORT,()=>{
    console.log(`Server on: http://localhost:${PORT}`)
})