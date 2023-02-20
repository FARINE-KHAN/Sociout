const {user} = require("../models/db")
//association
const {uploadFile}= require("../AWS/aws")
const register= async (req,res)=>{
    try {
        let files= req.files
        const data = req.body
    // console.log(files)
    // if(files.length>0){
        let validImage=files[0].mimetype.split('/')
        if(validImage[0]!="image"){
       return res.status(400).send({ status: false, message: "Please Provide Valid Image.." })}
        let uploadedFileURL= await uploadFile(files[0])
        data.profileImage=uploadedFileURL
        console.log(uploadedFileURL)
        console.log(uploadFile)

        const saveData = await user.create(data)
        console.log(saveData)
        res.status(201).json(saveData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const editUser= async(req,res)=>{
    try {
        const saveData = await user.update(req.body)
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const deleteUser= async(req,res)=>{
    try {
        const saveData = await user.destroy(req.body)
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const fetchUser= async(req,res)=>{
    try {
        const saveData = await user.findOne(req.body)
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const fetchAnotherUser= async(req,res)=>{
    try {
        const saveData = await user.findAll(req.body)
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
module.exports={register,editUser,deleteUser,fetchUser,fetchAnotherUser}