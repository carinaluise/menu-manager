var mongoose = require('mongoose');


const specialsSchema =  mongoose.Schema({
    name: String,
    description: String,
    price: Number
})


module.exports = mongoose.model("Special", specialsSchema)