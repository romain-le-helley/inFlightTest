const express = require("express");
const ticketRoute = require("./tickets.route");

const router = express.Router();

router.use("/tickets", ticketRoute);

module.exports = router;
