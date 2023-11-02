const express=require("express")
const router=express.Router()

const User = require('../models/user')


router.post('/register',async (req,res)=>{
    // console.log(req.body)
    const newuser=new User(req.body)
    try {
        const user=await newuser.save()
        res.json({
            success:true,
            data:user
        })
    } catch (error) {
        res.sendStatus(400)
    }
})
router.post('/login',async (req,res)=>{
    console.log(req.body)
    try {
        const user=await User.findOne({email:req.body?.email,password:req.body?.password})
        res.json({
            success:true,
            data:{
                id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user?.isAdmin,
                createdAt:user?.createdAt
            }
        })
    } catch (error) {
        res.sendStatus(400)
    }
})

module.exports=router