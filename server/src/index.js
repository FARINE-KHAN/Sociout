const express= require("express")
const app = express()
require("./models/db")
require("dotenv").config();
const route =require("./routes")
const multer = require("multer")
const cookieParser = require("cookie-parser")
app.use( multer().any())


app.use(express.json())
app.use(cookieParser())
app.use("/",route)


app.listen(9000,()=>{
    console.log("server is running on port 9000")
})
