const mongoose=require('mongoose')

const todoSchema=mongoose.Schema({
     username:{type:String},
     name:{type:String},
     description:{type:String},
     todoStatus:{
          type:String,
          default:"new",
          enum:["verified","new","admin"]
     }
},{timestamps:true,versionKey:false})



const todo=mongoose.model("todo",todoSchema)
module.exports=todo