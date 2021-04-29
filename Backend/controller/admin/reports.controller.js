const OrderModel = require("../../model/user/order.model.js")

const getMonthlyReport = (req, res) => {
    const month = parseInt(req.params.month); //should be number of month

    OrderModel.find({ $expr: { $eq: [{ $month: "$timestamp" }, month] } }, (err, result) => {
        if(!err){
            //returns json of all entries of the specific month
            res.json(result);
        }
      });
}

const getDailyReport = (req, res) => {
    const date =  new Date(req.params.date);
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    OrderModel.find({
        $and: [
          { $expr: {$eq: [{$month: "$timestamp"}, month]} },
          { $expr: {$eq: [{$day: "$timestamp"}, day]} },
          { $expr: {$eq: [{$year: "$timestamp"}, year]} }
        ]
      }, (err, result) => {
        if(!err){
            //returns json of all entries of the specific day
            res.json(result);
        }
      });
}

const getUserReport = (req, res) => {
    const id = req.params.id; 

    OrderModel.find({ userID: id }, (err, result) => {
        if(!err){
            //returns json of all entries of the specific day
            res.json(result);
        }
      });
}

// //might be chalked; need extra table for products ordered
// const specificProductReport = (req, res) => {
//     const id = req.params.id; 

//     OrderModel.find({ userID: id }, (err, result) => {
//         if(!err){
//             //returns json of all entries of the specific day
//             res.json(result);
//         }
//       });
// }

module.exports={getDailyReport, getMonthlyReport, getUserReport}