const todo=require("../models/todoList")



exports.creatTodoServices=async(data)=>{
      return await todo.create(data)

}

exports.selectTodoServices=async(username)=>{
      return await todo.find({username})
}

exports.updateTodoServices=async(id,data)=>{
     return await todo.updateOne({_id:id},{$set:data})
}

exports.deleteTodoServices=async(id)=>{
       return await todo.deleteOne({_id:id})
}

exports.selectTodoStatus=async(todoStatus)=>{
       return await todo.find({todoStatus})
}

exports.todoSelectByDate=async(fromDate,toDate)=>{
      return await todo.find({createdAt:{$gte:new Date(fromDate),$lte:new Date(toDate)}})
}