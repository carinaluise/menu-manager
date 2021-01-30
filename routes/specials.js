const express = require("express");
const router = express.Router();
const Special = require('../models/Special');

router.get('/', (req,res) =>{
    Special.find({}, function(err, foundSpecial){
        if(err){
            res.send(err)
        } else{
            res.send(foundSpecial)
        }
    })
});

router.post('/', async(req,res)=>{
    console.log(req.body);
    const special = new Special({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })
    
    try{
        const savedSpecial = await special.save();
        res.json({savedSpecial});
    } catch (err){
        res.json({message: "error"})
        console.log(err);
    }
});

router.delete('/:specialId', async(req,res)=>{
    try{
        const removedSpecial = await Special.deleteOne({_id: req.params.specialId})
        res.json({message: `${removedSpecial} deleted`})

    } catch (err){
        res.json({message: err})
    }
});

router.patch('/:specialId', async(req,res) => {
    try{
        const updatedSpecial = await Special.updateOne({ _id: req.params.specialId},
        {$set : {name: req.body.name, price: req.body.price , description: req.body.description}});
        res.json(updatedSpecial);
        
    } catch (err){
        res.json({message: err})
    }
})


module.exports = router;