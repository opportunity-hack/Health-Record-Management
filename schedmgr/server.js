var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();
var cors = require('cors');
var jwt = require('jsonwebtoken');
var config_data = require('config');
accessTokenSecret = config_data.get('secret_key');
function jwtVerify (req, res, next) {
	  console.log('verifying token...')
		      const authHeader = req.headers.authorization;

		      if (authHeader) {
			              console.log("Authorization");
			              const token = authHeader.split(' ')[1];
                                      console.log(token);
			              jwt.verify(token, accessTokenSecret, (err, user) => {
					      console.log(err);
					                  if (err) {
								                  return res.sendStatus(403);
								              }

					                  req.user = user;
					                  next();
					              });
			          } else {
					          res.sendStatus(401);
					      }
	   }
app.use(cors());
app.use(bodyParser.json());
//app.use(express.json());

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use('/', jwtVerify,routes);
//app.use('/',routes);
app.listen(process.env.PORT || 3000);
console.log("app running");
