
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser')
const cors = require('cors');

require('dotenv').config()

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

//CONNECT TO ROUTER
const menuRoute = require('./routes/menu');
app.use('/menu', menuRoute)

//CONNECT TO MONGODB

mongoose.connect(`mongodb+srv://carinaluise:${process.env.MONGODB_PASSWORD}@cluster0.pocnj.mongodb.net/menuManager?retryWrites=true&w=majority`, {
  useUnifiedTopology: true,
  useNewUrlParser:true
})
.then(res => console.log("MongoDB connected"))
.catch(err => console.log(err));



app.listen(PORT, error => {
    if(error) throw error;
    console.log(`server running on port ${PORT}`)
})