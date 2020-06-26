const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DocSchema = new Schema({Doctor_id:
	{type:Number, required:true},
	Doctor_name:String,
	Illness_Specialist:String,
	Availability:{Date:[String]}
});
module.exports = mongoose.model('Doctordetails',DocSchema);
