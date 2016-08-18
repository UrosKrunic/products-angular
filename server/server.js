var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('products', ['products']);
var bodyParser = require('body-parser');

app.use(express.static("../client"));
app.use(bodyParser.json());

app.get('/products', function (req, res) {
	console.log("I received a GET request");

	db.products.find(function (err, docs) {
		res.json(docs);
	});
});

app.post('/products', function (req, res) {
	db.products.insert(req.body, function (err, doc) {
		res.json(doc);
	})
})

app.delete('/products/:id', function (req, res) {
	var id = req.params.id;
	db.products.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
})

app.get('/products/:id', function (req, res) {
	var id = req.params.id;
	db.products.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.put('/products/:id', function (req, res) {
	var id = req.params.id;
	db.products.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {instrument: req.body.instrument, category: req.body.category, price: req.body.price}},
		new: true}, function (err, doc) {
			res.json(doc);
		});
	
});

app.listen(3000);
console.log("Server running on port 3000");