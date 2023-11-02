const express=require("express");

const app=express()

app.use(express.json());

const dbConfig=require('./db/db')

const roomsRoute=require("./routes/roomsRoute")
const usersRoute=require("./routes/usersRoute")
const bookingsRoute=require("./routes/bookingsRoute")


app.use("/api/rooms",roomsRoute)
app.use("/api",usersRoute)
app.use("/api",bookingsRoute)


const port=process.env.PORT||5000;

app.listen(port,()=>{
    console.log("server is running on port: ",port)
})

