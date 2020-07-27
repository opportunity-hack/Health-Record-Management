const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PatDocSchema = new Schema({Doctor_id:
	{type:Number, required:true},
	Patient_id:Number,
	Diagnosis:String
});
module.exports = mongoose.model('Patient_Doctor',PatDocSchema);
