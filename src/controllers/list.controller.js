const express = require("express");
const router = express.Router();
const List = require("../models/list.model");


router.get("/",async(req,res)=>{
    try{
        const list = await List.find().lean().exec();
        res.send(list);
    }catch(err){
        console.log(err);
    }
})


router.get("/:id",async(req,res)=>{
    try{
        const list = await List.find({admin_id:req.params.id}).lean().exec();
        res.send(list);
    }catch(err){
        console.log(err);
    }
})

router.get("/getList/:id",async(req,res)=>{
    try{
        const list = await List.findById(req.params.id).lean().exec();
        res.send(list);
    }catch(err){
        console.log(err);
    }
})


router.post("/",async(req,res)=>{
    try{
        const list = await List.create(req.body)
        res.send(list);
    }catch(err){
        console.log(err);
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const list = await List.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        res.send(list);
    }catch(err){
        console.log(err);
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const list = await List.findByIdAndDelete(req.params.id).lean().exec();
    }catch(err){
        console.log(err);
    }
})
module.exports = router;