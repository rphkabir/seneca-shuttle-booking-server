var mongoose = require("mongoose");
var connection = mongoose.createConnection("mongodb://localhost/fligth_reservation313");
var Schema = mongoose.Schema;

var seats = new Schema(
  {
    _id:{
      type:String,
      required:true
    },
    available:{
      type:Boolean
    },
    "name": String,
  "email": String,
  "studentId": String,
  "createdOn": {
    type: Date,
    default: Date.now
  }
  });



//Model Register
mongoose.model("seats",seats);

var SeatsModel = {};

SeatsModel.model = mongoose.model("seats");

SeatsModel.reserveSeat =  (seat_number, callback)=> {
  SeatsModel.model.findOneAndUpdate({_id:seat_number},{available:false},(error, doc)=>{
      callback(error, doc);
    });
};

SeatsModel.getAllSeats =  (callback)=> {
  SeatsModel.model.find({},(error, doc)=>{
      callback(error, doc)
    });
};

SeatsModel.getReservedSeats =  (callback)=> {
  SeatsModel.model.find({available:false},(error, doc)=>{
      callback(error, doc)
    });
};
module.exports = SeatsModel



