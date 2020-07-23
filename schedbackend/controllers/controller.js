const Doctordetails = require('../models/Doctordetails');
var client = require('twilio')(
	  "ACe34bac0befe4dae1203b56eacc73dab2",
	  "29eb1de2e9cb201ab13a2f715634eb9a"
);
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
exports.schedule = (req,res) => {
	//console.log("jhjkjklklkk");
        console.log("popiutr",req.body);
	var myobj = { Patient_id: req.body.Patient_id, Patient_name: req.body.Patient_name, Patient_phone: req.body.Patient_phone, Diagnosis: req.body.Diagnosis, Doctor_id: req.body.Doctor_id, Date_appt: req.body.Date_appt, Day: req.body.Day, Time: req.body.Time};
	db.collection("Appointments").insertOne(myobj, function(err, result) {
	      if (err) throw err;
	      console.log("Appointment created");
              client.messages.create({
		        from: +18574251942,
		        to: myobj.Patient_phone,
		        body: " Your doctor's appointment has been confirmed for " + myobj.Date_appt + ", " + myobj.Day + "at" + myobj.Time
		     
	      }).then((message) => console.log(message.sid));
	      res.send(result);
	    }); 

}

