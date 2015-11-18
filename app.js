// -- EXPRESS --
var express = require('express');
var morgan  = require('morgan');
var app     = express();
var port    = 3000;
var methodOverride = require('method-override');


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
	var filters = [
        { name: 'html', id: 1 },
        { name: 'joomla', id: 2 },
        { name: 'wordpress', id: 3 },
        { name: 'opencart', id: 4 },
        { name: 'logo', id: 5 },
        { name: 'print', id: 6 }

    ];

  res.render('index', {
  	title: 'Lorem Studio',
  	filters: filters
  });
  
});



//  Não consegui botar a galerria como html parcial na pagina index:
app.use('/projects', require('node-gallery')({
  staticFiles : 'public/images/projects',
  urlRoot : 'projects', 
  render: false
  }), function(req, res){
  res.render('projects', {
    projects: req.data.photos
  });
  console.log(req.data)
});



// == SERVER ==

  var server = app.listen(port, function() {
    console.log('listening on port ' + port)

  });



