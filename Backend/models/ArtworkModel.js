const mongoose = require('../connection');


// create structure as like schema is like structure 
const schema = new mongoose.Schema({
    email : String,
    password : String,
    username : String,
    age : Number,
    createAt : { type : Date, default: new Date() },
});

// create model
const model = mongoose.model("artwork" , schema);


// export model
module.exports = model;