const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const {readdirSync}=require("fs")

const app=express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));




readdirSync("./src/routes").map(r =>app.use("/api/v1", require(`./src/routes/${r}`)))


//database

const database=process.env.DATABASE
const port=process.env.PORT


mongoose.connect(database,(error)=>{
     console.log(error)
})


app.listen(port,(error)=>{
     if(error){console.log(error)}
     else{console.log("Database Connection Sucess "+port)}
})