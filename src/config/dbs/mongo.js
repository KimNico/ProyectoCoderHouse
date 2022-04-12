require('dotenv/config')
let mongoose =require("mongoose")

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log('Nos conectamos a MongoDb')
})
.catch((error)=>{
    console.log(error);
})

module.exports ={mongoose};