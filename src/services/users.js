const user=require("../models/users")
const bcrypt=require("bcryptjs")


exports.creatUserServices=async(data)=>{
     const result =await user.create(data)
       return result
}

exports.loginUserServices=async(username)=>{
     const result =await user.findOne({username},{_id:0})
     return result
}

exports.updateDataServices=async(username,data)=>{

     const result=await user.updateOne({username},{$set:data},{runValidators: true})
     return result
}


exports.updatePasswordServices=async(username,hasedPassword)=>{

     const result=await user.updateOne({username},{$set:{password:hasedPassword}})
     return result
}


exports.deleteUserServices=async(username)=>{
     const result=await user.deleteOne({username})
     return result
}