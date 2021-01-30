const express = require("express");
const router = express.Router();
import User from '../models/User';


router.post('/', async(req,res)=>{
    const user = {
        name: req.body.name,
        email: req.body.email,
    }
    
    try{
        const savedStarter = await starter.save();
        res.json({savedStarter});
    } catch (err){
        res.json({message: "error"})
        console.log(err);
    }
});

