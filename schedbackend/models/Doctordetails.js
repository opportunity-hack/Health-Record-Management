const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DocSchema = new Schema({Doctor_id:
	{type:Number, required:true},
	First_name:String,
	Last_name:String,
	Specialist:String,
	Doctor_phone:String,
	Doctor_email:String,
	Availability:{String:[String]}
});
module.exports = mongoose.model('Doctordetails',DocSchema);
