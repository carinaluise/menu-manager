var mongoose = require('mongoose');


const starterSchema =  mongoose.Schema({
    name: String,
    description: String,
    price: Number
})


module.exports = mongoose.model("Starter", starterSchema)
