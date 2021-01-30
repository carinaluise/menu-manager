var mongoose = require('mongoose');

const sidesSchema =  mongoose.Schema({
    name: String,
    description: String,
    price: Number
})

module.exports = mongoose.model("Side", sidesSchema)


