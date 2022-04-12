require('dotenv/config')
let carritoFb = require("./carrito/carritoFb");
let carritoFs = require("./carrito/carritoFs");

let carrito;

class CarritoRoute{
    constructor(){
    switch (process.env.CARRITO) {
        case "File":
             carrito =  carritoFb
            break;
        case "Firebase":
            carrito =  carritoFs
            break;
    
        default:
            break;
        }
    }
}

module.exports = new CarritoRoute()