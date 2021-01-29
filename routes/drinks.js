const express = require("express");
const router = express.Router();
const Drink = require('../models/Drink');


router.get('/', (req,res) =>{
    Drink.find({}, function(err, foundDrink){
        if(err){
            res.send(err)
        } else{
            res.send(foundDrink)
        }
    })
});

router.post('/', async(req,res)=>{
    console.log(req.body);
    const drink = new Drink({
        name: req.body.name,
        price: req.body.price
    })
    
    try{
        const savedDrink = await drink.save();
        res.json({savedDrink});
    } catch (err){
        res.json({message: "error"})
        console.log(err);
    }
});

router.delete('/:drinkId', async(req,res)=>{
    try{
        const removedDrink = await Drink.remove({_id: req.params.drinkId})
        res.json({message: `${removedDrink} deleted`})

    } catch (err){
        res.json({message: err})
    }
});

router.patch('/:drinkId', async(req,res) => {
    try{
        const updatedDrink = await Drink.updateOne({ _id: req.params.drinkId},
        {$set : {name: req.body.name, price: req.body.price }});
        res.json(updatedDrink);

    } catch (err){
        res.json({message: err})
    }
})

module.exports = router;