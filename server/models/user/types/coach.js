
var mongoose = require('mongoose');

var CoachSchema = new mongoose.Schema({
    basicInfo: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    started_coach_year : {type: String, required: true},
    current_team : {type: mongoose.Schema.Types.ObjectId, ref: "Team"},
    team_coached : [{type: mongoose.Schema.Types.ObjectId, ref: "Team"}]
}, { timestamps: true, upsert:true})

mongoose.model('Coach', CoachSchema);
