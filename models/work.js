var mongoose = require('mongoose');

var workSchema = mongoose.Schema({
  work: {
    picture: String,
  },
  filter: [{ type : mongoose.Schema.ObjectId, ref : 'Filter' }]
});

// create the model for charts and expose it to our app
module.exports = mongoose.model('Work', workSchema);


