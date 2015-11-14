// load the things we need
var mongoose = require('mongoose');

var filterSchema = mongoose.Schema({
    html: Boolean,
    joomla: Boolean, 
    wordpress: Boolean,
    opencart: Boolean,
    logo: Boolean,
    print: Boolean
});

// create the model for charts and expose it to our app
module.exports = mongoose.model('Filter', filterSchema);


