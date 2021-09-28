// monogoose Model file 
const mongoose = require('mongoose');
//shortcut to the mongoose ,Schema class
const Schema = mongoose.Schema;
const destinationSchema = new Schema({
    airport: String,
    arrival: Date,
})
//define flights Schema 
const flightSchema = new Schema({
    airline : String,
    flightNo : Number,
    airport : String,
    departs: Date, 
    destinations: [destinationSchema]
    
  });

  // Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);