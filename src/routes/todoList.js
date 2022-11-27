const express=require("express")

const {verifitoken}=require("../middleware/verify")
const{creatTodo,selectTodo,updateTodo,deleteTodo,selectTodoByStatus,selectTodoByDate}=require("../controllers/todoList")
const router=express.Router()

router.post("/creatTodo",verifitoken,creatTodo)
router.get("/selectTodo",verifitoken,selectTodo)
router.post("/updateTodo",verifitoken,updateTodo)
router.post("/deleteTodo",verifitoken,deleteTodo)
router.get("/selectTodoByStatus",verifitoken,selectTodoByStatus)
router.get("/selectTodoByDate",verifitoken,selectTodoByDate)

module.exports=router