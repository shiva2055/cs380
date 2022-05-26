const mongoose = require("mongoose");

const reservationDB = new mongoose.Schema(
    {
        people_no: {
            type: mongoose.Schema.Types.Decimal128,
            required: true,
        },
        reservation_date: {
            type: Date,
            required: true,
        },
        time: {
            type: mongoose.Schema.Types.Decimal128,
            required: true,
        },
        customer_info: {
            // receiving customer's info by objectId
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Reservation = mongoose.model("Reservation", reservationDB);
module.exports = Reservation;

