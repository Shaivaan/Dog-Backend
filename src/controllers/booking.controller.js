const express = require("express");
const router = express.Router();
const Booking = require("../models/booking.model");
router.post("/",async(req,res)=>{
    try{
        const booking = await Booking.create(req.body);
        res.send(booking);
    }catch(err){
        console.log(err);
    }
})

router.get("/list/:id",async(req,res)=>{
    try{
        const booking = await Booking.find({list_id:req.params.id}).lean().exec();
        res.send(booking);
    }catch(err){
        console.log(err);
    }
})

router.get("/pet/:id",async(req,res)=>{
    try{
        const booking = await Booking.find({pet_id:req.params.id}).lean().exec();
        res.send(booking);
    }catch(err){
        console.log(err);
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const booking = await Booking.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        res.send(booking);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;