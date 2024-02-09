const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const signuprouter=require("./controllers/signupRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sidharth:Aether12@sidharth.mbsztl5.mongodb.net/courseDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/user",signuprouter)

app.listen(2004,()=>{
    console.log("localhost running")
})