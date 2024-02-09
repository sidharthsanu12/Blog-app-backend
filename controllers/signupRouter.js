const express=require("express")
const signupModel=require("../models/signup.Model")

const router=express.Router()

    router.post("/signup",async(req,res)=>{
        let data=req.body
        let signup=new signupModel(data)
        let result=await signup.save()
        res.json({
            status:"success"})
    })
    router.get("/viewall",async(req,res)=>{
        let data= await signupModel.find()
        res.json(data)
    })

module.exports=router    