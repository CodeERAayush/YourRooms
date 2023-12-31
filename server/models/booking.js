const mongoose=require('mongoose')

const bookingSchema=mongoose.Schema({


    room:{
        type:String,required:true
    },
    roomid:{
        type:String,required:true
    },
    userid:{
        type:String,required:true
    },
    fromDate:{
        type:String,required:true
    },
    toDate:{
        type:String,required:true
    },
    totalamount:{
        type:String,required:true
    },
    totaldays:{
        type:String,required:true
    },
    transactionId:{
        type:String,required:true
    },
    status:{
        type:String,required:true,default:'booked'
    },


},{
    timestamps:true
})

const BookingModel=mongoose.model("Bookings",bookingSchema)
module.exports=BookingModel