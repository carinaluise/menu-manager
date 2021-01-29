var mongoose = require('mongoose');

const drinkSchema =  mongoose.Schema({
    name: String,
    price: Number
})


module.exports = mongoose.model("Drink", drinkSchema)