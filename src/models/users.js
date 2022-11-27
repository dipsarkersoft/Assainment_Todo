const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")

const userSchema=mongoose.Schema({
     username:{
          type:String,
          required:true,
          unique:true},

 
name:{
          type:String,
          required:true
     },

     description:{
          type:String
     },

     password:{
          type:String,
          required:true
          
     },

confirmPassword:{
          type:String,
          required:true,
          validate:{
               validator:function(value){
                    return value === this.password
               }
          }}
     ,

number:{
          type:String,
          unique:true,
          validate:{
               validator:function(number){
                    return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(number)
               }
          }    },

email:{type:String,
     validate:{
          validator:function(email){
               return /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/.test(email)
          }}
       }
},{versionKey:false,timestamps:true})



userSchema.pre("save",function(next){
     if(!this.isModified("password")){
          return next()
     }
     const password=this.password
     const hasedPassword=bcrypt.hashSync(password)
     this.password=hasedPassword
     this.confirmPassword=undefined
     next()

})

userSchema.methods.comparePassword=(password,hasedPassword)=>{
     const isPasswordValid=bcrypt.compareSync(password,hasedPassword)
     return isPasswordValid
}



const user=mongoose.model("users",userSchema)
module.exports=user