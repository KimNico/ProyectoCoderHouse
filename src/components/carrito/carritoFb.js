const { db } = require("../../config/dbs/firebase");
const { productos } = require("../productos/productoFb");
let Productos  = require('../productos/productoFb');
let date = new Date (Date.now())

class Carrito{
    constructor(carrito){
        this.carro = carro
    }
    async createCarrito(id){
        try {
            let carrito ={
                timestamp: `${date.toLocaleString()}`,
                productos:[]
            }
            let firestore = db.collection(this.carro)
            await firestore.get().then(async(querySnapshot)=>{
                if(querySnapshot.size == 0){
                    carrito.id =1;
                    await db.collection(this.carro).doc().set(carrito)
                }
                    querySnapshot.docs.forEach(element=>{
                        let carr = element.data();
                    })
                    await db.collection(this.carro).doc().set(carrito)
            })
        } catch (error) {
            console.log(error)
            
        }
    }
    async deleteCarrito(id){
        try {
            let firestore =db.collection(this.carro);
            let document = firestore.where('id', '==', Number(id));
            await document.get().then((querySnapshot)=>{
                querySnapshot.forEach(doc=>{
                    doc.ref.delete()
                })
            })
        } catch (error) {
            console.log(error)
            
        }

    }
    async getCarritoProductos(id){
        try {
            let firestore =db.collection(this.carro);
            let document = firestore.where('id', '==', Number(id));
            let productosCarro = [];
            await document.get().then((querySnapshot)=>{
                querySnapshot.forEach(doc=>{
                    let carro = doc.data
                    carro.productos.forEach(async prod=>{
                        productosCarro.push(await prod)
                    })
                })
            })
            return productosCarro
        } catch (error) {
            console.log(error)
            
        }

    }
    async postCarrritoProductos(id){
        try {
            let producto = Productos.getProductosById(id)
            let firestore =db.collection(this.carro);
            let document = firestore.where('id', '==', Number(1));
            await document.get().then((querySnapshot)=>{
                querySnapshot.forEach(async doc=>{
                    if(querySnapshot.size == 1){
                        let carro = doc.data();
                        await carro.productos.push(await producto.then(data=>data))
                        await doc.ref.update(carro)
                    }
                })
            })
        } catch (error) {
            console.log(error)
            
        }

    }
    async deleteCarritoProductos(idCarro, idProducto){
        try {
            let firestore = db.collection(this.carro);
            let document = firestore.where('id','==',Number(idCarro));
            await document.get().then(async querySnapshot=>{
                querySnapshot.forEach(async doc=>{
                    let carro = doc.data()
                    carro.productos = carro.productos.filter(prod=>prod.id !== Number(idProducto));
                    await doc.ref.update(carro)
                })
            })
        } catch (error) {
            console.log(error)
            
        }

    }

}

module.exports = new Carrito()