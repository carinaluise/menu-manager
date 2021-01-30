const express = require("express");
const router = express.Router();
const Starter = require('../models/Starter');


router.get('/', (req,res) =>{
    Starter.find({}, function(err, foundMain){
        if(err){
            res.send(err)
        } else{
            res.send(foundMain)
        }
    })
});

router.post('/', async(req,res)=>{
    const starter = new Starter({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })
    
    try{
        const savedStarter = await starter.save();
        res.json({savedStarter});
    } catch (err){
        res.json({message: "error"})
        console.log(err);
    }
});

router.delete('/:starterId', async(req,res)=>{
    try{
        const removedStarter = await Starter.deleteOne({_id: req.params.starterId})
        res.json({message: `${removedStarter} deleted`})

    } catch (err){
        res.json({message: err})
    }
});

router.patch('/:starterId', async(req,res) => {
    try{
        const updatedStarter = await Starter.updateOne({ _id: req.params.starterId},
        {$set : {name: req.body.name, price: req.body.price, description: req.body.description}});
        res.json(updatedStarter);
        
    } catch (err){
        res.json({message: err})
    }
})


module.exports = router;