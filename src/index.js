const express=require("express")
const route=require("./router/router")
const mongoose=require("mongoose")
const multer=require("multer")
const app=express()


app.use(express.json())
app.use(multer().any())

mongoose.connect("mongodb+srv://InternManagement:KjdqVjDX8AW1o3Dz@project2.gio5tbx.mongodb.net/?retryWrites=true&w=majority",
{useNewUrlParser:true})

.then(()=>console.log("MongoDb is Connected"))
.catch(err=>console.log(err))

app.use('/',route)

app.listen(process.env.PORT || 3001, function(){
    console.log("express app running on port"+(process.env.PORT || 3001))
})