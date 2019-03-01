var mongoose = require('mongoose');

var NutritionistSchema = new mongoose.Schema({
    basicInfo: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    started_coach_year : {type: String, required: true},
    current_team : {type: mongoose.Schema.Types.ObjectId, ref: "Team"},
    team_coached : [{type: mongoose.Schema.Types.ObjectId, ref: "Team"}],
    current_clients : [{type: mongoose.Schema.Types.ObjectId, ref: "Player"}],
    previous_clients : [{type: mongoose.Schema.Types.ObjectId, ref: "Player"}],
}, { timestamps: true, upsert:true})

mongoose.model('Nutritionist', NutritionistSchema);
