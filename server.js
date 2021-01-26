const { ObjectID } = require('bson');
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');


require('dotenv').config()
app.use(cors());

//CONNECT TO MONGODB
mongoose.connect(`mongodb+srv://carinaluise:${process.env.MONGODB_PASSWORD}@cluster0.pocnj.mongodb.net/menuManager?retryWrites=true&w=majority`, {
  useUnifiedTopology: true
})

mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

// SET SCHEMAS AND MODELS
const itemsSchema = new Schema({
    _id: ObjectID,
    name: String,
    ingredients: Array,
    price: Number
})

const categoriesSchema = new Schema({
    _id: ObjectID,
    name: String,
    items: [itemsSchema]
});

const Item = mongoose.model("Item", itemsSchema)
const Category = mongoose.model("Category", categoriesSchema)

app.route("/api")
    .get(function(req,res){

        Category.find({}, function(err, foundCategories){
            if(err){
                console.log(err)
            } else{
                res.send(foundCategories);
            }
        })
})











app.listen(PORT, error => {
    if(error) throw error;
    console.log(`server running on port ${PORT}`)
})