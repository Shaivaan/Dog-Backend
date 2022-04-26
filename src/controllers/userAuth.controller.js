require("dotenv").config();
const jwt = require("jsonwebtoken");


const User = require("../models/user.model");
const newToken = (user)=>{
        return  jwt.sign({user}, process.env.JWT_SECRET_KEY);
}

const userregister = async(req,res)=>{
    try{
     
        let user = await User.findOne({email:req.body.email})
        if(user){   
            return res.send({status:"Try with another Email and Password"});
        }
        
        user = await User.create(req.body);
        console.log(user);
         
         const token = newToken(user);
         console.log(user);
        
      return res.send({status:"Done"});

    }catch(err){
        res.send({status:"Not Done"});
    }
}

const userlogin = async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.send({status:"Try with another Email and Password"});
        }
        console.log(user)
        let match = user.checkPassword(req.body.password);
        console.log(match)
        if(!match){
            return res.send({status:"Try with another Id and password"});
        }
        const token = newToken(user);
        console.log(user);
        res.send({status:"Done",user,token});
    }catch(err){
        res.send(err.message);
    }
}
module.exports = {userregister,userlogin};