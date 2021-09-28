class Buffet {
    constructor(obj) {
        this.bookingId = obj.bookingId;
        this.buffetName = obj.buffetName;
        this.bookedOn = obj.bookedOn;
        this.plateCount = obj.plateCount
        this.price = obj.price
    }
}

module.exports = Buffet;