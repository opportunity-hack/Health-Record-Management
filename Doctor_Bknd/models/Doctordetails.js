const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DoctorSchema = new Schema({Doctor_id:
    {type:Number, required:true},
    User_id: {type:Number, required:true},
    First_name:String,
    Last_name:String,
    Illness_Specialist:String,
    email: String,
    Availability:{String:[String]},
},
{ 
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Doctordetails',DoctorSchema);








