let mongoose = require('mongoose')

let productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    dateCreated:{
        type: Date,
        default: Date.now
    },
})

exports.Product = mongoose.model('Product', productSchema) 