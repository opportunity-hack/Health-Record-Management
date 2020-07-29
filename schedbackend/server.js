var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();

//var MongoClient = require('mongodb').MongoClient;

//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://opphack:opphack@cluster0.1kpx9.mongodb.net/Records?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true });
//client.connect(err => {
	  //const collection = client.db("test").collection("devices");
	  // perform actions on the collection object
	   //client.close();
//	   });
//var mongodb= require('mongodb');
//var MongoClient= mongodb.MongoClient;
//var URL = 'mongodb://opphack:opphack@72.201.219.53/Records?ssl=true&replicaSet=atlas-avbudu-shard-0&authSource=admin&retryWrites=true&w=majority';
//var URL = "mongodb+srv:opphack:opphack//cluster0.1kpx9.mongodb.net/Records";
//MongoClient.connect(URL,function(err,database){
//	  if(!err){
//		      db=database;
//		    }
//	  else{
//		      
//		  }
//		  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
//routes(app);
//app.liisten(27017,'mongodb://opphack:opphack@cluster0-shard-00-02.1kpx9.mongodb.net');
app.listen(3000);
console.log("app running");
