const Doctordetails = require('../models/Doctordetails');
var client = require('twilio')(
	  "ACe34bac0befe4dae1203b56eacc73dab2",
	  "29eb1de2e9cb201ab13a2f715634eb9a"
);
// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
let config_data = {};
config_data = require('config');
//...
dev_db_url = config_data.get('dburi');
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
//mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: oh no'));

var doc_id = "";
exports.getDocSched = (req,res) => {
	/* The patient id from the request body is matched with PatDoc collection and the doctor id is picked up*/
	        console.log("Entering now amazing");
	        console.log(req.query);
	        var id = parseInt(req.query.id);
	        console.log("Fetching for uid",id);
	        //db.collection("PatDocMap").find({"Patient_id":id}).forEach(printjson);
	        db.collection("PatDocMap").find( { Patient_id:id } ).toArray((error,result) => {
			//console.log(error);
			if(error) {console.log("Patient not registered"); return res.status(500).send("Patient is not registered");}
			if(result.length <= 0)  { console.log("Patient not registered"); return res.status(500).send("Patient is not registered"); } 
			console.log(result);
			doc_id = result[0].Doctor_id;
			console.log("Doctor id",doc_id);

		
	        console.log("Doctor details now");
	        console.log(doc_id);
		db.collection("Doctordetails").find( { Doctor_id:doc_id } ).toArray((error, result) => {
				             if(error) {
						     return res.status(500).send(error);}
			                              if(result.length <= 0)  { console.log("Dcotor has not been assigned yet"); return res.status(500).send("Doctor has not been assigned yet"); }       
			                             console.log(result);
                                                     console.log(result[0].Availability);
			                             var docresult = {Doctor_first_name: result[0].First_name, Doctor_last_name: result[0].Last_name, Doctor_avail: result[0].Availability }
					             res.send(docresult);
						         }); });
}
exports.schedule = (req,res) => {
	//console.log("jhjkjklklkk");
        console.log("popiutr",req.body);
	var myobj = { Patient_id: req.body.id, Patient_name: req.body.first_name, Patient_phone: req.body.phone_number,  Date_appt: req.body.Date_appt, Time: req.body.Time};
	db.collection("Appointments").insertOne(myobj, function(err, result) {
	      if (err) throw err;
	      console.log("Appointment created");
              client.messages.create({
		        from: +18574251942,
		        to: myobj.Patient_phone,
		        body: " Your doctor's appointment has been confirmed for " + myobj.Date_appt + ", " + myobj.Day + "at" + myobj.Time
		     
	      }).then((message) => console.log(message.sid));
	      res.send(" Your doctor's appointment has been confirmed for " + myobj.Date_appt + " at " + myobj.Time );
	    }); 

}

/* Get call for fetching all appointments of current user*/
exports.getAppt = (req,res) => {
	var today = new Date(Date.now());
        console.log(today.toLocaleDateString('en-US',{ timeZone: 'America/Phoenix' }));
        var apptresult = []
	var pastappt = []
	var Appthistory = {'Past': "Empty", "Upcoming": "Empty"}
	console.log("Fetching all appointments");
	db.collection("Appointments").find( { Patient_id:parseInt(req.query.id) } ).toArray((error,result) => {
		if(error) throw error;
		if(result.length == 0) {
			console.log("There are no appointments"); return res.status(500).send("There are no appointments"); 
		}
		for(var i = 0; i< result.length;i++) {
			console.log(today, result[i].Date_appt);
			//var date1 = new Date(today.toString());
			var date2 = new Date(result[i].Date_appt.toString());
			console.log(today, date2);
			if(date2> today) {
                               apptresult.push(result[i]);
			}
			else pastappt.push(result[i]);
		}
//                Appthistory = { 'Past' :pastappt,'Upcoming' :apptresult }
		if(apptresult.length == 0) {console.log("No upcoming appointments"); res.status(500).send("No upcoming appointments");}
	//	if(pastappt.length == 0) {pastappt = "Empty"}
		else {
			 Appthistory = { 'Past' :pastappt,'Upcoming' :apptresult } 
			console.log(Appthistory);
		res.send(Appthistory);
		}
	});

}

