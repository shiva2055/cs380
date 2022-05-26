//creates a router
const router = require("express").Router();
const { useRadioGroup } = require("@material-ui/core");
//requiring mongoose model
let Customer = require("../models/customer_model");

//creating route
router.route("/").get((req, res) => {
  //mongoose method that gets list of all the customers from mongodb
  Customer.find()
    //returns customers got from db in json format
    .then((customers) => res.json(customers))
    .catch((err) => res.status(400).json("Error: " + err));
});

//adding
router.route("/add").post((req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const phone_no = req.body.phone_no;
  const email = req.body.email;

  const new_customer = new Customer({
    first_name,
    last_name,
    phone_no,
    email,
  });

  new_customer
    .save()
    .then(() => res.json("Customer added! "))
    .catch((err) => res.status(400).json("Error: " + err));
});

//geting customer by ID
router.route("/:id").get((req, res) => {
  Customer.findById(req.params.id)
    .then((Customer) => res.json(Customer))
    .catch((err) => res.status(400).json("Error: " + err));
});

//deleting customer
router.route("/:id").delete((req, res) => {
  Customer.findByIdAndDelete(req.params.id)
    .then(() => res.json("Customer deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//updateing customer info
router.route("/update/:id").post((req, res) => {
  Customer.findById(req.params.id)
    .then((Customer) => {
      const first_name = req.body.first_name;
      const last_name = req.body.last_name;
      const phone_no = req.body.phone_no;
      const email = req.body.email;

      Customer.save()
        .then(() => res.json("Customer updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
