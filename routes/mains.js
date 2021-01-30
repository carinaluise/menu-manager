const express = require("express");
const router = express.Router();
const Main = require('../models/Main');

router.get('/', (req,res) =>{
    Main.find({}, function(err, foundMain){
        if(err){
            res.send(err)
        } else{
            res.send(foundMain)
        }
    })
});

router.post('/', async(req,res)=>{
    console.log(req.body);
    const main = new Main({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })
    
    try{
        const savedMain = await main.save();
        res.json({savedMain});
    } catch (err){
        res.json({message: "error"})
        console.log(err);
    }
});

router.delete('/:mainId', async(req,res)=>{
    try{
        const removedMain = await Main.deleteOne({_id: req.params.mainId})
        res.json({message: `${removedMain} deleted`})

    } catch (err){
        res.json({message: err})
    }
});

router.patch('/:mainId', async(req,res) => {
    try{
        const updatedMain = await Main.updateOne({ _id: req.params.mainId},
        {$set : {name: req.body.name, price: req.body.price , description: req.body.description}});
        res.json(updatedMain);
        
    } catch (err){
        res.json({message: err})
    }
})


module.exports = router;