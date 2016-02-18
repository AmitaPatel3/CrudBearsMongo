//THIS IS RESPONSIBLE FOR CRUD FOR ALL BEARS

var express = require('express')
var router = express.Router(); //created a new object which is a router , using a new express function, we need a new router object/setting up a road for the api which is a car
var Bear = require('../models/bear')


router.route('/bears')
	.post(function(req,res) {							//creates a Bear

		var bear = new Bear();

		bear.name = req.body.name;			//coming from our form
		bear.age = req.body.age;
		bear.gender = req.body.gender;


		bear.save(function(err,bear) {
			if(err){
				console.log(err)
			} else {
				res.json(bear)

			}

		})
	})
		

	.get(function(req,res) {							//find all bears
		Bear.find(function(err,bears) {
			if(err) {
				console.log(err)
			} else {
				res.json(bears)
			}
		})
	});


router.route('/bears/:bear_id')									//find a bear by ID
	.get(function(req,res) {
		Bear.findById(req.params.bear_id, function(err,bear) { //findById comes with mongoose
			if (err) {
				console.log(err);
			} else {
				res.json(bear);
			}
		})

	})


	.put(function(req,res) {										//changes a bear by finding it by ID
		Bear.findById(req.params.bear_id, function(err,bear) {
				if (err) {
				console.log(err);
				} else {
				bear.name = req.body.name ? req.body.name : bear.name;  //ternary expression (expression always returns a value)
				bear.age = req.body.age ? req.body.age : bear.age;
				bear.gender = req.body.gender ? req.body.gender : bear.gender;

					bear.save(function(err, newBear) {
					if (err) {
						console.log(err);
					} else {
					res.json({message: 'Bear updated!'});
					}

				})
			}
		})
	})


	.delete(function(req,res) {											//delete bear by id
		Bear.remove({_id: req.params.bear_id}, function (err,bear){
			if(err) {
				console.log(err);
			} else {
			  res.json({title:'bear was successfully deleted!'});	
			}
		})
	});

module.exports = router;