const express = require("express");
const router = express.Router();
const Dessert = require('../models/Dessert');


router.get('/', (req,res) =>{
    Dessert.find({}, function(err, foundDessert){
        if(err){
            res.send(err)
        } else{
            res.send(foundDessert)
        }
    })
});

router.post('/', async(req,res)=>{
    console.log(req.body);
    const dessert = new Dessert({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })
    
    try{
        const savedDessert = await dessert.save();
        res.json({savedDessert});
    } catch (err){
        res.json({message: "error"})
        console.log(err);
    }
});

router.delete('/:dessertId', async(req,res)=>{
    try{
        const removedDessert = await Dessert.deleteOne({_id: req.params.dessertId})
        res.json({message: `${removedDessert} deleted`})

    } catch (err){
        res.json({message: err})
    }
});

router.patch('/:dessertId', async(req,res) => {
    try{
        const updatedDessert = await Dessert.updateOne({ _id: req.params.dessertId},
        {$set : {name: req.body.name, price: req.body.price , description: req.body.description}});
        res.json(updatedDessert);

    } catch (err){
        res.json({message: err})
    }
})

module.exports = router;