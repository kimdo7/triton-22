var mongoose = require('mongoose')

var SeasonSchema = new mongoose.Schema({
    name : {type: String, unique: true, required: true},
    year : {type: String, required: true},
    league_id : {type: String, unique: true, required: true},
}, { timestamps: true, upsert:true})

mongoose.model('Season', SeasonSchema);

module.export = SeasonSchema
