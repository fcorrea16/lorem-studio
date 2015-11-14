// load the things we need
var mongoose = require('mongoose');

var formularioSchema = mongoose.Schema({
    name: String,
    email: String,
    website: String,
    message: String,
    code: Number
});

// create the model for charts and expose it to our app
module.exports = mongoose.model('Formulario', formularioSchema);


