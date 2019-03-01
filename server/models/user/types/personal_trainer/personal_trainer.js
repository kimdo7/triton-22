var mongoose = require('mongoose');

var PersonalTrainerSchema = new mongoose.Schema({
    basicInfo: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    started_coach_year : {type: String, required: true},
    current_clients : [{type: mongoose.Schema.Types.ObjectId, ref: "Player"}],
    previous_clients : [{type: mongoose.Schema.Types.ObjectId, ref: "Player"}],
}, { timestamps: true, upsert:true})

mongoose.model('PersonalTrainer', PersonalTrainerSchema);
