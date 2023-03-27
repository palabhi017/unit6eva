const express = require("express")
const mongoose = require("mongoose")
// const {connection} = require("./db")
require("dotenv").config()
const app = express()
const {userRouter}  = require("./Routes/Auth.route")
const {postRouter}  = require("./Routes/post.route")

const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/post",postRouter)

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.mongoURL);
    
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
  

  connectDB().then(() => {
    app.listen(process.env.port, () => {
        console.log("listening for requests");
    })
})



