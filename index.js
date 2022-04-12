require('dotenv/config')
let express = require('express');
let app = express()
let path =require('path')
const PORT = process.env.PORT || 8008;
let passport = require("passport")
let passportStrategy = require("passport-local").Strategy
let carritoRoute = require("./src/routes/carrito");
let productoRoute = require("./src/routes/productos");
let userRoute = require("./src/components/users/userMongo")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, 'views', 'ejs'))
app.set('view engine', 'ejs');






app.listen(PORT,()=>{
    console.log(`Server on: http://localhost:${PORT}`)
})