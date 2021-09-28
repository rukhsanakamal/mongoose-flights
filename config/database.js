const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('connected', function() {
// this  occur when our express app has a connection with 
// mongodb
  console.log(`Connected to MongoDB at ${db.name}:${db.host}:${db.port}`);
});