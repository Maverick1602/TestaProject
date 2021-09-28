const collection = require('../utilities/connection');
let buffetDb = {}

buffetDb.generateId = () => {
    return collection.getCollection().then(function (collection) {
        return collection.distinct("buffet.bookingId").then((bookingId) => {
            let max_booking_Id = Math.max(...bookingId);
            if (max_booking_Id > 0)
                return max_booking_Id + 1;
            else
                return 2001
        })

    })
}

buffetDb.existingUser = (emailId) => {
    return collection.getCollection().then((database) => {
        return database.findOne({ "emailId": emailId }, { _id: 0, emailId: 1 })
            .then((exist) => {
                if (exist != null) {
                    return true
                }
                else {
                    return false;
                }
            })
    })
}

buffetDb.checkDateIsFree = (date) => {
    return collection.getCollection().then((database) => {
        return database.findOne({ "buffet.bookedOn": date }).then((bookingData) => {
            console.log(bookingData);
            if (bookingData != null) {
                return false;
            }
            else {
                return true;
            }
        })
    })
}

buffetDb.bookBuffet = (emailId, booking) => {
    return buffetDb.generateId().then((id) => {
        booking.bookingId = id
        return collection.getCollection().then((database) => {
            return buffetDb.existingUser(emailId).then((data) => {
                if (data) {
                    return database.updateOne({ "emailId": emailId }, { $push: { buffet: booking } })
                        .then((booked) => {
                            if (booked.nModified == 1) {
                                return booking
                            }
                            else
                                return null
                        })
                }
                else {
                    var temp=[]
                    temp.push(booking)
                    return database.create({ emailId: emailId, buffet: temp }).then((result) => {
                        if (result || result != null) {
                            return booking
                        }
                        else {
                            return null;
                        }
                    })
                }
            })
        })
    })
}


buffetDb.fetchBooking = (emailId) => {
    return collection.getCollection().then((database) => {
        return database.findOne({ "emailId": emailId }, { _id: 0, buffet: 1 }).then(function (data) {
            if (data && data.buffet.length > 0) {
                return data.buffet;
            } else {
                return null
            }

        })
    })
}

module.exports = buffetDb;