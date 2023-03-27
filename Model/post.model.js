const mongoose = require("mongoose")


const postSchema = mongoose.Schema({
    title : String,
    body : String,
    device : {
        type:String,
        enum:["moblie","Laptop","tablet"],
        default:"laptop"
    },
    no_of_comments : Number
    
})

const postModel = mongoose.model("post",postSchema)

module.exports = {postModel}