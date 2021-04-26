let mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let OrderSchema = mongoose.Schema({
    _id: Number,
    status: String
});

let OrderModel = mongoose.model("orderModel", OrderSchema, "Order");

module.exports = OrderModel;