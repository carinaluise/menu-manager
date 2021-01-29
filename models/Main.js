var mongoose = require('mongoose');


const mainsSchema =  mongoose.Schema({
    name: String,
    description: String,
    price: Number
})


module.exports = mongoose.model("Main", mainsSchema)
