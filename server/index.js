const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//environment variable in .env file
require("dotenv").config();

const app = express();
//port the server will be on
const port = process.env.PORT || 5000;

//const customerModel = require("./models/customer");
//get information from front end in json form
//middleware
//allow to parse json file
app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database conncection established sucessfully");
});

const customerRouter = require("./routes/customer");
const resturantRouter = require("./routes/resturant");
const loginRouter = require("./routes/login");
const reservationRouter = require("./routes/reservation");

app.use("/customers", customerRouter);
//app.use("/resturants", resturantRouter);
//starts server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
