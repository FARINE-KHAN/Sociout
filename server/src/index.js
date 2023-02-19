const express= require("express")
const app = express()
require("./models/db")
require("dotenv").config();
const route =require("./routes")


app.use(express.json())
app.use("/",route)


app.listen(9000,()=>{
    console.log("server is running on port 9000")
})
