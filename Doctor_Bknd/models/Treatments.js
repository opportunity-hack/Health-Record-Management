const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TreatmentsSchema = new Schema({Treatment_id:
	{type:Number, required:true},
    Appointment_id: {type:Number, required:true},
    Patient_id: {type:Number, required:true},
    Doctor_id: {type:Number, required:true},    
    Treatment_prescription:String,
    Illness:String,
    Notes:String
});

module.exports = mongoose.model('Treatments',TreatmentsSchema);







