const mongoose=require("mongoose")

var url="mongodb://localhost:27017/YourRooms"

mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})

var connection=mongoose.connection

connection.on('error',()=>{
    console.log("mongo error!")
})
connection.on('connected',()=>{
    console.log("Connection Success!")
})

module.exports=mongoose