const { post , comment} = require("../models/db");
//const userModel = require("../models/userModel");
const{Op} = require("sequelize")

const comments = async function(req,res){
  let saveData = req.body
  //let {postId} = req.params.id
  req.body.postId=req.params.id
let data = await comment.create(saveData)
return res.status(201).send(data)
}

const deleteComment = async (req,res)=>{
    try{
    
    let data =  await comment.destroy({where: {
        [Op.and]: [
          { id: req.params.id },
          { userId: req.params.userId },
          { postId: req.params.postId }
        ]
      }
    });
    
    res.status(200).json("Comment  deleted successfully");}
  
    catch (error) {
    res.status(500).json(error.message);
  }
}
module.exports = {comments,deleteComment}