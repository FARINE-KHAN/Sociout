const express = require("express")
const router = express.Router()

const userC=require("./controllers/userController")
const postC=require("./controllers/postController")
const likeC=require("./controllers/likeController")
const createcomment = require("./controllers/comment")

// const { comment } = require("./models/db")

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

router.post("/comment/:id",createcomment.comments)
router.get("/postComments/:id",postC.getPosts)
router.delete("/deleteComment/:id/:userId/:postId",createcomment.deleteComment)

router.post("/createlikes/:userid/:postId",likeC.createLikes)



module.exports=router