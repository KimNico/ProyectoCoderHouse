require('dotenv/config')
let productoFb = require("./carrito/carritoFb");
let productoFs = require("./carrito/carritoFs");

let producto;

class ProductoRoute{
    constructor(){
    switch (process.env.CARRITO) {
        case "File":
            producto =  productoFb
            break;
        case "Firebase":
            producto =  productoFs
            break;
    
        default:
            break;
        }
    }
}

module.exports = new ProductoRoute()