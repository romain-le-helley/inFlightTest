const ticketExpress = require("express");
const controller = require("../controllers/tickets/tickets.controller");

const ticketRouter = ticketExpress.Router();

ticketRouter
  .route("/")
  .get(controller.getAllTickets)
  .post(controller.createNewTicket)
  .put(controller.changeTicketStatus);

module.exports = ticketRouter;
