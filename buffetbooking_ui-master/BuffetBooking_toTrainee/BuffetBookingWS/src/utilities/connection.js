const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
let url = "mongodb://localhost:27017/Buffet_Booking_DB";


let BuffetSchema = Schema({
    emailId: String,
    buffet: [
        {
            buffetName: {
                type: String,
                enum: ['NorthIndianSpcl', 'SouthIndianSpcl', 'ChineseSpcl'],
                required: true
            },
            bookedOn: {
                type: Date,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            plateCount: {
                type: Number,
                required: true
            },
            bookingId: {
                type: Number,
                required: true
            }
        }
    ]

}, { collection: "Buffet" })


let collection = {};

collection.getCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Buffet', BuffetSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}


module.exports = collection;