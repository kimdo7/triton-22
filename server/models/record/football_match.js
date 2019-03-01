var mongoose = require('mongoose')

var FootballMatchSchema = new mongoose.Schema({
    /**
     * *BASIC INFO*
     */

    date : {type: Date, required: true},

    /**
     * *LEAGUE*
     */
    league_id : {type: String, required: true},
    
    /**
     * @team1
     * @team2
     * @teamwon
     */
    team1 : {type: mongoose.Schema.Types.ObjectId, ref: "Team"},
    team2 : {type: mongoose.Schema.Types.ObjectId, ref: "Team"},

    /**
     * *GAME SCORE*
     */
    team_won : {type: mongoose.Schema.Types.ObjectId, ref: "Team"},
    team1_score : {type: Number},
    team2_score : {type: Number}
}, { timestamps: true, upsert:true})

mongoose.model('FootballMatch', FootballMatchSchema);
