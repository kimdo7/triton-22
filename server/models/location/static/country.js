var mongoose = require('mongoose');

/**
 * *DEFAULT*
 */
var CountrySchema = new mongoose.Schema({
    name : {type: String, unique: true},
    code : {type: String, unique: true},

}, { timestamps: true, upsert:true})

mongoose.model('Country', CountrySchema);
