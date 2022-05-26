const Reservation = require("../models/reservation_model")
const router = require("express").Router()

router.route("/").get((req, res) => {
    Reservation.find()
    .then((reservation) => res.json(reservation))
    .catch((err) => res.status(400).json("Error: " + err))
})

//adding
router.route("/add").post((req, res) => {

    const people_no = req.body.people_no;
    const reservation_date = req.body.reservation_date;
    const time = req.body.time;
    const customer_info = req.body.customer_info;

    const new_reservation = new Reservation({
        people_no,
        reservation_date,
        time,
        customer_info,
    })

    new_reservation.save().then(()=> res.json("Reservation added")).catch((err)=> res.status(400).json("Error: " + err));    
});

//getting reservation info by id
router.route("/:id").get((req, res) => {
    Reservation.findById(req.params.id).then((Reservation) => res.json(Reservation))
    .catch((err) => res.status(400).json("Error: " + err));
})

//cancelling reservation by id 
router.route("/:id").delete((req, res) => {
    Reservation.findByIdAndDelete(req.params.id)
    .then(()=> res.json("Reservation cancelled"))
    .catch((err) => res.status(400).json("Error: " + err));
})
  


