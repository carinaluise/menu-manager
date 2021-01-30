var mongoose = require('mongoose');


const dessertsSchema =  mongoose.Schema({
    name: String,
    description: String,
    price: Number
})


module.exports = mongoose.model("Dessert", dessertsSchema)