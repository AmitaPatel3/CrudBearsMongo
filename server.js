var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animals');

var bearRouter = require('./routes/bears');

var Bear = require('./models/bear');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); //we are configuring our app--telling our app how to handle this function--view our engine using ejs

app.get('/', function(req, res){  //we are then saying, app, here's the function--render the index
	res.render('index', {title: 'welcome to my app about bears'})
});

app.get('/about', function(req,res){
	var data = {};
	data.title = 'about page'
	data.name = 'amita';
	data.time = new Date();
	res.render('about', data);
});

app.get('/bears', function(req,res){

	res.render('bears', {title: "bears oh my!"})
});

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {				//this is the same as app.post in 'bear files'
	console.log('something is happening!');
	next();
});


router.get('/', function(req, res) {
	res.json({title: 'hooray! it worked!'});
});




app.use('/api', bearRouter);  //this states that fill in api after //


app.listen(port, function() {
console.log('Magic happens on port' + port);
});