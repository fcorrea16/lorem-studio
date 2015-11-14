// -- EXPRESS --
var express = require('express');
var morgan  = require('morgan');
var app     = express();
var port    = 3000;
var methodOverride = require('method-override')

var mongoose = require('mongoose');


// -- BODY PARSER --
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride('_method')); // method override



app.use(morgan('combined'));
app.use(express.static(__dirname + '/public')); // connecting public folder for images, css and js
app.set('view engine', 'ejs'); // set up ejs for templating

var sass = require('node-sass');



// == ROUTES ==

app.get('/', function (req, res) {
  res.render('index', {
  	title: 'hello'
  });
});


// == SERVER ==

  var server = app.listen(port, function() {
    console.log('listening on port ' + port)

  });



