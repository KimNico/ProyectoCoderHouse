require('dotenv/config')
let express = require('express');
let app = express()
let path =require('path')
const PORT = process.env.PORT || 8008;



app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.listen(PORT,()=>{
    console.log(`Server on: http://localhost:${PORT}`)
})