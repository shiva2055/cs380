const mongoose = require("mongoose");

const resturantDB = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    company_description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone_no: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Resturant = mongoose.model("Resturant", ResturantDB);
module.exports = Resturant;
