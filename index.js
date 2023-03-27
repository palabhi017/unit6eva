const express = require("express")
const {connection} = require("./db")
require("dotenv").config()
const app = express()
const {userRouter}  = require("./Routes/Auth.route")
const {postRouter}  = require("./Routes/post.route")
const port = process.env.PORT || 8080

app.use(express.json())
app.use("/user",userRouter)
app.use("/post",postRouter)



app.listen(port,async()=>{
try {
    await connection
    console.log("port is running")
} catch (error) {
    console.log(error)
} 
})




