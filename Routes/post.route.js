const {postModel} = require("../Model/post.model")
const express = require("express")
const jwt = require('jsonwebtoken');
const {authenticate} = require("../Middleware/auth.middleware")
const postRouter = express.Router()

// postRouter.use(authenticate)

postRouter.post("/add",async(req,res)=>{
  try {
    await postModel.insertMany(req.body)
    
    res.status(200).json({"msg":"post created successfully"})
  } catch (error) { 
    res.status(400).json({"err":"bad request"})
  }

})

postRouter.get("/",async(req,res)=>{
    try {
        const q = {}
  
        if(req.query.device){
            q.device= req.query.device
        }
        if(req.query.no_of_comments){
            q.no_of_comments = {$lte: Number(req.query.no_of_comments)}
        }
      
    const post = await postModel.find(q)
    
    res.status(200).json({"posts":post})
    
    
    } catch (error) {
        res.status(400).json({"err":"bad request"})
        
    }
   
})

postRouter.delete("/delete/:id",async(req,res)=>{
const id = req.params.id
    try {
       await postModel.findByIdAndDelete(id)
       res.status(200).json({"msg":"Post deleted successfully"})
    } catch (err) {
        res.status(400).json({"err":"bad request"})
    }

})

postRouter.patch("/update/:id",async(req,res)=>{

    const id = req.params.id
    const data = req.body
try {
    const new_data = await movieModel.findByIdAndUpdate({_id:id},data)
    res.status(200).json({"massage":"Post Updated successfully"})
} catch (error) {
    res.status(400).json({"err":"bad request"})
}
})

module.exports ={postRouter}