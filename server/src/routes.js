const express = require("express")
const router = express.Router()

const userC=require("./controllers/userController")

router.post("/register",userC.register)
router.put("/edit/:id",userC.editUser)
router.delete("/delete/:id",userC.deleteUser)
router.get("/fetch/:id",userC.fetchUser)
router.get("/fetch",userC.fetchAnotherUser)


module.exports=router