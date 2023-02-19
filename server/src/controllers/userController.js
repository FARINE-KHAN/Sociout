const userModel = require("../models/userModel")

const register= async(req,res)=>{
    try {
        console.log(req.body)
        const data = req.body
        const saveData = await userModel.create(data)
        console.log(saveData)
        res.status(201).json(saveData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const editUser= async(req,res)=>{
    try {
        const saveData = await userModel.update(req.body)
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const deleteUser= async(req,res)=>{
    try {
        const saveData = await userModel.destroy(req.body)
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const fetchUser= async(req,res)=>{
    try {
        const saveData = await userModel.findOne(req.body)
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const fetchAnotherUser= async(req,res)=>{
    try {
        const saveData = await userModel.findAll(req.body)
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
module.exports={register,editUser,deleteUser,fetchUser,fetchAnotherUser}