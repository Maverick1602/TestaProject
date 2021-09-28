var model = require('../model/user');
var Validator = require('../utilities/validator');

var buffetService = {}

buffetService.calculatePrice = (buffet) => {

    if (buffet.buffetName.toLowerCase() == "northindianspcl") {
        buffet.price = buffet.plateCount * 200
    }
    else if (buffet.buffetName.toLowerCase() == "southindianspcl") {
        buffet.price = buffet.plateCount * 220
    }
    else if (buffet.buffetName.toLowerCase() == "chinesespcl") {
        buffet.price = buffet.plateCount * 180
    }
}

buffetService.bookBuffet = (emailId, buffetBooking) => {
    Validator.validateBuffetName(buffetBooking.buffetName);
    Validator.validateDate(buffetBooking.bookedOn);
    return model.checkDateIsFree(buffetBooking.bookedOn).then((bookingObj) => {
        if (!bookingObj) {
            let err = new Error("Buffet is already booked on this date!");
            err.status = 403;
            throw err;
        }
        else {
            buffetService.calculatePrice(buffetBooking)
            console.log("Data in WS",buffetBooking)
            return model.bookBuffet(emailId, buffetBooking).then((data) => {
                if (data != null) {
                    return data
                }
                else {
                    let err = new Error("Error in saving details");
                    err.status = 400;
                    throw err;
                }
            })
        }
    })
}

buffetService.fetchBooking = (emailId) => {
    return model.fetchBooking(emailId).then(function (bookingData) {
        if (bookingData == null) {
            let err = new Error("Reservation for emailId: "+emailId+" is not found!" )
            err.status = 404
            throw err;
        }
        else {
            return bookingData;
        }
    })
}

module.exports = buffetService;

