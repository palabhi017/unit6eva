const express = require("express")
const {connection} = require("./db")
require("dotenv").config()
const app = express()
const {userRouter}  = require("./Routes/Auth.route")
const {postRouter}  = require("./Routes/post.route")
const port = process.env.PORT || 8080
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/post",postRouter)



app.listen(port,()=>{

   connection()
    console.log("port is running ",port)
 
})




