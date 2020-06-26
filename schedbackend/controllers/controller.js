const Doctordetails = require('../models/Doctordetails');



// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
let dev_db_url = 'mongodb://localhost:27017/test';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
//mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


exports.getDocSched = (req,res) => {
		//const cursordb = db.Doctordetails.find({Illness_Specialist: "Diabetes"})
		db.collection("Doctordetails").find().toArray((error, result) => {
				             if(error) {
						     return res.status(500).send(error);}

					             res.send(result);
						         });
}
