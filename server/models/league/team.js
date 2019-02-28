
var mongoose = require('mongoose');


var TeamSchema = new mongoose.Schema({
    name : {type: String, unique: true, required: true},

}, { timestamps: true, upsert:true})

mongoose.model('Team', TeamSchema);

module.export = TeamSchema
