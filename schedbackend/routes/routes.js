
var MongoClient = require('mongodb');
var express = require('express')
var app = express()
var router = express.Router()
const controller = require('../controllers/controller');
//MongoClient.connect("mongodb://localhost:27017/test",{useNewUrlParser: true, useUnifiedTopology: true}, function (err, client) {
//	                                   if (err) throw err;
//	                                console.log("Database created!");
//                                          var db = client.db('test');
      //});       
//var db = client.db('test');
router.get("/", function(req, res) {
		      res.status(200).send("Welcome to our restful API");
		    });

router.get("/getDocSched",controller.getDocSched);
module.exports = router;
