const mongoose = require("mongoose")
require("dotenv").config()
const connection = async()=>{
 try {
   await mongoose.connect("mongodb+srv://abhishek:abhishekpal@cluster0.tbti2yd.mongodb.net/linkedinDB?retryWrites=true&w=majority")
   console.log("connected")
 } catch (error) {
    console.log(error)
 }
}

module.exports = {connection}  