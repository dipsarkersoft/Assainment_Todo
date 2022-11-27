const jwt=require("jsonwebtoken")

exports.verifitoken=(req,res,next)=>{
     try{
          const tokenKey=req.headers["token"]
          const decoded=jwt.verify(tokenKey,process.env.SECRET_TOKEN)
          const{username}=decoded
          req.username=username
          next()
     }
   catch(error){console.log(error)
     res.status(200).json({
          message:error.message
      })
   }  
}