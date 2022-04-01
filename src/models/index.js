require("dotenv").config();

let ProductosDaoMongo = require("./DAOS/ProductosDao/ProductosDaoMongo")

class ProductosDao{
    constructor(){
        switch (process.env.PERSISTENCIA) {
            case 'mongo':
                this.DAO = new ProductosDaoMongo()
                break;
             case 'firebase':
                this.DAO = new ProductosDaoMongo()
                break;
             case 'file':
                this.DAO = new ProductosDaoMongo()
                break;
            default:
                break;
        }
    }
}



module.exports = new ProductosDao()