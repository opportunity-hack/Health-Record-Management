var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();
var cors = require('cors')
app.use(bodyParser.json());
//app.use(express.json());

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
/*app.use(function(req, res, next) {

	  res.header("Access-Control-Allow-Origin", "*");

	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	  next();

});*/
app.use('/', routes);
app.listen(process.env.PORT || 3000);
console.log("app running");
