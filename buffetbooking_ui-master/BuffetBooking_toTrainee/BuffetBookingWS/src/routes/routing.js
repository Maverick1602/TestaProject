const express = require('express');
const router = express.Router();
const service = require('../service/user');
const Buffet = require('../model/Buffet')

router.put('/bookBuffet/:emailId', (req, res, next) => {
  let emailId = req.params.emailId
  let buffetBooking = new Buffet(req.body)
  service.bookBuffet(emailId, buffetBooking).then((obj) => {
    res.status(201)
    res.json({ "message": " Buffet booked with booking id: " + obj.bookingId + " Pay Rs." + obj.price })
  }).catch((err) => {
    next(err);
  })
})

router.get('/fetchBooking/:emailId', (req, res, next) => {
  service.fetchBooking(req.params.emailId).then((bookingDetails) => {
    res.json(bookingDetails)
  }).catch((err) => {
    next(err);
  })
})



module.exports = router;