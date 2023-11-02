const express = require('express')
const router = express.Router()
const BookingModel = require('../models/booking')
const moment = require('moment')
const Room = require('../models/room')
router.post('/bookroom', async (req, res) => {
    const { room,
        userid,
        toDate,
        fromDate,
        totalamount,
        totaldays } = req.body;

    // console.log("ye date",moment(toDate,'DD-MM-YYYY').format('MM-DD-YYYY'),'::', toDate)

    try {

        const newBooking = new BookingModel({
            room: room?.name,
            roomid: room?._id,
            userid,
            toDate: moment(toDate, 'DD-MM-YYYY')?.format("DD-MM-YYYY"),
            fromDate: moment(fromDate, 'DD-MM-YYYY')?.format("DD-MM-YYYY"),
            totalamount,
            totaldays,
            transactionId: '1234'
        })

        console.log('ran', req.body)
        const booking = await newBooking.save()


        const roomTemp = await Room.findOne({ _id: room?._id })
        roomTemp?.currentbookings.push({ bookingid: booking?._id, fromDate: moment(fromDate, 'DD-MM-YYYY')?.format("DD-MM-YYYY"), toDate: moment(toDate, 'DD-MM-YYYY')?.format("DD-MM-YYYY"), userid: userid, status: booking.status })

        await roomTemp.save()
        res.status(200).json(booking)

    } catch (error) {
        res.sendStatus(400)
    }

})

module.exports = router