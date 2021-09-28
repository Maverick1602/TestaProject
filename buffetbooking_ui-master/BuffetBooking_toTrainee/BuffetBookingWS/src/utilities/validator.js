var Validator = {}


Validator.validateDate = (bookedOn) => {
    var today = new Date()
    var bDate = new Date(bookedOn)
    if (bDate < today) {
        let err = new Error("Booking date cannot be before today")
        err.status = 406;
        throw err;
    }
}

Validator.validateBuffetName = (buffetName) => {
    let buffetList = ['NorthIndianSpcl', 'SouthIndianSpcl', 'ChineseSpcl']
    if (buffetList.indexOf(buffetName) == -1) {
        let err = new Error("Invalid buffet name")
        err.status = 406;
        throw err;
    }
}


module.exports = Validator;