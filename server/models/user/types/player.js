
var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    basicInfo: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    position : {type: String, required: true},
    footing : {type: String, required: true},
    current_team_id : {type: String, required: true},
    started_play_year : {type: String, required: true},
    competive_teams: [{type: mongoose.Schema.Types.ObjectId, ref: 'Team'}],
    recreational_teams: [{type: mongoose.Schema.Types.ObjectId, ref: 'Team'}],
    high_school: {type: mongoose.Schema.Types.ObjectId, ref: 'School'},
    middle_school: {type: mongoose.Schema.Types.ObjectId, ref: 'School'},
    seasons_played: [{type: mongoose.Schema.Types.ObjectId, ref: 'Season'}]
}, { timestamps: true, upsert:true})

mongoose.model('Player', PlayerSchema);

// Assigned Coach 
// Assigned Personal Trainer 
// Assignced Nutritionist 
