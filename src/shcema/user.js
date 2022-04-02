let mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    adress:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true
    },
})
exports.User = mongoose.model('User', userSchema) 