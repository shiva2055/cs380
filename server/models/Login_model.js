const mongoose = require("mongoose");

const loginDB = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Login = mongoose.model("Login", loginDB);
module.exports = Login;
