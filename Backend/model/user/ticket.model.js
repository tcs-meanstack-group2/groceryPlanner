let mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let TicketSchema = mongoose.Schema({
    User_id: String,
    ticket_message:String,
});

let TicketModel = mongoose.model("Ticket", TicketSchema, "UserTickets");

module.exports = TicketModel