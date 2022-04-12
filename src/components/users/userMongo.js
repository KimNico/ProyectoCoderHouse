let mongoose = require("../../config/dbs/mongo")
let UserSchema = require("../../shcema/user")
let bcrypt = require("bcryptjs")

class User {
    async createUser(req,res,next){
        try {
            const {name,email,password,photo,adress,phone,isAdmin} = req.body;
            let newUser = new User({
                name,
                email,
                password:bcrypt.hashSync(password,10),
                photo,
                adress,
                phone,
                isAdmin
            })
            newUser = await newUser.save()
        } catch(error) {
            console.log(error)
        }
    }
    async loginUser(req,res,next){
        try {
            let user = await UserSchema.findOne({email:req.boy.email})
            let secret = process.env.SECRET;
            if(!user){
                res.status(404).send({message:'No existe este usuario'})
            }else if(user  && bcrypt.compareSync(req.body.password, user.password)){
                let token = jwt.sign(
                    {
                    userId: user._id,
                    isAdmin: user.isAdmin
                },
                secret,
                {
                    expiresIn: '1d'
                }
                );
                res.status(200).send({email:user.email,token})
            }else{
                res.status(400).send({message:'Datos incorrectos'})
            }
        } catch (error) {
            console.log(error)
        }
    }
    async deleteUser(req,res,next){
        UserSchema.find
    }

}

module.exports = new User();