var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animals');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
	res.json({title: 'hooray! welcome to our api!'});
});

app.use('/api', router);  //this states that fill in api after //


app.listen(port, function() {
console.log('Magic happens on port' + port);
});