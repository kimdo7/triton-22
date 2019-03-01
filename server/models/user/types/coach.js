
var mongoose = require('mongoose');

var CoachSchema = new mongoose.Schema({
    /**
     * *BASIC INFO*
     */
    basicInfo: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    started_coach_year : {type: String, required: true},
    player : {type: mongoose.Schema.Types.ObjectId, ref:"Player"},

    /**
     * *TEAM*
     */
    current_team : {type: mongoose.Schema.Types.ObjectId, ref: "Team"},
    team_coached : [{type: mongoose.Schema.Types.ObjectId, ref: "Team"}],

    /**
     * *PT*
     */
    personal_trainer_id : {type: String},
    aggression_level : {type: Number},

    /**
     * Coach INFO
     */
    coaching_level : {type: Number},
    practice_days : {type: Number},
    practice_minutes : {type: Number},
    liscense : {type: mongoose.Schema.Types.ObjectId, ref: "CoachLicense"}

}, { timestamps: true, upsert:true})

mongoose.model('Coach', CoachSchema);
