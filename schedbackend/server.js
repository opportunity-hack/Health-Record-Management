var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();
var mongodb= require('mongodb');
var MongoClient= mongodb.MongoClient;
var URL = 'mongodb://127.0.0.1:27017/test';

MongoClient.connect(URL,function(err,database){
	  if(!err){
		      db=database;
		    }
	  else{
		      
		  }
		  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
//routes(app);
app.listen(3000,'127.0.0.1');
console.log("app running on port 3000");
