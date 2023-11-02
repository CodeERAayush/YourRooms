const express=require("express")
const router=express.Router()

const Room = require('../models/room')

router.get('/get_all_rooms',async(req,res)=>{
    try{
        const rooms=await Room.find({})
        return res.json({
            "success":true,
            "data":rooms
        })
    }
    catch(e){res.sendStatus(404)}
})

router.post('/get_room_detail',async(req,res)=>{
    try{
        const roomId=req.body.roomId;
        const room=await Room.findOne({_id:roomId})
        return res.json({
            "success":true,
            "data":room
        })
    }
    catch(e){res.sendStatus(400)}
})

module.exports= router;