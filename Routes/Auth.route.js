const {userModel} = require("../Model/Auth.model")
const express = require("express")
const jwt = require('jsonwebtoken');

const userRouter = express.Router()

userRouter.post("/ragister", async(req,res)=>{
  const {name,email,gender,password,age,city,is_married}=req.body
  
  try {
      const user=await userModel.find({email})
      if(user.length>0){
        res.send("User already exist, please login")
      }else{
        bcrypt.hash(pass, 5, async (err, hash)=>{
          const user=new userModel({name,email,gender,password:hash,age,city,is_married})
          await user.save()
        
      res.status(200).json({"massage":"registered successfully"})
        })
      }
      } catch (error) {
       res.status(400).json({"err":error})
     }

})

userRouter.post("/login",async(req,res)=>{ 
  const {email,pass}=req.body
  try{
  const user=await userModel.find({email})
  if(user.length>0){
  bcrypt.compare(pass, user[0].pass, function(err, result) {
  if(result){
  const token = jwt.sign({ course: 'backend' }, 'masai');
  res.send({"msg":"Login Successfull","token":token})
  } else {res.send("Wrong Credntials")}
  });
  } else {
  res.send("Wrong Credntials")
  }
  } catch(err){
  res.send("Something went wrong")
  console.log(err)
  }
   
  })
  