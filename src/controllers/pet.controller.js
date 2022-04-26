const express = require("express");
const router = express.Router();
const Pet = require("../models/pet.model");

router.post("/",async(req,res)=>{
    try{
        const pet = await Pet.create(req.body);
        res.send(pet);
    }catch(err){
        console.log(err);
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const pet = await Pet.find({ownerId:req.params.id}).lean().exec();
        res.send(pet);
    }catch(err){
        console.log(err);
    }
})

router.get("/getpet/:id",async(req,res)=>{
    try{
        const pet = await Pet.findById(req.params.id).lean().exec();
        res.send(pet);
    }catch(err){
        console.log(err);
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const pet = await Pet.findByIdAndDelete(req.params.id);
        res.send(pet);
    }catch(err){
        console.log(err);
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const pet = await Pet.findByIdAndUpdate(req.params.id).lean().exec();
        res.send(pet);
    }catch(err){

    }
})
module.exports = router;
