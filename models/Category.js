var mongoose = require('mongoose');
const { ObjectID } = require('bson');

const itemSchema =  mongoose.Schema({
    _id: ObjectID,
    name: String,
    ingredients: Array,
    price: Number
})


const categorySchema = mongoose.Schema({
    _id: ObjectID,
    name: String,
    items: [itemSchema]
});

module.exports = mongoose.model("categories", categorySchema)
const Item = mongoose.model("Item", itemSchema)