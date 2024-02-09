const express=require("express")
const signupModel=require("../models/signup.Model")
const bcrypt=require("bcryptjs")

const router=express.Router()

hashPasswordgenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

    router.post("/signup",async(req,res)=>{
        let {data}={"data":req.body}
        let password=data.password
        hashPasswordgenerator(password).then(
            (hashedPassword)=>{
                console.log(hashedPassword)
                data.password=hashedPassword
                console.log(data)
                let signup=new signupModel(data)
                let result= signup.save()

                res.json({
                    status:"success"})
                })                

            }
        )

    router.get("/viewall",async(req,res)=>{
        let data= await signupModel.find()
        res.json(data)
    })

module.exports=router    