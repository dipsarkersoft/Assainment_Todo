const jwt=require("jsonwebtoken")

exports.creatToken=(user)=>{
     const payload={
          "_id":user._id,
          "name":user.name,
          'email': user.email,
          'number': user.number,
          'username': user.username
     }
    return jwt.sign(payload,process.env.SECRET_TOKEN,{
          expiresIn:"1h"
     })
}
