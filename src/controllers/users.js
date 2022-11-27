const{creatUserServices,loginUserServices,updateDataServices,updatePasswordServices,
    deleteUserServices}=

require("../services/users")

const bcrypt=require("bcryptjs")

const {creatToken}=require("../helper/auth")


exports.resisterControllers=async(req,res)=>{

     
     try{
        const data=req.body
        const result=await creatUserServices(data)
        res.status(201).json({
            status:"Sucess",
            message:"Congrats.Account Creat Sucess"
            //,data:result
        })

     }


     catch(error)
     {res.status(401).json({
        status:"failed",
        message:error.message
    })}
}



exports.loginControllers=async(req,res)=>{
    try{
        const username=req.body.username
        const password=req.body.password
        const result=await loginUserServices(username)

        if(!result){
            return res.status(400).json({
                status:"Failed",
                message:"Data Find Failed"
            })
        }

        const isPasswordValid= result.comparePassword(password,result.password)

        if(!isPasswordValid){
            return res.status(400).json({
                status:"sucess",
                message:"Password is nor correct" })
           }

      else{
        result.password=undefined
        const token=creatToken(result)
        res.status(200).json({
            status: 'success',
            message: "successfully logged in",
            data:{result,token}})
    }

} catch(error){
    res.status(404).json({
        status:"failed",
        message:"Data find failed",
       data:error.message})
}}


exports.updateData=async(req,res)=>{
    try{
        const username=req.username
        const data={
            name:req.body.name,
            description:req.body.description,
            number:req.body.number,
            email:req.body.email
              }

        const result =await updateDataServices(username,data)
        res.status(201).json({
            status:"Sucess",
            message:"Data Update Sucess"
            //,data:result
        })


    }
    catch(error){
        res.status(401).json({
            status:"failed",
            message:"Data Update failed",
            data:error.message
        })

    }
    
}


exports.changePassword=async(req,res)=>{


            try{
                const username=req.username
                const {password}=req.body
                const hasedPassword=bcrypt.hashSync(password)
                const result=await updatePasswordServices(username,hasedPassword)

                res.status(201).json({
                    status:"Sucess",
                    message:"password change Sucess"
                }) }


            catch(error){console.log(error)
                res.status(401).json({
                    status:"failed",
                    message:"password change  faiied"
                })
            }


    

        

    
}


exports.deleteUser=async(req,res)=>{
    try{
            const username=req.username
            const result=await deleteUserServices(username)

            res.status(201).json({
            status:"Sucess",
            message:"User Delete Sucess"
            //,data:result
    })
    }
    catch(error){console.log(error)
        res.status(401).json({
            status:"Failed",
            message:"User Delete Failed"})

        }
}
