require('dotenv/config')
let ProdFb = require("./productos/productoFb");
let ProdFs = require("./productos/productoFs");
let CarritoFb = require("./carrito/carritoFb");
let CarritoFs = require("./carrito/carritoFs")

class IndexDb{
    constructor(){
        switch (process.env.INDEXDB) {
             case 'fb':
                this.indexDb = new ProdFb()
                this.indexDb = new CarritoFb()
                break;
             case 'fs':
                this.indexDb = new ProdFs()
                this.indexDb =new CarritoFs()
                break;
            default:
                break;
        }
    }
}



module.exports = new IndexDb()