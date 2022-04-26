const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({
    centerName:{type:String,required:true,unique:true},
    city:{type:String,required:true},
    image:{type:String,required:true},
    address:{type:String,required:true},
    capacity:{type:Number,required:true},
    cpd:{type:Number,required:true},
    verified:{type:Boolean,required:true},
    rating:{type:Number,required:true},
    admin_id:{type:mongoose.Schema.Types.ObjectId,ref:"admin",required:true}
},{
    versionKey:false,
    timestamps:true
})

const List = mongoose.model("list",listSchema);
module.exports = List;