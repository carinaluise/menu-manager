const express = require("express");
const router = express.Router();



router.post('/', async(req,res)=>{
   

    if(req.body.email === process.env.USER_EMAIL & req.body.password === process.env.USER_PASSWORD){
        res.json({message: "user authenticated"})
    } else{
        res.json({error: "user not valid"})
    }
});

module.exports = router;