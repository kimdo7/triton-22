
var mongoose = require('mongoose')

var LeagueSchema = new mongoose.Schema({
    name : {type: String, unique: true, required: true},
    teams : [{type: mongoose.Schema.Types.ObjectId, ref: "Team"}]
}, { timestamps: true, upsert:true})

mongoose.model('League', LeagueSchema);

module.export = LeagueSchema
