const express = require("express")
const router = express.Router()

const userC=require("./controllers/userController")
const postC=require("./controllers/postController")

////////////user apis///////////////////
router.post("/register",userC.register)
router.post("/login",userC.login)
router.post("/user/logout", userC.logout);
router.put("/edit/:id",userC.editUser)
router.delete("/delete/:id",userC.deleteUser)
router.get("/fetch/:id",userC.fetchUser)
router.get("/fetch",userC.fetchAnotherUser)
/////////post apis/////////////////////
router.post("/postcreate/:id",postC.createPost)
router.put("/editpost/:id",postC.editPost)
router.delete("/removepost/:id",postC.removePost)

module.exports=router