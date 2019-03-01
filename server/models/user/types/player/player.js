
var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    /**
     * *BASIC INFO*
     */
    basicInfo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    is_freeland: {type: Boolean, default: false},
    current_team_id: { type: String, required: true },
    started_play_year: { type: String, required: true },
    
    /**
     * *PERSONAL UNIQUE INFO*
     */
    player_basic_info : {type: mongoose.Schema.Types.ObjectId, ref: "PlayerInfo"},
    player_micro_info : {type: mongoose.Schema.Types.ObjectId, ref: "PlayerMicroInfo"},
    player_medical_info : {type: mongoose.Schema.Types.ObjectId, ref: "MedicaMicrol"},

    /**
     * *SPORT*
     */
    curr_sport : {type: mongoose.Schema.Types.ObjectId, ref: "Sport"},
    sports : [{type: mongoose.Schema.Types.ObjectId, ref: "Sport"}],
    /**
     * *TEAM*
     */

    competive_teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
    recreational_teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
    seasons_played: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Season' }],

    /**
     * *HIGH SCHOOL* *MIDDLE SCHOOL*
     */
    high_school: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
    middle_school: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },

    /**
     * *Coach* ====== *PT* ======= *Nutritionist*
     */
    assigned_coached: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coach' }],
    personal_trainer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PersonalTrainer' }],
    nutritionist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PersonalTrainer' }],
}, { timestamps: true, upsert: true })

mongoose.model('Player', PlayerSchema);