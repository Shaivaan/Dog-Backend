const mongoose = require("mongoose");
const petSchema = new mongoose.Schema({
    type:{type:String,required:true},
    petName:{type:String,required:true},
    weight:{type:Number,required:true},
    imageUrl:{type:String,required:true},
    ownerId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
},{
    versionKey:false,
    timestamps:true
})
const Pet = mongoose.model("pet",petSchema);
module.exports = Pet;