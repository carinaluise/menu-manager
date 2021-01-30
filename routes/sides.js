const express = require("express");
const router = express.Router();
const Side = require('../models/Side');


router.get('/', (req,res) =>{
    Side.find({}, function(err, foundSide){
        if(err){
            res.send(err)
        } else{
            res.send(foundSide)
        }
    })
});

router.post('/', async(req,res)=>{
    console.log(req.body);
    const side = new Side({
        name: req.body.name,
        price: req.body.price
    })
    
    try{
        const savedSide = await side.save();
        res.json({savedSide});
    } catch (err){
        res.json({message: "error"})
        console.log(err);
    }
});

router.delete('/:sideId', async(req,res)=>{
    try{
        const removedSide = await Side.deleteOne({_id: req.params.sideId})
        res.json({message: `${removedSide} deleted`})

    } catch (err){
        res.json({message: err})
    }
});

router.patch('/:sideId', async(req,res) => {
    try{
        const updatedSide = await Side.updateOne({ _id: req.params.sideId},
        {$set : {name: req.body.name, price: req.body.price }});
        res.json(updatedSide);

    } catch (err){
        res.json({message: err})
    }
})

module.exports = router;