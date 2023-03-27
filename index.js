const express = require("express")
const {connection} = require("./db")
require("dotenv").config()
const app = express()
const {userModel} =  require("./Model/Auth.model")
const {postModel} = require("./Model/post.model")

app.use(express.json())
app.use("/users",userModel)
app.use("/posts",postModel)



app.listen(process.env.port,async()=>{
try {
    await connection
    console.log("port is running")
} catch (error) {
    console.log(error)
}
})




