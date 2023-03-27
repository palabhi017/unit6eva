const mongoose = require("mongoose")
require("dotenv").config()
const connection = async()=>{
 try {
   await mongoose.connect(process.env.dburl)
   console.log("connected")
 } catch (error) {
    console.log(error)
 }
}

module.exports = {connection}  