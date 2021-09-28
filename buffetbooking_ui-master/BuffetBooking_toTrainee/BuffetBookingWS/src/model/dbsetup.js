let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();

collectionDocument = [
    {

        emailId: 'absy@infy.com',

        "buffet": [{
            "bookingId": 2001,
            "plateCount": 4,
            "buffetName": 'SouthIndianSpcl',
            "bookedOn": new Date(year, month + 2, day),
            "price": 880
        },
        {
            "bookingId": 2002,
            "plateCount": 3,
            "buffetName": 'NorthIndianSpcl',
            "bookedOn": new Date(year, month + 2, day),
            "price": 600
        }
        ]
    },
    {
        emailId: 'sango@infy.com',
        "buffet": [{
            "bookingId": 2003,
            "plateCount": 7,
            "buffetName": 'NorthIndianSpcl',
            "bookedOn": new Date(year, month + 1, day + 4),
            "price": 1400
        }]
    },
    {
        emailId: 'zim@infy.com',
        "buffet": [{
            "bookingId": 2004,
            "plateCount": 2,
            "buffetName": 'SouthIndianSpcl',
            "bookedOn": new Date(year, month + 6, day + 10),
            "price": 440
        }]
    },
    {
        emailId: 'raj@infosys.com',
        "buffet": [{
            "bookingId": 2005,
            "plateCount": 3,
            "buffetName": 'ChineseSpcl',
            "bookedOn": new Date(year, month, day - 4),
            "price": 540
        }]
    },
    {
        emailId: 'barny@infy.com',
        "buffet": []
    }
]


let collection = require('../utilities/connection');

exports.setupDb = () => {
    return collection.getCollection().then((myCollection) => {
        return myCollection.deleteMany().then((data) => {
            return myCollection.insertMany(collectionDocument).then((data) => {
                if (data) {
                    return "Insertion Successfull"
                } else {
                    throw new Error("Insertion failed")
                }
            })
        })

    })
}