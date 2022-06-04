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
            default:Date.now,
        },
        time: {
            type: mongoose.Schema.Types.Decimal128,
            required: true,
        },
        customer_info: {
            type: String,
            unique:true,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Reservation = mongoose.model("Reservation", reservationDB);
module.exports = Reservation;

