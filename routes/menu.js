const express = require("express");
const router = express.Router();
const Category = require('../models/Category');


router.get('/', (req,res) =>{
    Category.find({}, function(err, foundCategories){
        if(err){
            res.send(err)
        } else{
            res.send(foundCategories)
        }
    })
});

router.post('/', async(req,res)=>{
    const category = new Category({
        title: req.body.title,
    })
    try{
        const savedCategory = await category.save();
        res.json(savedCategory);
    } catch(err){
        res.json({message: err})
    }
});





module.exports = router;