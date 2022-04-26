const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    list_id:{type:mongoose.Schema.Types.ObjectId,ref:"list",required:true},
    pet_id:{type:mongoose.Schema.Types.ObjectId,ref:"pet",required:true},
    start_date:{type:String,required:true},
    end_date:{type:String,required:true},
    status:{type:String,required:true}
})

const Booking = mongoose.model("booking",bookingSchema);
module.exports = Booking;