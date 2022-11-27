const express=require("express")
const{verifitoken} =require("../middleware/verify")

const{resisterControllers,loginControllers,updateData,changePassword,deleteUser}=require("../controllers/users")

router=express.Router()



router.post("/creatUser",resisterControllers)
router.get("/login",loginControllers)
router.post("/updateData",verifitoken,updateData)
router.post("/changePassword",verifitoken,changePassword)
router.post("/deleteUser",verifitoken,deleteUser)



module.exports=router
