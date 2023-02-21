const { post } = require("../models/db");

const createPost = async (req,res)=>{
    try {
        let id = req.params.id
        req.body.userId=id
        const saveData = await post.create(req.body);
        res.status(201).json(saveData);  
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const editPost = async (req,res)=>{
    try {
        let id = req.params.id
        const saveData = await post.findByPk(id);
        await saveData.update(req.body)
        res.status(201).json(saveData);  
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const removePost = async (req,res)=>{
    try {
        let id = req.params.id
        const saveData = await post.destroy({
            where:{
                id:id
            }
        });
        res.status(201).json("deleted");  
    } catch (error) {
        res.status(500).json(error.message)
    }
}
module.exports={createPost,editPost,removePost}