const{creatTodoServices,selectTodoServices,updateTodoServices,deleteTodoServices,selectTodoStatus,todoSelectByDate}
=require("../services/todoList")

exports.creatTodo=async(req,res)=>{
     try{
          const username=req.username
          const {name,description}=req.body
          const data={name,description,username}

          const result=await creatTodoServices(data)
          res.status(201).json({
               status:"Sucess",
               message:"Todo Creat Sucess",
               data:result
          }) 
               
          }
     

     catch(error){console.log(error)
          res.status(401).json({
               status:"failed",
               message:"Todo Creat failed"
               })
     }
     }


exports.selectTodo=async(req,res)=>{

     
   try{
     const username=req.username
     const result=await selectTodoServices(username)

     res.status(200).json({
        status:"Sucess",
        message:"Todo Find Sucess",
        data:result
     })
 }
   catch(error){
     console.log(error)
     res.status(401).json({
          status:"Failed",
          message:"Todo Find Failed"
          
       })
   }
   }    


exports.updateTodo=async(req,res)=>{
     try{
          const id=req.body._id
          const {name,description}=req.body
          const data={name,description}

          const result=await updateTodoServices(id,data)
          res.status(200).json({
               status:"Sucess",
               message:"Todo update Sucess"
               //,data:result
            })
     }
     catch(error){
          res.status(401).json({
               status:"Failed",
               message:"Todo Failed Sucess"})
     }
}   


exports.deleteTodo=async(req,res)=>{
     try{
          const id=req.body._id
          const result= await deleteTodoServices(id)

          res.status(200).json({
               status:"Sucess",
               message:"Todo delete Sucess"
               //,data:result
            })
     }
     catch(error){
          res.status(401).json({
               status:"Failed",
               message:"Todo delete failed"
               //,data:result
            })
     }
}


exports.selectTodoByStatus=async(req,res)=>{
     
try{

     const {todoStatus}=req.body
     const result=await selectTodoStatus(todoStatus)


     if(result.length>0){
          res.status(200).json({
               status:"Sucess",
               message:"Todo find Sucess"
               ,data:result
            })
     }
     else{
          res.status(401).json({
               status:"Failed",
               message:"Todo find failed"
               //,data:result
            })

     }
     
}


catch(error){
     console.log(error)
     res.status(401).json({
          status:"Failed",
          message:"Todo find failed"
          //,data:result
       })


}
}




exports.selectTodoByDate=async(req,res)=>{
     try{
          const fromDate=req.body.fromDate
          const toDate=req.body.toDate
          const result =await todoSelectByDate(fromDate,toDate)

          if(result.length>0){
               res.status(200).json({
                    status:"Sucess",
                    message:"Sucessfully Find todO List",
                    data:result
               })

          }

          else{
               res.status(400).json({
          
                    status: 'failed',
                    message: 'TODO unavailable'})
          }

          

     }

     catch(error){
          res.status(400).json({
          
               status: 'failed',
               message: 'TODO unavailable',
               data: error.message})
     }
}