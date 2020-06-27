const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AppointmentSchema = new Schema({Patient_id: {type:Number, required:true},
	Patient_name:String,
	Patient_phone:Number,
        Diagnosis:String,
	Doctor_id: {type:Number, required:true},
	Day: String, 
        Time: String
});
module.exports = mongoose.model('Appointments',AppointmentSchema);
